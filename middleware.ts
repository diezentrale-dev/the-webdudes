import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isSiteAuthEnabled, isValidAccessToken, SITE_AUTH_COOKIE } from "@/lib/site-auth";

const PUBLIC_PATHS = ["/site-login", "/api/site-auth"];

function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export async function middleware(request: NextRequest) {
  if (!isSiteAuthEnabled()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    isPublicPath(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    /\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SITE_AUTH_COOKIE)?.value;
  if (await isValidAccessToken(token)) {
    return NextResponse.next();
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/site-login";
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
