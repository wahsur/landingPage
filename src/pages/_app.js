import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PT SEMUA APLIKASI INDONESIA</title>
        <meta name="description" content="Ini halaman beranda" />
        <link rel="icon" href="/image/favicon.png" />
      </Head>
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Halaman */}
        <Component {...pageProps} />
      </div>
    </>
  );
}
