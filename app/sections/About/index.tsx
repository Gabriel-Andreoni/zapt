import {
  ArrowRight,
  Check,
  HeartHandshake,
  Layers3,
  MessageSquareText,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const cardBase =
  "group relative min-w-0 overflow-hidden rounded-3xl border p-6 shadow-[0_18px_50px_rgba(16,24,43,0.07)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(16,24,43,0.13)] motion-reduce:transition-none md:p-8";

const principles = [
  {
    title: "Entender",
    description: "Objetivos, rotina e prioridades vêm antes da tecnologia.",
  },
  {
    title: "Construir",
    description: "Cada decisão busca equilíbrio entre valor, prazo e qualidade.",
  },
  {
    title: "Evoluir",
    description: "A entrega nasce preparada para acompanhar o próximo passo.",
  },
];

const qualityChecks = [
  "Experiência intuitiva",
  "Performance consistente",
  "Código sustentável",
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative w-full scroll-mt-32 pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24"
      aria-labelledby="about-title"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-secondary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 md:mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-primary/10 px-3 py-1.5 text-sm font-semibold text-brand-primary">
            <Sparkles className="size-4" aria-hidden="true" />
            Sobre a Zapt
          </p>
          <h2
            id="about-title"
            className="mt-4 max-w-4xl text-3xl font-bold tracking-[-0.04em] text-ink text-balance md:text-4xl lg:text-5xl"
          >
            Tecnologia com contexto, clareza e responsabilidade
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-ink/65 md:text-lg">
            Criamos produtos digitais próximos da realidade de cada negócio,
            com decisões bem explicadas e qualidade que permanece depois do
            lançamento.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:auto-rows-[minmax(14rem,auto)]">
          <article
            className={`${cardBase} flex flex-col border-white/15 bg-brand-primary text-white shadow-[0_26px_70px_rgba(5,84,242,0.22)] md:col-span-2 md:min-h-[38rem] lg:col-span-7 lg:row-span-2 lg:min-h-0`}
            aria-labelledby="method-title"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.13] [mask-image:radial-gradient(circle_at_90%_5%,black,transparent_68%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-brand-secondary/35 blur-[60px]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-5">
                <span
                  className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20"
                  aria-hidden="true"
                >
                  <ScanSearch className="size-6" />
                </span>
                <p className="font-mono text-[0.65rem] font-bold tracking-[0.14em] text-white/85 uppercase">
                  Nosso método
                </p>
              </div>

              <div className="mt-8 max-w-2xl">
                <p className="text-sm font-bold tracking-[0.12em] text-brand-highlight uppercase">
                  O negócio vem primeiro
                </p>
                <h3
                  id="method-title"
                  className="mt-3 text-3xl leading-[1.05] font-semibold tracking-[-0.045em] text-balance md:text-4xl"
                >
                  Antes de escrever código, entendemos o que precisa mudar.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/85">
                  Traduzimos desafios reais em uma solução digital útil,
                  viável e simples de manter. Assim, a tecnologia serve ao
                  crescimento — e não o contrário.
                </p>
              </div>

              <ol
                className="mt-auto grid gap-3 pt-10 sm:grid-cols-3"
                aria-label="Etapas do método da Zapt"
                role="list"
              >
                {principles.map((principle, index) => (
                  <li
                    key={principle.title}
                    className="rounded-2xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex size-7 items-center justify-center rounded-full bg-brand-highlight text-xs font-bold text-ink"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <h4 className="font-bold text-white">
                        {principle.title}
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/85">
                      {principle.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <article
            className={`${cardBase} flex flex-col border-ink/10 bg-white/90 text-ink backdrop-blur-sm md:min-h-80 lg:col-span-5 lg:min-h-0`}
            aria-labelledby="shared-decisions-title"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-[0_10px_25px_rgba(5,84,242,0.20)]"
                aria-hidden="true"
              >
                <MessageSquareText className="size-6" />
              </span>
              <p className="rounded-full border border-brand-primary/10 bg-surface-soft px-3 py-1.5 text-xs font-bold text-brand-primary">
                Sem caixa-preta
              </p>
            </div>

            <div className="mt-auto pt-8">
              <h3
                id="shared-decisions-title"
                className="text-2xl leading-tight font-bold tracking-[-0.03em]"
              >
                Decisões compartilhadas, do início ao fim
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-ink/65 md:text-base">
                Você acompanha prioridades, escolhas e avanços com uma
                comunicação direta. Menos surpresa, mais controle sobre o
                projeto.
              </p>
            </div>
          </article>

          <article
            className={`${cardBase} flex flex-col border-brand-secondary/15 bg-surface-sky text-ink md:min-h-80 lg:col-span-5 lg:min-h-0`}
            aria-labelledby="quality-title"
          >
            <div
              className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full border border-brand-secondary/15 before:absolute before:inset-8 before:rounded-full before:border before:border-brand-secondary/15 before:content-['']"
              aria-hidden="true"
            />

            <span
              className="relative z-10 inline-flex size-12 items-center justify-center rounded-2xl bg-white/75 text-brand-secondary-strong ring-1 ring-brand-secondary/20"
              aria-hidden="true"
            >
              <ShieldCheck className="size-6" />
            </span>

            <div className="relative z-10 mt-7">
              <h3
                id="quality-title"
                className="text-2xl leading-tight font-bold tracking-[-0.03em]"
              >
                Qualidade que pode ser percebida
              </h3>
              <ul
                className="mt-5 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1"
                aria-label="Critérios de qualidade"
                role="list"
              >
                {qualityChecks.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-semibold text-ink/70"
                  >
                    <span
                      className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white"
                      aria-hidden="true"
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article
            className={`${cardBase} flex flex-col border-ink/10 bg-brand-highlight text-ink md:min-h-72 lg:col-span-4 lg:min-h-0`}
            aria-labelledby="tailored-title"
          >
            <div className="flex items-center justify-between gap-4">
              <span
                className="inline-flex size-11 items-center justify-center rounded-2xl bg-ink text-brand-highlight"
                aria-hidden="true"
              >
                <Layers3 className="size-5" />
              </span>
              <p className="font-mono text-[0.65rem] font-bold tracking-[0.14em] text-ink/45 uppercase">
                Sob medida
              </p>
            </div>
            <div className="mt-auto pt-6 md:pt-8">
              <h3
                id="tailored-title"
                className="text-xl font-bold tracking-[-0.025em]"
              >
                Só o que gera valor
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">
                Escopo consciente, sem complexidade desnecessária ou solução
                genérica.
              </p>
            </div>
          </article>

          <article
            className={`${cardBase} flex flex-col border-ink/10 bg-white/90 text-ink backdrop-blur-sm md:min-h-72 lg:col-span-4 lg:min-h-0`}
            aria-labelledby="evolution-title"
          >
            <div className="flex items-center justify-between gap-4">
              <span
                className="inline-flex size-11 items-center justify-center rounded-2xl bg-surface-soft text-brand-primary ring-1 ring-brand-primary/10"
                aria-hidden="true"
              >
                <ShieldCheck className="size-5" />
              </span>
              <p className="font-mono text-[0.65rem] font-bold tracking-[0.14em] text-brand-primary/45 uppercase">
                Evolução
              </p>
            </div>
            <div className="mt-auto pt-6 md:pt-8">
              <h3
                id="evolution-title"
                className="text-xl font-bold tracking-[-0.025em]"
              >
                Feito para continuar
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">
                Arquitetura organizada para crescer, integrar e receber novas
                funcionalidades.
              </p>
            </div>
          </article>

          <article
            className={`${cardBase} flex flex-col border-white/15 bg-ink text-white md:min-h-72 lg:col-span-4 lg:min-h-0`}
            aria-labelledby="partnership-title"
          >
            <div
              className="pointer-events-none absolute -right-16 -bottom-24 size-60 rounded-full bg-brand-primary/35 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10 flex items-center justify-between gap-4">
              <span
                className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/10 text-brand-highlight ring-1 ring-white/10"
                aria-hidden="true"
              >
                <HeartHandshake className="size-5" />
              </span>
              <p className="font-mono text-[0.65rem] font-bold tracking-[0.14em] text-white/50 uppercase">
                Parceria
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 md:pt-8">
              <h3
                id="partnership-title"
                className="text-xl font-bold tracking-[-0.025em]"
              >
                Presença depois da entrega
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Lançar é uma etapa. Continuamos próximos para orientar os
                próximos passos.
              </p>
              <a
                href="#contato"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-highlight focus-visible:rounded-sm focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-highlight"
              >
                Converse com a Zapt
                <ArrowRight
                  className="size-4 transition-all duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
