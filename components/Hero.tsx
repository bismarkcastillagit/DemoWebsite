export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-90"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Empowering Businesses Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-primary-500 to-purple-600 mt-4">
              Secure Cloud, Automation & AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8">
            Accelerate your digital transformation with confidence. We deliver secure cloud infrastructure, 
            DevOps automation, and AI-driven solutions that enhance productivity and strengthen security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/50"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-purple-400 hover:border-purple-300 text-purple-300 hover:text-purple-200 font-semibold rounded-lg transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
