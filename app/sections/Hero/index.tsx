import { ArrowRight, Code2, Globe, Sparkles, Zap } from "lucide-react";
import Header from "../Menu";

export default function Hero() {
  return (
    <>
      <Header />
      <section className="w-full mt-32 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {/* Main hero card */}
            <article className="group relative col-span-4 overflow-hidden rounded-2xl bg-[#0554f2] p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0554f270] md:col-span-2 md:row-span-2 md:rounded-3xl md:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #fafafa 1px, transparent 1px), linear-gradient(to bottom, #fafafa 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage:
                      "radial-gradient(ellipse at 70% 30%, black 20%, transparent 70%)",
                  }}
                />
                <div className="absolute right-8 top-8 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-pulse" />
                <div
                  className="absolute right-32 top-40 h-24 w-24 rounded-full bg-white/15 blur-2xl animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                />
              </div>

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white font-medium ring-1 ring-white/10">
                    <Sparkles className="h-4 w-4 text-white" />
                    Olá, nós somos a Zapt.
                  </span>

                  <h1 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
                    Transformamos ideias em{" "}
                    <span className="text-white/50">experiências digitais</span>
                  </h1>

                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                    Desenvolvemos sistemas web, aplicativos e soluções
                    personalizadas com as tecnologias mais modernas do mercado
                    para destacar sua empresa.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#produtos"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0554f2] transition-colors hover:bg-white/60"
                  >
                    Conheça nossas soluções
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
                  >
                    Fale com a gente
                  </a>
                </div>
              </div>
            </article>

            {/* Tech stack card */}
            <article className="group relative col-span-4 overflow-hidden rounded-2xl bg-[#0554f2] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0554f270] md:col-span-2 md:rounded-3xl">
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 blur-2xl transition-opacity group-hover:opacity-100" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <Code2 className="h-5 w-5 text-white" />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold leading-tight md:text-xl">
                    Stack moderna
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    React, TypeScript, Next.js, Node e tudo que sua ideia
                    precisa para ganhar vida na web.
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Next.js", "Node"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-[#0554f270]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Presence card */}
            <article className="group relative col-span-2 overflow-hidden rounded-2xl bg-[#0554f2] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0554f270] md:rounded-3xl">
              <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10 blur-xl transition-opacity group-hover:opacity-100" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <Globe className="h-5 w-5 text-white" />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white leading-tight md:text-xl">
                    Presença digital
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Sites, apps e sistemas que conectam sua marca ao mundo.
                  </p>
                </div>
              </div>
            </article>

            {/* Speed card */}
            <article className="group relative col-span-2 overflow-hidden rounded-2xl bg-[#0554f2] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0554f270] md:rounded-3xl">
              <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10 blur-xl transition-opacity group-hover:opacity-100" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <Zap className="h-5 w-5 text-white" />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold leading-tight text-white md:text-xl">
                    Performance
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Entrega rápida, código limpo e resultados mensuráveis.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
