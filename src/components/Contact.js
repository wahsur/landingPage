export default function Contact() {
  return (
    <section id="contact" className="bg-background1 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-shadow-lg font-extrabold text-primary text-center mb-12">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left big text */}
          <div>
            <h3 className="text-3xl md:text-6xl text-primary leading-snug">
              Contact
            </h3>
            <div className="space-y-4 my-4">
              <h4 className="text-3xl md:text-3xl text-secondary leading-snug">
                Email
              </h4>
              <p className="text-primary leading-relaxed">
                sai@gmail.component
              </p>
            </div>
            <div className="space-y-4 my-4">
              <h4 className="text-3xl md:text-3xl text-secondary leading-snug">
                Phone
              </h4>
              <p className="text-primary leading-relaxed">+62 812-3456-7890</p>
            </div>
            <div className="space-y-4 my-4">
              <h4 className="text-3xl md:text-3xl text-secondary leading-snug">
                Address
              </h4>
              <p className="text-primary leading-relaxed w-3/4">
                Jl. Patih Jelantik Istana Kuta Galeria Blok Broadway 2 No. 11
                Kuta, Badung, Bali 80361
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-6xl text-primary leading-snug">
              Talk With Us
            </h3>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-md shadow-md shadow-gray-400 p-5"
              >
                <h4 className="text-xl font-semibold text-secondary mb-1">
                  Innovation and Impact
                </h4>
                <p className="text-primary text-sm">
                  {" "}
                  &quot;To empower individuals and businesses with innovative
                  technology solutions that drive positive change and improve
                  lives.&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
