export interface Interview {
  id: string;
  role: string;
  content: string;
  tags: string[];
}

export const interviews: Interview[] = [
  {
    id: 'interview-1',
    role: 'Interview 1',
    tags: ['business', 'sales', 'strategy', 'tools', 'management', 'coordination', 'resources', 'communication', 'research', 'processes', 'tracking', 'optimization', 'administration', 'enterprise', 'partnerships'],
    content: `// BD Strategy & Structure
Key Insights:

1. Potential Role of Ranks in BD
- Ranks could be utilized to help agents structure and execute effective business development (BD) campaigns.

2. Challenges in BD Funding
- Current BD funding mechanisms are ineffective and require restructuring to enhance impact.

3. Guidance & Navigation for Agents
- A structured approach is needed to assist BD agents in navigating the ecosystem, identifying relevant products/services, and closing deals efficiently.

4. BD Launchpad & Accelerator Concept
- A dedicated landing page could act as a BD launchpad/accelerator.
- It should provide essential information, project development status, and a shared BD resource hub.
- The page should include key sections containing all necessary elements for BD representatives to close deals effectively.

5. Targeted Research Initiative
- A closed-source, low-key initiative could identify around five individuals to conduct further research.
- The goal is to extract fundamental BD statements and set up a voting process via Pol.is.
- Establishing a dedicated communication hub for collaboration.

6. Recommended Tools & Workflow
- Adoption of a commonly used and active CRM system—Trello was suggested as a preferred option.

7. Clear Deliverables & Team Composition
- Initial structure should involve two dedicated individuals:
  - One focusing on engineering-related BD.
  - One focusing on social engagement and outreach.

8. Lead Organization & Compensation Model
- Exploring structured methods to organize BD leads effectively.
- Evaluating alternatives to retainer-based compensation models for BD contributors.`
  },
  {
    id: 'interview-2',
    role: 'Interview 2',
    tags: ['technical', 'infrastructure', 'tools', 'development', 'treasury', 'finance', 'administration', 'legal', 'compliance', 'regulation', 'risk', 'governance', 'processes', 'optimization'],
    content: `// UX & Operational Challenges
Key Insights:

1. UX Synchronization & Backlog Management
- A backlog was created to determine which UX aspects need to be synchronized across teams.

2. Evolution of Braille & UX Bounty
- Braille originated from Parity's decentralization efforts and later evolved into the UX Bounty.
- The UX Bounty faced pushback within OpenGov.

3. Challenges in Payment & Treasury Management
- Payment delays occur due to the involvement of too many multisig signers.
- Lack of a dedicated treasury management system, with funds primarily in DOT and requiring USDT refills.

4. Structural & Legal Limitations
- No legal entity currently exists, making it difficult to sign contracts.
- A legal representative is needed to formalize agreements, but legal costs are high.

5. Bounties as Departments
- The bounty system could be structured as departmental units.
- Bounty curators would act as department heads, overseeing operations and accountability.

6. Funding & Sustainability Concerns
- No funds are available for full-time positions, making operations hard to sustain.
- An annual budget for bounty leads should be submitted and managed by the Polkadot Ambassadors Fellowship (PAF).
- Bounty curators would be responsible for signing contracts.

7. Path to Professionalization
- Establishing clearer structures for accountability, invoicing, and administrative processes.
- Moving towards a more professionalized operational framework.
- Ensuring sufficient resources are allocated without hesitation.`
  },
  {
    id: 'interview-3',
    role: 'Interview 3',
    tags: ['coordination', 'communication', 'governance', 'treasury', 'opengov', 'stakeholders', 'legal', 'compliance', 'regulation', 'risk', 'strategy', 'processes'],
    content: `// Ecosystem Coordination & Governance
Key Insights:

- Ecosystem facing coordination issues, lack of alignment on strategic objectives, and leadership gaps
- Need for streamlined tools, processes, and communication to improve efficiency and reduce redundancy
- Ambassador Fellowship could address key pain points by providing structure, resources, and external expertise
- Legal and regulatory considerations becoming increasingly important; need balanced approach to compliance

Ecosystem Coordination Challenges:
- Lack of centralized information sharing leading to repeated questions and inefficiencies
- Multiple overlapping initiatives (e.g. wallets, block explorers) without clear differentiation or purpose
- Difficulty mapping and tracking active ecosystem participants globally

Legal and Regulatory Considerations:
- Growing importance of compliance as regulation increases
- Need for balanced approach - protective but not overly constraining
- Challenges providing guidance due to liability concerns
- Potential for legal-focused ambassadors to assist with jurisdictional expertise

Ambassador Fellowship Opportunities:
- Provide structure and resources to improve ecosystem coordination
- Bring in external experts to deliver key messages and provide fresh perspectives
- Develop standardized speaking points and educational materials for consistent messaging
- Create badging/certification system to track skills and expertise

Governance and Leadership:
- Desire for more visible leadership and strategic direction
- Debate over formalized constitution vs. principles-based approach
- Need to balance decentralization with effective decision-making

Funding and Sustainability:
- Challenges with short-term funding cycles through OpenGov
- Need for more sustainable funding models for long-term initiatives
- Balancing transparency requirements with confidentiality needs for sensitive work

Next Steps:
- Produce report summarizing key takeaways and proposed actions
- Explore developing standardized ecosystem speaking points/messaging
- Consider creating "job board" to match skills with ecosystem needs
- Investigate options for more sustainable funding models
- Continue discussions on governance structure and leadership approach`
  },
  {
    id: 'interview-4',
    role: 'Interview 4',
    tags: ['community', 'onboarding', 'support', 'engagement', 'communication', 'coordination', 'recognition', 'resources', 'administration', 'processes'],
    content: `// Community Building & Bounty Management
Key Insights:

1. Key Elements for a Strong Community
- A successful initiative should provide:
  - Purpose – Clear goals and direction.
  - Community – A sense of belonging and collaboration.
  - Recognition – Acknowledgment of contributions.
  - Incentives & Compensation – Fair rewards for work done.

2. Challenges as a Bounty Curator
- Rebuilding trust has been difficult, as MB v1 damaged community confidence.
- Had to volunteer upfront before the system was properly set up.
- Often had to ignore uninformed community feedback, as many members show little interest in learning the full picture.
- Took on core marketing responsibilities due to lack of support from Distractive/W3F.
- Learned to be more cautious about which information gets publicly shared.
- Significant time spent on political alignment and engagement, which, while time-consuming, remains crucial.

3. Structural & Organizational Improvements
- Instead of hiring full-time employees, define clear tasks and responsibilities.
- The initiative is slowly expanding, with a focus on steady, sustainable growth.
- Developing an HR department to create a pool of competent individuals for future needs.`
  },
  {
    id: 'interview-5',
    role: 'Interview 5',
    tags: ['business', 'sales', 'strategy', 'tools', 'management', 'coordination', 'resources', 'communication', 'research', 'processes', 'tracking', 'optimization', 'enterprise', 'partnerships'],
    content: `// W3F BD Coordination & Tools
Key Insights:

1. Web3 Foundation (W3F) & Business Development (BD)
- W3F plays a coordination role in BD but faces internal challenges.
- Aims to close deals efficiently, though success varies by project.
- Uses GitHub projects for tracking, ideally to be community-managed in the future.
- Engages with signed BD teams (Poke, Magenta, Velocity).
- Communication channels exist for BD teams and agents, but data-sharing needs refinement.

2. Challenges & Potential Solutions in BD Coordination
- Legal and contract management are handled as side tasks, making processes inefficient.
- CRM tools are critical, but past shared CRM with Parity was problematic.
- Need to define clear data structures for BD tools, CRM, and client information.
- Visibility on BD assignments is lacking:
  - A solution is needed to track assigned BD experts to prevent duplication of outreach efforts.

3. Internal Structural & Operational Issues
- Funnel system for PBA graduates is ineffective in BD.
- Internal W3F obstacles prevent efficient coordination of BD efforts.
- Lead tracking should be streamlined via a CRM system, allowing desks to manage leads from events.
- PAF CRM could be opened to W3F to improve coordination.
- W3F is shifting from a broad European focus to a more targeted EU approach.

4. Strengthening BD Communication & Collaboration
- More structured communication needed between W3F and BD teams.
- BD teams should be organized into domain-specific groups with monthly calls.
- Maintain a larger coordination group including major teams (DF recipients, etc.).

5. Tools & Resources for BD Optimization
- CRM tools and a shared knowledge base (CMS) for BD are essential.
- W3F has initiated a public BD resource center:
  - GitHub Resource Center: https://github.com/Polkadot-BD/Resource-Center-Public
- PAF to host monthly BD calls for alignment.
- Establish an official Polkadot BD Telegram for streamlined communication.
- Ensure database compatibility between W3F & PAF to unify BD operations.`
  },
  {
    id: 'interview-6',
    role: 'Interview 6',
    tags: ['talent', 'training', 'development', 'skills', 'career', 'recognition', 'strategy', 'legal', 'compliance', 'regulation', 'risk', 'governance', 'resources', 'allocation', 'planning'],
    content: `// Recruitment & Strategic Gaps
Key Insights:

1. Challenges in Recruitment & Decision-Making
- Lack of aggressive recruitment strategies to bring in fresh talent.
- A high-authority decision-making entity is needed for quicker execution.
- Onboarding and training processes should be defined for specific roles, potentially via an OpenGov Academy in collaboration with PBA.

2. Structural & Strategic Gaps
- No unified strategy, leading different departments to define their own approaches.
- Need for better branding and marketing to improve ecosystem visibility.
- Certain aspects should be centralized without diminishing community control to enhance efficiency.
- Implementing decisions in a decentralized system remains challenging.

3. Legal & Financial Hurdles
- A centralized legal entity is required to sign contracts, reducing friction.
- PCF charges are excessively high, making it difficult to operate efficiently.
- Convincing W3F and Parity to support deals is challenging, often delaying progress.

4. Need for Better Coordination & Alignment
- Many departments lack alignment, causing inefficiencies.
- W3F needs to improve communication across the ecosystem.
- A strong intellectual foundation (e.g., a Polkadot constitution) could build alignment and cohesion.

5. Strengthening Talent Pipeline & Resource Allocation
- Find and attract fresh talent, particularly young, energetic contributors.
- High-ranking BD agents should be able to submit RFPs, ensuring that ecosystem gaps and resource needs are effectively addressed.
- Consider establishing an Accounting Fellowship to improve financial oversight and resource management.`
  },
  {
    id: 'interview-7',
    role: 'Interview 7',
    tags: ['business', 'sales', 'strategy', 'growth', 'enterprise', 'partnerships', 'marketing', 'coordination', 'resources', 'optimization', 'administration'],
    content: `// BD Approach & Ecosystem Challenges
Key Insights:

1. Business Development (BD) Approach
- Focuses on selling solutions, rather than directly promoting blockchain or Polkadot.
- Engages with 10-20 high-potential leads, including large corporations and governments.
- Operates with flexibility and discretion, avoiding the need for public disclosure.
- Funded by Web3 Foundation, enabling key account management without direct profit pressure.

2. Ecosystem Inefficiencies & Challenges
- Lack of awareness around various BD initiatives (e.g., Web3 Deal Desk).
- GDPR restrictions complicate the sharing of contact information.
- Retention issues for BD talent due to inconsistent funding and career paths.
- No unified strategy or coordination mechanism for ecosystem-wide BD efforts.

3. Potential Solutions & Improvements
- Implement a tiered retainer system for BD agents (starting at ~1000 EUR/month + travel).
- Utilize the PD Fellowship for accountability and improved communication with W3F.
- Develop sustainable funding models that reduce reliance on OpenGov.

4. Natali's Team & Strategic Initiatives
- A treasury-funded team is working on marketing strategies and materials.
- Aims to be ready before the Polkadot Hub launch.
- Could empower lower-ranked BD agents by providing standardized language and approaches.

5. Next Steps
- Engage with W3F to strengthen coordination between W3F and community BD efforts.
- Explore implementing a tiered retainer system for BD agents through the fellowship.
- Evaluate Phragmén as a funding mechanism for BD roles and initiatives.`
  },
  {
    id: 'interview-8',
    role: 'Interview 8',
    tags: ['community', 'engagement', 'coordination', 'resources', 'allocation', 'planning', 'optimization', 'tracking', 'efficiency', 'governance', 'processes'],
    content: `// Fellowship Structure & Ecosystem Challenges
Key Takeaways:
- The fellowship seeks to establish a social layer and reputation system for Polkadot agents, enhancing coordination and efficiency.
- Major challenges include low user adoption, a shortage of high-quality agents, and underutilized resources (e.g., bounties).
- The immediate focus is on activating lower-rank agents through meetups and raising awareness of available tools and opportunities.
- There is a strong need for better accountability, supervision, and resource allocation for high-performing agents and initiatives.

Key Topics:

1. Fellowship Structure & Purpose
- Ranking system for agents based on reputation rather than salary.
- Designed to improve coordination, anticipate needs, and create a structured social network.
- Introduction of a new funding model (Phragmén) for monthly agent budgets (5-10K DOT).
- Goal to unify information sources and databases across the Polkadot ecosystem.

2. Ecosystem Challenges
- Lack of adoption and engagement from the broader community.
- Too few high-quality agents available to meet ecosystem needs.
- Underutilization of existing resources and bounties.
- Need for better coordination and resource allocation.`
  },
  {
    id: 'interview-9',
    role: 'Interview 9',
    tags: ['community', 'engagement', 'coordination', 'resources', 'allocation', 'planning', 'optimization', 'tracking', 'efficiency', 'support', 'administration'],
    content: `// Meetups Bounty & PAF Integration
Key Takeaways:
- The Meetups Bounty has a strong team and sufficient funding but lacks engagement from ambassadors.
- Promotion efforts are insufficient—PAF could assist in increasing visibility.
- Need to build confidence among people interested in engaging with the Meetups Bounty.
- A central repository for all bounties is needed to improve accessibility.
- Ambassadors should focus on educating the community about available bounties.
- Regular workshops are necessary to address knowledge gaps among ambassadors.
- Leemo is planning ambassador calls to enhance knowledge-sharing.
- A dedicated liaison from the Helpdesk (HD) should maintain contact with bounty programs.
- HD should not take over accountability and QA roles but provide general guidance and support.
- HD should be staffed with one or two full-time/part-time members.

Improving the Meetups Bounty & Application Process:
- Any improvements must not disrupt existing processes.
- Need for better tooling and an optimized application process.
- Standards for bounty applications should be clearly defined and communicated.
- Consideration of a separate group for accountability, QA, and auditing.

PAF's Role & Impact:
- PAF is proving effective in building synergies and harmonizing ecosystem efforts.
- Provides a hub for agents and ambassadors to connect, such as through Discord and meetings.

Tipping & Reward Mechanisms:
- PIF (Polkadot Incentives Framework) will introduce tipping to reward contributions.
- Bounties should co-design tipping criteria to ensure they align with existing reward mechanisms.
- Bounties → PAF → Tips:
  - Bounties can submit tips through PAF to reward outstanding contributions.
  - Higher-ranked contributors can receive privileged rewards.
  - Requirement: Bounties must adhere to PAF standards.
- Establishing PAF Bounty Standards would ensure consistency in reward distribution.

PAF & Parachains:
- PAF can provide valuable services to parachains and receive reciprocal value in return.
- PAF Tips & PIF rewards could be distributed in multiple tokens to enhance ecosystem-wide incentives.`
  },
  {
    id: 'interview-10',
    role: 'Interview 10',
    tags: ['support', 'community', 'engagement', 'coordination', 'tools', 'infrastructure', 'development', 'documentation', 'processes', 'optimization', 'efficiency'],
    content: `// Helpdesk & Support Systems
Key Takeaways:
- Support in the ecosystem is highly fragmented, making it difficult for users to navigate.
- A unified helpdesk system is needed, where members have access to a contact sheet to direct requests appropriately.
- Helpdesk should handle most requests directly, but for complex issues, it should have structured streams to forward them to the right experts and channels.
- Moderators self-evaluate on a monthly basis to assess their effectiveness.
- The Moderators Bounty does not manage moderators directly but focuses on bounty administration.
- Budgets are used carefully, prioritizing real work over unnecessary expenses (e.g., accounting).
- Treasury funds are spent conservatively, often leading to underbudgeting due to high accountability standards.

Moderation & Knowledge Management:
- A moderator knowledge base is maintained through a private mod-resources channel containing the most relevant links.
- An AI bot exists on Discord, but it is not widely used.
- Helpdesks should incorporate AI tooling (AI Agents) to improve efficiency.
- Lack of awareness remains a major issue regarding available bounties.
- The Agent Chat has proven valuable in connecting agents and enabling discussions with W3F and Parity.

Helpdesk & Bounties – UX & Sustainability:
- A unified frontend for Helpdesks and Bounties is needed to provide a seamless user experience, allowing users to navigate between services without realizing they are separate.
- Sustainability for moderators remains a challenge as their work depends heavily on the Marketing Bounty.
- A dedicated annual budget from PAF/PIF should be allocated to support system-critical services, such as bounties and agents.
- PIF funding slots should be assessed and approved/rejected by high-ranking ambassadors.
- Potential approach: Start as a "Wish-for-Change" proposal, then transition into a referendum for official approval.`
  },
  {
    id: 'interview-11',
    role: 'Interview 11',
    tags: ['business', 'sales', 'strategy', 'growth', 'market', 'research', 'competition', 'partnerships', 'education', 'coordination', 'optimization'],
    content: `// Business Development Strategy & Market Segmentation
Key Takeaways:
- Emerging opportunities identified for a diverse set of clients, but marketing efforts often fail to effectively target them.
- Need to support Web3 companies in improving client outreach and effectiveness.
- Defining meaningful metrics & KPIs for long-term investment impact remains a challenge.

Strategic BD Efforts:
- Segment refinement: Narrowed down from 34 market segments to 5 leading ones.
- Developing key strategies for these 5 priority segments, including:
  - Creating strong narratives tailored to geographical regions.
  - Securing follow-up funding from Web3 Foundation (W3F).
  - Developing positioning strategies to guide go-to-market approaches.
  - Formulating a broader ecosystem strategy, followed by execution plans.

Challenges & Coordination Gaps:
- W3F funds numerous BD efforts, but the process appears chaotic.
- BD enabler model: Focus is on supporting BD initiatives rather than direct BD execution.
- Lack of effective community engagement, leading to missed opportunities for outreach.
- Coordination remains the biggest gap, limiting efficiency and impact.

Next Steps & Recommendations:
- Strengthen coordination mechanisms within BD efforts.
- Establish clear training programs to develop skilled BD experts.
- Improve alignment between BD initiatives and community engagement efforts.`
  },
  {
    id: 'interview-12',
    role: 'Interview 12',
    tags: ['business', 'sales', 'strategy', 'enterprise', 'partnerships', 'tools', 'infrastructure', 'development', 'coordination', 'optimization', 'resources', 'allocation'],
    content: `// BD Enablement & Enterprise Strategy
Key Takeaways:
- Biggest unknown and untapped opportunities should be prioritized for BD efforts.
- Few true BD experts exist – need to level up the quality of BD professionals.
- A structured process is required to transition newcomers into BD experts.
- Funneling enterprises towards building on Polkadot is crucial, but no clear path exists.
- Need to establish a dedicated enterprise sales team.
- W3F & Parity need to step up and take a more active role.
- Standardized SDR (Sales Development Representative) processes must be implemented.

Reflection on Dealdesk:
- Treasury is often not the right place for deals – instead, monthly CF (Community Fund) meetings should address and share opportunities with W3F.
- Dealdesk helped structure deals but does not execute them directly.
- An annual budget for Dealdesk would improve its effectiveness.
- Dealdesk should operate as an independent tool within the BD Helpdesk.
- Better alignment is needed to plug opportunities into the right implementors.
- Strong coordination with the overall ecosystem strategy is required.

Role of PAF in BD Enablement:
- PAF should provide the space and tools necessary for BD success.
- A clear definition of "Polkadot BD" is needed to align efforts.
- Better coordination & communication:
  - PAF should create both sync and async spaces for BD Agents to collaborate.
- Unified content strategy:
  - The PAF BD Helpdesk should offer domain-specific guides and resources to help businesses and builders onboard efficiently.
- Onboarding & Database Management:
  - PAF should maintain a centralized database for BD efforts.
  - PAF should develop ideas and strategic direction (e.g., BD Fellowship), socialize them, and align people and projects.
- Rewards & Incentives:
  - A system to define BD Agent proof points should be established.
  - BD Agents often face challenges in sharing prospects, as businesses may prefer to keep information confidential.

Next Steps:
- Define clear pathways for newcomers to transition into BD experts.
- Improve communication and coordination between BD efforts, ecosystem strategies, and funding mechanisms.
- Develop a robust enterprise sales approach and engage key ecosystem entities (W3F, Parity).
- Standardize onboarding materials and BD enablement tools within PAF.`
  },
  {
    id: 'interview-13',
    role: 'Interview 13',
    tags: ['business', 'sales', 'strategy', 'growth', 'market', 'research', 'competition', 'partnerships', 'coordination', 'optimization', 'resources', 'allocation'],
    content: `// BD Evolution & Structural Challenges
Key Takeaways:
- Products must drive sustainability, focusing on translating ecosystem problems into practical solutions.
- Money velocity within Polkadot is too slow, leading to liquidity challenges.
- The shift of all assets to AssetHub changed BD priorities and required a strategic pivot.

Pain Points in BD on Polkadot:
- The nature of BD on Polkadot has changed significantly and is very different from traditional BD models.
- Initial BD efforts (from Parity) followed a traditional, top-down approach, but:
  - Polkadot lacked a clear value proposition and struggled to compete with other ecosystems.
- Transitioning to decentralized BD has been challenging, with key issues including:
  - Lack of coordination:
    - Often, different BD agents/entities approach the same projects, leading to inefficiencies.
  - Risk of losing legitimacy:
    - Different "leaders" present conflicting narratives, causing confusion.
    - No standardized messaging or presentation formats.
  - Knowledge-sharing gaps:
    - BD calls hosted by W3F help, but broader alignment is still lacking.
  - No clear direction or priorities:
    - Different "north stars" make cohesive movement difficult.
    - Consensus-building remains a major challenge.
  - Lack of organization, structure, and leadership:
    - BD efforts lack a centralized framework, making execution inconsistent.
- BD needs more flexibility, but decision-making pathways are unclear.

Suggested Improvements:
- Standardize BD narratives and messaging to prevent inconsistencies.
- Strengthen knowledge-sharing mechanisms (e.g., structured documentation, BD resource hub).
- Improve coordination among BD agents to avoid redundant efforts.
- Establish clear priorities and direction to align BD efforts with ecosystem needs.
- Define a decision-making structure to improve efficiency while retaining flexibility.`
  },
  {
    id: 'interview-14',
    role: 'Interview 14',
    tags: ['support', 'community', 'engagement', 'coordination', 'tools', 'infrastructure', 'development', 'documentation', 'processes', 'optimization', 'efficiency', 'resources', 'allocation'],
    content: `// HelpDesk Structure & Ecosystem Communication
Key Takeaways:

Target Audience for HelpDesks:
HelpDesks should primarily serve:
1. Ecosystem newcomers – Providing guidance, onboarding, and resources.
2. Ecosystem agents and bodies – Supporting bounties, individual agents, and other ecosystem participants.

Guiding Principles:
- Reflect existing categories and structures rather than creating new ones.
- Align with bounty networks and existing classifications for better efficiency and accessibility.

Proposed HelpDesk Categories:
1. Events HelpDesk – Covering Roots, Meetups, and Event Bounties.
2. Tech HelpDesk – Supporting Tech Support, Open Source, UX, and related areas.

Resource Management & Synchronization:
- Ensure relevant efforts are well communicated across ecosystem participants.
- Introduce reporting standards to improve transparency and accountability:
  - Funding tracking > Accounting system for bounties, fellowships, and helpdesks.
  - Inspired by OpenGov Watch proposal (where OpenGov enforces bounty standards, PAF could act as a proposer).
- Priority Action:
  - HelpDesks should ensure basic synchronization on accountability, including:
    - Title of initiative, amount of funding, spending date, and specified currency.
  - This will greatly improve ecosystem treasury reporting.

Building a Strong Communication Network:
- Bounties often lack awareness of activities in other bounties.
- HelpDesks should function as communication hubs, similar to a mycelium network, ensuring that information and resources reach the right people at the right time.
- Requirements:
  - Datasets, knowledge bases, and platforms to provide easy access to relevant ecosystem information.
  - Problem detection:
    - Identify recurring questions and pain points.
    - Develop structured responses and translate them into actionable solutions.

Tooling & Architecture:
Two possible approaches:
1. Unified Tool – All bodies adopt a common platform.
2. Unified Database, Open Tools – Different teams use different tools, but standardized data is collected into a shared database.

Additional Functionality:
- Match people with roles:
  - HelpDesks assist bounties in finding team members and connect proposers with relevant opportunities.

Next Steps:
1. Start from a social perspective – Engage with bounties and agents to understand their real needs.
2. Facilitate better coordination with bounties through structured meetings and communication improvements.
3. Bring key people into the discussion to define the next steps collaboratively.`
  },
  {
    id: 'interview-15',
    role: 'Interview 15',
    tags: ['tools', 'infrastructure', 'communication', 'integration', 'analytics', 'development', 'support', 'community', 'engagement', 'coordination', 'resources', 'allocation', 'optimization'],
    content: `// Platform Strategy & BD HelpDesk Structure
Key Takeaways:

General Considerations:
- GitHub is not suitable for everyone – Many ambassadors are non-developers.
- Platform choice should not be overly technical – Needs to be accessible to all ecosystem participants.
- Backup & Data Management:
  - Platform should support file & data storage in the background.
  - Ambassadors shouldn't be required to interact with it directly unless needed.
- Notion as an interim solution:
  - User-friendly, widely used by startups and non-technical projects.
  - Closed-source but has an API for integration.
- Long-term vision: Own platform:
  - As PAF evolves, custom tooling may become necessary.
  - Would require PAF capacity for maintenance & administration.
  - Needs clear guidelines, documentation, and role assignments.

BD HelpDesk Objectives & Structure:

Core Functions:
- Centralized navigation hub:
  - Easily browse products, projects, services, agents & ambassadors.
- Provide tailored BD resources:
  - Domain-specific content, pitch decks, guides, contacts, showcases.
- Standardized communication across HelpDesks:
  - BD HelpDesk should set the standard for how HelpDesks engage with inquiries.
- Document & showcase impact:
  - Track successful projects & long-term impact.
- Define success metrics:
  - How to measure short/mid/long-term HelpDesk effectiveness?
  - What defines a successful vs. unsuccessful HelpDesk?

Expertise & Reputation System:
- HelpDesk staff = Polkadot navigators, not necessarily domain experts.
- Expertise must be earned, not self-proclaimed.
- "Expert" role requires high accountability:
  - Higher-ranked members review and approve/reject expert claims.
  - Expert badges to indicate credibility.
- Prevent biases:
  - Need clear criteria to avoid desk members shilling their own projects.
  - HelpDesks should be neutral and focus on guidance, not promotion.

Funding & Incentives:
- Funding is unclear & fragmented:
  - BD efforts lack alignment & coordination.
  - Needs dedicated budget to support BD Agents.
- Incentive models:
  - Financial incentives (budgets, payments).
  - Social incentives (rank, reputation, privileges).
- Rank-based resource allocation:
  - Higher ranks = More resources.
  - Incentives for engagement – encourage members to climb the ranks.

BD HelpDesk & PAF Integration:
- Should BD Bounty be rebuilt or moved to PAF BD HelpDesk?
- Unclear leadership in BD structure & operations:
  - Can PAF fill this void?
- Matching opportunities across ranks:
  - Mentorship system from higher to lower ranks.
  - Connecting low-rank opportunities to experienced members.`
  },
  {
    id: 'interview-16',
    role: 'Interview 16',
    tags: ['community', 'engagement', 'coordination', 'communication', 'support', 'resources', 'allocation', 'optimization', 'efficiency'],
    content: `// Ecosystem Challenges & Communication
Key Takeaways:

Friction within Entities & Individuals:
- Social drama detracts from productive work.
- Developers' perspective: Drama is a major distraction, and developers don't want drama.

Parachain Issues:
- Many parachains are not functional, and are not providing the expected value.
- Parachain economy did not evolve as anticipated.

Proposed Solutions:

Improve Communication & Accessibility:
- Create a newsletter to keep more introverted stakeholders informed.
  - Not everyone is on X/Twitter, so this will ensure information reaches all stakeholders.
  - Increase accessibility of information across the ecosystem.`
  },
  {
    id: 'interview-17',
    role: 'Interview 17',
    tags: ['tools', 'infrastructure', 'development', 'documentation', 'processes', 'standards', 'quality', 'metrics', 'governance', 'resources', 'allocation', 'optimization', 'tracking', 'efficiency'],
    content: `// Tools, Data Management & Best Practices
Key Takeaways:

Team Management & Reporting:
- Need tools to effectively manage teams, track requests, and generate reports.
- Events Bounty using Monday.com:
  - Includes CRM and is easy to use for non-developers.
  - Facilitates team management (roles/permissions).
  - Provides API access.
  - Check if this tool can be adapted for broader use.

Data Management & Knowledge Base:

Unifying Data & Standardization:
- Aim for standardized data/metadata rather than standardizing tools.
- Different HelpDesks should be able to use their preferred tools (e.g., Notion, Monday.com, GitHub) while feeding data into a central knowledge base/source of truth.

Lead Management:

Lead Generation Challenges:
- Hard to measure real success in lead generation.
- Numbers from live events and general event metrics are often inflated.
- Need to improve lead tracking and ensure structured processes for funneling and maintaining leads.

Ownership & Data Distribution:

Ownership Management Challenges:
- Distractive holds tight ownership of important data sets and narratives.
  - Determine how to distribute ownership effectively, especially for PAF assets requiring administrative rights.

Best Practices & Risk Identification:

Identifying Best Practices & Risks:
- Develop best practices from HelpDesks and wrap them into general guidelines for the ecosystem.
- Enable the effective identification of risks, such as double spending across bounties.

Transforming Signals into Action:

Actionable Knowledge:
- Need a process to transform signals into knowledge and eventually into action.
- If bounties identify risks, PAF should act as a voice to inform the public about identified risks.`
  }
]; 