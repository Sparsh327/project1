import { Link } from "react-router";
import logo from "../../public/logo.svg";

export function Navbar() {
  const links = [
    { href: "/guide", title: "Guide" },
    { href: "/price", title: "Price" },
    { href: "/login", title: "Login" },
  ];
  return (
    <div className="flex items-center justify-between py-2">
      <Link to="/" className="text-xl font-bold">
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link to={link.href}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
}
