import { Container } from "~/components/container";
import { Navbar } from "~/components/navbar";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Hero } from "~/components/hero";

export function Welcome() {
  return <LandingPage />;
}
import { useEffect, useState } from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center h-screen bg-blue-50">
      <Container>
        <div className="mx-auto absolute h-full w-265 inset-0">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
        </div>
        <Navbar />
        <Hero></Hero>
      </Container>
    </div>
  );
}

// export function Navbar1() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full transition-colors duration-300 ${
//         scrolled ? "bg-white shadow" : "bg-transparent"
//       }`}
//     >
//       {/* Centered container like Finta */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
//           {/* Left - Logo */}
//           <div className="text-xl font-semibold">Logo</div>

//           {/* Right - Nav Items */}
//           <nav className="flex items-center gap-8 text-gray-700 font-medium">
//             <a href="#founders" className="hover:text-blue-600 transition">
//               Founders
//             </a>
//             <a href="#guide" className="hover:text-blue-600 transition">
//               Guide
//             </a>
//             <a href="#pricing" className="hover:text-blue-600 transition">
//               Pricing
//             </a>
//             <a href="#login" className="hover:text-blue-600 transition">
//               Log In
//             </a>
//             <a
//               href="#get-started"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//             >
//               Get started
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-sm" : "bg-transparent"
//       }`}
//     >
//       {/* Container (centers the content) */}
//       <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-28">
//         {/* Logo */}
//         <a href="/" className="flex items-center">
//           <span className="text-xl font-bold text-blue-600">Finta</span>
//         </a>

//         {/* Nav links */}
//         <nav className="flex items-center space-x-8 text-gray-700 font-medium">
//           <a href="#founders" className="hover:text-gray-900">
//             Founders
//           </a>
//           <a href="#guide" className="hover:text-gray-900">
//             Guide
//           </a>
//           <a href="#pricing" className="hover:text-gray-900">
//             Pricing
//           </a>
//           <a href="#login" className="hover:text-gray-900">
//             Log In
//           </a>
//           <a
//             href="#get-started"
//             className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             Get started
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// function HeroSection() {
//   return (
//     <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-blue-100 to-white">
//       <h1 className="text-5xl font-bold mb-6">Welcome to My App</h1>
//       <p className="text-lg text-gray-600 mb-8 max-w-xl">
//         This is the best app to learn React + Tailwind. Scroll down to see the
//         navbar background transition!
//       </p>
//       <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//         Get Started
//       </button>
//     </section>
//   );
// }

// function FeaturesSection() {
//   return (
//     <section id="features" className="py-20 max-w-6xl mx-auto px-6">
//       <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="p-6 bg-white shadow rounded-lg">🚀 Fast & Modern</div>
//         <div className="p-6 bg-white shadow rounded-lg">🎨 Beautiful UI</div>
//         <div className="p-6 bg-white shadow rounded-lg">⚡ Super Easy</div>
//       </div>
//     </section>
//   );
// }

// function PricingSection() {
//   return (
//     <section id="pricing" className="py-20 bg-gray-50 text-center">
//       <h2 className="text-3xl font-bold mb-8">Pricing</h2>
//       <p className="text-gray-600">Start free, upgrade anytime 🚀</p>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="py-6 text-center border-t">
//       <p className="text-gray-600">© 2025 My App. All rights reserved.</p>
//     </footer>
//   );
// }
