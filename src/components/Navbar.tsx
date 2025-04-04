'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path 
      ? 'bg-[#FF2670] text-[#000000] font-semibold rounded-full shadow-lg shadow-[#FF2670]/20' 
      : 'text-[#FFFFFF] hover:text-[#FF2670] transition-colors duration-200';
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#000000]/95 backdrop-blur-lg border-b border-[#FF2670]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold text-[#FFFFFF] group-hover:text-[#FF2670] transition-all duration-300">
                PAF Survey
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-10">
            <Link 
              href="/" 
              className={`relative px-4 py-2 text-[15px] font-medium ${isActive('/')} hover:scale-105 transition-all duration-200`}
            >
              Home
            </Link>
            <Link 
              href="/insights" 
              className={`relative px-4 py-2 text-[15px] font-medium ${isActive('/insights')} hover:scale-105 transition-all duration-200`}
            >
              Survey Insights
            </Link>
            <Link 
              href="/interviews" 
              className={`relative px-4 py-2 text-[15px] font-medium ${isActive('/interviews')} hover:scale-105 transition-all duration-200`}
            >
              Interviews
            </Link>
            <Link 
              href="/contributors" 
              className={`relative px-4 py-2 text-[15px] font-medium ${isActive('/contributors')} hover:scale-105 transition-all duration-200`}
            >
              Contributors
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 