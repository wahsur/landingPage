import Navbar from "@/components/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Halaman */}
      <Component {...pageProps} />
    </div>
  );
}
