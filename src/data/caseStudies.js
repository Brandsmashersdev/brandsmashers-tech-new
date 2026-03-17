const caseStudies = [
  {
    title: "Dynamic Book Platform",
    industry: "Education",
    slug: "Mobile1",
    imageSrc: "/CaseStudyImages/dynamicone.png",
    Client: "US HealthTech Startup",
    timeline: "10 Weeks",
    teamSize: "4 Developers",
    techStack: ["React",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",],
    results: [
      "15K+ monthly readers",
      "35% increase in engagement",
      "Real-time story collaboration",
      "99.9% uptime"
    ],

    description:
      "A platform where users can co-create evolving stories with multiple alternate endings."
  },

  {
    title: "Music App",
    Client: "UK Music Startup",
    timeline: "7 Months",
    teamSize: "5 Developers",
    techStack: [
      "React Native",
      "Node.js",
      "MongoDB",
      "WebRTC",
      "AWS",
      "Stripe",
      "Firebase"
    ],
    results: [
      "50K+ app downloads",
      "Real-time collaboration for musicians",
      "30% increase in user retention",
      "Sub-second audio sync"
    ],
    description: "Transform music creation and learning with our dual-platform app. It offers real-time collaboration, a beat marketplace, licensing, interactive lessons, and progress tracking, empowering musicians of all levels.",
    industry: "Entertainment",
    slug: "Mobile2",
    imageSrc: "/CaseStudyImages/music2mobile.png",

  },
  {
    title: "Medi Info",
    description: "MediInfo is a smart platform that streamlines pharmaceutical data, enabling faster decisions and improved patient care.",
    industry: "Healthcare",
    slug: "Mobile3",
    imageSrc: "/CaseStudyImages/meditinfomobile.png",
    Client: "European Pharma Company",
    timeline: "6 Months",
    teamSize: "4 Developers",
    techStack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS"
    ],
    results: [
      "40% faster medical data retrieval",
      "10K+ healthcare professionals onboarded",
      "Secure patient data management",
      "99.9% uptime"
    ],
  },
  {
    title: "Bank AI",
    slug: "aiml1",
    description: "Implemented a custom AI-driven platform for a bank to enhance fraud detection and automate customer service inquiries.",
    industry: "Finance",
    imageSrc: "/CaseStudyImages/aimlBankai.png",
    Client: "Private Banking Institution",
    timeline: "8 Months",
    teamSize: "6 Developers",
    techStack: [
      "Python",
      "TensorFlow",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ],
    results: [
      "Fraud detection accuracy improved by 35%",
      "Reduced manual investigation by 50%",
      "Real-time transaction monitoring",
      "Handled 1M+ transactions daily"
    ],
  },
  {
    title: "Marketing Agency",
    slug: "aiml2",
    description: "Developed a marketing automation tool to help an agency personalize campaigns and analyze client data more effectively.",
    industry: "Marketing",
    imageSrc: "/CaseStudyImages/aimlagency.png",
    Client: "US Digital Marketing Agency",
    timeline: "6 Months",
    teamSize: "4 Developers",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS",
      "HubSpot API"
    ],
    results: [
      "Campaign automation for 100+ clients",
      "25% increase in marketing ROI",
      "Real-time analytics dashboard",
      "Automated lead scoring"
    ],
  },
  {
    title: "Transforming Diagnosis with AI",
    slug: "aiml3",
    description: "Built an AI-powered diagnostic tool for a healthcare company, enabling faster and more accurate analysis of medical images.",
    industry: "Healthcare",
    imageSrc: "/CaseStudyImages/diagnosiswithaiaiml.png",
    Client: "Healthcare Research Lab",
    timeline: "5 Months",
    teamSize: "5 Developers",
    techStack: [
      "Python",
      "PyTorch",
      "FastAPI",
      "React",
      "PostgreSQL",
      "AWS"
    ],
    results: [
      "AI diagnosis accuracy improved to 92%",
      "Image processing 60% faster",
      "Automated medical report generation",
      "Used by 50+ doctors"
    ],
  },
  {
    title: "Healthcare Language Translation Platform",
    slug: "custom1",
    description: "This digital tool provides fast, accurate, and multilingual text or speech translation, enabling seamless communication within the healthcare industry.",
    industry: "Healthcare",
    imageSrc: "/CaseStudyImages/languagetranslationONEcustom.png",
    Client: "Global Telemedicine Provider",
    timeline: "7 Months",
    teamSize: "4 Developers",
    techStack: [
      "React",
      "Node.js",
      "Google Translate API",
      "MongoDB",
      "AWS"
    ],
    results: [
      "Supports 40+ languages",
      "Real-time speech translation",
      "Reduced patient communication errors",
      "Used in 20+ clinics"
    ],
  },
  {
    title: "Personal Finance Platform",
    slug: "custom2",
    description: "A secure and intuitive platform designed to help users track expenses, manage budgets, and gain insights into their personal finances to achieve their goals.",
    industry: "Finance",
    imageSrc: "/CaseStudyImages/personalfinancecuston.png",
    Client: "FinTech Startup",
    timeline: "9 Months",
    teamSize: "5 Developers",
   techStack: [
"Vue.js",
"Java",
"Spring Boot",
"MySQL",
"Redis",
"AWS"
],
    results: [
      "20K+ registered users",
      "Automated expense tracking",
      "Budget insights using AI",
      "99.9% financial data security"
    ],
  },
  {
    title: "Coaching Institute Platform",
    slug: "custom3",
    description: "A comprehensive solution for coaching institutes to manage student enrollment, course materials, and online classes, enhancing the learning experience.",
    industry: "Education",
    imageSrc: "/CaseStudyImages/customcoaching.png",
    Client: "Indian Education Institute",
    timeline: "3 Months",
    teamSize: "3 Developers",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "AWS"
    ],
    results: [
      "5000+ student enrollments",
      "Online course management",
      "Automated attendance tracking",
      "Improved student engagement by 40%"
    ],
  },
  {
    title: "Vendor Management",
    description: "Managing and optimizing relationships with suppliers and service providers to ensure quality, cost-efficiency, and timely delivery of products or services.",
    industry: "Finance",
    slug: "product1",
    imageSrc: "/CaseStudyImages/vendormanagement.png",
    Client: "Manufacturing Enterprise",
    timeline: "4 Months",
    teamSize: "4 Developers",
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS"
    ],
    results: [
      "Vendor onboarding time reduced by 60%",
      "Automated purchase approvals",
      "Centralized supplier dashboard",
      "Improved procurement efficiency"
    ],
  },
  {
    title: "IdeaX Innovation Platform",
    description: "A platform for fostering innovation by collecting, evaluating, and implementing creative ideas to drive business growth and operational improvements.",
    industry: "Technology",
    slug: "product2",
    imageSrc: "/CaseStudyImages/ideax.png",
    Client: "Innovation Consulting Firm",
    timeline: "6 Months",
    teamSize: "4 Developers",
    techStack: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS"
    ],
    results: [
      "10K+ ideas submitted by employees",
      "AI-based idea scoring system",
      "Improved internal innovation pipeline",
      "Enterprise collaboration tools"
    ],
  },
  {
    title: "HRMS by Brandsmashers Tech",
    description: "A comprehensive Human Resource Management System (HRMS) designed to streamline employee data, payroll, attendance, and performance management for efficient organizational operations.",
    industry: "HR Tech",
    slug: "product3",
    imageSrc: "/CaseStudyImages/hrms.png",
    industry: "HR Tech",
    slug: "product3",
    imageSrc: "/CaseStudyImages/hrms.png",
    client: "Mid-size IT Company",
    timeline: "7 Months",
    teamSize: "5 Developers",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    results: [
      "Automated payroll processing",
      "Employee self-service portal",
      "Real-time attendance tracking",
      "Reduced HR workload by 40%"
    ],
  },
  {
    title: "Digital Attendance & Leave Portal",
    description: "Digital Attendance & Leave Portal is an online system to track employee attendance, manage leave requests, and streamline approval processes for organizations.",
    industry: "Enterprise Software",
    slug: "web1",
    imageSrc: "/CaseStudyImages/portalweb.png",
    timeline: "4 Months",
  },
  {
    title: "Image Licensing Platform",
    description: "Image Licensing Platform is a digital system that enables creators to license, manage, and distribute images while ensuring legal use and royalty management.",
    industry: "Digital Media",
    imageSrc: "/CaseStudyImages/imagelicence.png",
    slug: "web2",
    timeline: "3 Months",
  },
  {
    title: "Smart Buyer Management System",
    description: "Smart Buyer Management System is a platform designed to track, analyze, and manage buyer interactions, helping businesses optimize sales and customer relationships.",
    industry: "Retail",
    slug: "web3",
    imageSrc: "/CaseStudyImages/webdev.png",
    timeline: '4 months'

  },
  {
    title: "Digital Marketing Strategy",
    description: "A plan that defines goals, target audience, channels, and tactics to promote a brand, drive engagement, and maximize ROI online.",
    industry: "Marketing",
    imageSrc: "/CaseStudyImages/digitalstragergytone.png",
    timeline: '5 - 6 months'

  },
  {
    title: "B2B Lead Generation",
    description: "Generated 120+ qualified leads monthly through targeted LinkedIn campaigns and content marketing",
    industry: "Marketing",
    imageSrc: "/CaseStudyImages/b2b.png",
    timeline: '4 months'

  },
  {
    title: "Social Media & Content Marketing",
    description: "Using social media platforms and content creation to engage audiences, build brand presence, and drive traffic or conversions.",
    industry: "Marketing",
    imageSrc: "/CaseStudyImages/socialmediadigital.png",
    timeline: '5 months'

  },
  {
    title: "Entertainment Platform",
    description: "A digital platform providing movies, music, videos, and interactive content to engage and entertain users across multiple devices.",
    industry: "Entertainment",
    slug: "ui1",
    imageSrc: "/CaseStudyImages/uiuxentertainment.png",
    timeline: '3 months'

  },
  {
    title: "Ad Agency Workflow",
    description: "A system that manages and optimizes the end-to-end processes of an advertising agency, including campaign planning, creative development, client approvals, and performance tracking.",
    industry: "Marketing",
    slug: "ui2",
    imageSrc: "/CaseStudyImages/uiuxadai.png",
    timeline: '6 months'

  },
  {
    title: "Fitness App UI/UX",
    description: "A mobile application interface designed to provide an intuitive and engaging user experience for tracking workouts, nutrition, progress, and personalized fitness goals.",
    industry: "Healthcare",
    slug: "ui3",
    imageSrc: "/CaseStudyImages/uiuxfitness.png",
    timeline: '2 - 3 months'

  },
];

export default caseStudies;