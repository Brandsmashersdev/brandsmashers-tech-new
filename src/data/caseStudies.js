const caseStudies = [
  {
    title: "Fintech Mobile App",
    description: "Developed a secure, scalable financial solution with real-time data processing and advanced security features for a leading fintech startup.",
    industry: "Finance",
    slug: "Mobile1",
    duration: "4 months",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    images: {
      hero: "/case-studies/fintech/hero.jpg",
      gallery: [
        "/case-studies/fintech/dashboard.jpg",
        "/case-studies/fintech/mobile-1.jpg",
        "/case-studies/fintech/security.jpg"
      ]
    },
    results: [
      "40% increase in user engagement",
      "99.9% uptime achieved",
      "50% reduction in transaction time",
      "Over 10,000 active users"
    ],
    challenge: "Building a secure, scalable mobile banking application with real-time transaction processing",
    solution: "Developed a React Native app with Node.js backend, implementing advanced security protocols and real-time data synchronization"
  },
  {
    title: "E-commerce Platform",
    description: "Built a high-performance marketplace with advanced search capabilities, inventory management, and seamless payment integration.",
    industry: "Retail",
    slug: "Mobile2",
    duration: "6 months",
    technologies: ["React", "Next.js", "PostgreSQL", "Stripe"],
    results: [
      "300% increase in sales",
      "60% improvement in search accuracy",
      "25% reduction in cart abandonment",
      "Over 500 active sellers"
    ],
    challenge: "Creating a scalable e-commerce platform that could handle thousands of products and users simultaneously",
    solution: "Built a Next.js application with PostgreSQL database, implementing advanced search algorithms and Stripe payment integration"
  },
  {
    title: "Healthcare Management System",
    description: "Created an integrated platform for patient records, appointment scheduling, and telemedicine capabilities for a healthcare network.",
    industry: "Healthcare",
    slug: "Mobile3",
    duration: "5 months",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
    results: [
      "80% reduction in appointment scheduling time",
      "90% improvement in patient data accuracy",
      "50% increase in telemedicine consultations",
      "HIPAA compliance achieved"
    ],
    challenge: "Developing a HIPAA-compliant healthcare management system with telemedicine capabilities",
    solution: "Created a Vue.js frontend with Django backend, implementing strict security protocols and real-time video conferencing"
  },
  {
    title: "Smart Buyer Management System",
    description: "Built a comprehensive customer management solution for a local retail mart with purchase tracking and loyalty programs.",
    industry: "Retail",
    slug: "fourth",
    duration: "3 months",
    technologies: ["React", "Express.js", "MySQL", "JWT"],
    results: [
      "700+ buyer records digitized",
      "Clear insights into best-selling items",
      "Targeted discount programs implemented",
      "Hours saved weekly on customer management"
    ],
    challenge: "Creating a user-friendly system to manage customer information, purchase histories, and pricing details",
    solution: "Developed a React application with Express.js backend, featuring secure admin login and comprehensive buyer profiles"
  },
  {
    title: "Educational Learning Platform",
    description: "Designed an interactive learning management system with video streaming, progress tracking, and gamification features.",
    industry: "Education",
    slug: "fifth",
    duration: "7 months",
    technologies: ["Angular", "Node.js", "MongoDB", "WebRTC"],
    results: [
      "500+ courses created",
      "10,000+ active students",
      "85% course completion rate",
      "95% student satisfaction score"
    ],
    challenge: "Building an engaging online learning platform with video streaming and progress tracking",
    solution: "Created an Angular application with Node.js backend, implementing WebRTC for video streaming and gamification features"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Developed an intelligent analytics platform with machine learning capabilities for data-driven business insights.",
    industry: "Technology",
    slug: "sixth",
    duration: "8 months",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    results: [
      "90% accuracy in predictive analytics",
      "60% faster decision-making process",
      "Real-time data processing",
      "Custom ML models deployed"
    ],
    challenge: "Creating an AI-powered analytics platform that could process large datasets and provide actionable insights",
    solution: "Built a React dashboard with Python backend, implementing TensorFlow for machine learning and AWS for scalable infrastructure"
  },
  {
    title: "Real Estate Management Platform",
    description: "Built a comprehensive property management system with virtual tours, tenant portals, and automated maintenance tracking.",
    industry: "Real Estate",
    slug: "seventh",
    duration: "6 months",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    results: [
      "200+ properties managed",
      "75% reduction in maintenance response time",
      "Virtual tour bookings increased by 300%",
      "95% tenant satisfaction rate"
    ],
    challenge: "Creating a comprehensive property management platform with virtual tour capabilities and automated workflows",
    solution: "Developed a React application with Node.js backend, implementing 3D virtual tours and automated maintenance scheduling"
  },
  {
    title: "Food Delivery Aggregator",
    description: "Created a multi-vendor food delivery platform with real-time tracking, payment processing, and restaurant management.",
    industry: "Food & Beverage",
    slug: "eighth",
    duration: "9 months",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    results: [
      "500+ restaurant partners",
      "50,000+ active users",
      "Average delivery time: 25 minutes",
      "98% order accuracy rate"
    ],
    challenge: "Building a scalable food delivery platform that could handle multiple vendors and real-time order tracking",
    solution: "Developed a React Native app with Node.js backend, implementing real-time GPS tracking and multi-vendor payment processing"
  },
  {
    title: "Manufacturing ERP System",
    description: "Developed an enterprise resource planning system for manufacturing with inventory management and production scheduling.",
    industry: "Manufacturing",
    slug: "ninth",
    duration: "10 months",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
    results: [
      "30% reduction in production costs",
      "40% improvement in inventory accuracy",
      "Real-time production monitoring",
      "Automated quality control"
    ],
    challenge: "Creating an ERP system that could handle complex manufacturing processes and supply chain management",
    solution: "Built a Vue.js frontend with Django backend, implementing IoT integration and automated production scheduling"
  },
  {
    title: "Travel Booking Platform",
    description: "Built a comprehensive travel booking system with flight, hotel, and activity reservations for a travel agency.",
    industry: "Travel & Tourism",
    slug: "tenth",
    duration: "7 months",
    technologies: ["React", "Next.js", "MongoDB", "Payment Gateway"],
    results: [
      "10,000+ bookings processed",
      "25% increase in booking conversion",
      "Multi-language support",
      "24/7 customer support integration"
    ],
    challenge: "Creating a travel booking platform that could handle multiple booking types and real-time availability",
    solution: "Developed a React application with Next.js, implementing real-time availability checking and multi-payment gateway support"
  },
  {
    title: "Legal Practice Management System",
    description: "Created a comprehensive legal practice management platform with case tracking, document management, and billing automation.",
    industry: "Legal",
    slug: "eleventh",
    duration: "8 months",
    technologies: ["Angular", "C#", ".NET", "SQL Server"],
    results: [
      "500+ cases managed",
      "80% reduction in document processing time",
      "Automated billing system",
      "Client portal integration"
    ],
    challenge: "Building a legal practice management system with document automation and compliance features",
    solution: "Developed an Angular application with .NET backend, implementing document automation and legal compliance features"
  },
  {
    title: "Fitness Tracking Mobile App",
    description: "Developed a comprehensive fitness tracking application with workout planning, nutrition tracking, and social features.",
    industry: "Health & Fitness",
    slug: "twelfth",
    duration: "5 months",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    results: [
      "50,000+ active users",
      "Average user engagement: 45 minutes/day",
      "95% workout completion rate",
      "Social features increased retention by 40%"
    ],
    challenge: "Creating an engaging fitness app that could track workouts, nutrition, and provide social motivation",
    solution: "Built a React Native app with Node.js backend, implementing workout tracking algorithms and social networking features"
  }
];

export default caseStudies;
