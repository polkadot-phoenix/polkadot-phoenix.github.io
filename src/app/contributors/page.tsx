'use client';

const contributors = [
  {
    name: "Alex Dimitrijrvic",
    role: "ecosystem growth lead @web3foundation. previously @paritytech",
    social: "@alexdimes7"
  },
  {
    name: "Alex",
    role: "BD/Marketing"
  },
  {
    name: "Chrissy",
    role: "LCOO (interim) & CLO of @paritytech",
    social: "@uschill"
  },
  {
    name: "Crane",
    role: "Polkadot Agent, Daoist in ChaosDAO, Reporter at the Kusamarian, Co-Founder NoSpec Consulting",
    social: "@0xCrane"
  },
  {
    name: "David",
    role: "Director of Ecosystem Development @ Web3 Foundation",
    social: "@davidhawig"
  },
  {
    name: "Evan",
    role: "Polkadot Agent",
    social: "@ET90266"
  },
  {
    name: "Ingo",
    role: "Founder & CEO of @KILTProtocol, former CTO @burda_news and board member @drupal",
    social: "@ingoruebe"
  },
  {
    name: "Jakub",
    role: "Co-founder @hydration_net. Partner @zeeprimecap In blockchain veritas",
    social: "@GregusJakub"
  },
  {
    name: "Luuu",
    role: "@KodaDot Head of Artists Relations. @WomenOfPolkadot. Creator @Polkadot Senior Ambassador",
    social: "@Just_Luuuu"
  },
  {
    name: "Michelle",
    role: "Polkadot Ambassador, Discord Moderator"
  },
  {
    name: "Mr Cole",
    role: "Senior Ambassador @Polkadot. @ChaosDao. Mod Lead @Polkadot and @Kusamanetwork",
    social: "@19283746zq"
  },
  {
    name: "Natalie",
    role: "Web3 Marketing Strategies since 2015 | Physics PhD | Ex-McK | Berlin-based | Angel and Real Estate Investor",
    social: "@natalietillack"
  },
  {
    name: "Jashar",
    role: "Business Development"
  },
  {
    name: "Nick",
    role: "Business Development"
  },
  {
    name: "Nico",
    role: "Business Development"
  },
  {
    name: "Jeeper",
    role: "Polkadot Agent, OpenGovWatch",
    social: "@xcjeeper"
  },
  {
    name: "Strindbergman",
    role: "Polkadot Agent, BD",
    social: "@xcjeeper"
  },
  {
    name: "Thibaut",
    role: "@ChainSafeth building http://multix.chainsafe.io - prev @ParityTech",
    social: "@Tbaut"
  },
  {
    name: "Tycho",
    role: "Z3N | ChaosDAO, Meetup Bounty",
    social: "@Tycho_Masius"
  }
];

// Add hosts section
const hosts = [
  {
    name: "Lucy",
    role: "Spearheading the @Polkadot Ambassador Fellowship",
    social: "@lucycoulden"
  },
  {
    name: "DonDiego",
    role: "Co-founder @ChaosDAO / @kamealabs / @lenexus_org",
    social: "@SanchezCrypto"
  }
];

// Twitter/X icon component
const TwitterIcon = () => (
  <svg 
    className="w-5 h-5 ml-2" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path 
      fill="#FF2670"
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  </svg>
);

export default function Contributors() {
  const handleCardClick = (social: string | undefined) => {
    if (social) {
      window.open(`https://x.com/${social.replace('@', '')}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">
          <span className="text-[#FFFFFF]">Our <span className="text-[#FF2670]">Contributors</span></span>
        </h1>
        <p className="text-xl text-[#FFFFFF]/80 text-center mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed">
          We are grateful to the following individuals who contributed their time and expertise
          to this ecosystem survey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(contributor.social)}
              className={`bg-[#000000] border border-[#FF2670] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group animate-slide-up hover:border-white ${contributor.social ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#000000] border border-[#FF2670] flex items-center justify-center text-[#FF2670] text-xl font-bold transform group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#FF2670] group-hover:text-[#000000] flex-shrink-0">
                    {contributor.name.charAt(0)}
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-[#FFFFFF] group-hover:text-[#FF2670] transition-colors duration-200">
                        {contributor.name}
                      </h3>
                      {contributor.social && (
                        <a 
                          href={`https://x.com/${contributor.social.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 hover:bg-[#FF2670]/10 rounded-full transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <TwitterIcon />
                        </a>
                      )}
                    </div>
                    <p className="text-white/70 text-sm mt-1 group-hover:text-[#FF2670] transition-colors duration-200">{contributor.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-16 mb-8 text-center animate-fade-in">
          <span className="text-[#FFFFFF]">Hosted <span className="text-[#FF2670]">By</span></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hosts.map((host, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(host.social)}
              className={`bg-[#000000] border border-[#FF2670] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group animate-slide-up hover:border-white ${host.social ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#000000] border border-[#FF2670] flex items-center justify-center text-[#FF2670] text-xl font-bold transform group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#FF2670] group-hover:text-[#000000] flex-shrink-0">
                    {host.name.charAt(0)}
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-[#FFFFFF] group-hover:text-[#FF2670] transition-colors duration-200">
                        {host.name}
                      </h3>
                      {host.social && (
                        <a 
                          href={`https://x.com/${host.social.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 hover:bg-[#FF2670]/10 rounded-full transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <TwitterIcon />
                        </a>
                      )}
                    </div>
                    <p className="text-white/70 text-sm mt-1 group-hover:text-[#FF2670] transition-colors duration-200">{host.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 