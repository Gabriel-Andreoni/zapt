import { ArrowUpRight, MessageCircle, Zap } from "lucide-react";

const footerLinks = [
  { name: "Serviços", href: "#produtos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

const whatsappMessage = encodeURIComponent(
  "Olá! Conheci a Zapt pelo site e quero conversar sobre um projeto.",
);

export function Footer() {
  return (
    <footer
      className="w-full"
      aria-labelledby="footer-title"
    >
      <div className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_76%_16%,rgba(199,243,63,0.30),transparent_24%),radial-gradient(circle_at_12%_82%,rgba(24,168,232,0.38),transparent_35%),linear-gradient(136deg,#061f63_0%,#063db8_48%,#052777_100%)] text-white shadow-[0_30px_80px_rgba(6,31,99,0.28)]">
          <div
            className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -top-40 -right-44 -z-20 size-[34rem] rounded-full border border-[#c7f33f]/25 shadow-[inset_0_0_0_4rem_rgba(199,243,63,0.025),inset_0_0_0_9rem_rgba(199,243,63,0.025)] sm:-right-32"
            aria-hidden="true"
          >
            <span className="absolute top-28 left-12 size-3 rounded-full bg-[#c7f33f] shadow-[0_0_34px_rgba(199,243,63,0.8)]" />
            <span className="absolute bottom-8 left-36 size-2 rounded-full bg-[#c7f33f] shadow-[0_0_28px_rgba(199,243,63,0.75)]" />
          </div>

          <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 pt-12 pb-8 sm:gap-12 sm:px-10 sm:pt-16 sm:pb-10 lg:min-h-[33rem] lg:grid-cols-12 lg:items-end lg:gap-8 lg:px-14 lg:pt-20 lg:pb-14 xl:px-16">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-xs font-bold tracking-[0.12em] text-[#c7f33f] uppercase">
                <span className="h-0.5 w-9 rounded-full bg-[#c7f33f]" />
                Vamos continuar por perto
              </p>

              <h2
                id="footer-title"
                className="mt-7 max-w-[9ch] text-[clamp(3.25rem,9vw,6.75rem)] leading-[0.86] font-semibold tracking-[-0.075em] text-balance"
              >
                A gente se vê{" "}
                <span className="block text-[#c7f33f]">em breve.</span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-white/68 sm:text-lg">
                Ou agora mesmo, se já existe uma ideia pedindo para sair do
                papel.
              </p>

              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#c7f33f] px-4 py-3 pr-5 text-sm font-bold text-ink shadow-[0_14px_35px_rgba(199,243,63,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_42px_rgba(199,243,63,0.28)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c7f33f] motion-reduce:transition-none"
                aria-label="Chamar a Zapt no WhatsApp (abre em uma nova aba)"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-ink text-[#c7f33f]">
                  <MessageCircle className="size-[1.1rem]" aria-hidden="true" />
                </span>
                Chamar no WhatsApp
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="rounded-[1.4rem] border border-white/15 bg-white/[0.08] p-4 shadow-[0_22px_50px_rgba(6,31,99,0.18)] backdrop-blur-xl sm:p-6 lg:col-span-4 lg:col-start-9">
              <p className="font-mono text-[0.62rem] font-bold tracking-[0.16em] text-white/45 uppercase">
                Navegue
              </p>

              <nav className="mt-4" aria-label="Links do rodapé">
                {footerLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-between gap-4 border-b border-white/12 py-2.5 text-base font-semibold text-white transition-colors last:border-b-0 hover:text-[#c7f33f] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f33f] sm:py-3.5"
                  >
                    {item.name}
                    <ArrowUpRight
                      className="size-4 text-[#c7f33f] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="border-t border-white/13">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-4 px-6 py-5 text-sm text-white/50 sm:px-10 sm:py-6 lg:grid-cols-[1fr_auto_1fr] lg:px-14 xl:px-16">
            <a
              href="#"
              className="group inline-flex w-fit items-center gap-2.5 font-bold text-white focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f33f]"
              aria-label="Voltar ao início"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#c7f33f] transition-colors group-hover:bg-white/15">
                <Zap className="size-5" aria-hidden="true" />
              </span>
              Zapt
            </a>

            <p className="text-right lg:text-center">© 2026 Zapt</p>

              <p className="col-span-2 flex items-center gap-2 lg:col-span-1 lg:justify-self-end">
                <span className="size-2 rounded-full bg-[#c7f33f]" />
                Brasil · projetos digitais
              </p>
            </div>
          </div>
        </div>
    </footer>
  );
}
