# BPCC — Contenido público vía CloudFront (CDN)

> Documentación para el equipo frontend web.
>
> Todos los recursos descritos aquí son **públicos** y no requieren autenticación.

## Base URLs

Existen dos distribuciones CloudFront. La web pública **debe usar `www.bpcc.org.pe`**, no `admin.bpcc.org.pe`.

| Distribución | Dominio | Uso |
|---|---|---|
| **Website (pública)** | `https://www.bpcc.org.pe` | Frontend web, consume `/content/*` |
| **Admin** | `https://admin.bpcc.org.pe` | Panel admin, consume `/content/*` y `/email/*` |

| Prefijo | Bucket | Disponible en |
|---|---|---|
| `/content/` | Content bucket (noticias, artículos, eventos, media, logos) | `www.bpcc.org.pe` y `admin.bpcc.org.pe` |
| `/email/` | Email bucket (íconos estáticos, assets de campañas) | Solo `admin.bpcc.org.pe` |

CloudFront elimina el prefijo (`/content/` o `/email/`) antes de buscar en S3, por lo que la clave S3 real es la parte después del prefijo.

### URLs desde el frontend web

```javascript
const CDN_BASE = 'https://www.bpcc.org.pe';

// Las URLs en los JSON vienen como paths relativos: "/content/media/..."
// El frontend las resuelve como: CDN_BASE + path
// → "https://www.bpcc.org.pe/content/media/news/uuid/cover.webp"
```

> **Importante:** Los íconos estáticos (`/email/static/icons/...`) solo están disponibles desde `admin.bpcc.org.pe` porque la distribución website no tiene el behavior `/email/*`. Si la web pública necesita esos íconos, debe referenciarlos con la URL completa: `https://admin.bpcc.org.pe/email/static/icons/social/...`

---

## 1. Índices paginados (noticias, artículos, eventos)

Las entidades publicadas se indexan en archivos JSON estáticos con paginación fija de **10 items por página**.

### Estructura de archivos en S3

```
indexes/
├── news/
│   ├── meta.json                          ← índice global
│   ├── page-1.json
│   ├── page-N.json
│   ├── categories.json                    ← catálogo de categorías
│   └── category/
│       ├── comercio-exterior/
│       │   ├── meta.json                  ← índice filtrado por categoría
│       │   └── page-1.json
│       └── eventos/
│           ├── meta.json
│           └── page-1.json
├── articles/
│   ├── meta.json
│   ├── page-1.json
│   ├── categories.json
│   └── category/
│       ├── sostenibilidad/
│       │   ├── meta.json
│       │   └── page-1.json
│       └── analisis-economico/
│           ├── meta.json
│           └── page-1.json
├── events/
│   ├── meta.json
│   └── page-1.json
└── companies-logos.json
```

### URLs en CloudFront

| Recurso | URL |
|---|---|
| Meta global de noticias | `https://www.bpcc.org.pe/content/indexes/news/meta.json` |
| Página 1 de noticias | `https://www.bpcc.org.pe/content/indexes/news/page-1.json` |
| Catálogo de categorías | `https://www.bpcc.org.pe/content/indexes/news/categories.json` |
| Meta de categoría | `https://www.bpcc.org.pe/content/indexes/news/category/{slug}/meta.json` |
| Página 1 de categoría | `https://www.bpcc.org.pe/content/indexes/news/category/{slug}/page-1.json` |

Lo mismo aplica para `articles` reemplazando `news`.

### meta.json

Estructura idéntica tanto para el índice global como para cada categoría:

```json
{
  "total_items": 42,
  "page_size": 10,
  "total_pages": 5
}
```

| Campo | Tipo | Descripción |
|---|---|---|
| `total_items` | `int` | Cantidad total de elementos |
| `page_size` | `int` | Siempre `10` |
| `total_pages` | `int` | Cantidad de páginas disponibles |

### page-N.json

```json
{
  "page": 1,
  "page_size": 10,
  "total_pages": 5,
  "items": [ ... ]
}
```

| Campo | Tipo | Descripción |
|---|---|---|
| `page` | `int` | Número de página (empieza en 1) |
| `page_size` | `int` | Siempre `10` |
| `total_pages` | `int` | Cantidad total de páginas |
| `items` | `array` | Items de la página (estructura varía por entidad, ver abajo) |

### categories.json

Lista todas las categorías que tienen al menos un item publicado:

```json
[
  { "name": "Comercio Exterior", "slug": "comercio-exterior", "count": 8 },
  { "name": "Eventos",           "slug": "eventos",           "count": 5 },
  { "name": "Tecnología",        "slug": "tecnologia",        "count": 3 }
]
```

| Campo | Tipo | Descripción |
|---|---|---|
| `name` | `string` | Nombre original de la categoría |
| `slug` | `string` | Slug URL-safe (minúsculas, sin acentos, guiones) |
| `count` | `int` | Cantidad de items publicados en esta categoría |

**Reglas de slugificación:**
- `"Comercio Exterior"` → `comercio-exterior`
- `"Tecnología Financiera"` → `tecnologia-financiera`
- `"Análisis Económico"` → `analisis-economico`
- `"Sostenibilidad"` → `sostenibilidad`

> **Nota:** Items sin categoría (categoría vacía) NO generan índice por categoría pero SÍ aparecen en el índice global.

---

## 2. Items del índice por entidad

### Noticias (`indexes/news/page-N.json` y `indexes/news/category/{slug}/page-N.json`)

```json
{
  "id": "uuid",
  "title": "Título de la noticia",
  "date": "2026-04-01T10:30:00-05:00",
  "summary": "Resumen auto-generado del body (máx 400 caracteres)",
  "category": "Comercio Exterior",
  "cover": "https://www.bpcc.org.pe/content/media/news/uuid/cover.webp"
}
```

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | `string` | UUID de la noticia |
| `title` | `string` | Título |
| `date` | `string` | Fecha de publicación, formato **RFC 3339** con zona Peru (`-05:00`) |
| `summary` | `string` | Resumen auto-generado del body (HTML removido, máx 400 chars) |
| `category` | `string` | Categoría. Puede ser vacío `""` |
| `cover` | `string \| null` | URL absoluta de la imagen de portada, o `null` si no tiene |

### Artículos (`indexes/articles/page-N.json` y `indexes/articles/category/{slug}/page-N.json`)

Misma estructura que noticias:

```json
{
  "id": "uuid",
  "title": "Título del artículo",
  "date": "2026-04-01T10:30:00-05:00",
  "summary": "Resumen auto-generado del body",
  "category": "Sostenibilidad",
  "cover": "https://www.bpcc.org.pe/content/media/articles/uuid/cover.webp"
}
```

### Eventos (`indexes/events/page-N.json`)

Solo se indexan eventos **publicados y públicos** (`is_public: true`). Los eventos **no tienen categorías**.

```json
{
  "id": "uuid",
  "title": "Rueda de Negocios 2026",
  "date": "2026-08-15T09:00:00-05:00",
  "cover": "https://www.bpcc.org.pe/content/media/events/uuid/cover.webp",
  "banner": "https://www.bpcc.org.pe/content/media/events/uuid/banner.webp"
}
```

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | `string` | UUID del evento |
| `title` | `string` | Título |
| `date` | `string` | Fecha de inicio, formato RFC 3339 (zona Peru) |
| `cover` | `string` | URL de la imagen de portada |
| `banner` | `string` | URL del banner |

---

## 3. JSON individuales de cada entidad

Cada entidad publicada tiene su propio archivo JSON con el contenido completo.

### Noticias

**URL:** `https://www.bpcc.org.pe/content/news/{id}.json`

```json
{
  "id": "uuid",
  "title": "Título de la noticia",
  "date": "2026-04-01T10:30:00-05:00",
  "category": "Comercio Exterior",
  "body": "<p>Contenido HTML completo de la noticia...</p>",
  "cover": "https://www.bpcc.org.pe/content/media/news/uuid/cover.webp",
  "body_images": [
    "https://www.bpcc.org.pe/content/media/news/uuid/body-1.webp",
    "https://www.bpcc.org.pe/content/media/news/uuid/body-2.webp"
  ]
}
```

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | `string` | UUID |
| `title` | `string` | Título |
| `date` | `string` | Fecha de publicación (RFC 3339, zona Peru) |
| `category` | `string` | Categoría. Puede ser vacío `""` |
| `body` | `string` | Contenido completo (HTML) |
| `cover` | `string \| null` | URL de la imagen de portada, o `null` si no tiene |
| `body_images` | `string[]` | Array de URLs de imágenes incrustadas en el body (puede estar vacío) |

### Artículos

**URL:** `https://www.bpcc.org.pe/content/articles/{id}.json`

Misma estructura que noticias:

```json
{
  "id": "uuid",
  "title": "Título del artículo",
  "date": "2026-04-01T10:30:00-05:00",
  "category": "Sostenibilidad",
  "body": "<p>Contenido HTML completo del artículo...</p>",
  "cover": "https://www.bpcc.org.pe/content/media/articles/uuid/cover.webp",
  "body_images": [
    "https://www.bpcc.org.pe/content/media/articles/uuid/body-1.webp"
  ]
}
```

### Eventos

**URL:** `https://www.bpcc.org.pe/content/events/{id}.json`

Solo existe para eventos **publicados y públicos**.

```json
{
  "id": "uuid",
  "title": "Rueda de Negocios 2026",
  "date": "2026-08-15T09:00:00-05:00",
  "description": "Descripción completa del evento",
  "cover": "https://www.bpcc.org.pe/content/media/events/uuid/cover.webp",
  "banner": "https://www.bpcc.org.pe/content/media/events/uuid/banner.webp"
}
```

---

## 4. Imágenes de media

Todas las imágenes se sirven en formato **WebP** desde el content bucket.

### Patrón de URLs

```
https://www.bpcc.org.pe/content/media/{entidad}/{id}/{tipo}.webp
```

### Tipos de imagen por entidad

| Entidad | Tipo | URL | Descripción |
|---|---|---|---|
| `news` | `cover` | `/content/media/news/{id}/cover.webp` | Portada (máx 1) |
| `news` | `body-1`, `body-2`, ... | `/content/media/news/{id}/body-1.webp` | Imágenes del body (ilimitadas) |
| `articles` | `cover` | `/content/media/articles/{id}/cover.webp` | Portada (máx 1) |
| `articles` | `body-1`, `body-2`, ... | `/content/media/articles/{id}/body-1.webp` | Imágenes del body (ilimitadas) |
| `events` | `cover`, `banner` | `/content/media/events/{id}/cover.webp` | Portada y banner |
| `companies` | `logo`, `profile`, `banner` | `/content/media/companies/{id}/logo.webp` | Logo, perfil, banner |
| `users` | `profile`, `banner` | `/content/media/users/{id}/profile.webp` | Foto de perfil, banner |

Las imágenes son subidas por los administradores mediante presigned URLs (ver API_REFERENCE.md, sección Uploads). El frontend web solo las consume por la URL pública.

---

## 5. Índice estático de logos de empresas

Un único archivo JSON con todas las empresas que tienen logo.

**URL:** `https://www.bpcc.org.pe/content/indexes/companies-logos.json`

```json
[
  {
    "id": "uuid",
    "name": "InnovaTech Peru S.A.C.",
    "logo": "/content/media/companies/uuid/logo.webp"
  }
]
```

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | `string` | UUID de la empresa |
| `name` | `string` | Nombre de la empresa |
| `logo` | `string` | URL del logo |

Este índice **no usa paginación**. Es un array plano con todas las empresas que tienen logo. Se reconstruye automáticamente cuando una empresa se crea, actualiza su logo, o se elimina.

---

## 6. Íconos estáticos de aplicaciones

Íconos PNG pre-cargados para redes sociales y contacto. Cache inmutable (1 año).

**Base URL:** `https://admin.bpcc.org.pe/email/static/icons/social/`

**Patrón:** `{nombre}-{variante}.png`

| Ícono | Variantes |
|---|---|
| `email` | `email-black.png`, `email-white.png` |
| `facebook` | `facebook-black.png`, `facebook-color.png`, `facebook-white.png` |
| `instagram` | `instagram-black.png`, `instagram-color.png`, `instagram-white.png` |
| `internet` | `internet-black.png`, `internet-white.png` |
| `linkedin` | `linkedin-black.png`, `linkedin-color.png`, `linkedin-white.png` |
| `tiktok` | `tiktok-black.png`, `tiktok-color.png`, `tiktok-white.png` |
| `whatsapp` | `whatsapp-black.png`, `whatsapp-color.png`, `whatsapp-white.png` |
| `x` | `x-black.png`, `x-color.png`, `x-white.png` |
| `youtube` | `youtube-black.png`, `youtube-color.png`, `youtube-white.png` |

Las variantes `white` tienen **fondo transparente** (diseñadas para usar sobre fondos oscuros).

> **Nota:** Solo disponibles desde `admin.bpcc.org.pe`. Si la web pública los necesita, debe usar la URL completa: `https://admin.bpcc.org.pe/email/static/icons/social/...`

---

## Ciclo de vida: cuándo se actualiza el contenido

| Acción en el admin | Efecto en S3 |
|---|---|
| Crear noticia/artículo/evento | Nada (se crea como borrador) |
| **Publicar** noticia/artículo/evento | Se crea `{entidad}/{id}.json` + se reconstruye índice global + índices por categoría |
| **Actualizar** entidad publicada | Se re-publica `{entidad}/{id}.json` + se reconstruyen todos los índices |
| **Despublicar** noticia/artículo | Se elimina `{entidad}/{id}.json` (media se preserva) + se reconstruyen índices |
| **Cancelar/completar** evento | Se elimina `events/{id}.json` + se reconstruye el índice |
| **Eliminar** (soft delete) | Se eliminan JSON + media + se reconstruyen todos los índices |
| Crear/actualizar/eliminar empresa | Se reconstruye `indexes/companies-logos.json` |
| Subir imagen (presign + confirm) | La imagen queda en `media/{entidad}/{id}/{tipo}.webp` |

> **Nota:** Las actualizaciones de S3 son asíncronas. Puede haber un retraso de 1-2 segundos entre la acción del admin y la disponibilidad del contenido actualizado en CloudFront.

---

## Flujos recomendados para el frontend

### Listar noticias con paginación (sin filtro)

```javascript
const CDN = 'https://www.bpcc.org.pe';

// 1. Obtener metadatos
const meta = await fetch(`${CDN}/content/indexes/news/meta.json`).then(r => r.json());
console.log(`${meta.total_items} noticias en ${meta.total_pages} páginas`);

// 2. Cargar primera página
const page1 = await fetch(`${CDN}/content/indexes/news/page-1.json`).then(r => r.json());
for (const item of page1.items) {
  console.log(item.title, item.summary, item.cover);
}

// 3. Cargar detalle al hacer click
const detail = await fetch(`${CDN}/content/news/${item.id}.json`).then(r => r.json());
// detail.body contiene el HTML completo
// detail.cover + detail.body_images contienen las imágenes
```

### Listar categorías disponibles

```javascript
const categories = await fetch(`${CDN}/content/indexes/news/categories.json`).then(r => r.json());
// → [{ name: "Comercio Exterior", slug: "comercio-exterior", count: 8 }, ...]

// Renderizar dropdown o tabs de filtro
for (const cat of categories) {
  console.log(`${cat.name} (${cat.count})`);
}
```

### Listar noticias filtradas por categoría

```javascript
const slug = 'comercio-exterior'; // obtenido de categories.json

// 1. Meta de la categoría
const catMeta = await fetch(`${CDN}/content/indexes/news/category/${slug}/meta.json`).then(r => r.json());
console.log(`${catMeta.total_items} noticias en "${slug}"`);

// 2. Primera página filtrada
const catPage = await fetch(`${CDN}/content/indexes/news/category/${slug}/page-1.json`).then(r => r.json());
for (const item of catPage.items) {
  console.log(item.title, item.category); // category siempre será "Comercio Exterior"
}
```

### Flujo completo con filtro de categoría

```javascript
const CDN = 'https://www.bpcc.org.pe';
const entity = 'articles'; // o 'news'

// Estado inicial: sin filtro
let basePath = `${CDN}/content/indexes/${entity}`;

// Cargar categorías para el selector
const categories = await fetch(`${basePath}/categories.json`).then(r => r.json());

// Cuando el usuario selecciona una categoría:
function onCategorySelect(slug) {
  if (slug === null) {
    // Sin filtro → índice global
    basePath = `${CDN}/content/indexes/${entity}`;
  } else {
    // Con filtro → índice de categoría
    basePath = `${CDN}/content/indexes/${entity}/category/${slug}`;
  }
  loadPage(1);
}

async function loadPage(pageNum) {
  const page = await fetch(`${basePath}/page-${pageNum}.json`).then(r => r.json());
  renderItems(page.items);
  renderPagination(page.page, page.total_pages);
}
```

---

## Mapa completo del content bucket

```
content bucket (S3)
├── news/{id}.json                                     ← JSON individual de noticia publicada
├── articles/{id}.json                                 ← JSON individual de artículo publicado
├── events/{id}.json                                   ← JSON individual de evento público publicado
├── indexes/
│   ├── news/
│   │   ├── meta.json                                  ← total_items, page_size, total_pages
│   │   ├── page-1.json ... page-N.json                ← páginas del índice global
│   │   ├── categories.json                            ← catálogo [{name, slug, count}]
│   │   └── category/
│   │       └── {slug}/
│   │           ├── meta.json                          ← meta del índice filtrado
│   │           └── page-1.json ... page-N.json        ← páginas del índice filtrado
│   ├── articles/
│   │   ├── meta.json
│   │   ├── page-1.json ... page-N.json
│   │   ├── categories.json
│   │   └── category/
│   │       └── {slug}/
│   │           ├── meta.json
│   │           └── page-1.json ... page-N.json
│   ├── events/
│   │   ├── meta.json
│   │   └── page-1.json ... page-N.json
│   └── companies-logos.json                           ← array plano de logos
└── media/
    ├── news/{id}/cover.webp                           ← portada
    ├── news/{id}/body-1.webp ... body-N.webp          ← imágenes del body
    ├── articles/{id}/cover.webp
    ├── articles/{id}/body-1.webp ... body-N.webp
    ├── events/{id}/cover.webp
    ├── events/{id}/banner.webp
    ├── companies/{id}/logo.webp
    ├── companies/{id}/profile.webp
    ├── companies/{id}/banner.webp
    ├── users/{id}/profile.webp
    └── users/{id}/banner.webp
```
