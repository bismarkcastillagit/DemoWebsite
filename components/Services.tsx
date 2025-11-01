export default function Services() {
  const services = [
    {
      title: "Cloud Architecture & Migration",
      description: "Design, build, and migrate secure, scalable, and cost-optimized environments across Azure, AWS, and GCP.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Implement Zero Trust, IAM, vulnerability management, and compliance frameworks (NIST, ISO, CIS).",
      icon: "🔒",
    },
    {
      title: "DevOps & Automation",
      description: "Deploy CI/CD pipelines, automate infrastructure with Terraform and Ansible, and enable agile delivery.",
      icon: "⚙️",
    },
    {
      title: "AI Solutions & Automation Agents",
      description: "Develop and integrate AI-driven automation using n8n and custom intelligent agents to eliminate repetitive workflows.",
      icon: "🤖",
    },
    {
      title: "Managed Cloud & Security Services",
      description: "Continuous monitoring, cost optimization, backup, DR, and cloud operations support.",
      icon: "📊",
    },
    {
      title: "Software Development & Integration",
      description: "Develop secure applications and integrate modern APIs, microservices, and containerized workloads.",
      icon: "💻",
    },
    {
      title: "Telecom & Enterprise Infrastructure",
      description: "Deploy and manage VoIP, SIP routing, and unified communication systems for enterprise-grade reliability.",
      icon: "📞",
    },
  ];

  const industries = [
    "Information Technology & SaaS",
    "Telecommunications",
    "Financial Services",
    "Logistics & Transportation",
    "Manufacturing",
    "Public Sector",
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-primary-500 to-purple-600 mx-auto"></div>
          <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
            Comprehensive solutions to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-purple-500 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mt-16 bg-slate-800/50 p-8 rounded-lg border border-slate-700">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 text-slate-300 hover:text-primary-400 transition-colors"
              >
                <span className="text-purple-400">✓</span>
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
