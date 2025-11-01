export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Elevate Cyber Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-primary-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Elevate Cyber Solutions is a modern cloud and cybersecurity consultancy that helps
              organizations accelerate digital transformation with confidence. We specialize in cloud
              infrastructure, DevOps automation, cybersecurity, and AI-driven process optimization —
              empowering businesses to enhance productivity, reduce costs, and strengthen their security
              posture.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Founded and led by Bismark Castilla, a Cloud Solutions Expert with over 15 years of
              experience across system administration, software development, and cybersecurity, Elevate
              Cyber Solutions bridges technical expertise with business strategy to deliver end-to-end,
              scalable solutions for clients worldwide.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-primary-500">
              <h3 className="text-2xl font-semibold text-white mb-3">Mission</h3>
              <p className="text-slate-300">
                To elevate organizations through secure, intelligent, and automated cloud solutions that
                enable innovation, agility, and long-term resilience.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-white mb-3">Vision</h3>
              <p className="text-slate-300">
                To be a trusted global partner in cloud and cybersecurity transformation, recognized for
                technical mastery, reliability, and measurable business impact.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Integrity", desc: "Honesty and transparency in every engagement" },
              { title: "Excellence", desc: "High-quality, future-ready solutions" },
              { title: "Innovation", desc: "Continuous exploration of new technologies" },
              { title: "Security First", desc: "Protection and compliance at every layer" },
              { title: "Collaboration", desc: "Success through strong partnerships" },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-purple-400 mb-2">{value.title}</h4>
                <p className="text-slate-300 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
