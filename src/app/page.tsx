import info from "@/info.json";

import Greeting from "@/app/components/greeting";
import SocialNetworks from "@/app/components/social-networks";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1>
        <Greeting greetings={info.greetings} />
        <strong className="block uppercase font-bold text-4xl">
          cleberson<span className="text-purple-600">.dev</span>
        </strong>
      </h1>
      <hr className="my-4 opacity-10 w-40" />
      <p className="w-64">{info.description}</p>

      <footer className="absolute bottom-10">
        <SocialNetworks />
      </footer>
    </main>
  );
}
