import Greeting from "@/components/Greeting";

const description =
  "Developing user-friendly, responsive, maintainable and performant web applications.";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1>
        <Greeting />
        <strong className="block uppercase font-bold text-4xl">
          cleberson<span className="text-purple-600">.dev</span>
        </strong>
      </h1>
      <hr className="my-4 opacity-10 w-40" />
      <p className="w-64">{description}</p>
    </main>
  );
}
