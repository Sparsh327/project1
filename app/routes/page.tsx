import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project2" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="h-screen bg-neutral-900 flex justify-center">
      <Hero />
    </div>
  );
}

export function Hero() {
  return (
    <div className="flex flex-col items-center w-full  my-40">
      <h1 className="text-7xl text-center font-bold tracking-tight max-w-2xl leading-tight  bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600">
        Unleash Power of Intutive Automation
      </h1>
      <p className="mt-6 text-center text-lg text-neutral-300 max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas
        commodo sapien id fringilla. Donec rutrum, odio id volutpat sagittis,
        risus ante elementum dolor, sed tincidunt dui nunc sit amet lectus.
      </p>

      <div className="flex justify-center mt-10 w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter your email"
          className="mr-4 px-4 py-2 border border-neutral-600 text-white rounded-xl relative cursor-pointer placeholder:text-neutral-500 placeholder:text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200"
        />
        <button className="px-4 py-2 border border-neutral-600 text-white rounded-xl hover:bg-blue-700 transition relative cursor-pointer">
          <div className="absolute inset-x-0 w-full h-px -bottom-px bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
          Get Started
        </button>
      </div>
    </div>
  );
}
