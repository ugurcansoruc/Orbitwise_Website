import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['tr', 'en'],
  defaultLocale: 'tr'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
