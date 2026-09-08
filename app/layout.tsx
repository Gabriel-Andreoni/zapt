import type { Metadata } from "next";
import { spaceGrotesk } from "./fonts/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Zapt — Produtos digitais que fazem negócios avançar",
  description:
    "Sites, aplicativos e sistemas sob medida, da estratégia ao lançamento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-lg bg-brand-highlight px-4 py-3 font-bold text-ink shadow-lg transition-transform duration-150 focus-visible:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
