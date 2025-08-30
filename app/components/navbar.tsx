import { Link } from "react-router";
import { useEffect, useState } from "react";
import logo from "../welcome/logo.svg";
import { NavLink } from "react-router";

export function Navbar() {
  const links = [
    { href: "/page", title: "Founders" },
    { href: "/guide", title: "Guide" },
    { href: "/price", title: "Pricing" },
    { href: "/login", title: "Log in" },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`w-full fixed transition-colors duration-300 z-11 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center max-w-5xl px-10 py-2 justify-between relative z-10 mx-auto">
        <NavLink to="/" className="text-xl font-bold">
          <img src={logo} alt="" />
        </NavLink>
        <div className="flex items-center gap-7">
          {links.map((link) => (
            <NavLink
              to={link.href}
              className="text-black text-sm hover:text-neutral-500 transition duration-200"
            >
              {link.title}{" "}
            </NavLink>
          ))}
          <button className="bg-[#2579F4] block px-3.5 py-2 text-center bg-brand-blue rounded-lg text-sm font-medium text-white [text-shadow:0px_1px_1px_rgba(0,_0,_0,_0.16)] shadow-[0px_1px_4px_-1px_rgba(30,_31,_37,_0.38)] hover:bg-[#2262C7] active:bg-[#215BB9] transition-background duration-150 ease-in-out">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
