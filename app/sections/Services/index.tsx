import "./style.css";

import {
  ArrowRight,
  Code2,
  Database,
  RefreshCw,
  Rocket,
  Zap,
} from "lucide-react";

interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  span: string;
}

const products: Product[] = [
  {
    id: "landing-pages",
    title: "Landing Pages e Sites Institucionais",
    subtitle: "de Alta Conversão",
    description:
      "Páginas otimizadas para transformar visitantes em clientes, com design estratégico, copy direcionada e performance superior.",
    icon: Rocket,
    span: "col-span-4 md:col-span-2 md:row-span-2",
  },
  {
    id: "web-apps",
    title: "Desenvolvimento de Aplicações Web",
    description:
      "Soluções web sob medida com arquitetura moderna, escalável e experiência fluida para seus usuários.",
    icon: Code2,
    span: "col-span-4 md:col-span-2 md:row-span-1",
  },
  {
    id: "erp-crm",
    title: "Sistemas de Gestão Personalizados",
    subtitle: "ERP / CRM",
    description:
      "Automatize processos e centralize dados com sistemas feitos sob medida para o seu negócio.",
    icon: Database,
    span: "col-span-4 md:col-span-1 md:row-span-1",
  },
  {
    id: "consulting",
    title: "Consultoria Técnica e Modernização",
    subtitle: "de Sistemas",
    description:
      "Atualize sua stack legada, melhore performance e aplique as melhores práticas de engenharia de software.",
    icon: RefreshCw,
    span: "col-span-4 md:col-span-1 md:row-span-1",
  },
];

export function Services() {
  return (
    <section className="w-full bg-[#0554f2]-section py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0554f2]/15 px-3 py-1 text-sm font-medium text-black">
            <Zap className="h-4 w-4" />
            Nossas soluções
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
            Produtos que aceleram seu negócio
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-black/70">
            Do primeiro clique à operação completa: tecnologia sob medida para cada etapa do seu crescimento.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => {
            const isFeatured = product.id === "landing-pages";
            return (
            <article
              key={product.id}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#0554f2] p-6 md:p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-product/30 ${product.span}`}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#0554f2]-foreground/5 blur-3xl transition-opacity group-hover:opacity-100" />

              {isFeatured && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #fafafa 1px, transparent 1px), linear-gradient(to bottom, #fafafa 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                      maskImage:
                        "radial-gradient(ellipse at 80% 20%, black 30%, transparent 70%)",
                    }}
                  />
                  <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-[#0554f2] blur-2xl animate-pulse" />
                  <div
                    className="absolute right-24 top-32 h-16 w-16 rounded-full bg-[#0554f2]-foreground/20 blur-xl animate-pulse"
                    style={{ animationDelay: "0.8s" }}
                  />

                  <div className="absolute -bottom-6 -right-6 w-[70%] max-w-90 -rotate-6 transition-transform duration-500 group-hover:-rotate-3 group-hover:-translate-y-2">
                    <div className="rounded-xl bg-[#0554f2] backdrop-blur-sm ring-1 ring-white/40 shadow-2xl overflow-hidden">
                      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-product">
                        <span className="h-2 w-2 rounded-full bg-white/70" />
                        <span className="h-2 w-2 rounded-full bg-white/70" />
                        <span className="h-2 w-2 rounded-full bg-white/70" />
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="h-2 w-3/4 rounded bg-white/30" />
                        <div className="h-2 w-1/2 rounded bg-white/20" />
                        <div className="mt-3 flex items-end gap-1.5 h-16">
                          <div className="flex-1 rounded-sm bg-white/25 animate-[grow_2s_ease-in-out_infinite]" style={{ height: "40%" }} />
                          <div className="flex-1 rounded-sm bg-white/20 animate-[grow_2s_ease-in-out_infinite]" style={{ height: "65%", animationDelay: "0.2s" }} />
                          <div className="flex-1 rounded-sm bg-white/60 animate-[grow_2s_ease-in-out_infinite]" style={{ height: "50%", animationDelay: "0.4s" }} />
                          <div className="flex-1 rounded-sm bg-white/40 animate-[grow_2s_ease-in-out_infinite]" style={{ height: "85%", animationDelay: "0.6s" }} />
                          <div className="flex-1 rounded-sm bg-white/80 animate-[grow_2s_ease-in-out_infinite]" style={{ height: "70%", animationDelay: "0.8s" }} />
                          <div className="flex-1 rounded-sm bg-white/60 animate-[grow_2s_ease-in-out_infinite]" style={{ height: "100%", animationDelay: "1s" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative flex h-full flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0554f2] ring-1 ring-product">
                  <product.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-bold leading-tight md:text-2xl">
                  {product.title}
                  {product.subtitle && (
                    <span className="block text-product-accent">
                      {product.subtitle}
                    </span>
                  )}
                </h3>

                <p className={`mt-3 text-sm leading-relaxed text-white/80 md:text-base ${isFeatured ? "max-w-[85%]" : ""}`}>
                  {product.description}
                </p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-product-accent">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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