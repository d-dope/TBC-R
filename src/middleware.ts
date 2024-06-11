import { NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "./app/constants";
import { cookies } from "next/headers";
import createIntlMiddleware from "next-intl/middleware";

// Middleware for internationalization and authentication
export function middleware(request: any): NextResponse {
  const cookieStore = cookies().get(AUTH_COOKIE_KEY);
  const { pathname } = request.nextUrl;
  const localeValue = request.cookies.get("NEXT_LOCALE")?.value;

  // // Redirect to login if not authenticated and accessing protected routes
  // if (
  //   !cookieStore?.value &&
  //   !pathname.startsWith("/en/login") &&
  //   !pathname.startsWith("/ka/login") &&
  //   !pathname.startsWith("/login")
  // ) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // // Redirect to home if authenticated and accessing login page
  // if (
  //   pathname !== "/" &&
  //   cookieStore &&
  //   (pathname === "/en/login" || pathname === "/ka/login")
  // ) {
  //   return NextResponse.redirect(new URL(`/${localeValue}`, request.nextUrl));
  // }
  
  const defaultLocale = request.headers.get("ka") || "en";
  
  // Configure internationalization middleware with localePrefix: 'never'
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "ka"],
    defaultLocale,
    localePrefix: 'never' // Add this line
  });
  
  const response = handleI18nRouting(request);
  response.headers.set("ka", defaultLocale);

  return response;
}

// Configuration for both middlewares
export const config = {
  // Internationalization matcher
  matcher: [
    "/",
    "/(ka|en)/:path*",
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)"
  ],
};
