import {
  ArrowRight,
  Code2,
  Database,
  RefreshCw,
  Rocket,
  Zap,
} from "lucide-react";

type ProductTone = "primary" | "paper" | "sky" | "highlight";

interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  span: string;
  tone: ProductTone;
}

const products: Product[] = [
  {
    id: "landing-pages",
    title: "Landing Pages e Sites Institucionais",
    subtitle: "de Alta Conversão",
    description:
      "Páginas otimizadas para transformar visitantes em clientes, com design estratégico, copy direcionada e performance superior.",
    icon: Rocket,
    span: "col-span-1 sm:col-span-2 xl:col-span-2 xl:row-span-2",
    tone: "primary",
  },
  {
    id: "web-apps",
    title: "Desenvolvimento de Aplicações Web",
    description:
      "Soluções web sob medida com arquitetura moderna, escalável e experiência fluida para seus usuários.",
    icon: Code2,
    span: "col-span-1 sm:col-span-2 xl:col-span-2",
    tone: "paper",
  },
  {
    id: "erp-crm",
    title: "Sistemas de Gestão Personalizados",
    subtitle: "ERP / CRM",
    description:
      "Automatize processos e centralize dados com sistemas feitos sob medida para o seu negócio.",
    icon: Database,
    span: "col-span-1",
    tone: "sky",
  },
  {
    id: "consulting",
    title: "Consultoria Técnica e Modernização",
    subtitle: "de Sistemas",
    description:
      "Atualize sua stack legada, melhore performance e aplique as melhores práticas de engenharia de software.",
    icon: RefreshCw,
    span: "col-span-1",
    tone: "highlight",
  },
];

const toneStyles: Record<
  ProductTone,
  {
    card: string;
    icon: string;
    subtitle: string;
    description: string;
    action: string;
  }
> = {
  primary: {
    card: "border-white/15 bg-brand-primary text-white shadow-[0_24px_65px_rgba(5,84,242,0.20)]",
    icon: "bg-white/10 text-white ring-white/20",
    subtitle: "text-white/55",
    description: "text-white/75",
    action: "text-white",
  },
  paper: {
    card: "border-ink/10 bg-white/90 text-ink backdrop-blur-sm",
    icon: "bg-brand-primary text-white ring-brand-primary/10",
    subtitle: "text-brand-primary/65",
    description: "text-ink/65",
    action: "text-brand-primary",
  },
  sky: {
    card: "border-brand-secondary/15 bg-surface-sky text-ink",
    icon:
      "bg-white/70 text-brand-secondary-strong ring-brand-secondary/20",
    subtitle: "text-brand-secondary-strong",
    description: "text-ink/65",
    action: "text-brand-primary",
  },
  highlight: {
    card: "border-ink/10 bg-brand-highlight text-ink",
    icon: "bg-ink text-brand-highlight ring-ink/10",
    subtitle: "text-ink/55",
    description: "text-ink/65",
    action: "text-ink",
  },
};

const cardBase =
  "group relative flex min-h-64 overflow-hidden rounded-3xl border p-6 shadow-[0_18px_50px_rgba(16,24,43,0.07)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(16,24,43,0.13)] motion-reduce:transition-none md:p-8";

function FeaturedPreview() {
  const barHeights = [40, 65, 50, 85, 70, 100];

  return (
    <div
      className="pointer-events-none absolute -right-6 -bottom-7 w-[72%] max-w-90 -rotate-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:-rotate-3 motion-reduce:transition-none"
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-1.5 border-b border-white/15 px-3 py-2.5">
          <span className="size-2 rounded-full bg-white/40" />
          <span className="size-2 rounded-full bg-brand-secondary" />
          <span className="size-2 rounded-full bg-brand-highlight" />
        </div>
        <div className="space-y-2 p-4">
          <div className="h-2 w-3/4 rounded-full bg-white/30" />
          <div className="h-2 w-1/2 rounded-full bg-white/20" />
          <div className="mt-4 flex h-20 items-end gap-2">
            {barHeights.map((height, index) => (
              <span
                key={height}
                className="w-full origin-bottom animate-pulse rounded-t-sm bg-white/60 motion-reduce:animate-none"
                style={{
                  height: `${height}%`,
                  animationDelay: `${index * 140}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="produtos"
      className="w-full scroll-mt-32 py-16 md:py-24"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-primary/10 px-3 py-1.5 text-sm font-semibold text-brand-primary">
            <Zap className="size-4" />
            Nossas soluções
          </span>
          <h2
            id="services-title"
            className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.04em] text-ink md:text-4xl lg:text-5xl"
          >
            Produtos que aceleram seu negócio
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-ink/65 md:text-lg">
            Do primeiro clique à operação completa: tecnologia sob medida para
            cada etapa do seu crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:auto-rows-[minmax(16rem,auto)]">
          {products.map((product) => {
            const tone = toneStyles[product.tone];
            const isFeatured = product.tone === "primary";

            return (
              <article
                key={product.id}
                className={`${cardBase} ${tone.card} ${product.span} ${
                  isFeatured ? "min-h-[34rem]" : ""
                }`}
              >
                <div
                  className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-current opacity-[0.06] blur-3xl"
                  aria-hidden="true"
                />

                {isFeatured && (
                  <>
                    <div
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.14] [mask-image:radial-gradient(ellipse_at_80%_20%,black_25%,transparent_70%)]"
                      aria-hidden="true"
                    />
                    <FeaturedPreview />
                  </>
                )}

                <div className="relative z-10 flex h-full w-full flex-col">
                  <span
                    className={`mb-5 inline-flex size-12 items-center justify-center rounded-2xl ring-1 ${tone.icon}`}
                  >
                    <product.icon className="size-6" />
                  </span>

                  <h3 className="max-w-xl text-xl leading-tight font-bold tracking-[-0.025em] md:text-2xl">
                    {product.title}
                    {product.subtitle && (
                      <span className={`block ${tone.subtitle}`}>
                        {product.subtitle}
                      </span>
                    )}
                  </h3>

                  <p
                    className={`mt-3 max-w-xl text-sm leading-relaxed md:text-base ${tone.description} ${
                      isFeatured ? "max-w-[85%]" : ""
                    }`}
                  >
                    {product.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <span
                      className={`inline-flex items-center gap-2 text-sm font-bold ${tone.action}`}
                    >
                      Saiba mais
                      <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
