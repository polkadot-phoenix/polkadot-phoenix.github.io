'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const mockInsights = {
  insideEcosystem: [
    {
      id: 'governance-1',
      title: 'Ecosystem Coordination',
      category: 'Governance & Structure',
      tags: ['coordination', 'communication', 'governance', 'treasury', 'opengov', 'stakeholders'],
      description: 'Fragmented coordination across ecosystem entities leading to inefficiencies and missed opportunities',
      findings: [
        'Multiple overlapping initiatives without clear differentiation',
        'Lack of centralized information sharing and communication channels',
        'Difficulty tracking and mapping active ecosystem participants',
        'Inconsistent messaging across different ecosystem entities',
        'Challenges with OpenGov processes and treasury management'
      ],
      quotes: [
        "The ecosystem lacks coordination and awareness of various initiatives",
        "Multiple overlapping initiatives without clear differentiation",
        "Difficulty in tracking and mapping active ecosystem participants globally",
        "Need for better alignment between OpenGov processes and ecosystem needs",
        "Treasury management requires better transparency and accountability"
      ]
    },
    {
      id: 'governance-2',
      title: 'Treasury & Funding',
      category: 'Governance & Structure',
      tags: ['funding', 'treasury', 'opengov', 'sustainability', 'finance', 'administration'],
      description: 'Challenges with sustainable funding models and treasury management across the ecosystem',
      findings: [
        'Short-term funding cycles through OpenGov creating instability',
        'Need for sustainable funding models for long-term initiatives',
        'High costs for legal and administrative requirements',
        'Challenges with payment delays and treasury management',
        'Lack of clear metrics for funding allocation'
      ],
      quotes: [
        "Challenges with short-term funding cycles through OpenGov",
        "Need for more sustainable funding models for long-term initiatives",
        "Payment delays due to complex administrative processes",
        "Need clear milestones for funding allocation",
        "Treasury management needs better structure"
      ]
    },
    {
      id: 'governance-3',
      title: 'Legal & Compliance',
      category: 'Governance & Structure',
      tags: ['legal', 'compliance', 'regulation', 'jurisdiction', 'risk', 'governance'],
      description: 'Growing importance of legal expertise and compliance frameworks in the ecosystem',
      findings: [
        'Need for balanced approach to legal compliance',
        'Challenges providing guidance due to liability concerns',
        'High costs for legal representation and services',
        'Need for jurisdiction-specific expertise',
        'Lack of standardized legal frameworks'
      ],
      quotes: [
        "Need for balanced approach to legal compliance",
        "Legal guidance limited by liability concerns",
        "High costs for legal representation",
        "Need expertise across different jurisdictions",
        "Legal frameworks need standardization"
      ]
    },
    {
      id: 'community-1',
      title: 'Community Structure',
      category: 'Community & Coordination',
      tags: ['community', 'onboarding', 'support', 'engagement', 'communication', 'coordination'],
      description: 'Need for better structured community engagement and support systems',
      findings: [
        'Overwhelming onboarding experience for new members',
        'High-quality agents spread too thin across initiatives',
        'Inconsistent support and guidance for new participants',
        'Lack of clear pathways for community member progression',
        'Fragmented communication channels and information sharing'
      ],
      quotes: [
        "Overwhelming onboarding experience, if you don't know people you're lost",
        "High quality folks spread too thin",
        "Difficulty for new agents to enter and navigate the ecosystem",
        "Need for better structured support and guidance",
        "Community coordination needs more organization"
      ]
    },
    {
      id: 'community-2',
      title: 'Ambassador Program',
      category: 'Community & Coordination',
      tags: ['ambassador', 'community', 'training', 'recognition', 'support', 'engagement'],
      description: 'Opportunities and challenges in developing effective ambassador programs',
      findings: [
        'Need for clear role definitions and responsibilities',
        'Challenges with ambassador retention and motivation',
        'Lack of structured training and development programs',
        'Inconsistent support and resources for ambassadors',
        'Need for better recognition and reward systems'
      ],
      quotes: [
        "Need clear definition of ambassador roles",
        "Ambassador retention requires better support",
        "Training programs need structure",
        "Support systems need improvement",
        "Recognition systems need development"
      ]
    },
    {
      id: 'technical-1',
      title: 'Technical Infrastructure',
      category: 'Technical Infrastructure',
      tags: ['technical', 'infrastructure', 'tools', 'development', 'documentation', 'support'],
      description: 'Gaps in technical infrastructure and tooling affecting ecosystem efficiency',
      findings: [
        'Need for ecosystem-wide CRM and knowledge management tools',
        'Lack of standardized technical documentation and resources',
        'Challenges with cross-chain interoperability and integration',
        'Insufficient technical support and developer resources',
        'Need for better tooling for non-technical community members'
      ],
      quotes: [
        "Need for better technical infrastructure and tooling",
        "Technical documentation needs to be more comprehensive",
        "Cross-chain integration requires better tools and standards",
        "Technical support needs to be more accessible",
        "Need better tools for non-technical community members"
      ]
    }
  ],
  outsideEcosystem: [
    {
      id: 'bd-1',
      title: 'Business Development',
      category: 'Business Development',
      tags: ['business', 'sales', 'partnerships', 'marketing', 'strategy', 'growth'],
      description: 'Challenges in external business development and market positioning',
      findings: [
        'Inconsistent lead management and follow-up processes',
        'Challenges with enterprise sales and partnerships',
        'Need for better market positioning and branding',
        'Difficulty in coordinating external BD efforts',
        'Lack of standardized processes for external engagement'
      ],
      quotes: [
        "Need better coordination in enterprise sales",
        "Market positioning needs to be more consistent",
        "Lead generation requires better structure",
        "External BD efforts need better coordination",
        "Need standardized processes for external engagement"
      ]
    },
    {
      id: 'bd-2',
      title: 'Enterprise Engagement',
      category: 'Business Development',
      tags: ['enterprise', 'business', 'onboarding', 'support', 'documentation', 'partnerships'],
      description: 'Strategies and challenges in engaging enterprise clients and partners',
      findings: [
        'Need for enterprise-focused sales teams',
        'Challenges with enterprise client onboarding',
        'Complex decision-making processes in enterprise deals',
        'Need for better enterprise support systems',
        'Lack of enterprise-ready documentation'
      ],
      quotes: [
        "Enterprise sales needs dedicated teams",
        "Enterprise onboarding needs improvement",
        "Decision-making processes too complex",
        "Enterprise support needs enhancement",
        "Documentation needs enterprise focus"
      ]
    },
    {
      id: 'market-1',
      title: 'Market Development',
      category: 'Market Development',
      tags: ['market', 'research', 'competition', 'partnerships', 'education', 'growth'],
      description: 'Opportunities and challenges in market development and ecosystem growth',
      findings: [
        'Need for comprehensive market research and analysis',
        'Challenges with competitor ecosystem positioning',
        'Opportunities for industry partnerships and collaborations',
        'Need for better market education and awareness',
        'Challenges with ecosystem expansion and adoption'
      ],
      quotes: [
        "Market research needs to be more comprehensive",
        "Need better understanding of competitor ecosystems",
        "Industry partnerships require better coordination",
        "Market education needs to be more effective",
        "Ecosystem expansion requires better strategy"
      ]
    },
    {
      id: 'growth-1',
      title: 'Growth & Adoption',
      category: 'Growth & Adoption',
      tags: ['growth', 'adoption', 'user-experience', 'onboarding', 'strategy', 'development'],
      description: 'Strategies for ecosystem growth and wider adoption',
      findings: [
        'Need for better user acquisition strategies',
        'Challenges with developer onboarding',
        'Barriers to ecosystem adoption',
        'Need for improved user experience',
        'Lack of clear value propositions'
      ],
      quotes: [
        "User acquisition needs better strategy",
        "Developer onboarding too complex",
        "Adoption barriers need reduction",
        "User experience needs improvement",
        "Value propositions need clarity"
      ]
    }
  ],
  crossCutting: [
    {
      id: 'tools-1',
      title: 'Tools & Platforms',
      category: 'Tools & Platforms',
      tags: ['tools', 'infrastructure', 'communication', 'integration', 'analytics', 'development'],
      description: 'Need for better integrated tools and platforms across the ecosystem',
      findings: [
        'Fragmented tooling landscape across ecosystem',
        'Need for unified knowledge management systems',
        'Challenges with communication platform standardization',
        'Insufficient integration between different tools',
        'Need for better analytics and reporting capabilities'
      ],
      quotes: [
        "Need better integration between different tools",
        "Knowledge management needs to be more centralized",
        "Communication platforms need standardization",
        "Tool integration needs improvement",
        "Need better analytics and reporting capabilities"
      ]
    },
    {
      id: 'standards-1',
      title: 'Standards & Best Practices',
      category: 'Standards & Best Practices',
      tags: ['standards', 'quality', 'documentation', 'processes', 'metrics', 'governance'],
      description: 'Need for standardized processes and best practices across the ecosystem',
      findings: [
        'Lack of standardized processes across initiatives',
        'Inconsistent implementation of best practices',
        'Need for better quality control mechanisms',
        'Challenges with documentation standards',
        'Need for better performance metrics'
      ],
      quotes: [
        "Need standardized processes across initiatives",
        "Best practices need to be better documented",
        "Quality control needs improvement",
        "Documentation standards need to be established",
        "Need better performance metrics"
      ]
    },
    {
      id: 'talent-1',
      title: 'Talent & Expertise',
      category: 'Talent & Expertise',
      tags: ['talent', 'training', 'development', 'skills', 'career', 'recognition'],
      description: 'Developing and retaining talent across the ecosystem',
      findings: [
        'Challenges with talent retention and development',
        'Need for better expertise identification and validation',
        'Lack of structured training programs',
        'Difficulty matching skills with opportunities',
        'Need for better career progression paths'
      ],
      quotes: [
        "Talent retention needs improvement",
        "Expertise validation needs structure",
        "Training programs need development",
        "Skill matching needs better systems",
        "Career paths need clarity"
      ]
    },
    {
      id: 'resource-1',
      title: 'Resource Management',
      category: 'Resource Management',
      tags: ['resources', 'allocation', 'planning', 'optimization', 'tracking', 'efficiency'],
      description: 'Optimizing resource allocation and utilization across the ecosystem',
      findings: [
        'Inefficient resource allocation processes',
        'Lack of resource tracking and monitoring',
        'Need for better resource sharing mechanisms',
        'Challenges with resource optimization',
        'Insufficient resource planning'
      ],
      quotes: [
        "Resource allocation needs efficiency",
        "Resource tracking needs improvement",
        "Resource sharing needs better systems",
        "Resource optimization needs focus",
        "Resource planning needs structure"
      ]
    }
  ]
};

const categories = {
  insideEcosystem: [
    'Governance & Structure',
    'Community & Coordination',
    'Technical Infrastructure'
  ],
  outsideEcosystem: [
    'Business Development',
    'Market Development',
    'Growth & Adoption'
  ],
  crossCutting: [
    'Tools & Platforms',
    'Standards & Best Practices',
    'Talent & Expertise',
    'Resource Management'
  ]
};

const InsightCard = ({ insight, onClick, isRelated, isHovered, onHover }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`bg-white/5 p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
      isHovered 
        ? 'border-[#FF2670] brightness-100' 
        : isRelated 
          ? 'border-white/10 brightness-100' 
          : isHovered === false 
            ? 'border-white/10 brightness-50' 
            : 'border-white/10'
    }`}
    onClick={onClick}
    onMouseEnter={() => onHover(insight)}
    onMouseLeave={() => onHover(null)}
  >
    <div className="mb-4">
      <span className="text-[#FF2670] text-sm font-medium">{insight.category}</span>
      <h3 className="text-xl font-bold text-white mt-2">{insight.title}</h3>
    </div>
    <p className="text-gray-400 mb-4">{insight.description}</p>
    <div className="flex flex-wrap gap-2">
      {insight.tags.map((tag, index) => (
        <span 
          key={index} 
          className={`text-xs px-2 py-1 rounded-full border transition-all duration-300 ${
            isHovered || isRelated
              ? 'bg-[#FF2670]/20 text-[#FF2670] border-[#FF2670]/20'
              : 'bg-white/5 text-gray-400 border-white/10'
          }`}
        >
          #{tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const HoverCard = ({ children, content }) => (
  <div className="group relative">
    {children}
    <div className="fixed ml-4 top-auto w-72 bg-[#1A1A1A] border border-[#333333] rounded-xl p-5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] translate-x-full -translate-y-1/2 backdrop-blur-sm">
      <div className="relative">
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1A1A1A] border-l border-t border-[#333333] transform rotate-45"></div>
        <div className="space-y-3">
          <div className="text-sm text-white/90 leading-relaxed">{content}</div>
          <div className="pt-2 border-t border-[#333333]">
            <div className="text-xs text-[#FF2670]">Click to view details</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InsightModal = ({ insight, onClose, allInsights, setSelectedInsight }) => {
  const [relatedInsights, setRelatedInsights] = useState([]);

  useEffect(() => {
    // Find related insights based on shared tags
    const related = allInsights
      .filter(otherInsight => 
        otherInsight.id !== insight.id && // Exclude current insight
        otherInsight.tags.some(tag => insight.tags.includes(tag)) // Share at least one tag
      )
      .slice(0, 3); // Limit to 3 related insights

    setRelatedInsights(related);
  }, [insight, allInsights]);

  const getRelationDescription = () => {
    // Special relationship descriptions for Treasury & Funding
    if (insight.id === 'governance-2' && 
        (relatedInsight.title === 'Resource Management' || relatedInsight.title === 'Legal & Compliance')) {
      if (relatedInsight.title === 'Resource Management') {
        return 'Treasury & Funding is directly connected to Resource Management through shared responsibilities in allocation, planning, and financial sustainability. Both areas focus on optimizing ecosystem resources and ensuring effective distribution of funds.';
      }
      if (relatedInsight.title === 'Legal & Compliance') {
        return 'Treasury & Funding operations are closely tied to Legal & Compliance requirements, particularly in areas of regulatory compliance, risk management, and legal frameworks for fund distribution.';
      }
    }

    // Special relationship descriptions for Resource Management
    if (insight.id === 'resource-1') {
      if (relatedInsight.id === 'governance-2') {
        return 'Resource Management is intrinsically linked to Treasury & Funding through shared focus on allocation efficiency, resource tracking, and sustainable funding models.';
      }
      if (relatedInsight.id === 'governance-3') {
        return 'Resource Management intersects with Legal & Compliance through regulatory requirements, risk management, and compliance frameworks that affect resource allocation and utilization.';
      }
      if (relatedInsight.id === 'tools-1') {
        return 'Resource Management heavily relies on Tools & Platforms for tracking, optimization, and efficient allocation of resources across the ecosystem.';
      }
      if (relatedInsight.id === 'standards-1') {
        return 'Resource Management benefits from Standards & Best Practices in establishing consistent processes for resource allocation, tracking, and optimization.';
      }
      if (relatedInsight.id === 'talent-1') {
        return 'Resource Management is closely tied to Talent & Expertise through the need for skilled personnel to effectively allocate and optimize resources.';
      }
      if (relatedInsight.id === 'technical-1') {
        return 'Resource Management depends on Technical Infrastructure for implementing efficient resource tracking, allocation, and optimization systems.';
      }
    }

    // Special relationship descriptions for Legal & Compliance
    if (insight.id === 'governance-3') {
      if (relatedInsight.id === 'governance-2') {
        return 'Legal & Compliance frameworks directly impact Treasury & Funding operations through regulatory requirements, compliance standards, and risk management protocols.';
      }
      if (relatedInsight.id === 'resource-1') {
        return 'Legal & Compliance requirements influence Resource Management practices through regulatory frameworks that affect resource allocation and utilization.';
      }
    }

    // Special relationship descriptions for Tools & Platforms
    if (insight.id === 'tools-1') {
      if (relatedInsight.id === 'resource-1') {
        return 'Tools & Platforms are essential for Resource Management, providing systems for tracking, optimization, and efficient allocation of resources.';
      }
      if (relatedInsight.id === 'technical-1') {
        return 'Tools & Platforms are built on Technical Infrastructure, enabling efficient resource management and ecosystem operations.';
      }
    }

    // Special relationship descriptions for Standards & Best Practices
    if (insight.id === 'standards-1') {
      if (relatedInsight.id === 'resource-1') {
        return 'Standards & Best Practices guide Resource Management by establishing consistent processes for resource allocation and optimization.';
      }
      if (relatedInsight.id === 'tools-1') {
        return 'Standards & Best Practices ensure consistent implementation and usage of Tools & Platforms across the ecosystem.';
      }
    }

    // Special relationship descriptions for Talent & Expertise
    if (insight.id === 'talent-1') {
      if (relatedInsight.id === 'resource-1') {
        return 'Talent & Expertise are crucial for effective Resource Management, as skilled personnel are needed to optimize resource allocation and utilization.';
      }
    }

    // Special relationship descriptions for Technical Infrastructure
    if (insight.id === 'technical-1') {
      if (relatedInsight.id === 'resource-1') {
        return 'Technical Infrastructure supports Resource Management by providing the foundation for efficient resource tracking and allocation systems.';
      }
      if (relatedInsight.id === 'tools-1') {
        return 'Technical Infrastructure enables Tools & Platforms by providing the necessary foundation for ecosystem-wide resource management tools.';
      }
    }

    // Default relationship description
    const categoryRelation = insight.category === relatedInsight.category 
      ? `Both insights are in the ${insight.category} category.`
      : `Cross-category relation between ${insight.category} and ${relatedInsight.category}.`;
    
    const sharedTags = insight.tags.filter(tag => relatedInsight.tags.includes(tag));
    const tagRelation = sharedTags.length > 1
      ? `They share ${sharedTags.length} key topics including ${sharedTags.slice(0, 2).join(', ')}.`
      : `They share the topic of ${sharedTags[0]}.`;

    return `${categoryRelation} ${tagRelation}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#111111] rounded-2xl p-8 max-w-7xl w-full max-h-[90vh] overflow-hidden flex gap-6">
        {/* Related Insights Sidebar */}
        {relatedInsights.length > 0 && (
          <div className="w-80 flex-shrink-0 border-r border-white/10 pr-6 overflow-y-auto scrollbar-hide relative">
            <style jsx global>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            <h3 className="text-xl font-semibold text-white mb-4 sticky top-0 bg-[#111111] py-2">Related Insights</h3>
            <div className="space-y-4">
              {relatedInsights.map(relatedInsight => {
                // Find shared tags between current and related insight
                const sharedTags = insight.tags.filter(tag => relatedInsight.tags.includes(tag));
                
                // Generate relation description based on shared tags and categories
                const getRelationDescription = () => {
                  const categoryRelation = insight.category === relatedInsight.category 
                    ? `Both insights are in the ${insight.category} category.`
                    : `Cross-category relation between ${insight.category} and ${relatedInsight.category}.`;
                  
                  const tagRelation = sharedTags.length > 1
                    ? `They share ${sharedTags.length} key topics including ${sharedTags.slice(0, 2).join(', ')}.`
                    : `They share the topic of ${sharedTags[0]}.`;

                  return `${categoryRelation} ${tagRelation}`;
                };

                return (
                  <HoverCard key={relatedInsight.id} content={getRelationDescription()}>
                    <div
                      className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333333] hover:border-[#FF2670] cursor-pointer transition-all duration-300"
                      onClick={() => setSelectedInsight(relatedInsight)}
                    >
                      <div className="text-[#FF2670] text-sm mb-2">{relatedInsight.category}</div>
                      <h4 className="text-white font-medium mb-2">{relatedInsight.title}</h4>
                      <div className="flex flex-wrap gap-1">
                        {sharedTags.map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs bg-[#FF2670]/20 text-[#FF2670] px-2 py-0.5 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </HoverCard>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-2 text-[#FF2670]">{insight.category}</div>
          <h2 className="text-3xl font-bold text-white mb-4">{insight.title}</h2>
          <p className="text-white/80 mb-6">{insight.description}</p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insight.findings.map((finding, index) => (
                <div 
                  key={index}
                  className="bg-[#1A1A1A] rounded-xl p-4 border border-[#333333] hover:border-[#FF2670] transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF2670] flex items-center justify-center text-sm text-black font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-white/90">{finding}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Interview Quotes</h3>
            <div className="space-y-3">
              {insight.quotes.map((quote, index) => (
                <div 
                  key={index} 
                  className="bg-[#1A1A1A] p-4 rounded-xl italic text-white/70"
                >
                  "{quote}"
                </div>
              ))}
            </div>
          </div>

          {insight.tags && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Related Tags</h3>
              <div className="flex flex-wrap gap-2">
                {insight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#1A1A1A] text-[#FF2670] rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const convertInsightsToCSV = (insights) => {
  const headers = ['ID', 'Title', 'Category', 'Tags', 'Description', 'Findings', 'Quotes'];
  const rows = insights.map(insight => [
    insight.id,
    insight.title,
    insight.category,
    insight.tags.join(', '),
    insight.description,
    insight.findings.join('\n'),
    insight.quotes.join('\n')
  ]);
  
  return [headers, ...rows]
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n');
};

const convertInsightsToMarkdown = (insights) => {
  return insights.map(insight => `
# ${insight.title}
Category: ${insight.category}
ID: ${insight.id}

## Description
${insight.description}

## Tags
${insight.tags.map(tag => `- ${tag}`).join('\n')}

## Key Findings
${insight.findings.map(finding => `- ${finding}`).join('\n')}

## Notable Quotes
${insight.quotes.map(quote => `> "${quote}"`).join('\n\n')}
`).join('\n\n---\n\n');
};

const downloadFile = (content, filename) => {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default function InsightsPage() {
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [selectedSection, setSelectedSection] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [hoveredInsight, setHoveredInsight] = useState(null);

  // Get all unique tags from all insights
  const allTags = [...new Set([
    ...mockInsights.insideEcosystem.map(insight => insight.tags),
    ...mockInsights.outsideEcosystem.map(insight => insight.tags),
    ...mockInsights.crossCutting.map(insight => insight.tags)
  ].flat())].sort();

  const filteredInsights = [...mockInsights.insideEcosystem, ...mockInsights.outsideEcosystem, ...mockInsights.crossCutting]
    .filter(insight => {
      // Section filter
      if (selectedSection !== 'all' && !mockInsights[selectedSection].includes(insight)) {
        return false;
      }

      // Tag filter - show insights that have ANY of the selected tags (OR logic)
      if (selectedTags.length > 0) {
        return selectedTags.some(tag => insight.tags.includes(tag));
      }

      // Text search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        return (
          insight.title.toLowerCase().includes(searchLower) ||
          insight.description.toLowerCase().includes(searchLower) ||
          insight.category.toLowerCase().includes(searchLower) ||
          insight.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      }

      return true;
    });

  const toggleTag = (tag) => {
    setSelectedTags(prev => {
      const newTags = prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag];
      return newTags;
    });
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('.tag-dropdown-container')) {
      setShowTagDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Get all insights for the modal
  const allInsights = [
    ...mockInsights.insideEcosystem,
    ...mockInsights.outsideEcosystem,
    ...mockInsights.crossCutting
  ];

  const getRelatedInsights = (insight) => {
    if (!insight) return new Set();
    
    // Special handling for Treasury & Funding relationships
    if (insight.id === 'governance-2') {
      return new Set(
        filteredInsights
          .filter(other => 
            other.id !== insight.id && 
            (other.tags.some(tag => insight.tags.includes(tag)) ||
             other.title === 'Resource Management' ||
             other.title === 'Legal & Compliance')
          )
          .map(insight => insight.id)
      );
    }
    
    // Special handling for Resource Management relationships
    if (insight.id === 'resource-1') {
      return new Set(
        filteredInsights
          .filter(other => 
            other.id !== insight.id && 
            (other.tags.some(tag => insight.tags.includes(tag)) ||
             other.id === 'governance-2' || // Treasury & Funding
             other.id === 'governance-3' || // Legal & Compliance
             other.id === 'tools-1' || // Tools & Platforms
             other.id === 'standards-1' || // Standards & Best Practices
             other.id === 'talent-1' || // Talent & Expertise
             other.id === 'technical-1') // Technical Infrastructure
          )
          .map(insight => insight.id)
      );
    }
    
    // Special handling for Legal & Compliance
    if (insight.id === 'governance-3') {
      return new Set(
        filteredInsights
          .filter(other => 
            other.id !== insight.id && 
            (other.tags.some(tag => insight.tags.includes(tag)) ||
             other.id === 'governance-2' || // Treasury & Funding
             other.id === 'resource-1') // Resource Management
          )
          .map(insight => insight.id)
      );
    }
    
    // Special handling for Tools & Platforms
    if (insight.id === 'tools-1') {
      return new Set(
        filteredInsights
          .filter(other => 
            other.id !== insight.id && 
            (other.tags.some(tag => insight.tags.includes(tag)) ||
             other.id === 'resource-1' || // Resource Management
             other.id === 'technical-1') // Technical Infrastructure
          )
          .map(insight => insight.id)
      );
    }
    
    // Special handling for Standards & Best Practices
    if (insight.id === 'standards-1') {
      return new Set(
        filteredInsights
          .filter(other => 
            other.id !== insight.id && 
            (other.tags.some(tag => insight.tags.includes(tag)) ||
             other.id === 'resource-1' || // Resource Management
             other.id === 'tools-1') // Tools & Platforms
          )
          .map(insight => insight.id)
      );
    }
    
    // Special handling for Talent & Expertise
    if (insight.id === 'talent-1') {
      return new Set(
        filteredInsights
          .filter(other => 
            other.id !== insight.id && 
            (other.tags.some(tag => insight.tags.includes(tag)) ||
             other.id === 'resource-1') // Resource Management
          )
          .map(insight => insight.id)
      );
    }
    
    // Special handling for Technical Infrastructure
    if (insight.id === 'technical-1') {
      return new Set(
        filteredInsights
          .filter(other => 
            other.id !== insight.id && 
            (other.tags.some(tag => insight.tags.includes(tag)) ||
             other.id === 'resource-1' || // Resource Management
             other.id === 'tools-1') // Tools & Platforms
          )
          .map(insight => insight.id)
      );
    }
    
    // Default relationship handling
    return new Set(
      filteredInsights
        .filter(other => 
          other.id !== insight.id && 
          other.tags.some(tag => insight.tags.includes(tag))
        )
        .map(insight => insight.id)
    );
  };

  const relatedInsightIds = hoveredInsight ? getRelatedInsights(hoveredInsight) : new Set();

  const handleDownload = (format) => {
    const timestamp = new Date().toISOString().split('T')[0];
    
    // Use the same filtered insights as shown on the page
    const insightsToDownload = filteredInsights;

    if (format === 'csv') {
      const csvContent = convertInsightsToCSV(insightsToDownload);
      downloadFile(csvContent, `paf-insights-${timestamp}.csv`);
    } else {
      const mdContent = convertInsightsToMarkdown(insightsToDownload);
      downloadFile(mdContent, `paf-insights-${timestamp}.md`);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Insights</h1>
            <p className="text-gray-400 max-w-2xl">
              Analysis of key ecosystem challenges and opportunities across three dimensions: internal ecosystem operations, external ecosystem relationships, and cross-cutting concerns.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleDownload('md')}
              className="px-4 py-2 border border-[#FF2670] rounded-lg text-[#FF2670] hover:bg-[#FF2670] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download MD
            </button>
            <button
              onClick={() => handleDownload('csv')}
              className="px-4 py-2 border border-[#FF2670] rounded-lg text-[#FF2670] hover:bg-[#FF2670] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CSV
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setSelectedSection('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedSection === 'all'
                ? 'bg-[#FF2670] text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            All Insights
          </button>
          <button
            onClick={() => setSelectedSection('insideEcosystem')}
            className={`px-4 py-2 rounded-lg ${
              selectedSection === 'insideEcosystem'
                ? 'bg-[#FF2670] text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Inside Ecosystem
          </button>
          <button
            onClick={() => setSelectedSection('outsideEcosystem')}
            className={`px-4 py-2 rounded-lg ${
              selectedSection === 'outsideEcosystem'
                ? 'bg-[#FF2670] text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Outside Ecosystem
          </button>
          <button
            onClick={() => setSelectedSection('crossCutting')}
            className={`px-4 py-2 rounded-lg ${
              selectedSection === 'crossCutting'
                ? 'bg-[#FF2670] text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Cross-Cutting
          </button>
        </div>

        {/* Search and Tag Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF2670]"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTagDropdown(!showTagDropdown);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Selected Tags Display */}
          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedTags.map(tag => (
                <span
                  key={tag}
                  className="bg-[#FF2670] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  #{tag}
                  <button
                    onClick={() => toggleTag(tag)}
                    className="hover:text-white/80"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Tag Dropdown */}
          {showTagDropdown && (
            <div className="tag-dropdown-container bg-black border border-white/10 rounded-lg p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`text-left px-3 py-1 rounded-full text-sm ${
                      selectedTags.includes(tag)
                        ? 'bg-[#FF2670] text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-gray-400 mb-4">
          Showing {filteredInsights.length} insights
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((insight) => (
            <InsightCard
              key={insight.id}
              insight={insight}
              onClick={() => setSelectedInsight(insight)}
              isRelated={hoveredInsight && relatedInsightIds.has(insight.id)}
              isHovered={hoveredInsight?.id === insight.id}
              onHover={setHoveredInsight}
            />
          ))}
        </div>

        {selectedInsight && (
          <InsightModal
            insight={selectedInsight}
            onClose={() => setSelectedInsight(null)}
            allInsights={allInsights}
            setSelectedInsight={setSelectedInsight}
          />
        )}
      </div>
    </div>
  );
} 