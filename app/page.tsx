"use client";

import { useState, useEffect } from "react";

import Hero from "./sections/Hero";
import Loader from "./components/Loader";
import Services from "./sections/Services";
import Orcamento from "./sections/Orcamento";

export default function Home() {
  const [loaderOn, setLoaderOn] = useState<Boolean>(false);

  useEffect(() => {
    setLoaderOn(true);

    const timer = setTimeout(() => {
      setLoaderOn(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
    {/*loaderOn && <Loader />*/}

      <Hero />
      <Services />
      <Orcamento />
    </div>
  );
}
