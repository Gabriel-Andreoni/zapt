"use client";

import Hero from "./sections/Hero";
import { About } from "./sections/About";
import { CallToAction } from "./sections/CallToAction";
import { Footer } from "./sections/Footer";
import { Services } from "./sections/Services";

export default function Home() {
  return (
    <main id="conteudo" className="relative isolate min-h-screen overflow-x-clip bg-surface-canvas bg-[radial-gradient(circle_at_10%_10%,rgba(24,168,232,0.14),transparent_23rem),radial-gradient(circle_at_90%_36%,rgba(5,84,242,0.12),transparent_27rem),radial-gradient(circle_at_8%_68%,rgba(185,229,50,0.08),transparent_24rem),radial-gradient(circle_at_88%_94%,rgba(24,168,232,0.10),transparent_26rem)]">
      <Hero />
      <Services />
      <About />
      <CallToAction />
      <Footer />
    </main>
  );
}
