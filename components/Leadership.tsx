export default function Leadership() {
  const certifications = [
    "Bachelor's Degree in Computer Science Engineering",
    "Microsoft Certified: Azure Solutions Architect Expert",
    "Microsoft Certified: Azure DevOps Engineer Expert",
    "Microsoft Certified: Azure Security Engineer Associate",
    "Microsoft Certified: Azure Administrator Associate",
    "Certified Ethical Hacker (CEH)",
    "ITIL® 4 Foundation",
    "Oracle Cloud Infrastructure Foundations Associate",
    "LFS169: Introduction to GitOps",
  ];

  const highlights = [
    "Deep experience designing, deploying, and managing cloud solutions on Azure, AWS, and GCP",
    "Proven ability to integrate DevOps automation, infrastructure-as-code, and CI/CD pipelines",
    "Expertise in cybersecurity, compliance, and ethical hacking to safeguard enterprise workloads",
    "Skilled in AI automation using tools such as n8n, intelligent agents, and workflow orchestration",
    "Known for fostering collaboration between business and technology teams",
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-primary-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Leader Info */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-2">Bismark Castilla</h3>
            <p className="text-xl text-primary-400 mb-6">Founder & Principal Cloud Architect</p>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              A dedicated and versatile Cloud Solutions Expert, Bismark brings over 15 years of
              experience in IT, spanning infrastructure, DevOps, and cybersecurity. His extensive
              certifications and practical leadership in multi-cloud environments enable clients to
              modernize their operations securely and efficiently.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Professional Highlights:</h4>
              <ul className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-accent-400 mt-1">•</span>
                    <span className="text-slate-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <h4 className="text-2xl font-bold text-white mb-6">Certifications & Credentials</h4>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3 bg-slate-700/50 rounded hover:bg-slate-700 transition-colors"
                >
                  <span className="text-primary-400 mt-1">✓</span>
                  <span className="text-slate-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
