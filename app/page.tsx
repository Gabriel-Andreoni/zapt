"use client";

import Hero from "./sections/Hero";
import Orcamento from "./sections/Orcamento";
import { Services } from "./sections/Services";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-surface-canvas bg-[radial-gradient(circle_at_10%_10%,rgba(24,168,232,0.14),transparent_23rem),radial-gradient(circle_at_90%_36%,rgba(5,84,242,0.12),transparent_27rem),radial-gradient(circle_at_8%_68%,rgba(185,229,50,0.08),transparent_24rem),radial-gradient(circle_at_88%_94%,rgba(24,168,232,0.10),transparent_26rem)]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(5,84,242,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(5,84,242,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black_4%,black_96%,transparent)]"
        aria-hidden="true"
      />

      <Hero />
      <Services />
      <Orcamento />
    </div>
  );
}
