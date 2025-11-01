export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Proven Multi-Cloud Expertise",
      description: "Deep experience with Microsoft Azure, AWS, and Google Cloud Platform",
      icon: "🌐",
    },
    {
      title: "Integrated Approach",
      description: "Combining security, automation, and innovation in every solution",
      icon: "🔗",
    },
    {
      title: "AI-Enhanced Workflows",
      description: "Drive measurable efficiency gains with intelligent automation",
      icon: "🚀",
    },
    {
      title: "Enterprise Experience",
      description: "Hands-on experience in enterprise and hybrid environments",
      icon: "🏢",
    },
    {
      title: "Continuous Innovation",
      description: "Stay ahead of industry trends, emerging threats, and evolving technologies",
      icon: "📈",
    },
    {
      title: "Business-Focused Results",
      description: "Technical expertise aligned with measurable business impact",
      icon: "✅",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Partner with Elevate Cyber Solutions?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-primary-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 border border-slate-600"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 via-purple-500 to-primary-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Elevate Your Business?
            </h3>
            <p className="text-slate-100 mb-6 text-lg">
              Let's discuss how we can help accelerate your digital transformation
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
