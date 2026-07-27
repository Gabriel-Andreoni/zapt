import { ArrowRight, Code2, Globe, Sparkles, Zap } from "lucide-react";
import Header from "../Menu";

const technologies = ["React", "TypeScript", "Next.js", "Node"];

const cardBase =
  "group relative min-w-0 overflow-hidden rounded-3xl border border-ink/10 p-[clamp(1.35rem,3vw,2rem)] shadow-[0_18px_50px_rgba(16,24,43,0.07)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-[0_24px_65px_rgba(16,24,43,0.13)] motion-reduce:transition-none";

const cardLabel =
  "font-mono text-[0.62rem] font-bold tracking-[0.12em] uppercase";

function CircuitBackground() {
  return (
    <div
      className="pointer-events-none absolute -inset-y-13 -right-[7vw] -left-[7vw] -z-10"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full overflow-visible drop-shadow-[0_10px_30px_rgba(5,84,242,0.10)]"
        viewBox="0 0 1200 720"
        preserveAspectRatio="none"
      >
        <path
          d="M-80 118H1018L214 602H1280"
          pathLength="100"
          fill="none"
          stroke="color-mix(in srgb, var(--zapt-brand-primary) 12%, transparent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="motion-reduce:hidden"
          d="M-80 118H1018L214 602H1280"
          pathLength="100"
          fill="none"
          stroke="var(--zapt-brand-primary)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 98"
          vectorEffect="non-scaling-stroke"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-100"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        <g
          fill="var(--zapt-surface-canvas)"
          stroke="color-mix(in srgb, var(--zapt-brand-primary) 42%, transparent)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        >
          <circle cx="112" cy="118" r="7" />
          <circle cx="1018" cy="118" r="9" />
          <circle cx="690" cy="315" r="7" />
          <circle cx="214" cy="602" r="9" />
          <circle cx="1082" cy="602" r="7" />
        </g>
      </svg>
    </div>
  );
}

function PerformanceSignal() {
  return (
    <div
      className="flex h-[3.8rem] w-[4.75rem] shrink-0 items-end gap-1 border-b border-ink/30 pb-1"
      aria-hidden="true"
    >
      {[42, 64, 52, 82, 70, 100].map((height, index) => (
        <span
          key={height}
          className="h-full w-full origin-bottom animate-pulse rounded-t-full rounded-b-sm bg-ink motion-reduce:animate-none"
          style={{
            height: `${height}%`,
            animationDelay: `${index * 120}ms`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <Header />
      <section
        className="relative isolate w-full overflow-hidden pt-[clamp(9.25rem,14vw,10.75rem)] pb-[clamp(4rem,8vw,7rem)] lg:pt-[11.25rem]"
        aria-labelledby="hero-title"
      >
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-3rem)]">
          <div className="relative">
            <CircuitBackground />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5 lg:gap-6">
              <article
                className={`${cardBase} col-span-2 min-h-[clamp(31rem,72vh,36rem)] border-white/15 bg-brand-primary bg-[linear-gradient(145deg,rgba(255,255,255,0.03),transparent_44%)] text-white shadow-[0_26px_70px_rgba(5,84,242,0.24),inset_0_1px_rgba(255,255,255,0.16)] hover:border-white/25 hover:shadow-[0_30px_80px_rgba(5,84,242,0.30)] md:row-span-2 md:min-h-[38rem] lg:p-[2.65rem]`}
              >
                <div
                  className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.17] [mask-image:radial-gradient(circle_at_82%_22%,black,transparent_62%)]"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-20 -right-16 aspect-square w-76 rounded-full bg-brand-secondary/35 blur-[55px]"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs leading-none font-semibold text-white/90 backdrop-blur-sm">
                      <Sparkles size={16} strokeWidth={2} />
                      Olá, nós somos a Zapt.
                    </span>

                    <h1
                      id="hero-title"
                      className="mt-6 max-w-[12ch] text-[clamp(2.15rem,9vw,4.15rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-balance text-white"
                    >
                      Transformamos ideias em{" "}
                      <span className="text-white/55">
                        experiências digitais
                      </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-[clamp(0.98rem,2vw,1.08rem)] leading-[1.65] text-white/75">
                      Desenvolvemos sistemas web, aplicativos e soluções
                      personalizadas com tecnologia moderna para destacar sua
                      empresa.
                    </p>
                  </div>

                  <div className="flex flex-col items-stretch gap-3 min-[560px]:flex-row min-[560px]:flex-wrap min-[560px]:items-center">
                    <a
                      href="#produtos"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-primary shadow-[0_8px_24px_rgba(16,24,43,0.15)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-surface-soft hover:shadow-[0_12px_30px_rgba(16,24,43,0.22)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-highlight motion-reduce:transition-none"
                    >
                      Conheça nossas soluções
                      <ArrowRight size={17} />
                    </a>
                    <a
                      href="#contato"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-highlight motion-reduce:transition-none"
                    >
                      Fale com a gente
                    </a>
                  </div>
                </div>

                <span
                  className={`${cardLabel} absolute right-6 bottom-6 hidden text-white/35 sm:block`}
                  aria-hidden="true"
                >
                  ZAPT / DIGITAL
                </span>
              </article>

              <article
                className={`${cardBase} col-span-2 flex min-h-68 flex-col justify-between gap-5 bg-[radial-gradient(circle_at_92%_4%,rgba(5,84,242,0.12),transparent_10rem)] bg-white/90 text-ink backdrop-blur-sm md:min-h-0`}
              >
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-[0_10px_25px_rgba(5,84,242,0.22)]">
                    <Code2 size={21} />
                  </span>
                  <span className={`${cardLabel} text-brand-primary/50`}>
                    BUILD
                  </span>
                </div>

                <div>
                  <h2 className="text-[clamp(1.25rem,2vw,1.55rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-inherit">
                    Stack moderna
                  </h2>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-ink/65">
                    Ferramentas atuais, escolhidas para dar velocidade,
                    segurança e espaço para crescer.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2" aria-label="Tecnologias">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-brand-primary/15 bg-surface-soft px-3 py-1.5 text-xs font-bold text-brand-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>

              <article
                className={`${cardBase} col-span-2 flex min-h-54 flex-col justify-between bg-surface-sky text-ink min-[560px]:col-span-1 min-[560px]:min-h-60 md:min-h-0`}
              >
                <div
                  className="absolute top-15 -right-16 aspect-square w-48 rounded-full border border-brand-secondary/25 before:absolute before:inset-8 before:rounded-full before:border before:border-brand-secondary/25 before:content-['']"
                  aria-hidden="true"
                >
                  <span className="absolute top-1/2 -left-1 size-2 rounded-full bg-brand-secondary shadow-[0_0_0_6px_rgba(24,168,232,0.10)]" />
                  <span className="absolute top-[14%] left-[46%] size-1.5 rounded-full bg-brand-secondary shadow-[0_0_0_6px_rgba(24,168,232,0.10)]" />
                </div>

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-brand-secondary/20 bg-white/70 text-brand-secondary-strong">
                    <Globe size={21} />
                  </span>
                  <span className={`${cardLabel} text-brand-primary/50`}>
                    REACH
                  </span>
                </div>

                <div className="relative z-10">
                  <h2 className="text-[clamp(1.25rem,2vw,1.55rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-inherit">
                    Presença digital
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Produtos que conectam sua marca ao mundo.
                  </p>
                </div>
              </article>

              <article
                className={`${cardBase} col-span-2 flex min-h-54 flex-col justify-between bg-brand-highlight text-ink min-[560px]:col-span-1 min-[560px]:min-h-60 md:min-h-0`}
              >
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-brand-highlight">
                    <Zap size={21} fill="currentColor" />
                  </span>
                  <span className={`${cardLabel} text-ink/50`}>
                    SPEED
                  </span>
                </div>

                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-[clamp(1.25rem,2vw,1.55rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-inherit">
                      Performance
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-ink/65">
                      Entregas rápidas e resultados mensuráveis.
                    </p>
                  </div>
                  <PerformanceSignal />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
