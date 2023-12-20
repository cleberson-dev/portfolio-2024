import info from "@/info.json";
import { getDictionary } from "@/get-dictionary";
import { type Locale } from "@/i18n-config";

import Greeting from "@/app/components/greeting";
import SocialNetworks from "@/app/components/social-networks";
import LanguageSwitcher from "@/app/components/language-switcher";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <header className="flex justify-end absolute top-6 right-4 w-full">
        <LanguageSwitcher lang={lang} />
      </header>
      <main className="px-4">
        <h1>
          <Greeting
            greetings={dictionary.greetings}
            callingMyName={dictionary.callingMyName}
          />
          <strong className="block uppercase font-bold text-4xl">
            cleberson<span className="text-purple-600">.dev</span>
          </strong>
        </h1>
        <hr className="my-4 opacity-10 w-40" />
        <p className="w-64">{dictionary.description}</p>
      </main>
      <footer className="absolute bottom-10 w-full flex justify-center items-center">
        <SocialNetworks socials={info.socials} />
      </footer>
    </>
  );
}
