"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  LayoutTemplate,
  Menu,
  MousePointer2,
  Rocket,
  Sparkles,
  X,
} from "lucide-react";
import { PrimaryAction } from "@/components/ui/primary-action";

const navigation = [
  { label: "Serviços", href: "#produtos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const projectSteps = [
  { label: "Estratégia", icon: Sparkles, complete: true },
  { label: "Design", icon: LayoutTemplate, complete: true },
  { label: "Código", icon: Code2, complete: false },
  { label: "Lançamento", icon: Rocket, complete: false },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-highlight";

function HeroNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      onKeyDown={(event) => {
        if (menuOpen && event.key === "Escape") {
          setMenuOpen(false);
          event.currentTarget
            .querySelector<HTMLButtonElement>(
              "button[aria-controls='hero-mobile-menu']",
            )
            ?.focus();
        }
      }}
      className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-8 lg:py-7"
    >
      <Link
        href="/"
        aria-label="Zapt — página inicial"
        className={`group flex shrink-0 items-center gap-3 rounded-lg ${focus}`}
      >
        <span className="flex size-10 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-white/15 transition-transform duration-150 group-hover:-rotate-3 sm:size-11">
          <Image
            src="/logo.png"
            alt=""
            width={120}
            height={180}
            priority
            className="h-full w-auto"
          />
        </span>
        <span className="text-2xl font-bold tracking-[-0.055em] text-white">
          Zapt
        </span>
      </Link>

      <nav
        aria-label="Navegação principal"
        className="hidden items-center gap-8 md:flex"
      >
        {navigation.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`rounded-md py-3 text-sm font-semibold text-white/72 transition-colors duration-150 hover:text-white ${focus}`}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        href="#contato"
        className={`hidden min-h-11 items-center gap-2 rounded-lg border border-white/18 bg-white/[0.07] px-4 text-sm font-semibold text-white backdrop-blur-md transition-[background-color,border-color,color] duration-150 hover:border-brand-highlight/60 hover:bg-white/[0.11] hover:text-brand-highlight md:inline-flex ${focus}`}
      >
        Pedir orçamento
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>

      <button
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="hero-mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
        className={`flex size-12 items-center justify-center rounded-lg border border-white/18 bg-white/[0.07] text-white transition-colors duration-150 hover:bg-white/[0.12] md:hidden ${focus}`}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {menuOpen && (
        <nav
          id="hero-mobile-menu"
          aria-label="Navegação móvel"
          className="absolute top-[calc(100%_-_0.25rem)] right-6 left-6 rounded-xl border border-white/15 bg-[#0a1730]/98 p-2 shadow-[0_24px_65px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
        >
          {navigation.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-lg px-4 py-3.5 font-semibold text-white/80 transition-[background-color,color] duration-150 hover:bg-white/[0.08] hover:text-white ${focus}`}
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className={`mt-1 flex items-center justify-between rounded-lg bg-brand-highlight px-4 py-3.5 font-bold text-ink ${focus}`}
          >
            Pedir orçamento
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}

function ProjectStudio() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[30rem] w-full max-w-[42rem] sm:h-[35rem] lg:h-[39rem]"
    >
      <div className="absolute top-[5%] right-[3%] size-[72%] rounded-full bg-brand-primary/35 blur-[90px]" />
      <div className="absolute right-[8%] bottom-[8%] size-[45%] rounded-full bg-brand-secondary/20 blur-[70px]" />

      <div className="absolute top-[4%] right-[2%] left-[2%] z-10 overflow-hidden rounded-xl border border-white/15 bg-[#0c1c38]/92 shadow-[0_34px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:right-[5%] sm:left-[5%] lg:right-0 lg:left-[4%]">
        <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-brand-secondary/70" />
            <span className="size-2 rounded-full bg-brand-highlight" />
          </div>
          <p className="font-mono text-[0.55rem] font-bold tracking-[0.15em] text-white/42 uppercase sm:text-[0.62rem]">
            studio.zapt
          </p>
          <span className="flex items-center gap-1.5 text-[0.6rem] font-semibold text-white/48">
            <span className="size-1.5 rounded-full bg-brand-highlight" />
            online
          </span>
        </div>

        <div className="grid min-h-[23rem] grid-cols-12 sm:min-h-[27rem] lg:min-h-[29rem]">
          <div className="col-span-4 border-r border-white/10 bg-white/[0.025] p-3 sm:p-5">
            <p className="text-[0.55rem] font-bold tracking-[0.16em] text-white/38 uppercase sm:text-[0.62rem]">
              Projeto
            </p>
            <p className="mt-2 text-xs font-bold text-white sm:text-sm">
              Nova experiência digital
            </p>

            <ol className="mt-6 space-y-2 sm:mt-8 sm:space-y-3">
              {projectSteps.map((step, index) => (
                <li
                  key={step.label}
                  className={`flex min-w-0 items-center gap-2 rounded-lg border px-2 py-2.5 sm:gap-3 sm:px-3 ${
                    index === 2
                      ? "border-brand-primary/45 bg-brand-primary/18 text-white"
                      : "border-transparent text-white/52"
                  }`}
                >
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-md sm:size-7 ${
                      step.complete
                        ? "bg-brand-highlight text-ink"
                        : index === 2
                          ? "bg-brand-primary text-white"
                          : "bg-white/[0.07] text-white/50"
                    }`}
                  >
                    {step.complete ? (
                      <Check className="size-3.5" strokeWidth={3} />
                    ) : (
                      <step.icon className="size-3.5" />
                    )}
                  </span>
                  <span className="min-w-0 truncate text-[0.6rem] font-semibold sm:text-xs">
                    {step.label}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-8 hidden border-t border-white/10 pt-5 sm:block">
              <div className="flex items-center justify-between text-[0.6rem] font-semibold text-white/45">
                <span>Progresso</span>
                <span className="text-brand-highlight">72%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-brand-highlight" />
              </div>
            </div>
          </div>

          <div className="col-span-8 overflow-hidden p-3 sm:p-5 lg:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[0.55rem] font-bold tracking-[0.15em] text-brand-secondary uppercase sm:text-[0.62rem]">
                  Preview em tempo real
                </p>
                <p className="mt-1 truncate text-sm font-bold tracking-[-0.03em] text-white sm:text-lg">
                  Seu produto tomando forma
                </p>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[0.6rem] font-semibold text-white/50 sm:block">
                v0.8
              </span>
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-white/12 bg-surface-canvas text-ink shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:mt-5">
              <div className="flex h-8 items-center gap-1.5 border-b border-ink/8 bg-white px-3">
                <span className="size-1.5 rounded-full bg-ink/15" />
                <span className="size-1.5 rounded-full bg-ink/15" />
                <span className="ml-2 h-2 w-20 rounded-full bg-ink/8 sm:w-28" />
              </div>
              <div className="relative min-h-44 overflow-hidden bg-[radial-gradient(circle_at_75%_25%,rgba(24,168,232,0.30),transparent_35%),linear-gradient(135deg,#ffffff_0%,#edf3ff_100%)] p-4 sm:min-h-56 sm:p-6">
                <div className="relative z-10 max-w-[75%]">
                  <p className="text-[0.5rem] font-bold tracking-[0.14em] text-brand-primary uppercase sm:text-[0.6rem]">
                    Estratégia em cada pixel
                  </p>
                  <p className="mt-2 text-lg leading-[0.95] font-bold tracking-[-0.055em] text-ink sm:text-2xl lg:text-3xl">
                    Feito para mover ideias.
                  </p>
                  <div className="mt-4 h-2 w-4/5 rounded-full bg-ink/10" />
                  <div className="mt-2 h-2 w-3/5 rounded-full bg-ink/8" />
                  <div className="mt-5 flex gap-2">
                    <span className="h-7 w-20 rounded-md bg-brand-primary sm:h-8 sm:w-24" />
                    <span className="h-7 w-16 rounded-md border border-ink/10 bg-white sm:h-8 sm:w-20" />
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-10 size-36 rotate-12 rounded-[2rem] bg-brand-primary shadow-[0_16px_35px_rgba(5,84,242,0.35)] sm:size-48" />
                <div className="absolute right-4 bottom-4 size-16 -rotate-6 rounded-xl border border-white/40 bg-brand-highlight shadow-lg sm:size-20" />
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 sm:p-3">
                <p className="text-[0.5rem] font-semibold text-white/38 sm:text-[0.6rem]">
                  Experiência
                </p>
                <div className="mt-2 flex items-end gap-1">
                  {[38, 54, 45, 70, 62, 88].map((height) => (
                    <span
                      key={height}
                      className="w-full rounded-sm bg-brand-secondary/65"
                      style={{ height: `${Math.max(6, height / 7)}px` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 sm:p-3">
                <p className="text-[0.5rem] font-semibold text-white/38 sm:text-[0.6rem]">
                  Próxima entrega
                </p>
                <p className="mt-1 text-[0.65rem] font-bold text-white sm:text-xs">
                  Versão navegável
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[2%] left-0 z-20 w-[54%] max-w-64 -rotate-3 rounded-xl border border-white/15 bg-white p-3 text-ink shadow-[0_22px_55px_rgba(0,0,0,0.32)] sm:left-[1%] sm:p-4 lg:animate-[zapt-float_6s_ease-in-out_infinite] lg:motion-reduce:animate-none">
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-highlight sm:size-10">
            <Check className="size-4" strokeWidth={3} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-bold sm:text-sm">Fluxo aprovado</p>
            <p className="mt-0.5 truncate text-[0.6rem] text-ink/50 sm:text-xs">
              Pronto para desenvolver
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-[9%] z-20 flex max-w-44 rotate-2 items-center gap-2 rounded-lg border border-brand-secondary/30 bg-[#0e2445] px-3 py-2.5 text-xs font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.32)] sm:right-[2%] sm:px-4 sm:py-3 lg:animate-[zapt-float_7s_ease-in-out_1s_infinite_reverse] lg:motion-reduce:animate-none">
        <MousePointer2 className="size-4 shrink-0 text-brand-secondary" />
        Decisões em conjunto
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate min-h-dvh overflow-hidden bg-[#08152c] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_18%,rgba(5,84,242,0.38),transparent_30rem),radial-gradient(circle_at_88%_30%,rgba(24,168,232,0.20),transparent_28rem),linear-gradient(135deg,#08152c_0%,#071226_55%,#091a34_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        aria-hidden="true"
      />

      <HeroNavigation />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-10 pb-16 sm:px-10 sm:pt-14 sm:pb-20 lg:min-h-[calc(100dvh-6.25rem)] lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-8 lg:pb-16">
        <div className="relative z-20 lg:col-span-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-[0.68rem] font-bold tracking-[0.105em] text-white/75 uppercase backdrop-blur-md sm:text-xs">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-highlight opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-highlight" />
            </span>
            Estratégia · design · desenvolvimento
          </p>

          <h1
            id="hero-title"
            className="mt-7 max-w-[11ch] text-[clamp(3rem,7.4vw,6.4rem)] leading-[0.91] font-bold tracking-[-0.073em] text-balance"
          >
            Sua ideia, pronta para{" "}
            <span className="text-brand-highlight">avançar.</span>
          </h1>

          <p className="mt-7 max-w-[41rem] text-base leading-7 text-pretty text-white/68 sm:text-lg lg:max-w-[34rem] lg:text-xl lg:leading-8">
            A Zapt transforma desafios de negócio em sites, aplicativos e
            sistemas claros, rápidos e preparados para evoluir.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
            <PrimaryAction
              href="#contato"
              className="gap-2 px-5 sm:px-5"
              labelClassName="whitespace-nowrap"
            >
              Começar um projeto
            </PrimaryAction>
            <a
              href="#produtos"
              className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-lg px-4 text-sm font-bold whitespace-nowrap text-white/78 transition-[background-color,color] duration-150 hover:bg-white/[0.07] hover:text-white sm:min-h-16 sm:text-base ${focus}`}
            >
              Ver nossas soluções
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/12 pt-5 sm:mt-12 sm:pt-6">
            {[
              ["01", "Imersão"],
              ["02", "Construção"],
              ["03", "Evolução"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="min-w-0 border-r border-white/10 px-3 first:pl-0 last:border-r-0"
              >
                <p className="font-mono text-[0.62rem] font-bold text-brand-secondary">
                  {number}
                </p>
                <p className="mt-1 truncate text-xs font-semibold text-white/56 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 hidden md:block lg:col-span-7 lg:pl-5">
          <ProjectStudio />
        </div>
      </div>
    </section>
  );
}
