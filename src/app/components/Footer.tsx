const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-[#333333] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-white font-bold text-lg">PAF</span>
              <span className="text-[#FF2670] font-bold text-lg ml-2">Ecosystem Survey</span>
            </div>
            <p className="text-white/60 text-sm mt-2">
              © {new Date().getFullYear()} Polkadot Ambassador Fellowship. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a 
              href="https://github.com/w3f/paf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FF2670] transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://polkadot.network/ecosystem/ambassadors/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FF2670] transition-colors duration-200"
            >
              PAF Program
            </a>
            <a 
              href="https://polkadot.network/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FF2670] transition-colors duration-200"
            >
              Polkadot
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 