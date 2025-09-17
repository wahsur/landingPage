import AboutUs from "@/components/AboutUs";
import ChoseUs from "@/components/ChoseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import Question from "@/components/Question";
import Services from "@/components/Service";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Halaman */}
      <Component {...pageProps} />
      {/* Sections */}
      <section className="relative z-10">
        <AboutUs />
        <Services />
        <ChoseUs />
        <Question />
        <Contact />
        <Footer />
        </section>
      
    </div>
  );
}
