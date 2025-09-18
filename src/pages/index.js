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
      <section id="beranda">
        <Home />
      </section>

      {/* About Us */}
      <section id="tentang">
        <AboutUs />
        {/* Trusted */}
        <section>
          <Trusted />
        </section>
      </section>

      {/* Services */}
      <section id="layanan">
        <Service />
        <section>
          <ChoseUs />
        </section>
      </section>

      {/* Partner */}
      <section id="mitra">
        <Partner />
        <section>
          <Brand />
        </section>
      </section>

      {/* FAQs */}
      <section
        id="pertanyaan"
      >
        <Question />
      </section>

      {/* Contact Us */}
      <section id="kontak">
        <Contact />
      </section>

      {/* Footer */}
      <section
        id="footer"
      >
        <Footer />
      </section>
    </main>
  );
}
