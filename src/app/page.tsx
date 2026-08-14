import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Founders } from "@/components/sections/Founders";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Services />
        <Differentials />
        <Portfolio />
        <Process />
        <Founders />
      </main>
      <Footer />
    </>
  );
}
