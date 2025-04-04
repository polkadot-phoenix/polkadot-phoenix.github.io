import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#FFFFFF]">
                PAF Ecosystem <span className="text-[#FF2670]">Survey</span>
              </span>
            </h1>
            <p className="text-xl text-[#FFFFFF]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive insights from the Polkadot Ambassador Fellowship ecosystem research,
              featuring perspectives from key stakeholders and community members.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/insights"
                className="inline-flex items-center px-8 py-4 border border-[#FF2670] text-base font-medium rounded-full text-[#FFFFFF] bg-[#000000] hover:bg-[#FF2670] hover:text-[#000000] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Insights
              </Link>
              <Link
                href="/interviews"
                className="inline-flex items-center px-8 py-4 border border-[#FF2670] text-base font-medium rounded-full text-[#FFFFFF] bg-[#000000] hover:bg-[#FF2670] hover:text-[#000000] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Interviews
              </Link>
              <Link
                href="/contributors"
                className="inline-flex items-center px-8 py-4 border border-[#FF2670] text-base font-medium rounded-full text-[#FFFFFF] bg-[#000000] hover:bg-[#FF2670] hover:text-[#000000] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Contributors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#000000] border border-[#FF2670] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF2670] flex items-center justify-center text-black">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                Why
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors duration-200">
                The PAF ecosystem survey aims to identify key challenges, opportunities, and areas for improvement within the ecosystem. By gathering insights from various stakeholders, we can better understand the current state and develop targeted solutions for growth.
              </p>
            </div>

            <div className="bg-[#000000] border border-[#FF2670] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF2670] flex items-center justify-center text-black">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                How
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors duration-200">
                Through in-depth interviews and analysis, we've collected comprehensive insights from across the ecosystem. Our methodology focuses on understanding both internal operations and external relationships to provide actionable strong insights and understandings.
              </p>
            </div>

            <div className="bg-[#000000] border border-[#FF2670] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF2670] flex items-center justify-center text-black">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                Who
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors duration-200">
                The survey includes perspectives from key stakeholders including ambassadors, community leaders, business development professionals, technical contributors, etc. This diverse range of voices ensures a comprehensive view of the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
