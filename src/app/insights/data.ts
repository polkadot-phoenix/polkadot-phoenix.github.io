export interface InsightNode {
  id: number;
  title: string;
  value: number;
  description: string;
  quotes: string[];
  recommendations: string[];
  impact: 'High' | 'Medium' | 'Low';
}

export interface Orbit {
  name: string;
  radius: number;
  description: string;
  nodes: InsightNode[];
}

export interface InsightData {
  center: {
    title: string;
    description: string;
  };
  orbits: Orbit[];
}

export const insightData: InsightData = {
  center: {
    title: "Ecosystem Insights",
    description: "Survey Analysis 2024: A comprehensive view of the Polkadot ecosystem based on stakeholder interviews",
  },
  orbits: [
    {
      name: "Ecosystem Health",
      radius: 4,
      description: "Key metrics and indicators of ecosystem growth and sustainability",
      nodes: [
        {
          id: 1,
          title: "Growth Metrics",
          value: 85,
          description: "Analysis of ecosystem expansion and adoption trends",
          quotes: [
            "The ecosystem has shown remarkable growth in developer activity",
            "Community engagement metrics are consistently improving",
            "New project onboarding has increased by 40% year-over-year"
          ],
          recommendations: [
            "Implement structured onboarding programs",
            "Enhance documentation accessibility",
            "Increase support for new projects"
          ],
          impact: "High"
        },
        {
          id: 2,
          title: "Resource Distribution",
          value: 75,
          description: "Evaluation of resource allocation and funding effectiveness",
          quotes: [
            "Grant programs have been instrumental in attracting talent",
            "Need for more targeted funding in infrastructure development",
            "Better coordination needed in resource allocation"
          ],
          recommendations: [
            "Develop transparent funding criteria",
            "Create specialized grant tracks",
            "Implement impact measurement frameworks"
          ],
          impact: "High"
        },
        {
          id: 3,
          title: "Infrastructure",
          value: 90,
          description: "Assessment of technical infrastructure and tooling",
          quotes: [
            "Developer tools have significantly improved",
            "Need for more standardized testing frameworks",
            "Infrastructure reliability has been exceptional"
          ],
          recommendations: [
            "Invest in developer tooling",
            "Standardize testing procedures",
            "Enhance monitoring systems"
          ],
          impact: "High"
        }
      ]
    },
    {
      name: "Community",
      radius: 6,
      description: "Analysis of community engagement and collaboration",
      nodes: [
        {
          id: 4,
          title: "Demographics",
          value: 65,
          description: "Understanding of community composition and needs",
          quotes: [
            "Diverse global representation in the community",
            "Growing interest from enterprise developers",
            "Need for more educational resources"
          ],
          recommendations: [
            "Create targeted outreach programs",
            "Develop multilingual resources",
            "Implement mentorship programs"
          ],
          impact: "Medium"
        },
        {
          id: 5,
          title: "Collaboration",
          value: 80,
          description: "Assessment of cross-team cooperation and knowledge sharing",
          quotes: [
            "Strong culture of collaboration between teams",
            "Regular knowledge sharing sessions are valuable",
            "Need for more structured communication channels"
          ],
          recommendations: [
            "Establish regular cross-team meetings",
            "Create shared knowledge repositories",
            "Implement collaboration tools"
          ],
          impact: "High"
        },
        {
          id: 6,
          title: "Support",
          value: 70,
          description: "Evaluation of community support structures",
          quotes: [
            "Quick response times in support channels",
            "Need for more specialized technical support",
            "Community-driven support initiatives are effective"
          ],
          recommendations: [
            "Expand technical support team",
            "Create specialized support channels",
            "Develop self-help resources"
          ],
          impact: "Medium"
        }
      ]
    },
    {
      name: "Development",
      radius: 8,
      description: "Overview of technical development and innovation",
      nodes: [
        {
          id: 7,
          title: "Technical Focus",
          value: 95,
          description: "Analysis of development priorities and trends",
          quotes: [
            "Strong focus on scalability solutions",
            "Innovation in cross-chain communication",
            "Emphasis on security improvements"
          ],
          recommendations: [
            "Maintain focus on core infrastructure",
            "Invest in research and development",
            "Prioritize security audits"
          ],
          impact: "High"
        },
        {
          id: 8,
          title: "Challenges",
          value: 85,
          description: "Identification of technical obstacles and solutions",
          quotes: [
            "Complexity in cross-chain development",
            "Need for better debugging tools",
            "Challenges in optimizing performance"
          ],
          recommendations: [
            "Develop better development tools",
            "Create comprehensive guides",
            "Establish best practices"
          ],
          impact: "High"
        },
        {
          id: 9,
          title: "Tools",
          value: 75,
          description: "Assessment of development tools and frameworks",
          quotes: [
            "Good variety of development frameworks",
            "Need for more testing tools",
            "Documentation could be improved"
          ],
          recommendations: [
            "Expand tool documentation",
            "Create more tutorials",
            "Improve testing frameworks"
          ],
          impact: "Medium"
        }
      ]
    }
  ]
}; 