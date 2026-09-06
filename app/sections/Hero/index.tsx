"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Serviços", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-highlight";

function HeroNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[96rem] items-center justify-between gap-6 px-6 py-6 sm:px-10 lg:px-14 lg:py-7">
      <Link href="/" aria-label="Zapt — página inicial" className={`flex shrink-0 items-center gap-3 rounded-lg ${focus}`}>
        <span className="flex size-10 items-center justify-center rounded-xl bg-white p-1.5 sm:size-12">
          <Image src="/logo.png" alt="" width={120} height={180} loading="eager" className="h-full w-auto" />
        </span>
        <span className="text-3xl font-bold tracking-[-0.06em] sm:text-4xl">Zapt</span>
      </Link>

      <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex lg:gap-12">
        {navigation.map(({ label, href }) => (
          <a key={href} href={href} className={`rounded-sm py-3 text-sm font-medium text-white/90 transition-colors hover:text-brand-highlight ${focus}`}>{label}</a>
        ))}
        <a href="#contato" className={`inline-flex min-h-12 items-center gap-3 rounded-xl border border-white/60 px-5 text-sm font-medium transition-colors hover:border-brand-highlight hover:text-brand-highlight ${focus}`}>
          Orçamento <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </nav>

      <button type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="hero-code-menu" onClick={() => setMenuOpen(!menuOpen)} className={`flex size-12 items-center justify-center rounded-xl border border-white/30 transition-colors hover:bg-white/10 md:hidden ${focus}`}>
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {menuOpen && (
        <nav id="hero-code-menu" aria-label="Navegação móvel" onKeyDown={(event) => {
          if (event.key === "Escape") {
            setMenuOpen(false);
            event.currentTarget.parentElement?.querySelector("button")?.focus();
          }
        }} className="absolute top-full right-6 left-6 rounded-2xl border border-white/20 bg-[#08152c] p-3 shadow-xl md:hidden">
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className={`block rounded-lg px-4 py-3 font-medium transition-colors hover:bg-white/10 ${focus}`}>{label}</a>
          ))}
          <a href="#contato" onClick={() => setMenuOpen(false)} className={`mt-2 flex items-center justify-between rounded-lg bg-brand-highlight px-4 py-3 font-semibold text-ink ${focus}`}>
            Orçamento <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}

function CodeBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-24 bottom-0 overflow-hidden select-none">
      <svg viewBox="0 0 1536 900" preserveAspectRatio="none" focusable="false" className="absolute inset-0 h-full w-full">
        <path d="M820 0H973L665 900H512Z" className="fill-brand-primary/15" />
      </svg>
      <svg viewBox="0 0 400 720" preserveAspectRatio="none" focusable="false" className="absolute top-1/2 left-[3%] h-[48%] w-[14%] -translate-y-1/2 fill-brand-primary/65 sm:h-[68%] sm:w-[22%] sm:fill-brand-primary">
        <path d="M376 24L24 360L376 696V554L172 360L376 166Z" />
      </svg>
      <svg viewBox="0 0 400 720" preserveAspectRatio="none" focusable="false" className="absolute top-1/2 right-[3%] h-[48%] w-[14%] -translate-y-1/2 fill-brand-primary/65 sm:h-[68%] sm:w-[22%] sm:fill-brand-primary">
        <path d="M24 24L376 360L24 696V554L228 360L24 166Z" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-code-title" className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-[#08152c] text-white">
      <HeroNavigation />
      <CodeBackdrop />
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col items-center justify-center px-6 pt-16 pb-20 text-center sm:px-10 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <p className="max-w-[32ch] text-[0.65rem] leading-6 font-bold tracking-[0.18em] text-balance text-brand-highlight uppercase sm:max-w-none sm:text-xs lg:text-sm">
          Design que conecta. Código que transforma.
        </p>
        <h1 id="hero-code-title" className="mt-7 text-[clamp(2.6rem,8.4vw,8rem)] leading-[1.03] font-bold tracking-[-0.065em] sm:mt-9">
          <span className="block">Da ideia ao</span>
          <span className="block">próximo nível<span className="text-brand-highlight">.</span></span>
        </h1>
        <p className="mt-7 max-w-[43ch] text-base leading-relaxed text-pretty text-white/85 sm:mt-8 sm:text-lg lg:text-xl">
          Desenvolvemos sites, aplicativos e sistemas para mover seu negócio.
        </p>
        <a href="#contato" className={`group mt-9 inline-flex min-h-14 items-center justify-center gap-5 rounded-xl bg-brand-highlight px-6 py-4 text-base font-bold text-ink transition-all duration-200 hover:-translate-y-1 hover:bg-[#c9f34a] motion-reduce:transform-none motion-reduce:transition-none sm:mt-11 sm:min-h-16 sm:px-9 sm:text-lg ${focus}`}>
          Comece seu projeto
          <ArrowUpRight className="size-5 shrink-0 sm:size-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
