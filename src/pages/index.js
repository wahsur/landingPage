import Home from "@/components/Home";
import AboutUs from "@/components/AboutUs";
import Trusted from "@/components/Trusted";
import ChoseUs from "@/components/ChoseUs";
import Partner from "@/components/Partner";
import Brand from "@/components/Brand";
import Contact from "@/components/Contact";

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
      <section
        id="services"
        className="h-screen bg-primary flex items-center justify-center text-white"
      >
        <h2>Services Section</h2>
      </section>
      <section>
        <ChoseUs />
      </section>

      {/* Section lain misalnya Partner / FAQ */}
      <section id="partner">
        <Partner />
        <section>
          <Brand />
        </section>
      </section>
      
      <section
        id="faqs"
        className="h-screen bg-gray-600 flex items-center justify-center text-white"
      >
        <h2>FAQs Section</h2>
      </section>

      <section id="contact">
        <Contact />
      </section>
      <section
        id="footer"
        className="h-36 bg-primaryFooter flex items-center justify-center text-white"
      >
        <h2>Footer Section</h2>
      </section>
    </main>
  );
}
