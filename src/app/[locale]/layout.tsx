import { notFound } from "next/navigation";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import Footer from "components/Footer";
import ScrollToTop from "components/ScrollToTop";
import Header from "components/Header";
import { Providers } from "./providers";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["tr", "en"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: t("LocaleLayout.title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className="dark:bg-black">
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
