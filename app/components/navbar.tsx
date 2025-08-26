import { Link } from "react-router";
import logo from "../welcome/logo.svg";

export function Navbar() {
  const links = [
    { href: "/founders", title: "Founders" },
    { href: "/guide", title: "Guide" },
    { href: "/price", title: "Pricing" },
    { href: "/login", title: "Log in" },
  ];
  return (
    <div className="flex items-center px-4 justify-between">
      <Link to="/" className="text-xl font-bold">
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center gap-7">
        {links.map((link) => (
          <Link
            to={link.href}
            className="text-black text-sm hover:text-neutral-500 transition duration-200"
          >
            {link.title}{" "}
          </Link>
        ))}
        <button className="bg-[#2579F4] block px-3.5 py-2 text-center bg-brand-blue rounded-lg text-sm font-medium text-white [text-shadow:0px_1px_1px_rgba(0,_0,_0,_0.16)] shadow-[0px_1px_4px_-1px_rgba(30,_31,_37,_0.38)] hover:bg-[#2262C7] active:bg-[#215BB9] transition-background duration-150 ease-in-out">
          Get started
        </button>
      </div>
    </div>
  );
}
