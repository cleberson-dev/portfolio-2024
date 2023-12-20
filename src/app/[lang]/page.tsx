import info from "@/info.json";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

import Greeting from "@/app/components/greeting";
import SocialNetworks from "@/app/components/social-networks";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
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

      <footer className="absolute bottom-10">
        <SocialNetworks socials={info.socials} />
      </footer>
    </main>
  );
}
