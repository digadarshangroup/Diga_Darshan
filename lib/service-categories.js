import {
  Landmark,
  Sprout,
  Building2,
  TrendingUp,
  Code2,
  Factory,
  ShoppingBag,
} from "lucide-react";

export const serviceCategories = [
  {
    slug: "ca-banking-loans",
    title: "CA, Banking & Loans",
    shortTitle: "CA, Banking & Loans",
    tagline: "Chartered Accountancy, Registrations & Financing",
    description:
      "End-to-end chartered accountancy, statutory registration, and loan facilitation so your paperwork never slows your business down.",
    icon: Landmark,
    color: "from-blue-600 to-cyan-600",
    lightBg: "from-blue-50 to-cyan-50",
    subcategories: [
      {
        slug: "itr-filing",
        name: "ITR & ITR Filing",
        description: "Individual and business income tax return filing.",
        overview:
          "Income Tax Return (ITR) filing is the yearly process of reporting your income, deductions and tax paid to the Income Tax Department. Filing on time keeps you compliant, is often required for loan and visa applications, and lets you claim eligible refunds.",
        whoFor:
          "Salaried individuals, self-employed professionals, business owners, and any entity whose income crosses the basic exemption limit or who needs an ITR for loan/visa/tender purposes.",
        requirements: ["PAN & Aadhaar", "Bank statements", "Income proof / Form 16 / business income details", "Previous year ITR (if any)", "Investment & deduction proofs (80C, 80D, etc.)"],
        process: [
          { step: "Document collection", detail: "Share your income, investment and bank details with our team." },
          { step: "Income computation", detail: "We compute total income, applicable deductions and tax liability." },
          { step: "Return preparation", detail: "The correct ITR form is prepared and shared with you for review." },
          { step: "E-filing & acknowledgement", detail: "We e-file with the Income Tax Department and share the ITR-V/acknowledgement." },
        ],
        timeline: "Typically 2-4 working days after documents are received",
      },
      {
        slug: "udyam-registration-msme",
        name: "Udyam Registration / MSME",
        description: "MSME/Udyam registration for your business entity.",
        overview:
          "Udyam Registration is the government's official recognition of your business as a Micro, Small or Medium Enterprise (MSME). It's free to register and unlocks priority-sector lending, subsidy schemes, delayed-payment protection and tender preferences.",
        whoFor:
          "Any manufacturing or service business — from a solo proprietorship to a private limited company — that wants access to MSME schemes, subsidies and easier bank credit.",
        requirements: ["Aadhaar of owner/proprietor", "PAN of business/owner", "Business address proof", "Bank account details", "Basic investment & turnover figures"],
        process: [
          { step: "Eligibility check", detail: "We confirm your business qualifies under current MSME investment/turnover limits." },
          { step: "Udyam portal filing", detail: "Details are filed on the government Udyam Registration portal using Aadhaar-based OTP." },
          { step: "Certificate issuance", detail: "Your Udyam Registration Certificate with a unique Udyam number is generated." },
        ],
        timeline: "Same day to 2 working days",
      },
      {
        slug: "fssai-registration",
        name: "FSSAI Registration",
        description: "Food business license and registration support.",
        overview:
          "Any business that manufactures, stores, distributes or sells food — from a small food stall to a large processing unit — needs an FSSAI registration or license, depending on scale, under the Food Safety and Standards Act.",
        whoFor:
          "Restaurants, cloud kitchens, food manufacturers, traders, and home-based food businesses.",
        requirements: ["PAN & Aadhaar", "Business address proof", "Passport-size photograph", "Business/food category details", "NOC from local body (for some categories)"],
        process: [
          { step: "Category assessment", detail: "We determine whether you need Basic Registration, State License, or Central License." },
          { step: "Application filing", detail: "Application and documents are submitted on the FSSAI FoSCoS portal." },
          { step: "Inspection support (if applicable)", detail: "We help you prepare for any premises inspection." },
          { step: "Certificate delivery", detail: "Your FSSAI registration/license certificate is issued and shared." },
        ],
        timeline: "7-30 working days depending on registration type",
      },
      {
        slug: "iec-import-export-code",
        name: "IEC - Import & Export Code",
        description: "Import Export Code registration for global trade.",
        overview:
          "The Importer Exporter Code (IEC) is a 10-digit code issued by the DGFT that is mandatory for any business or individual looking to import or export goods and services from India.",
        whoFor:
          "Exporters, importers, traders and manufacturers looking to enter international markets.",
        requirements: ["PAN of entity", "Bank certificate / cancelled cheque", "Business address proof", "Digital signature or Aadhaar e-sign"],
        process: [
          { step: "Document verification", detail: "We verify PAN, bank and address details required by DGFT." },
          { step: "Online application", detail: "IEC application is filed on the DGFT portal." },
          { step: "Code generation", detail: "The IEC certificate is generated and emailed by DGFT." },
        ],
        timeline: "1-3 working days",
      },
      {
        slug: "insurance",
        name: "Insurance",
        description: "Business and personal insurance advisory.",
        overview:
          "We help you choose the right cover — business/shop insurance, crop and livestock insurance, term and health insurance — and assist with paperwork, comparison and claim support.",
        whoFor:
          "Business owners, farmers and individuals looking to protect assets, income and family against risk.",
        requirements: ["ID proof", "Address proof", "Asset / business details", "Existing policy details (for renewals/claims)"],
        process: [
          { step: "Needs assessment", detail: "We understand what you want covered and your budget." },
          { step: "Plan comparison", detail: "Suitable policies are shortlisted and explained in plain language." },
          { step: "Application & issuance", detail: "We assist with the application and policy issuance." },
        ],
        timeline: "1-5 working days",
      },
      {
        slug: "pmegp-application",
        name: "PMEGP Application",
        description: "Prime Minister's Employment Generation Programme support.",
        overview:
          "PMEGP is a central government credit-linked subsidy scheme (via KVIC) that helps new entrepreneurs set up micro-enterprises with a capital subsidy of up to 35%, reducing your effective loan burden.",
        whoFor:
          "First-time entrepreneurs aged 18+ setting up a new manufacturing or service unit (existing units are not eligible).",
        requirements: ["Project report (DPR)", "ID & address proof", "Educational certificates", "Bank details", "Caste/category certificate (if applicable)"],
        process: [
          { step: "Eligibility & project selection", detail: "We confirm eligibility and finalise a viable project activity." },
          { step: "DPR preparation", detail: "A bank-ready project report is prepared with cost and margin-money details." },
          { step: "Online application", detail: "Application is filed on the PMEGP e-portal and forwarded to the bank." },
          { step: "Bank sanction & subsidy", detail: "We follow up with the bank until loan sanction and subsidy credit." },
        ],
        timeline: "4-10 weeks depending on bank processing",
      },
      {
        slug: "apicol",
        name: "APICOL",
        description: "APICOL scheme facilitation and documentation.",
        overview:
          "We assist with applications, documentation and follow-up for the APICOL scheme, helping eligible applicants navigate the paperwork and approval process.",
        whoFor:
          "Entrepreneurs and cooperative members eligible under the applicable APICOL scheme guidelines.",
        requirements: ["Business plan", "ID & address proof", "Bank details", "Scheme-specific eligibility documents"],
        process: [
          { step: "Eligibility check", detail: "We review current scheme guidelines against your profile." },
          { step: "Documentation", detail: "Required forms and supporting documents are compiled." },
          { step: "Application & follow-up", detail: "We submit the application and track it through to a decision." },
        ],
        timeline: "Varies by scheme cycle — we'll confirm current timelines when you inquire",
      },
      {
        slug: "dpr-preparation",
        name: "DPR Preparation",
        description: "Detailed Project Reports for loans and schemes.",
        overview:
          "A Detailed Project Report (DPR) is the bank-ready document that lays out your business idea, cost of project, means of finance, revenue projections and profitability — required for almost every loan or scheme application.",
        whoFor:
          "Anyone applying for a business loan, PMEGP, CGTMSE, MUDRA or other scheme that requires a project report.",
        requirements: ["Business concept note", "Cost estimates (machinery, civil work, working capital)", "Promoter background & experience", "Financial projections (3-5 years)"],
        process: [
          { step: "Concept discussion", detail: "We understand your business idea, scale and investment plan." },
          { step: "Cost & revenue modelling", detail: "Project cost, means of finance and revenue/profitability projections are built." },
          { step: "Report drafting", detail: "A formatted, bank-ready DPR is prepared and shared for your review." },
        ],
        timeline: "3-7 working days",
      },
      {
        slug: "gst-registration-return-filing",
        name: "GST Registration & Return Filing",
        description: "GST registration and ongoing monthly/quarterly returns.",
        overview:
          "GST registration is mandatory once your turnover crosses the prescribed threshold or for specific categories of business. We handle both first-time registration and ongoing monthly/quarterly/annual return filing so you stay compliant.",
        whoFor:
          "Traders, manufacturers, service providers and e-commerce sellers who are registered or need to register under GST.",
        requirements: ["PAN & Aadhaar", "Business address proof", "Bank account details", "Digital signature (for companies/LLPs)", "Sales & purchase records (for return filing)"],
        process: [
          { step: "Registration filing", detail: "GST REG-01 application is filed with supporting documents." },
          { step: "GSTIN issuance", detail: "Once verified, your GST Identification Number (GSTIN) is issued." },
          { step: "Ongoing return filing", detail: "We prepare and file your GSTR returns each period based on your sales/purchase data." },
        ],
        timeline: "Registration: 3-7 working days · Returns: filed before each due date",
      },
      {
        slug: "loans",
        name: "Loans",
        description: "Business, MSME and project loan assistance with bank liaison.",
        overview:
          "We assist with business, MSME, project and collateral-free loans — preparing your documentation, matching you to the right scheme (like CGTMSE) and liaising with banks until disbursement.",
        whoFor:
          "New and existing businesses needing working capital, equipment finance or project loans.",
        requirements: ["DPR / business plan", "KYC documents", "Bank statements (6-12 months)", "Collateral details (if any)", "Financial statements (for existing businesses)"],
        process: [
          { step: "Loan needs assessment", detail: "We identify the right loan type and scheme for your project." },
          { step: "Documentation", detail: "DPR, KYC and financial documents are compiled to bank standards." },
          { step: "Bank liaison", detail: "We coordinate with the bank through appraisal, sanction and disbursement." },
        ],
        timeline: "2-6 weeks depending on loan size and bank",
      },
    ],
  },
  {
    slug: "farming-construction",
    title: "Farming and Farm Construction & Development",
    shortTitle: "Farming & Farm Construction",
    tagline: "Aqua, Fisheries, Animal Husbandry, Agriculture & Horticulture",
    description:
      "Complete support for farm-based businesses — from aquaculture and animal husbandry to crop farming, horticulture, and farm infrastructure construction.",
    icon: Sprout,
    color: "from-emerald-600 to-green-700",
    lightBg: "from-emerald-50 to-green-50",
    subcategories: [
      {
        name: "Aqua-Nivesh / Fisheries",
        description: "Pond setup, subsidies, feed management and market linkage.",
        href: "/fisheries",
      },
      {
        slug: "animal-husbandry",
        name: "Animal Husbandry",
        description: "Dairy, poultry and livestock business setup with scheme support.",
        overview:
          "We help you plan and set up dairy, poultry, goat/sheep or other livestock units — covering shed design, breed selection, feed planning and available government subsidy schemes for animal husbandry.",
        whoFor:
          "Farmers and rural entrepreneurs looking to start or expand a dairy, poultry or livestock business.",
        requirements: ["Land / shed details", "ID & address proof", "Project report", "Bank details"],
        process: [
          { step: "Site & activity assessment", detail: "We assess your land, water access and best-fit livestock activity." },
          { step: "Project report & scheme matching", detail: "A project report is prepared and matched to relevant subsidy schemes." },
          { step: "Setup & scheme application", detail: "We support shed construction planning and scheme/loan application." },
        ],
        timeline: "Varies by scale — typically 3-8 weeks including scheme approval",
      },
      {
        slug: "agricultural",
        name: "Agricultural",
        description: "Crop farming, irrigation and government subsidy facilitation.",
        overview:
          "From crop planning and irrigation solutions to input supply and government subsidy facilitation, we support farmers in improving yield and accessing available agricultural schemes.",
        whoFor:
          "Individual farmers, farmer groups and agri-entrepreneurs.",
        requirements: ["Land ownership / lease proof", "ID & address proof", "Farm plan / crop details"],
        process: [
          { step: "Farm assessment", detail: "We review land, soil and water conditions to plan suitable crops." },
          { step: "Scheme & subsidy matching", detail: "Applicable government schemes (irrigation, input subsidy, etc.) are identified." },
          { step: "Application support", detail: "We help with documentation and follow-up for approvals." },
        ],
        timeline: "Varies by scheme — typically 2-6 weeks",
      },
      {
        name: "Horticulture",
        description: "Fruit, vegetable and organic farming support with certification.",
        href: "/horticulture",
      },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    shortTitle: "Real Estate",
    tagline: "Land, Residential & Commercial Development",
    description:
      "Land identification, residential and commercial project development, and end-to-end property consultation for buyers, sellers and developers.",
    icon: Building2,
    color: "from-amber-600 to-orange-600",
    lightBg: "from-amber-50 to-orange-50",
    subcategories: [
      {
        slug: "land-plot-development",
        name: "Land & Plot Development",
        description: "Land identification, layout approval and plot development.",
        overview:
          "We assist with identifying suitable land, verifying titles, getting layout/plot approvals from local authorities, and developing raw land into ready-to-build or ready-to-sell plots.",
        whoFor:
          "Landowners, developers and investors looking to develop or monetise land.",
        requirements: ["Land documents (title/RoR)", "ID & address proof", "Survey / measurement details"],
        process: [
          { step: "Title & feasibility check", detail: "We verify land documents and assess development feasibility." },
          { step: "Layout & approvals", detail: "Layout plans are prepared and approvals sought from local authorities." },
          { step: "Development execution", detail: "Plot development (roads, boundaries, utilities) is carried out or coordinated." },
        ],
        timeline: "Approvals typically take 4-12 weeks; development timeline depends on scale",
      },
      {
        slug: "residential-projects",
        name: "Residential Projects",
        description: "Housing and residential project planning and execution.",
        overview:
          "From individual homes to multi-unit residential projects, we help with design planning, approvals, and execution coordination — keeping quality and budget on track.",
        whoFor:
          "Individuals building a home and developers planning residential projects.",
        requirements: ["Site details", "Ownership documents", "Budget & requirement brief"],
        process: [
          { step: "Requirement & budget planning", detail: "We understand your space, design and budget requirements." },
          { step: "Design & approvals", detail: "Plans are prepared and statutory approvals obtained." },
          { step: "Execution & handover", detail: "Construction is coordinated through to handover." },
        ],
        timeline: "Varies significantly by project size",
      },
      {
        slug: "commercial-spaces",
        name: "Commercial Spaces",
        description: "Commercial property development and leasing support.",
        overview:
          "We support commercial property development — shops, offices, warehouses — along with leasing and tenant/buyer matchmaking.",
        whoFor:
          "Business owners needing commercial space and property owners looking to develop or lease commercial property.",
        requirements: ["Site details", "Ownership documents", "Business requirement brief"],
        process: [
          { step: "Requirement mapping", detail: "We understand space, location and budget needs." },
          { step: "Options & planning", detail: "Suitable sites or development plans are shortlisted." },
          { step: "Execution / leasing support", detail: "We support the build-out or lease negotiation process." },
        ],
        timeline: "Varies by project — typically 2-6 weeks for leasing, longer for development",
      },
      {
        slug: "property-consultation",
        name: "Property Consultation",
        description: "Buying, selling and investment advisory for property.",
        overview:
          "Independent guidance on buying, selling or investing in property — covering due diligence, pricing, and documentation support.",
        whoFor:
          "Buyers, sellers and investors who want an informed second opinion before a property decision.",
        requirements: ["ID proof", "Property / requirement details"],
        process: [
          { step: "Consultation", detail: "We discuss your goals, budget and options." },
          { step: "Due diligence", detail: "Property/title checks and market comparison are done where relevant." },
          { step: "Decision support", detail: "We help with negotiation and documentation guidance." },
        ],
        timeline: "1-2 weeks for a full consultation cycle",
      },
    ],
  },
  {
    slug: "trading",
    title: "Trading",
    shortTitle: "Trading",
    tagline: "Stock Market, Commodities & Forex Education",
    description:
      "Structured trading education with expert mentorship, live sessions and capital guidance to build your financial future.",
    icon: TrendingUp,
    color: "from-purple-600 to-pink-600",
    lightBg: "from-purple-50 to-pink-50",
    href: "/trading",
    subcategories: [
      {
        slug: "stock-market-trading",
        name: "Stock Market Trading",
        description: "Beginner to advanced equity market training.",
        overview:
          "A structured curriculum covering equity market basics, chart reading, order types and strategy-building — taking you from beginner to confident trader with practical, hands-on sessions.",
        whoFor:
          "Beginners wanting to understand the stock market and existing traders looking to sharpen their strategy.",
        requirements: ["Valid ID proof", "Basic computer/smartphone access"],
        process: [
          { step: "Skill assessment", detail: "We understand your current knowledge level and goals." },
          { step: "Structured learning", detail: "Modules progress from fundamentals to strategy and risk management." },
          { step: "Live practice", detail: "Guided live-market sessions reinforce what you've learned." },
        ],
        timeline: "Course duration typically 4-8 weeks",
      },
      {
        slug: "commodities-trading",
        name: "Commodities Trading",
        description: "Structured commodities market courses.",
        overview:
          "Learn how commodity markets work — gold, silver, agri-commodities and energy — including contract basics, price drivers and risk management.",
        whoFor:
          "Traders and investors interested in diversifying into commodity markets.",
        requirements: ["Valid ID proof"],
        process: [
          { step: "Market fundamentals", detail: "Contract types, exchanges and price drivers are covered." },
          { step: "Strategy building", detail: "Practical strategies for different commodity segments are taught." },
          { step: "Mentored practice", detail: "Live-market guidance helps you apply what you've learned." },
        ],
        timeline: "Course duration typically 3-6 weeks",
      },
      {
        slug: "forex-trading",
        name: "Forex Trading",
        description: "Currency market training with risk management.",
        overview:
          "Currency market training covering how forex trading works, key global market drivers, and disciplined risk management practices.",
        whoFor:
          "Individuals interested in currency trading as an investment avenue.",
        requirements: ["Valid ID proof"],
        process: [
          { step: "Fundamentals", detail: "Currency pairs, market sessions and key terms are covered." },
          { step: "Risk management focus", detail: "Position sizing and risk control are emphasised throughout." },
          { step: "Practical sessions", detail: "Live/simulated sessions build real trading confidence." },
        ],
        timeline: "Course duration typically 3-6 weeks",
      },
      {
        slug: "live-mentorship-sessions",
        name: "Live Mentorship Sessions",
        description: "One-on-one guidance from market experts.",
        overview:
          "One-on-one and small-group mentorship with experienced traders — for personalised feedback on your strategy, psychology and risk management.",
        whoFor:
          "Enrolled students who want deeper, personalised guidance beyond the standard course.",
        requirements: ["Enrolled course ID"],
        process: [
          { step: "Schedule a session", detail: "Book a slot with your assigned mentor." },
          { step: "Strategy review", detail: "Your trades and approach are reviewed together." },
          { step: "Ongoing check-ins", detail: "Regular follow-up sessions track your progress." },
        ],
        timeline: "Sessions scheduled weekly or bi-weekly",
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software & Development",
    shortTitle: "Software & Development",
    tagline: "Websites, Apps & Business Software",
    description:
      "Custom websites, mobile apps, business software and digital marketing to help your business grow online.",
    icon: Code2,
    color: "from-indigo-600 to-blue-700",
    lightBg: "from-indigo-50 to-blue-50",
    subcategories: [
      {
        slug: "website-development",
        name: "Website Development",
        description: "Business websites, e-commerce and web portals.",
        overview:
          "We design and build business websites, online stores and web portals — from a simple brochure site to a full e-commerce platform — optimised for speed and mobile devices.",
        whoFor:
          "Businesses that need a professional online presence or an online store.",
        requirements: ["Business details", "Content & branding assets (logo, images, text)", "Domain preference"],
        process: [
          { step: "Discovery & planning", detail: "We understand your goals, pages needed and features." },
          { step: "Design", detail: "A visual design is created for your review and approval." },
          { step: "Development & testing", detail: "The site is built, tested across devices, and refined." },
          { step: "Launch", detail: "The site goes live on your domain with basic training on updates." },
        ],
        timeline: "2-6 weeks depending on complexity",
      },
      {
        slug: "mobile-app-development",
        name: "Mobile App Development",
        description: "Android & iOS apps for your business.",
        overview:
          "Custom mobile apps for Android and iOS — from a simple utility app to a full customer-facing platform — built with your business workflow in mind.",
        whoFor:
          "Businesses that want a dedicated mobile experience for customers or internal teams.",
        requirements: ["App requirement brief", "Branding assets"],
        process: [
          { step: "Requirement scoping", detail: "Features, platforms and user flows are defined." },
          { step: "Design & prototyping", detail: "UI/UX design is created and validated with you." },
          { step: "Development & QA", detail: "The app is built and tested across devices." },
          { step: "Store deployment", detail: "We help publish to the Play Store / App Store." },
        ],
        timeline: "6-12 weeks depending on scope",
      },
      {
        slug: "business-software-erp",
        name: "Business Software & ERP",
        description: "Custom software, inventory and billing systems.",
        overview:
          "Custom software to run your business better — inventory management, billing, CRM or a tailored internal tool built around how your team actually works.",
        whoFor:
          "Growing businesses outsourcing spreadsheets/manual processes to dedicated software.",
        requirements: ["Process & workflow details", "Team size", "Existing tools in use (if any)"],
        process: [
          { step: "Process mapping", detail: "We map your current workflow and pain points." },
          { step: "Solution design", detail: "A system architecture and feature set is proposed." },
          { step: "Build & rollout", detail: "The software is built, tested and rolled out with training." },
        ],
        timeline: "4-10 weeks depending on complexity",
      },
      {
        slug: "digital-marketing-seo",
        name: "Digital Marketing & SEO",
        description: "SEO, social media and online growth support.",
        overview:
          "Search engine optimisation, social media management and online advertising to help the right customers find your business.",
        whoFor:
          "Businesses looking to grow their online visibility and customer base.",
        requirements: ["Business & target audience details", "Access to existing website/social accounts (if any)"],
        process: [
          { step: "Audit", detail: "We review your current online presence and competitors." },
          { step: "Strategy", detail: "An SEO/content/ad strategy is built around your goals." },
          { step: "Execution & reporting", detail: "Campaigns run with regular performance reporting." },
        ],
        timeline: "Ongoing engagement; initial results typically visible in 4-8 weeks",
      },
    ],
  },
  {
    slug: "entrepreneur-manufacturing",
    title: "Entrepreneur & Manufacturing Development",
    shortTitle: "Entrepreneur & Manufacturing",
    tagline: "Startup Advisory & Manufacturing Setup",
    description:
      "Startup advisory, manufacturing unit setup and complete government scheme facilitation to turn your business idea into reality.",
    icon: Factory,
    color: "from-rose-600 to-red-700",
    lightBg: "from-rose-50 to-red-50",
    subcategories: [
      {
        slug: "startup-advisory",
        name: "Startup Advisory",
        description: "Business planning and go-to-market strategy.",
        overview:
          "Practical, hands-on advisory for early-stage founders — business model validation, planning, and go-to-market strategy.",
        whoFor:
          "First-time and early-stage entrepreneurs shaping their business idea.",
        requirements: ["Business idea brief", "ID & address proof"],
        process: [
          { step: "Idea discussion", detail: "We understand your idea, market and constraints." },
          { step: "Planning", detail: "A practical business and go-to-market plan is developed." },
          { step: "Ongoing guidance", detail: "We stay available for follow-up decisions as you launch." },
        ],
        timeline: "Initial plan typically ready in 1-2 weeks",
      },
      {
        slug: "manufacturing-unit-setup",
        name: "Manufacturing Unit Setup",
        description: "Site selection, machinery planning and setup support.",
        overview:
          "End-to-end support to set up a manufacturing unit — site selection, machinery planning, layout, and coordination with vendors and authorities.",
        whoFor:
          "Entrepreneurs setting up a new manufacturing unit or expanding an existing one.",
        requirements: ["Project report", "Land / shed details", "Investment budget"],
        process: [
          { step: "Feasibility & site planning", detail: "We assess site, utilities and layout requirements." },
          { step: "Machinery & vendor planning", detail: "Machinery specification and vendor coordination is done." },
          { step: "Setup & compliance", detail: "We support setup execution and required regulatory approvals." },
        ],
        timeline: "Varies by scale — typically 6-16 weeks",
      },
      {
        slug: "government-scheme-facilitation",
        name: "Government Scheme Facilitation",
        description: "PMEGP, CGTMSE, MKUY and other scheme applications.",
        overview:
          "We identify which government schemes (PMEGP, CGTMSE, MKUY and others) your business qualifies for, and manage the application process end-to-end.",
        whoFor:
          "New and existing businesses looking to access subsidy and credit-guarantee schemes.",
        requirements: ["DPR", "ID & address proof", "Bank details"],
        process: [
          { step: "Eligibility mapping", detail: "We match your business profile to relevant schemes." },
          { step: "Documentation", detail: "DPR and supporting documents are prepared." },
          { step: "Application & follow-up", detail: "We submit and track the application through to approval." },
        ],
        timeline: "4-10 weeks depending on scheme",
      },
      {
        slug: "project-report-dpr-preparation",
        name: "Project Report (DPR) Preparation",
        description: "Bank-ready detailed project reports.",
        overview:
          "A bank-ready Detailed Project Report covering your business concept, project cost, means of finance and financial projections — the foundation for loan and scheme applications.",
        whoFor:
          "Entrepreneurs applying for a business loan or government scheme.",
        requirements: ["Business concept", "Cost estimates", "Promoter details"],
        process: [
          { step: "Concept discussion", detail: "We understand your business idea and scale." },
          { step: "Financial modelling", detail: "Cost, financing and profitability projections are built." },
          { step: "Report drafting", detail: "A formatted DPR is prepared and shared for review." },
        ],
        timeline: "3-7 working days",
      },
    ],
  },
  {
    slug: "product-retail",
    title: "Product & Retail",
    shortTitle: "Product & Retail",
    tagline: "Retail Setup, Distribution & E-commerce",
    description:
      "Retail store setup, product distribution networks, franchise consultation and e-commerce enablement for product businesses.",
    icon: ShoppingBag,
    color: "from-teal-600 to-emerald-700",
    lightBg: "from-teal-50 to-emerald-50",
    subcategories: [
      {
        slug: "retail-store-setup",
        name: "Retail Store Setup",
        description: "Location, licensing and store setup guidance.",
        overview:
          "Guidance on choosing the right location, obtaining local licenses, and setting up your retail store — from layout to opening day.",
        whoFor:
          "First-time retailers and businesses opening a new store location.",
        requirements: ["Business plan", "Location details", "ID & address proof"],
        process: [
          { step: "Location & format planning", detail: "We help evaluate location and store format." },
          { step: "Licensing", detail: "Required local trade licenses are identified and applied for." },
          { step: "Setup support", detail: "We support store layout and opening readiness." },
        ],
        timeline: "3-6 weeks depending on licensing",
      },
      {
        slug: "product-distribution",
        name: "Product Distribution",
        description: "Distribution network and supply chain planning.",
        overview:
          "Planning and setting up a distribution network — from identifying distributors/retailers to structuring your supply chain.",
        whoFor:
          "Manufacturers and brands looking to expand market reach.",
        requirements: ["Product details", "Target market"],
        process: [
          { step: "Market mapping", detail: "We identify target regions and distribution partners." },
          { step: "Network structuring", detail: "Distribution terms and supply chain flow are structured." },
          { step: "Onboarding support", detail: "We support onboarding of distributors/retailers." },
        ],
        timeline: "3-8 weeks depending on network size",
      },
      {
        slug: "franchise-consultation",
        name: "Franchise Consultation",
        description: "Franchise opportunities and setup advisory.",
        overview:
          "Advisory on evaluating and setting up a franchise — whether you're buying into a brand or franchising out your own.",
        whoFor:
          "Investors exploring franchise opportunities and brand owners wanting to franchise.",
        requirements: ["Investment budget", "Preferred sector"],
        process: [
          { step: "Goal & budget discussion", detail: "We understand your investment capacity and interests." },
          { step: "Opportunity shortlisting", detail: "Suitable franchise options or franchising structures are shortlisted." },
          { step: "Agreement support", detail: "We support due diligence and agreement review." },
        ],
        timeline: "2-5 weeks",
      },
      {
        slug: "e-commerce-setup",
        name: "E-commerce Setup",
        description: "Online store setup and marketplace onboarding.",
        overview:
          "Setting up your own online store and/or onboarding onto marketplaces (Amazon, Flipkart, etc.) — including catalogue setup and basic operations guidance.",
        whoFor:
          "Product businesses looking to sell online.",
        requirements: ["Product catalogue", "Business & bank details", "GST details (for marketplace onboarding)"],
        process: [
          { step: "Platform selection", detail: "We recommend the right mix of own-store vs. marketplaces." },
          { step: "Catalogue & store setup", detail: "Product listings and store/marketplace accounts are set up." },
          { step: "Go-live support", detail: "We support launch and initial operations guidance." },
        ],
        timeline: "2-4 weeks",
      },
    ],
  },
];

export function getCategoryBySlug(slug) {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug, serviceSlug) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  const item = category.subcategories.find((s) => s.slug === serviceSlug);
  if (!item) return null;
  return { category, item };
}

export function getCategoryHref(category) {
  return category.href ?? `/services/${category.slug}`;
}

export function getServiceHref(category, serviceSlug) {
  return `${getCategoryHref(category)}/${serviceSlug}`;
}
