import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { name: "Início", href: "#" },
  { name: "Serviços", href: "#produtos" },
  { name: "Orçamento", href: "#" },
  { name: "Sobre", href: "#" },
  { name: "Contato", href: "#" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto mt-8 max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-[#0554f2e8] px-5 py-3 shadow-lg shadow-[#0554f2b2] backdrop-blur-xl md:rounded-3xl md:px-6 md:py-4">
          <Link href="/" className="group flex items-center gap-2.5 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition-colors group-hover:bg-white/20">
              <Zap className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight">Zapt</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-bold text-white/90 transition-colors hover:text-white"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-white transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contato"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0554f2] shadow-sm transition-colors hover:bg-white/60 md:inline-flex"
          >
            Fale conosco
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-product-foreground/10 md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 p-3 shadow-xl shadow-[#0554f2] backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <Link
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-[#0554f2]"
              >
                Fale conosco
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
