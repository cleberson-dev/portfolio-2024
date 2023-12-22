import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import cls from "classnames";
import "./globals.css";
import ThemeProvider from "@/app/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "../components/google-analytics";
import Script from "next/script";
import Head from "next/head";

const inriaSans = Inria_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cleberson.dev",
  description: "Front-end developer's Portfolio",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body
        className={cls([
          inriaSans.className,
          "min-h-[100svh] flex flex-col items-center justify-center",
        ])}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        {process.env.NEXT_PUBLIC_GTM_ANALYTICS && (
          <>
            <Script
              id="gtm-head-script"
              dangerouslySetInnerHTML={{
                __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ANALYTICS}');
            `,
              }}
            ></Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ANALYTICS}`}
                height="0"
                width="0"
                className="invisible hidden"
              ></iframe>
            </noscript>
          </>
        )}
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <ThemeProvider>{children}</ThemeProvider>

        <Analytics />

        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
      </body>
    </html>
  );
}
