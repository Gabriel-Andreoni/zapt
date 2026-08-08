import { ArrowRight, Check, Code2, Gauge, Sparkles } from "lucide-react";

function ProductConstellation() {
  return (
    <div
      className="relative mx-auto h-[24rem] w-full max-w-[39rem] sm:h-[28rem] lg:h-[31rem]"
      aria-hidden="true"
    >
      <div className="absolute top-[12%] right-[2%] size-[78%] rounded-full border border-dashed border-white/20" />
      <div className="absolute top-[23%] right-[13%] size-[56%] rounded-full border border-white/10" />

      <div className="absolute top-0 left-0 z-30 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md sm:left-[2%]">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-highlight opacity-70 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-brand-highlight" />
        </span>
        Projeto em andamento
      </div>

      <div className="absolute top-[10%] right-0 z-10 w-[88%] rotate-[1.5deg] overflow-hidden rounded-[1.65rem] border border-white/30 bg-white text-ink shadow-[0_28px_70px_rgba(16,24,43,0.28)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:rotate-[0.5deg] motion-reduce:transition-none sm:w-[82%]">
        <div className="flex h-11 items-center justify-between border-b border-ink/10 bg-surface-canvas px-4">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-brand-primary/25" />
            <span className="size-2 rounded-full bg-brand-secondary/45" />
            <span className="size-2 rounded-full bg-brand-highlight" />
          </div>
          <span className="font-mono text-[0.55rem] font-bold tracking-[0.13em] text-ink/40 uppercase">
            workspace.zapt
          </span>
          <Code2 className="size-4 text-brand-primary" />
        </div>

        <div className="grid min-h-64 grid-cols-12 sm:min-h-72">
          <div className="col-span-3 hidden border-r border-ink/10 bg-surface-soft/70 p-4 sm:block">
            <div className="flex size-9 items-center justify-center rounded-xl bg-brand-primary text-xs font-black text-white">
              Z
            </div>
            <div className="mt-8 space-y-3">
              <div className="h-2 w-full rounded-full bg-brand-primary/25" />
              <div className="h-2 w-3/4 rounded-full bg-ink/10" />
              <div className="h-2 w-4/5 rounded-full bg-ink/10" />
            </div>
          </div>

          <div className="col-span-12 p-4 sm:col-span-9 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.11em] text-brand-primary uppercase">
                  Visão do projeto
                </p>
                <p className="mt-1 text-base font-bold tracking-[-0.02em] sm:text-lg">
                  Uma solução pronta para crescer
                </p>
              </div>
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-highlight text-ink">
                <Gauge className="size-4" />
              </span>
            </div>

            <div className="mt-5 rounded-2xl bg-brand-primary p-4 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.6rem] font-bold tracking-[0.12em] text-white/55 uppercase">
                    Experiência
                  </p>
                  <p className="mt-1 text-sm font-bold">Clara em cada etapa</p>
                </div>
                <div className="flex h-12 items-end gap-1">
                  {[38, 58, 48, 74, 64, 92].map((height) => (
                    <span
                      key={height}
                      className="w-1.5 rounded-full bg-white/65"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-ink/10 bg-surface-canvas p-3">
                <div className="h-2 w-3/5 rounded-full bg-ink/15" />
                <div className="mt-3 h-5 w-4/5 rounded-md bg-brand-secondary/25" />
              </div>
              <div className="rounded-2xl border border-ink/10 bg-surface-sky p-3">
                <div className="h-2 w-1/2 rounded-full bg-brand-secondary/25" />
                <div className="mt-3 flex items-center gap-1">
                  <span className="size-5 rounded-full bg-brand-primary" />
                  <span className="h-2 flex-1 rounded-full bg-brand-primary/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[2%] left-0 z-20 w-[46%] -rotate-3 overflow-hidden rounded-[1.35rem] border border-white/15 bg-ink p-4 text-white shadow-[0_22px_55px_rgba(16,24,43,0.38)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-1 group-hover:-rotate-1 motion-reduce:transition-none sm:left-[2%] sm:w-[42%] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[0.55rem] font-bold tracking-[0.14em] text-white/40 uppercase">
            Experiência web
          </span>
          <span className="size-2 rounded-full bg-brand-highlight" />
        </div>
        <p className="mt-8 text-base leading-none font-bold tracking-[-0.06em] min-[360px]:text-2xl sm:text-3xl">
          feito para
          <span className="block text-brand-highlight">funcionar.</span>
        </p>
        <div className="mt-5 h-1.5 w-2/3 rounded-full bg-white/15">
          <div className="h-full w-4/5 rounded-full bg-brand-secondary" />
        </div>
      </div>

      <div className="absolute right-[1%] bottom-0 z-30 flex items-center gap-2 rounded-2xl border border-ink/10 bg-brand-highlight px-3 py-2.5 text-xs font-bold text-ink shadow-[0_16px_35px_rgba(16,24,43,0.22)] sm:right-[4%] sm:px-4 sm:py-3">
        <span className="inline-flex size-5 items-center justify-center rounded-full bg-ink text-brand-highlight">
          <Check className="size-3" strokeWidth={3} />
        </span>
        Pronto para evoluir
      </div>
    </div>
  );
}

export function CallToAction() {
  return (
    <section
      id="contato"
      className="w-full scroll-mt-32 pb-12 md:pb-16"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative isolate grid min-h-[38rem] overflow-hidden rounded-[2rem] border border-white/15 bg-brand-primary text-white shadow-[0_30px_85px_rgba(5,84,242,0.25)] lg:min-h-[34rem] lg:grid-cols-12">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.30)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.30)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.13] [mask-image:radial-gradient(circle_at_80%_45%,black,transparent_68%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-32 -right-24 size-[30rem] rounded-full bg-brand-secondary/35 blur-[85px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -left-32 size-80 rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-start justify-center px-6 pt-10 pb-8 sm:px-10 sm:pt-12 lg:col-span-5 lg:p-14 xl:p-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm">
              <Sparkles className="size-4 text-brand-highlight" />
              Seu próximo produto digital
            </span>

            <h2
              id="cta-title"
              className="mt-6 max-w-[11ch] text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-balance"
            >
              Sua ideia pode começar a{" "}
              <span className="text-white/55">tomar forma hoje.</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-white/70 md:text-lg">
              Conte o que sua empresa precisa. A Zapt organiza o caminho,
              constrói a solução e acompanha cada evolução.
            </p>

            <a
              href="#contato"
              className="group/button mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-primary shadow-[0_10px_28px_rgba(16,24,43,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-highlight hover:text-ink hover:shadow-[0_14px_34px_rgba(16,24,43,0.25)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-highlight motion-reduce:transition-none"
            >
              Conversar sobre meu projeto
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1 motion-reduce:transition-none" />
            </a>

            <p className="mt-4 flex items-center gap-2 text-sm text-white/55">
              <Check className="size-4 text-brand-highlight" strokeWidth={2.5} />
              Uma conversa direta, sem compromisso.
            </p>
          </div>

          <div className="relative z-10 overflow-hidden px-5 pb-8 sm:px-10 sm:pb-10 lg:col-span-7 lg:overflow-visible lg:px-0 lg:py-10 lg:pr-8">
            <ProductConstellation />
          </div>
        </div>
      </div>
    </section>
  );
}
