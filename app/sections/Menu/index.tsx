import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Serviços", href: "#produtos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto mt-8 max-w-7xl">
        <nav
          className="flex items-center justify-between rounded-2xl border border-white/20 bg-[#0554f2e8] px-5 py-3 shadow-lg shadow-[#0554f2b2] backdrop-blur-xl md:rounded-3xl md:px-6 md:py-4"
          aria-label="Navegação principal"
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-white"
            aria-label="Zapt — página inicial"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-white/30 transition-transform group-hover:-rotate-3 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt=""
                width={120}
                height={180}
                className="h-full w-auto"
                priority
              />
            </span>
            <span className="text-lg font-bold tracking-tight">Zapt</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="group relative block px-4 py-2 text-sm font-bold text-white/90 transition-colors hover:text-white"
                >
                  {item.name}
                  <span
                    className="absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-white transition-transform duration-200 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contato"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0554f2] shadow-sm transition-colors hover:bg-white/60 md:inline-flex"
          >
            Orçamento
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-product-foreground/10 md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            id="menu-mobile"
            className="mt-3 rounded-2xl border border-white/15 bg-brand-primary/95 p-3 shadow-xl shadow-brand-primary/25 backdrop-blur-xl md:hidden"
            aria-label="Navegação principal móvel"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="#contato"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-[#0554f2]"
                >
                  Orçamento
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
