import AboutUs from "@/components/AboutUs";
import ChoseUs from "@/components/ChoseUs";
import Navbar from "@/components/navbar";
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
      </section>
    </div>
  );
}
