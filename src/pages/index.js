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
      <section id="home">
        <Home />
      </section>

      {/* About Us */}
      <section id="about">
        <AboutUs />
        {/* Trusted */}
        <section>
          <Trusted />
        </section>
      </section>

      {/* Services */}
      <section id="services">
        <Service />
        <section>
          <ChoseUs />
        </section>
      </section>

      {/* Partner */}
      <section id="partner">
        <Partner />
        <section>
          <Brand />
        </section>
      </section>

      {/* FAQs */}
      <section
        id="faqs"
      >
        <Question />
      </section>

      {/* Contact Us */}
      <section id="contact">
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
