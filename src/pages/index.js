import Home from "@/components/Home";
import AboutUs from "@/components/AboutUs";
import Trusted from "@/components/Trusted";
import ChoseUs from "@/components/ChoseUs";
import Partner from "@/components/Partner";
import Brand from "@/components/Brand";
import Contact from "@/components/Contact";
import Service from "@/components/Service";
import Question from "@/components/Question";
import Footer from "@/components/Footer";

export default function IndexPage() {
  return (
    <main>
      {/* Hero / Home */}
      <section id="BERANDA">
        <Home />
      </section>

      {/* About Us */}
      <section id="TENTANG">
        <AboutUs />
        {/* Trusted */}
        <section>
          <Trusted />
        </section>
      </section>

      {/* Services */}
      <section id="LAYANAN">
        <Service />
        <section>
          <ChoseUs />
        </section>
      </section>

      <section id="MITRA">
        <Partner />
        <section>
          <Brand />
        </section>
      </section>

      {/* FAQs */}
      <section id="PERTANYAAN">
        <Question />
      </section>

      {/* Contact Us */}
      <section id="KONTAK">
        <Contact />
      </section>

      {/* Footer */}
      <section id="FOOTER">
        <Footer />
      </section>
    </main>
  );
}
