import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;
  const user = request.cookies.get("user")?.value;

  const isProtectedRoute = pathname.startsWith("/dashboard");

  const isPublicRoute =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  if (isProtectedRoute && (!isLoggedIn || !user)) {
    const signInUrl = new URL("/sign-in", request.url);
    return NextResponse.redirect(signInUrl);
  }

  if (isPublicRoute && isLoggedIn && user) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }
  if (pathname === "/" && isLoggedIn && user) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }
  if (pathname === "/" && !isLoggedIn && !user) {
    const signInUrl = new URL("/sign-in", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg).*)",
  ],
};
