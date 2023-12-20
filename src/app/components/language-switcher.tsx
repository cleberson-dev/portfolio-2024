import { i18n } from "@/i18n-config";

import Image from "next/image";
import Link from "next/link";

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const newLanguage = (() => {
    const currentLocaleIdx = i18n.locales.findIndex(
      (locale) => locale === lang
    );
    return `/${i18n.locales[(currentLocaleIdx + 1) % i18n.locales.length]}`;
  })();

  return (
    <Link
      href={newLanguage}
      className="cursor-pointer border-2 border-solid border-transparent hover:border-white rounded-full"
    >
      <Image
        src={`/${lang}-flag.png`}
        alt="Locale Flag"
        width={24}
        height={24}
      />
    </Link>
  );
}
