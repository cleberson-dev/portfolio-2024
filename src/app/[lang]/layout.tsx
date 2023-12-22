import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import cls from "classnames";
import "./globals.css";
import ThemeProvider from "@/app/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "../components/google-analytics";

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
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />

        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
      </body>
    </html>
  );
}
