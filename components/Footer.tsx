export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-primary-500 to-purple-600 mb-4">
              Elevate Cyber Solutions
            </h3>
            <p className="text-slate-400">
              Empowering businesses through secure cloud, automation, and AI solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:sales@ecsvault.com"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  sales@ecsvault.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.ecsvault.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  www.ecsvault.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/bismarkcastilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Elevate Cyber Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
