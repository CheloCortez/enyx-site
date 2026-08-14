import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <section id="home" className="pt-40 pb-24">
          <div className="container-page">
            <p className="text-muted">Seções entram aqui nas próximas tasks.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
