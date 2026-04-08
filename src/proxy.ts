import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  // In a real scenario, this might come from an environment variable
  // e.g., const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
  const isMaintenanceMode = false; // Desactivado para restaurar el Home (Activar en true si se necesita)

  // Try to avoid redirecting assets and API requests if they are needed for the maintenance page itself
  const isPublicAsset = request.nextUrl.pathname.startsWith('/assets/') || request.nextUrl.pathname.startsWith('/_next/');
  const isMaintenancePage = request.nextUrl.pathname === '/mantenimiento';

  /* 
  if (isMaintenanceMode && !isPublicAsset && !isMaintenancePage) {
    // We rewrite to the maintenance page
    const url = request.nextUrl.clone();
    url.pathname = '/mantenimiento';
    
    const response = NextResponse.rewrite(url, {
      status: 503,
      statusText: 'Service Unavailable',
    });
    
    // Add Retry-After header (e.g., 1 hour = 3600 seconds)
    response.headers.set('Retry-After', '3600');
    return response;
  }
  */

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
