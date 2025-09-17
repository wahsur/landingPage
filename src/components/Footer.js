import Image from "next/image";

export default function Footer() {
  return (

    <footer className="h-full bg-primaryFooter text-white pt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <Image src="/image/logo.png" alt="Logo" width={200} height={100} />
          <p className="text-lg text-center">
           Innovate, Integrate, Elevate
          </p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-lg text-secondary mb-4">Socials</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-lg  text-secondary mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg text-secondary mb-4">Address</h4>
          <p className="text-sm">
            Jl. Patih Jelantik<br/>Istana Kuta Galeria<br/>Blok Broadway 2 No. 11<br/>Kuta, Bali 80361
          </p>
        </div>

        <div className="max-w-4xl mx-auto py-4 text-center text-sm text-secondary">
          &copy; {new Date().getFullYear()} PT Semua Aplikasi Indonesia.
        </div>

        <div className="max-w-4xl mx-auto py-4 text-center text-sm text-secondary ">  
            All rights reserved.
        </div>
      </div>
    </footer>
  );
}
