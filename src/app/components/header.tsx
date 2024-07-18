"use client"

import Link from "next/link";
import Image from "next/image";

import Logo from "../../assets/logo.png";
import Container from "./container";

const routersGroups = [
  {
    label: "Docentes",
    href: "/docentes",
  },
];

const routesLinks = routersGroups.map((route) => (
  <li key={route.href}>
    <Link href={route.href}>{route.label}</Link>
  </li>
));

export default function Header() {
  return (
    <header className="p-4 bg-white border-b border-zinc-300 flex justify-between items-center">
      <Container className="flex justify-between items-center">
        <Link href="/">
          <span className="sr-only">CINFO</span>
          <Image src={Logo} alt="CINFO" width={100} />
        </Link>
        <nav>
          <ul>
            {routesLinks}
          </ul>
        </nav>
      </Container>
    </header>
  );
}