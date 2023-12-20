import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";

import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';

function getLocale(request: NextRequest): string | undefined {
  const negotiationHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiationHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  let languages = new Negotiator({ headers: negotiationHeaders }).languages(locales);

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (['/favicon.ico', '/en-flag.png', '/pt-flag.png'].includes(pathname)) return;

  const pathnameIsMissingLocale = i18n.locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
