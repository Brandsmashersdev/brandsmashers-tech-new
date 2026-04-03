import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { initializePageTracking } from '@/lib/gtm';

// Developer data with anonymized profiles - 100 developers
const developersData = [
  // React Developers
  {
    id: 1,
    initials: 'Ak',
    title: 'Senior React Developer',
    experience: '6 years',
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'GraphQL', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI',
      'Jest',
      'React Testing Library',
      'Cypress',

      'Git',
      'GitHub',
      'Agile/Scrum',
      'Microservices Architecture',
      'Web Performance Optimization',
      'SEO Optimization'],
    skillCategory: 'React',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior React developer with 6+ years of hands-on experience building scalable, high-performance web applications for enterprise clients across fintech, healthcare, and e-commerce domains. Expert in modern frontend architecture using React, Next.js, and TypeScript, with deep knowledge of state management patterns including Redux, Context API, and Zustand. Strong focus on clean code principles, performance optimization through code splitting, lazy loading, and memoization techniques. Proficient in building responsive, accessible user interfaces that comply with WCAG 2.1 standards and deliver seamless user experiences across all devices. Experienced in implementing complex UI components, custom hooks, and higher-order components to promote code reusability and maintainability. Skilled in integrating RESTful APIs and GraphQL endpoints, with expertise in handling real-time data using WebSockets and Server-Sent Events. Proficient in testing methodologies including unit testing with Jest, integration testing with React Testing Library, and end-to-end testing with Cypress. Experienced in CI/CD pipelines using GitHub Actions, Jenkins, and AWS CodePipeline for automated deployment. Strong understanding of web performance metrics including Core Web Vitals, Lighthouse scores, and optimization strategies. Collaborative team player with excellent communication skills, experienced in Agile/Scrum methodologies and cross-functional team coordination. Passionate about staying current with emerging technologies and best practices in the React ecosystem.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 2,
    initials: 'Ps',
    title: 'Full Stack React Developer',
    experience: '5 years',
    skills: ['React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material UI',

      'Redux',
      'Redux Toolkit',
      'Context API',
      'Zustand',

      'Node.js',
      'Express',
      'REST APIs',
      'GraphQL',

      'MongoDB',
      'Mongoose',
      'PostgreSQL',
      'Redis',

      'AWS',
      'Docker',
      'CI/CD',
      'Nginx',

      'Jest',
      'React Testing Library',
      'Cypress',

      'Git',
      'GitHub',
      'Agile/Scrum',
      'Microservices Architecture',
      'Web Performance Optimization',
      'SEO Optimization'
    ],
    skillCategory: 'React',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Full-stack developer specializing in React and Node.js with 5+ years of experience building end-to-end web applications for startups and enterprise clients. Strong experience with RESTful APIs, microservices architecture, and cloud deployment on AWS, Azure, and GCP platforms. Proficient in designing and implementing scalable backend services using Express.js, NestJS, and Fastify frameworks with robust authentication and authorization mechanisms. Experienced in database design and optimization with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases, including query optimization and indexing strategies. Skilled in frontend development with React, Redux, and modern CSS frameworks like Tailwind and Material-UI for building responsive and interactive user interfaces. Proficient in implementing real-time features using WebSockets, Socket.io, and Server-Sent Events for collaborative applications. Experienced in containerization with Docker and orchestration with Kubernetes for scalable deployment. Strong understanding of CI/CD pipelines, automated testing with Jest and Mocha, and deployment automation. Knowledgeable in security best practices including OWASP Top 10, input validation, and secure coding standards. Excellent problem-solving skills with a track record of delivering high-quality software solutions on time. Collaborative team player experienced in Agile methodologies, code reviews, and mentoring junior developers.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 3,
    initials: 'Rj',
    title: 'React Native Developer',
    experience: '4 years',
    skills: ['React Native', 'JavaScript', 'Redux', 'Firebase', 'iOS', 'Android', 'TypeScript', 'Expo', 'Push Notifications', 'App Store', 'Play Store', 'REST API', 'GraphQL', 'Jest', 'CI/CD', 'Git'],
    skillCategory: 'React',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Mobile app developer with 4+ years of expertise in React Native, building cross-platform applications for iOS and Android platforms with smooth performance and pixel-perfect user interfaces. Proficient in JavaScript and TypeScript, with deep understanding of React Native architecture, navigation patterns, and native module integration. Experienced in state management using Redux, MobX, and Context API for complex application logic. Skilled in integrating native device features including camera, GPS, biometric authentication, push notifications, and file system access. Proficient in backend integration with RESTful APIs, GraphQL, and real-time data synchronization using Firebase and WebSockets. Experienced in app performance optimization including bundle size reduction, image optimization, and memory management. Knowledgeable in app store submission processes, code signing, and continuous deployment using Fastlane and CI/CD pipelines. Strong understanding of mobile UI/UX principles, Material Design, and Human Interface Guidelines. Proficient in testing methodologies including unit testing with Jest, integration testing with Detox, and manual testing across multiple devices. Experienced in debugging and profiling using React Native Debugger, Flipper, and Xcode/Android Studio tools. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about creating intuitive mobile experiences that delight users and drive engagement.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 4,
    initials: 'Sm',
    title: 'React Frontend Architect',
    experience: '8 years',
    skills: ['React', 'TypeScript', 'GraphQL', 'Next.js', 'AWS', 'Docker', 'JavaScript', 'Redux', 'Webpack', 'Jest', 'Cypress', 'Storybook', 'Tailwind CSS', 'Material-UI', 'Node.js', 'PostgreSQL', 'Redis'],
    skillCategory: 'React',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Frontend architect with 8+ years of extensive React experience, specializing in building large-scale enterprise applications with optimal performance, scalability, and maintainability. Expert in designing component architectures, state management patterns, and micro-frontend solutions for complex business requirements. Proficient in TypeScript, GraphQL, and modern build tools including Webpack, Vite, and Turbopack for optimized development workflows. Strong focus on performance optimization through code splitting, tree shaking, lazy loading, and server-side rendering techniques. Experienced in implementing design systems and component libraries using Storybook, ensuring consistency across multiple products and teams. Skilled in accessibility standards including WCAG 2.1, ARIA patterns, and keyboard navigation for inclusive user experiences. Proficient in testing strategies including unit testing with Jest, component testing with React Testing Library, and visual regression testing with Chromatic. Experienced in CI/CD pipelines, automated deployments, and infrastructure as code using Terraform and AWS CloudFormation. Strong understanding of web security principles including Content Security Policy, XSS prevention, and secure authentication patterns. Collaborative leader with experience mentoring developers, conducting code reviews, and establishing frontend best practices. Passionate about emerging technologies, performance metrics, and delivering exceptional user experiences at scale.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 5,
    initials: 'Vk',
    title: 'React & Redux Specialist',
    experience: '5 years',
    skills: [ 'React',
  'Redux',
  'Redux Toolkit',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',

  // Advanced React
  'Next.js',
  'React Hooks',
  'Custom Hooks',
  'Context API',
  'Zustand',

  // State & Data Handling
  'RTK Query',
  'React Query (TanStack Query)',
  'GraphQL (Apollo Client)',

  // Styling
  'CSS-in-JS',
  'Styled Components',
  'Tailwind CSS',
  'SASS/SCSS',

  // Testing
  'Jest',
  'React Testing Library',
  'Cypress',

  // Build & Performance
  'Webpack',
  'Vite',
  'Babel',
  'Code Splitting',
  'Lazy Loading',
  'Performance Optimization',

  // Tools & Practices
  'Git',
  'GitHub',
  'CI/CD',
  'Agile/Scrum',
  'ESLint',
  'Prettier'],
    skillCategory: 'React',
    availability: 'Available in 2-3 days',
    availabilityClass: 'bg-yellow-500',
    description: 'State management expert with 5+ years of deep knowledge in Redux patterns, Context API, and modern state management solutions for complex React applications. Strong focus on testing methodologies, code quality, and maintainable architecture patterns. Proficient in TypeScript for type-safe development, reducing runtime errors and improving developer experience. Experienced in building scalable frontend applications with React, including complex forms, data grids, and interactive dashboards. Skilled in performance optimization techniques including memoization, virtualization, and efficient re-rendering strategies. Proficient in testing frameworks including Jest, React Testing Library, and Cypress for comprehensive test coverage. Experienced in CSS-in-JS solutions including styled-components, Emotion, and Tailwind CSS for maintainable styling. Knowledgeable in build tools and bundlers including Webpack, Vite, and Rollup for optimized production builds. Strong understanding of web accessibility standards and inclusive design principles. Experienced in CI/CD pipelines, automated testing, and deployment automation using GitHub Actions and Jenkins. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about writing clean, well-documented code and mentoring junior developers in best practices.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Node.js Developers
  {
    id: 6,
    initials: 'Mp',
    title: 'Senior Node.js Developer',
    experience: '6 years',
    skills: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker', 'AWS', 'JavaScript', 'TypeScript', 'PostgreSQL', 'REST APIs', 'GraphQL', 'NestJS'],
    skillCategory: 'Node.js',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Backend developer with 6+ years of strong Node.js skills, specializing in building scalable e-commerce platforms, REST APIs, and microservices architectures capable of handling high traffic volumes. Proficient in Express.js, NestJS, and Fastify frameworks for building robust and performant server-side applications. Experienced in database design and optimization with MongoDB, PostgreSQL, and Redis, including query optimization, indexing strategies, and caching mechanisms. Skilled in implementing authentication and authorization using JWT, OAuth 2.0, and session-based approaches. Proficient in message queues including RabbitMQ, Apache Kafka, and AWS SQS for asynchronous processing and event-driven architectures. Experienced in containerization with Docker and orchestration with Kubernetes for scalable deployment and management. Strong understanding of cloud services including AWS, Azure, and GCP for infrastructure and deployment. Knowledgeable in monitoring and logging using Prometheus, Grafana, ELK Stack, and AWS CloudWatch. Proficient in testing methodologies including unit testing with Mocha, integration testing with Supertest, and load testing with Artillery. Experienced in CI/CD pipelines, automated deployments, and infrastructure as code using Terraform. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building reliable, scalable systems that deliver exceptional performance.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 7,
    initials: 'Rs',
    title: 'Node.js Microservices Expert',
    experience: '7 years',
    skills: ['Node.js', 'Docker', 'Kubernetes', 'Kafka', 'MongoDB', 'AWS', 'JavaScript', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'RabbitMQ', 'gRPC', 'Prometheus', 'Grafana'],
    skillCategory: 'Node.js',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Microservices architect with 7+ years of extensive Node.js experience, specializing in building distributed systems capable of handling millions of requests daily with high availability and fault tolerance. Expert in designing event-driven architectures using message queues including Apache Kafka, RabbitMQ, and AWS SNS/SQS for asynchronous communication between services. Proficient in containerization with Docker and orchestration with Kubernetes for scalable deployment, auto-scaling, and service mesh implementation. Experienced in database design including polyglot persistence with PostgreSQL, MongoDB, Redis, and Elasticsearch for optimal data storage and retrieval. Skilled in implementing circuit breakers, retry mechanisms, and bulkhead patterns for resilient distributed systems. Proficient in API gateway design, rate limiting, and load balancing strategies for high-traffic applications. Experienced in monitoring and observability using Prometheus, Grafana, Jaeger, and ELK Stack for comprehensive system insights. Strong understanding of cloud-native development on AWS, Azure, and GCP, including serverless architectures with Lambda and Azure Functions. Knowledgeable in security best practices including OAuth 2.0, JWT, and API key management. Proficient in testing strategies including contract testing with Pact, chaos engineering, and load testing with Gatling. Collaborative leader with experience mentoring engineers and establishing microservices best practices. Passionate about building scalable, resilient systems that deliver exceptional performance and reliability.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 8,
    initials: 'Dt',
    title: 'Node.js & GraphQL Developer',
    experience: '5 years',
    skills: ['Node.js', 'GraphQL', 'Apollo', 'PostgreSQL', 'TypeScript', 'Docker', 'JavaScript', 'Express', 'MongoDB', 'Redis', 'REST APIs', 'Jest', 'NestJS'],
    skillCategory: 'Node.js',
    availability: 'Available in 3 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'API specialist with 5+ years of expertise in GraphQL and Node.js, focusing on building efficient, scalable, and well-documented data layers for modern web applications. Proficient in designing GraphQL schemas, resolvers, and data loaders for optimal query performance and reduced over-fetching. Experienced in Apollo Server, GraphQL Yoga, and Relay for building production-ready GraphQL APIs. Skilled in database optimization with PostgreSQL, MongoDB, and Redis, including query optimization, indexing strategies, and caching mechanisms. Proficient in implementing real-time features using GraphQL subscriptions and WebSockets for collaborative applications. Experienced in API security including authentication, authorization, rate limiting, and input validation. Strong understanding of RESTful API design principles and hybrid approaches combining REST and GraphQL. Knowledgeable in microservices architecture and event-driven patterns for distributed systems. Proficient in testing methodologies including unit testing with Jest, integration testing with Supertest, and GraphQL-specific testing with Apollo Client. Experienced in CI/CD pipelines, automated deployments, and infrastructure as code using Terraform and AWS CloudFormation. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building developer-friendly APIs that enable rapid frontend development and exceptional user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 9,
    initials: 'Pn',
    title: 'Node.js Backend Engineer',
    experience: '4 years',
    skills: ['Node.js', 'Express', 'MySQL', 'Redis', 'Jest', 'AWS', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Docker', 'NestJS'],
    skillCategory: 'Node.js',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Backend engineer with 4+ years of specialization in Node.js, focusing on building robust RESTful APIs and implementing secure authentication systems for web and mobile applications. Proficient in Express.js, NestJS, and Fastify frameworks for creating scalable and maintainable server-side applications. Experienced in database design and management with MySQL, PostgreSQL, and MongoDB, including query optimization, indexing, and data modeling. Skilled in implementing authentication and authorization using JWT, OAuth 2.0, Passport.js, and session-based approaches. Proficient in caching strategies using Redis and Memcached for improved application performance. Experienced in API documentation using Swagger/OpenAPI for clear and comprehensive API specifications. Strong understanding of security best practices including input validation, SQL injection prevention, and XSS protection. Knowledgeable in microservices architecture and containerization with Docker for scalable deployment. Proficient in testing methodologies including unit testing with Mocha, integration testing with Supertest, and API testing with Postman. Experienced in CI/CD pipelines using GitHub Actions, Jenkins, and AWS CodePipeline for automated deployment. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about writing clean, well-documented code and building reliable backend systems that power exceptional user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 10,
    initials: 'Sg',
    title: 'Node.js & NestJS Developer',
    experience: '5 years',
    skills: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'JavaScript', 'Express', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Jest', 'Git', 'Kubernetes', 'CI/CD'],
    skillCategory: 'Node.js',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'Enterprise Node.js developer with 5+ years of NestJS expertise, specializing in building scalable, maintainable, and well-tested applications using clean architecture principles. Proficient in TypeScript for type-safe development, reducing runtime errors and improving code quality. Experienced in designing and implementing RESTful APIs, GraphQL endpoints, and microservices architectures for complex business requirements. Skilled in database design and optimization with PostgreSQL, MongoDB, and Redis, including query optimization, indexing strategies, and caching mechanisms. Proficient in implementing authentication and authorization using JWT, OAuth 2.0, and Passport.js for secure application access. Experienced in containerization with Docker and orchestration with Kubernetes for scalable deployment and management. Strong understanding of testing methodologies including unit testing with Jest, integration testing with Supertest, and end-to-end testing with Cypress. Knowledgeable in CI/CD pipelines using GitHub Actions, Jenkins, and AWS CodePipeline for automated deployment. Proficient in monitoring and logging using Prometheus, Grafana, and ELK Stack for comprehensive application insights. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting code reviews. Passionate about writing clean, well-documented code and building reliable systems that deliver exceptional performance and user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Angular Developers
  {
    id: 11,
    initials: 'Au',
    title: 'Senior Angular Developer',
    experience: '7 years',
    skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Node.js', 'AWS', 'JavaScript', 'HTML5', 'CSS3', 'Angular Material', 'Jasmine', 'Karma', 'Git', 'REST APIs', 'GraphQL', 'Docker', 'CI/CD', 'Webpack'],
    skillCategory: 'Angular',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior Angular developer with 7+ years of extensive experience in building enterprise-level applications for Fortune 500 companies across finance, healthcare, and e-commerce domains. Expert in reactive programming using RxJS and NgRx for complex state management in large-scale applications. Proficient in TypeScript for type-safe development, reducing runtime errors and improving code maintainability. Experienced in designing and implementing scalable frontend architectures using Angular modules, lazy loading, and micro-frontend patterns. Skilled in building responsive, accessible user interfaces that comply with WCAG 2.1 standards and deliver seamless experiences across all devices. Proficient in integrating RESTful APIs and GraphQL endpoints, with expertise in handling real-time data using WebSockets and Server-Sent Events. Experienced in testing methodologies including unit testing with Jasmine, integration testing with Karma, and end-to-end testing with Protractor and Cypress. Strong understanding of performance optimization techniques including change detection strategies, trackBy functions, and AOT compilation. Knowledgeable in CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps for automated deployment. Proficient in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting code reviews. Passionate about building high-quality, maintainable applications that deliver exceptional user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 12,
    initials: 'St',
    title: 'Angular Frontend Architect',
    experience: '8 years',
    skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'GraphQL', 'Docker', 'JavaScript', 'HTML5', 'CSS3', 'Angular Material', 'Jasmine', 'Karma', 'Storybook', 'Webpack', 'Git', 'REST APIs', 'Cypress', 'Jest'],
    skillCategory: 'Angular',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Frontend architect with 8+ years of deep Angular expertise, specializing in building scalable enterprise applications with optimal performance, maintainability, and exceptional user experiences. Expert in designing component architectures, state management patterns, and micro-frontend solutions for complex business requirements. Proficient in TypeScript, RxJS, and NgRx for reactive programming and predictable state management. Experienced in implementing design systems and component libraries using Angular Material and custom theming for consistency across products. Skilled in performance optimization techniques including lazy loading, preloading strategies, and efficient change detection mechanisms. Proficient in testing strategies including unit testing with Jasmine, integration testing with Karma, and visual regression testing with Chromatic. Experienced in CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps for automated deployment. Strong understanding of web accessibility standards including WCAG 2.1, ARIA patterns, and keyboard navigation for inclusive user experiences. Knowledgeable in security best practices including Content Security Policy, XSS prevention, and secure authentication patterns. Proficient in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative leader with experience mentoring developers, conducting code reviews, and establishing frontend best practices. Passionate about emerging technologies, performance metrics, and delivering exceptional user experiences at scale.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 13,
    initials: 'Mk',
    title: 'Angular & Material UI Developer',
    experience: '5 years',
    skills: ['Angular', 'Material UI', 'TypeScript', 'RxJS', 'REST API', 'Jest', 'JavaScript', 'HTML5', 'CSS3', 'Angular Material', 'Jasmine', 'Karma', 'Git', 'GraphQL', 'Docker', 'Responsive Design', 'Accessibility', 'Tailwind CSS'],
    skillCategory: 'Angular',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'UI-focused Angular developer with 5+ years of Material Design expertise, specializing in creating beautiful, accessible, and responsive user interfaces that delight users and drive engagement. Proficient in Angular Material, CDK, and custom component development for consistent design systems. Experienced in implementing WCAG 2.1 accessibility standards, ARIA patterns, and keyboard navigation for inclusive user experiences. Skilled in CSS preprocessors including SASS and LESS, as well as modern CSS frameworks like Tailwind and Bootstrap for efficient styling. Proficient in responsive design principles, mobile-first approaches, and cross-browser compatibility for seamless experiences across all devices. Experienced in animation libraries including Angular Animations and Framer Motion for engaging micro-interactions. Strong understanding of UX principles, user research methodologies, and data-driven design decisions. Proficient in testing methodologies including unit testing with Jasmine, visual regression testing with Chromatic, and accessibility testing with axe-core. Experienced in design collaboration using Figma, Sketch, and Adobe XD for seamless designer-developer workflows. Knowledgeable in performance optimization including image optimization, lazy loading, and critical CSS extraction. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about creating intuitive, beautiful interfaces that make complex functionality simple and enjoyable to use.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 14,
    initials: 'Ni',
    title: 'Angular Full Stack Developer',
    experience: '6 years',
    skills: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'AWS', 'JavaScript', 'HTML5', 'CSS3', 'RxJS', 'NgRx', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Docker', 'Git', 'Jest', 'CI/CD', 'Kubernetes', 'Redis'],
    skillCategory: 'Angular',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Full-stack developer with 6+ years of Angular frontend expertise, specializing in building complete web applications from scratch for startups and enterprise clients. Proficient in TypeScript, RxJS, and NgRx for reactive programming and state management in complex applications. Experienced in backend development with Node.js, Express, and NestJS for building scalable RESTful APIs and GraphQL endpoints. Skilled in database design and optimization with MongoDB, PostgreSQL, and Redis, including query optimization and caching strategies. Proficient in implementing authentication and authorization using JWT, OAuth 2.0, and Passport.js for secure application access. Experienced in containerization with Docker and orchestration with Kubernetes for scalable deployment and management. Strong understanding of cloud services including AWS, Azure, and GCP for infrastructure and deployment. Knowledgeable in CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline for automated deployment. Proficient in testing methodologies including unit testing with Jasmine, integration testing with Karma, and end-to-end testing with Protractor. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting code reviews. Passionate about building end-to-end solutions that deliver exceptional performance and user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 15,
    initials: 'Op',
    title: 'Angular & NgRx Specialist',
    experience: '5 years',
    skills: ['Angular', 'NgRx', 'TypeScript', 'RxJS', 'Jasmine', 'Protractor', 'JavaScript', 'HTML5', 'CSS3', 'Angular Material', 'Karma', 'Cypress', 'Git', 'REST APIs', 'GraphQL', 'Docker', 'CI/CD', 'Agile', 'Performance Optimization', 'Webpack', 'Jest'],
    skillCategory: 'Angular',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'State management expert with 5+ years of NgRx specialization, focusing on testing and maintaining large Angular applications with complex state requirements. Proficient in reactive programming using RxJS for handling asynchronous operations and event streams. Experienced in designing scalable state architectures using NgRx Store, Effects, and Entity for predictable state management. Skilled in implementing unit testing strategies with Jasmine and Karma for comprehensive test coverage. Proficient in integration testing and end-to-end testing with Protractor and Cypress for reliable application behavior. Experienced in code quality tools including ESLint, Prettier, and SonarQube for maintaining clean codebases. Strong understanding of Angular performance optimization including change detection strategies, trackBy functions, and lazy loading. Knowledgeable in CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps for automated testing and deployment. Proficient in Agile methodologies including Scrum and Kanban for efficient project delivery. Experienced in documentation using JSDoc and Storybook for clear component specifications. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting code reviews. Passionate about writing maintainable, well-tested code that scales with business requirements and delivers exceptional user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Python Developers
  {
    id: 16,
    initials: 'id',
    title: 'Senior Python Developer',
    experience: '7 years',
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Flask', 'FastAPI', 'SQLAlchemy', 'Celery', 'REST APIs', 'GraphQL', 'Git', 'Kubernetes', 'CI/CD', 'Microservices', 'Agile', 'Performance Optimization', 'Testing', 'Security', 'MongoDB', 'RabbitMQ', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
    skillCategory: 'Python',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior Python developer with 7+ years of Django expertise, specializing in building scalable web applications and APIs for high-traffic platforms across fintech, healthcare, and e-commerce domains. Proficient in Django REST Framework for building robust, well-documented APIs with comprehensive authentication and authorization mechanisms. Experienced in database design and optimization with PostgreSQL, MySQL, and Redis, including query optimization, indexing strategies, and caching mechanisms. Skilled in implementing asynchronous task processing using Celery, RabbitMQ, and Redis for background job execution. Proficient in testing methodologies including unit testing with pytest, integration testing, and API testing with Django Test Client. Experienced in containerization with Docker and orchestration with Kubernetes for scalable deployment and management. Strong understanding of cloud services including AWS, Azure, and GCP for infrastructure and deployment. Knowledgeable in CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline for automated deployment. Proficient in security best practices including OWASP Top 10, input validation, and secure coding standards. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting code reviews. Passionate about building reliable, scalable systems that deliver exceptional performance and user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 17,
    initials: 'Su',
    title: 'Python & FastAPI Developer',
    experience: '5 years',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Django', 'Flask', 'SQLAlchemy', 'Celery', 'REST APIs', 'GraphQL', 'Git', 'AWS', 'CI/CD', 'Microservices', 'Agile', 'Performance Optimization', 'Testing', 'Security', 'Monitoring', 'Prometheus', 'Grafana', 'ELK Stack', 'RabbitMQ', 'MongoDB'],
    skillCategory: 'Python',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'API specialist with 5+ years of FastAPI expertise, focusing on building high-performance async APIs with Python for modern web applications. Proficient in Python type hints, Pydantic models, and automatic API documentation generation for developer-friendly interfaces. Experienced in designing RESTful APIs with proper HTTP methods, status codes, and error handling for robust client-server communication. Skilled in database integration with PostgreSQL, MongoDB, and Redis using SQLAlchemy, Motor, and aioredis for efficient data access. Proficient in implementing authentication and authorization using JWT, OAuth 2.0, and API key management for secure application access. Experienced in asynchronous programming using asyncio, aiohttp, and asyncpg for non-blocking I/O operations. Strong understanding of API performance optimization including caching strategies, connection pooling, and query optimization. Knowledgeable in containerization with Docker and orchestration with Kubernetes for scalable deployment. Proficient in testing methodologies including unit testing with pytest, integration testing with httpx, and API testing with FastAPI TestClient. Experienced in CI/CD pipelines using GitHub Actions, Jenkins, and AWS CodePipeline for automated deployment. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building fast, reliable APIs that enable exceptional user experiences and rapid frontend development.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 18,
    initials: 'Rc',
    title: 'Python Backend Engineer',
    experience: '6 years',
    skills: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'AWS', 'Django', 'FastAPI', 'Celery', 'Redis', 'REST APIs', 'GraphQL', 'Git', 'Kubernetes', 'CI/CD', 'Microservices', 'Agile', 'Performance Optimization', 'Testing', 'Security', 'Monitoring', 'Logging', 'Prometheus', 'Grafana', 'RabbitMQ', 'MongoDB', 'Pandas', 'NumPy'],
    skillCategory: 'Python',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Backend engineer with 6+ years of Flask expertise, specializing in building microservices and data processing pipelines for enterprise applications. Proficient in Python and Flask extensions including Flask-RESTful, Flask-SQLAlchemy, and Flask-Migrate for robust API development. Experienced in database design and optimization with PostgreSQL, MySQL, and MongoDB, including query optimization and indexing strategies. Skilled in implementing authentication and authorization using JWT, OAuth 2.0, and Flask-Login for secure application access. Proficient in asynchronous task processing using Celery, Redis, and RabbitMQ for background job execution. Experienced in data processing pipelines using Pandas, NumPy, and Apache Airflow for ETL workflows. Strong understanding of API design principles including RESTful architecture, versioning, and documentation using Swagger/OpenAPI. Knowledgeable in containerization with Docker and orchestration with Kubernetes for scalable deployment. Proficient in testing methodologies including unit testing with pytest, integration testing, and API testing with Flask Test Client. Experienced in CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline for automated deployment. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building reliable, scalable backend systems that power data-driven applications and deliver exceptional performance.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 19,
    initials: 'Kj',
    title: 'Python & Django REST Developer',
    experience: '5 years',
    skills: ['Python', 'Django REST', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Django', 'Flask', 'FastAPI', 'SQLAlchemy', 'REST APIs', 'GraphQL', 'Git', 'AWS', 'Kubernetes', 'CI/CD', 'Microservices', 'Agile', 'Testing', 'Security', 'Monitoring', 'Logging', 'Performance', 'RabbitMQ', 'MongoDB', 'Pandas', 'NumPy', 'Scikit-learn'],
    skillCategory: 'Python',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'REST API specialist with 5+ years of Django REST Framework expertise, focusing on building robust, well-documented, and scalable APIs for modern web applications. Proficient in Python and Django for rapid development of secure and maintainable backend services. Experienced in designing RESTful APIs with proper HTTP methods, status codes, and error handling for reliable client-server communication. Skilled in database design and optimization with PostgreSQL, MySQL, and Redis, including query optimization, indexing strategies, and caching mechanisms. Proficient in implementing authentication and authorization using JWT, OAuth 2.0, and Django REST Framework permissions for secure application access. Experienced in API documentation using Swagger/OpenAPI and Django REST Framework built-in documentation for developer-friendly interfaces. Strong understanding of API versioning strategies, rate limiting, and throttling for production-ready APIs. Knowledgeable in containerization with Docker and orchestration with Kubernetes for scalable deployment. Proficient in testing methodologies including unit testing with pytest, integration testing, and API testing with Django REST Frameworks APITestCase. Experienced in CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline for automated deployment. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building developer-friendly APIs that enable rapid frontend development and deliver exceptional user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 20,
    initials: 'Gi',
    title: 'Python Automation Engineer',
    experience: '4 years',
    skills: ['Python', 'Selenium', 'BeautifulSoup', 'Scrapy', 'Pandas', 'AWS', 'Django', 'Flask', 'FastAPI', 'SQLAlchemy', 'REST APIs', 'Git', 'Docker', 'CI/CD', 'Agile', 'Data Processing', 'Web Scraping', 'Automation', 'Testing', 'Security', 'Monitoring', 'Logging', 'Performance', 'Optimization', 'NumPy', 'Scrapy', 'Playwright'],
    skillCategory: 'Python',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'Automation specialist with 4+ years of web scraping expertise, focusing on building data extraction pipelines and automated testing frameworks for enterprise applications. Proficient in Python libraries including Selenium, BeautifulSoup, and Scrapy for robust web scraping and data extraction. Experienced in building scalable data pipelines using Pandas, NumPy, and Apache Airflow for ETL workflows. Skilled in implementing automated testing frameworks using pytest, unittest, and Robot Framework for comprehensive test coverage. Proficient in database integration with PostgreSQL, MongoDB, and Redis for efficient data storage and retrieval. Experienced in API development using Flask and FastAPI for building data services and automation endpoints. Strong understanding of CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline for automated deployment. Knowledgeable in containerization with Docker and orchestration with Kubernetes for scalable deployment. Proficient in monitoring and logging using Prometheus, Grafana, and ELK Stack for comprehensive system insights. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting code reviews. Passionate about building reliable automation solutions that improve efficiency and deliver exceptional business value.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Flutter Developers
  {
    id: 21,
    initials: 'Ad',
    title: 'Senior Flutter Developer',
    experience: '5 years',
    skills: [  'Flutter',
  'Dart',
  'OOP',

  // State Management
  'Provider',
  'Riverpod',
  'Bloc',
  'GetX',

  // Mobile Development
  'iOS',
  'Android',
  'Responsive UI',
  'Adaptive Design',

  // Backend & APIs
  'REST API',
  'GraphQL',
  'Firebase',
  'Firestore',
  'Authentication (OAuth, JWT)',

  // Architecture
  'Clean Architecture',
  'MVVM',
  'MVC',
  'SOLID Principles'],
    skillCategory: 'Flutter',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior Flutter developer with 5+ years of experience and published apps on both iOS and Android platforms. Expert in cross-platform development with pixel-perfect UIs that deliver native-like performance and user experiences. Proficient in Dart programming language and Flutter framework for building beautiful, responsive mobile applications. Experienced in state management solutions including Provider, Riverpod, and Bloc for predictable application state. Skilled in integrating Firebase services including Authentication, Cloud Firestore, Cloud Functions, and Push Notifications for backend functionality. Proficient in custom widget development, animations, and theming for unique brand experiences. Experienced in RESTful API integration and GraphQL for data synchronization with backend services. Strong understanding of mobile app architecture patterns including MVVM, Clean Architecture, and Repository pattern. Knowledgeable in app store submission processes, code signing, and continuous deployment using Fastlane and CI/CD pipelines. Proficient in testing methodologies including unit testing, widget testing, and integration testing with Flutter Test. Experienced in performance optimization including bundle size reduction, image caching, and memory management. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about creating intuitive mobile experiences that delight users and drive engagement.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 22,
    initials: 'Bh',
    title: 'Flutter & Firebase Specialist',
    experience: '4 years',
    skills: ['Flutter', 'Firebase', 'Dart', 'State Management', 'CI/CD', 'AWS', 'Provider', 'Riverpod', 'Bloc', 'GetX', 'REST API', 'GraphQL'],
    skillCategory: 'Flutter',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Firebase expert with 4+ years of Flutter specialization, focusing on building real-time applications with authentication, cloud functions, and seamless backend integration. Proficient in Firebase services including Authentication, Cloud Firestore, Realtime Database, Cloud Functions, and Cloud Storage for comprehensive backend solutions. Experienced in implementing secure user authentication using email/password, phone, and social login providers. Skilled in real-time data synchronization using Firestore listeners and Realtime Database for collaborative applications. Proficient in serverless architecture using Cloud Functions for backend logic and API endpoints. Experienced in push notifications using Firebase Cloud Messaging for user engagement. Strong understanding of Firebase Security Rules for data protection and access control. Knowledgeable in Firebase Analytics and Crashlytics for monitoring application performance and user behavior. Proficient in testing methodologies including unit testing, integration testing, and security rules testing. Experienced in CI/CD pipelines using GitHub Actions and Fastlane for automated deployment. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building scalable, real-time applications that deliver exceptional user experiences and business value.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 23,
    initials: 'Rh',
    title: 'Flutter UI/UX Developer',
    experience: '4 years',
    skills: ['Flutter', 'Dart', 'Animations', 'Custom Widgets', 'Material Design', 'iOS', 'Android', 'Provider', 'Riverpod', 'Bloc', 'REST API', 'Firebase', 'CI/CD', 'Git'],
    skillCategory: 'Flutter',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'UI/UX focused Flutter developer with 4+ years of experience, specializing in creating beautiful animations, custom widgets, and delightful user experiences that drive engagement and retention. Proficient in Flutter animation APIs including AnimatedContainer, AnimatedOpacity, and custom animation controllers for smooth, performant animations. Experienced in custom widget development using StatelessWidget and StatefulWidget for reusable UI components. Skilled in implementing Material Design and Cupertino design systems for platform-specific user experiences. Proficient in responsive design principles, adaptive layouts, and accessibility features for inclusive applications. Experienced in state management solutions including Provider, Riverpod, and Bloc for predictable application state. Strong understanding of Flutter theming, typography, and color systems for consistent brand experiences. Knowledgeable in performance optimization including widget rebuilding optimization, image caching, and memory management. Proficient in testing methodologies including widget testing, golden tests, and visual regression testing. Experienced in design collaboration using Figma, Sketch, and Adobe XD for seamless designer-developer workflows. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about creating intuitive, beautiful interfaces that make complex functionality simple and enjoyable to use.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 24,
    initials: 'Dp',
    title: 'Flutter & Dart Expert',
    experience: '5 years',
    skills: ['Flutter', 'Dart', 'Bloc', 'GetX', 'REST API', 'GraphQL', 'Provider', 'Riverpod', 'Firebase', 'CI/CD', 'Git', 'iOS', 'Android', 'Material Design', 'Animations', 'Custom Widgets'],
    skillCategory: 'Flutter',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'Dart language expert with 5+ years of Flutter specialization, focusing on state management patterns and architecture for scalable mobile applications. Proficient in Dart programming language including async/await, isolates, and extension methods for efficient code development. Experienced in state management solutions including Bloc, Provider, Riverpod, and GetX for predictable application state. Skilled in implementing clean architecture patterns including MVVM, Repository, and Use Cases for maintainable codebases. Proficient in Flutter navigation using GoRouter and Auto Route for declarative routing. Experienced in local data persistence using Hive, SQLite, and shared preferences for offline-first applications. Strong understanding of Flutter performance optimization including widget rebuilding, lazy loading, and memory management. Knowledgeable in testing methodologies including unit testing, widget testing, and integration testing with Flutter Test. Proficient in CI/CD pipelines using GitHub Actions, Fastlane, and Codemagic for automated deployment. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting code reviews. Passionate about writing clean, well-documented code that scales with business requirements and delivers exceptional user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 25,
    initials: 'Gp',
    title: 'Flutter Mobile Architect',
    experience: '6 years',
    skills: ['Flutter', 'Dart', 'Clean Architecture', 'TDD', 'CI/CD', 'AWS', 'Provider', 'Riverpod', 'Bloc', 'GetX', 'REST API', 'GraphQL', 'Firebase', 'Git', 'iOS', 'Android', 'Material Design', 'Animations', 'Custom Widgets', 'State Management', 'Testing', 'Performance Optimization'],
    skillCategory: 'Flutter',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Mobile architect with 6+ years of Flutter expertise, specializing in clean architecture, test-driven development, and scalable mobile application design. Proficient in implementing Clean Architecture principles including separation of concerns, dependency inversion, and use case-driven development. Experienced in test-driven development using Flutter Test, Mockito, and integration testing for reliable codebases. Skilled in state management patterns including Bloc, Provider, and Riverpod for predictable application state. Proficient in Flutter navigation using GoRouter and Auto Route for declarative routing. Experienced in local data persistence using Hive, SQLite, and shared preferences for offline-first applications. Strong understanding of Flutter performance optimization including widget rebuilding, lazy loading, and memory management. Knowledgeable in CI/CD pipelines using GitHub Actions, Fastlane, and Codemagic for automated deployment. Proficient in code quality tools including Dart analyzer, lints, and SonarQube for maintaining clean codebases. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative leader with experience mentoring developers, conducting code reviews, and establishing mobile development best practices. Passionate about building maintainable, scalable applications that deliver exceptional user experiences and business value.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // .NET Developers
  {
    id: 26,
    initials: 'Sb',
    title: 'Senior .NET Developer',
    experience: '7 years',
    skills: ['.NET', 'C#', 'SQL Server', 'Azure', 'Entity Framework', 'Docker', 'Kubernetes', 'REST APIs', 'Git', 'CI/CD', 'Microservices', 'RabbitMQ', 'Redis', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Terraform', 'Jenkins', 'xUnit', 'Moq'],
    skillCategory: '.NET',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior .NET developer with 7+ years of Azure expertise, specializing in building enterprise applications with high scalability, reliability, and performance requirements. Proficient in C#, .NET Core, and ASP.NET for building robust backend services and web applications. Experienced in Azure cloud services including App Service, Azure Functions, Azure SQL, and Cosmos DB for scalable cloud solutions. Skilled in microservices architecture using Docker, Kubernetes, and Azure Service Bus for distributed systems. Proficient in Entity Framework Core for database access and ORM patterns. Experienced in implementing authentication and authorization using Azure AD, JWT, and OAuth 2.0 for secure application access. Strong understanding of CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins for automated deployment. Knowledgeable in monitoring and logging using Application Insights, Azure Monitor, and ELK Stack for comprehensive system insights. Proficient in testing methodologies including unit testing with xUnit, integration testing, and load testing with Azure Load Testing. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting code reviews. Passionate about building reliable, scalable systems that deliver exceptional performance and business value.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 27,
    initials: 'Hs',
    title: '.NET Core Developer',
    experience: '6 years',
    skills: ['.NET Core', 'C#', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'REST APIs', 'GraphQL', 'Git', 'CI/CD', 'Microservices', 'Redis', 'RabbitMQ', 'MongoDB', 'Terraform', 'Jenkins', 'xUnit', 'Moq', 'Entity Framework', 'Azure'],
    skillCategory: '.NET',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: '.NET Core specialist with 6+ years of microservices experience, focusing on building cross-platform applications that run on Windows, Linux, and macOS. Proficient in C#, .NET Core, and ASP.NET Core for building modern, cloud-native backend services. Experienced in microservices architecture using Docker, Kubernetes, and Azure Service Bus for distributed systems. Skilled in database design and optimization with PostgreSQL, SQL Server, and MongoDB using Entity Framework Core. Proficient in implementing authentication and authorization using Identity Server, JWT, and OAuth 2.0 for secure application access. Experienced in API development using RESTful principles and GraphQL for flexible data access. Strong understanding of CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins for automated deployment. Knowledgeable in monitoring and logging using Application Insights, Prometheus, and Grafana for comprehensive system insights. Proficient in testing methodologies including unit testing with xUnit, integration testing, and load testing with NBomber. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting code reviews. Passionate about building modern, scalable applications that deliver exceptional performance and user experiences across platforms.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 28,
    initials: 'Gs',
    title: '.NET & Blazor Developer',
    experience: '5 years',
    skills: ['.NET', 'Blazor', 'C#', 'SQL Server', 'Azure', 'SignalR', 'REST APIs', 'GraphQL', 'Git', 'CI/CD', 'Docker', 'Kubernetes', 'Entity Framework', 'Redis', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Terraform', 'Jenkins', 'xUnit', 'Moq', 'Microservices'],
    skillCategory: '.NET',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Blazor specialist with 5+ years of full-stack .NET experience, focusing on building interactive web applications with C# and modern web technologies. Proficient in Blazor Server and Blazor WebAssembly for building rich, interactive user interfaces using C# instead of JavaScript. Experienced in .NET Core, ASP.NET Core, and Entity Framework Core for building robust backend services. Skilled in implementing real-time functionality using SignalR for collaborative applications. Proficient in component-based architecture using Blazor components for reusable UI elements. Experienced in state management using Flux/Redux patterns and custom state containers for predictable application state. Strong understanding of JavaScript interop for integrating with existing JavaScript libraries when needed. Knowledgeable in CSS isolation and theming for maintainable styling. Proficient in testing methodologies including unit testing with bUnit, integration testing, and end-to-end testing with Playwright. Experienced in CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins for automated deployment. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building modern, interactive web applications that deliver exceptional user experiences using C# and .NET.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 29,
    initials: 'Kt',
    title: '.NET Backend Engineer',
    experience: '5 years',
    skills: ['.NET', 'C#', 'SQL Server', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes', 'REST APIs', 'GraphQL', 'Git', 'CI/CD', 'Microservices', 'Performance', 'Entity Framework', 'PostgreSQL', 'MongoDB', 'Terraform', 'Jenkins', 'xUnit', 'Moq', 'Azure', 'AWS'],
    skillCategory: '.NET',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'Backend engineer with 5+ years of .NET expertise, focusing on building high-performance APIs and message queue systems for enterprise applications. Proficient in C#, .NET Core, and ASP.NET Core for building scalable backend services. Experienced in message queue systems including RabbitMQ, Apache Kafka, and Azure Service Bus for asynchronous processing. Skilled in database design and optimization with SQL Server, PostgreSQL, and Redis using Entity Framework Core. Proficient in implementing authentication and authorization using JWT, OAuth 2.0, and Identity Server for secure application access. Experienced in microservices architecture using Docker and Kubernetes for scalable deployment. Strong understanding of API design principles including RESTful architecture, versioning, and documentation using Swagger/OpenAPI. Knowledgeable in caching strategies using Redis and Memory Cache for improved application performance. Proficient in testing methodologies including unit testing with xUnit, integration testing, and load testing with NBomber. Experienced in CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins for automated deployment. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building reliable, high-performance backend systems that power exceptional user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 30,
    initials: 'Js',
    title: '.NET & Azure Developer',
    experience: '6 years',
    skills: ['.NET', 'Azure', 'C#', 'SQL Server', 'DevOps', 'ARM Templates', 'REST APIs', 'GraphQL', 'Git', 'CI/CD', 'Docker', 'Kubernetes', 'Microservices', 'Performance', 'Entity Framework', 'Redis', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Terraform', 'Jenkins', 'xUnit', 'Moq', 'AWS', 'Redis'],
    skillCategory: '.NET',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Azure cloud specialist with 6+ years of .NET expertise, focusing on cloud architecture, DevOps practices, and enterprise application modernization. Proficient in Azure services including App Service, Azure Functions, Azure SQL, Cosmos DB, and Azure DevOps for comprehensive cloud solutions. Experienced in infrastructure as code using ARM templates, Terraform, and Bicep for repeatable and version-controlled deployments. Skilled in implementing CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins for automated testing and deployment. Proficient in monitoring and observability using Application Insights, Azure Monitor, and Log Analytics for comprehensive system insights. Experienced in security best practices including Azure AD, Key Vault, and managed identities for secure application access. Strong understanding of microservices architecture using Azure Kubernetes Service, Azure Container Instances, and Docker for scalable deployments. Knowledgeable in cost optimization strategies including reserved instances, spot instances, and auto-scaling for efficient resource utilization. Proficient in disaster recovery and high availability patterns including Azure Site Recovery, traffic manager, and geo-replication. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior developers and conducting architecture reviews. Passionate about building reliable, scalable cloud solutions that deliver exceptional performance and business value.'
    , workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // DevOps Engineers
  {
    id: 31,
    initials: 'Ks',
    title: 'Senior DevOps Engineer',
    experience: '7 years',
    skills: ['AWS',
  'Azure',
  'GCP',
  'Multi-Cloud Architecture',

  // Containers & Orchestration
  'Docker',
  'Kubernetes',
  'Helm',
  'Kubernetes Security',

  // Infrastructure as Code
  'Terraform',
  'AWS CloudFormation',
  'Infrastructure as Code (IaC)',

  // CI/CD & Automation
  'Jenkins',
  'GitHub Actions',
  'GitLab CI/CD',
  'ArgoCD',
  'CI/CD Pipelines',

  // Scripting & Programming
  'Python',
  'Shell Scripting',
  'Bash',

  // Configuration Management
  'Ansible',
  'Puppet',

  // Monitoring & Logging
  'Prometheus',
  'Grafana',
  'ELK Stack (Elasticsearch, Logstash, Kibana)',
  'CloudWatch',
  'Datadog',

  // Networking & Security
  'Linux',
  'Networking',
  'VPC',
  'IAM',
  'SSL/TLS',
  'Secrets Management (Vault)',
  'DevSecOps',

  // Performance & Scalability
  'Auto Scaling',
  'Load Balancing',
  'High Availability',
  'Disaster Recovery',

  // Containers & Registry
  'Docker Hub',
  'Amazon ECR',
  'Artifact Management',

  // Architecture & Practices
  'Microservices Architecture',
  'Event-Driven Architecture',
  'System Design',
  'Site Reliability Engineering (SRE)',
],
    skillCategory: 'DevOps',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior DevOps engineer with 7+ years of AWS expertise, specializing in building and maintaining CI/CD pipelines for enterprise applications. Proficient in infrastructure as code using Terraform, CloudFormation, and Ansible for repeatable and version-controlled deployments. Experienced in containerization with Docker and orchestration with Kubernetes for scalable and resilient application deployments. Skilled in implementing monitoring and observability using Prometheus, Grafana, and ELK Stack for comprehensive system insights. Proficient in security best practices including IAM policies, security groups, and encryption for secure cloud infrastructure. Experienced in cost optimization strategies including reserved instances, spot instances, and auto-scaling for efficient resource utilization. Strong understanding of networking concepts including VPC, subnets, load balancers, and DNS for robust cloud architectures. Knowledgeable in disaster recovery and high availability patterns including multi-region deployments and automated failover. Proficient in scripting languages including Python, Bash, and PowerShell for automation tasks. Experienced in Agile methodologies including Scrum and Kanban for efficient project delivery. Collaborative team player with excellent communication skills, experienced in mentoring junior engineers and conducting infrastructure reviews. Passionate about building reliable, scalable infrastructure that enables rapid development and deployment.'
    , workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 32,
    initials: 'Ls',
    title: 'DevOps & SRE Engineer',
    experience: '6 years',
    skills: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'AWS', 'Terraform', 'Jenkins', 'Git', 'CI/CD', 'Python', 'Ansible', 'ELK Stack', 'PagerDuty', 'Incident Response', 'Chaos Engineering', 'SLIs', 'SLOs', 'Error Budgets'],
    skillCategory: 'DevOps',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Site Reliability Engineer with 6+ years of DevOps expertise, specializing in monitoring, alerting, and incident response for mission-critical systems. Proficient in implementing observability using Prometheus, Grafana, PagerDuty, and ELK Stack for comprehensive system monitoring and alerting. Experienced in incident management processes including post-mortems, root cause analysis, and blameless culture for continuous improvement. Skilled in automation using Python, Bash, and Go for reducing toil and improving operational efficiency. Proficient in container orchestration with Kubernetes including service mesh, ingress controllers, and horizontal pod autoscaling. Experienced in infrastructure as code using Terraform and Helm for repeatable and version-controlled deployments. Strong understanding of SLIs, SLOs, and error budgets for measuring and maintaining service reliability. Knowledgeable in chaos engineering practices using tools like Chaos Monkey and Litmus for testing system resilience. Proficient in capacity planning and performance optimization for handling traffic spikes and growth. Experienced in on-call rotations and incident command structures for effective incident response. Collaborative team player with excellent communication skills, experienced in working with development teams to improve system reliability. Passionate about building resilient systems that deliver exceptional user experiences and minimize downtime.'
    , workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 33,
    initials: 'Mt',
    title: 'Cloud DevOps Engineer',
    experience: '5 years',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Ansible', 'Python', 'Terraform', 'CloudFormation', 'Jenkins', 'Git', 'CI/CD', 'Prometheus', 'Grafana', 'ELK Stack', 'Linux', 'Shell Scripting', 'Networking', 'Security'],
    skillCategory: 'DevOps',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Multi-cloud DevOps engineer with 5+ years of expertise in AWS and Azure, specializing in infrastructure automation and cloud-native solutions. Proficient in designing and implementing CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions for automated testing and deployment. Experienced in infrastructure as code using Terraform, CloudFormation, and Pulumi for repeatable and version-controlled multi-cloud deployments. Skilled in containerization with Docker and orchestration with Kubernetes including EKS, AKS, and GKE for scalable application deployments. Proficient in monitoring and logging using CloudWatch, Azure Monitor, Prometheus, and ELK Stack for comprehensive system observability. Strong understanding of networking concepts including VPC, VPN, load balancers, and DNS across multiple cloud providers. Knowledgeable in security best practices including IAM, security groups, encryption, and compliance frameworks like SOC 2 and ISO 27001. Proficient in cost optimization strategies including reserved instances, spot instances, and right-sizing for efficient resource utilization. Experienced in disaster recovery and business continuity planning including backup strategies and multi-region deployments. Skilled in scripting languages including Python, Bash, and PowerShell for automation and tooling. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building reliable, scalable infrastructure that enables rapid innovation and business growth.'
    , workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 34,
    initials: 'Ns',
    title: 'DevOps & CI/CD Specialist',
    experience: '5 years',
    skills: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'CircleCI', 'Ansible', 'Python', 'Git', 'CI/CD', 'Prometheus', 'Grafana', 'ELK Stack', 'Linux', 'Shell Scripting', 'Security'],
    skillCategory: 'DevOps',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'CI/CD specialist with 5+ years of expertise in multiple platforms including Jenkins, GitLab CI, GitHub Actions, and CircleCI, focusing on automating deployment pipelines for enterprise applications. Proficient in designing and implementing end-to-end CI/CD workflows that include automated testing, security scanning, and deployment to multiple environments. Experienced in infrastructure as code using Terraform, CloudFormation, and Ansible for repeatable and version-controlled deployments. Skilled in containerization with Docker and orchestration with Kubernetes for scalable and resilient application deployments. Proficient in implementing blue-green deployments, canary releases, and rolling updates for zero-downtime deployments. Strong understanding of GitOps practices using ArgoCD and Flux for declarative continuous delivery. Knowledgeable in security best practices including secret management, vulnerability scanning, and compliance automation. Proficient in monitoring and observability using Prometheus, Grafana, and ELK Stack for comprehensive pipeline insights. Experienced in artifact management using Nexus, Artifactory, and container registries for secure artifact storage. Skilled in scripting languages including Python, Bash, and Groovy for pipeline automation and tooling. Collaborative team player with excellent communication skills, experienced in Agile methodologies and DevOps culture. Passionate about building efficient, reliable pipelines that enable rapid and safe software delivery.'
    , workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 35,
    initials: 'Sg',
    title: 'DevSecOps Engineer',
    experience: '6 years',
    skills: ['Docker', 'Kubernetes', 'Security', 'AWS', 'Terraform', 'Python', 'SonarQube', 'Snyk', 'OWASP ZAP', 'Trivy', 'HashiCorp Vault', 'AWS Secrets Manager', 'IAM', 'Security Groups', 'Encryption', 'Compliance', 'SOC 2', 'ISO 27001', 'GDPR', 'Incident Response'],
    skillCategory: 'DevOps',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Security-focused DevOps engineer with 6+ years of experience implementing security best practices in CI/CD pipelines and cloud infrastructure. Proficient in DevSecOps methodologies including shift-left security, automated vulnerability scanning, and compliance as code. Experienced in implementing security controls using tools like SonarQube, Snyk, OWASP ZAP, and Trivy for comprehensive security coverage. Skilled in container security including image scanning, runtime protection, and secrets management using HashiCorp Vault and AWS Secrets Manager. Proficient in infrastructure security including network segmentation, encryption at rest and in transit, and identity and access management using AWS IAM and Azure AD. Strong understanding of compliance frameworks including SOC 2, ISO 27001, and GDPR for regulatory compliance. Knowledgeable in incident response procedures including threat detection, containment, and remediation. Proficient in security monitoring using SIEM tools including Splunk, ELK Stack, and AWS Security Hub for comprehensive threat detection. Experienced in implementing security policies as code using Open Policy Agent and AWS Config for automated compliance checking. Skilled in penetration testing and vulnerability assessment for identifying security weaknesses. Collaborative team player with excellent communication skills, experienced in security training and awareness programs. Passionate about building secure systems that protect sensitive data and maintain customer trust.'
    , workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // AI/ML Engineers
  {
    id: 36,
    initials: 'Wg',
    title: 'Senior AI/ML Engineer',
    experience: '6 years',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'AWS', 'Scikit-learn', 'Pandas', 'NumPy', 'Deep Learning', 'CNNs', 'RNNs', 'Transformers', 'GANs', 'MLOps', 'MLflow', 'Docker', 'Kubernetes', 'SageMaker', 'Azure ML', 'Google AI Platform'],
    skillCategory: 'AI/ML',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior AI/ML engineer with 6+ years of expertise in deep learning, computer vision, and natural language processing, specializing in building production ML models for various applications. Proficient in Python and ML frameworks including TensorFlow, PyTorch, and scikit-learn for developing and deploying machine learning solutions. Experienced in designing and implementing end-to-end ML pipelines including data preprocessing, feature engineering, model training, and deployment. Skilled in deep learning architectures including CNNs, RNNs, Transformers, and GANs for solving complex business problems. Proficient in MLOps practices including model versioning, experiment tracking with MLflow, and automated retraining pipelines. Strong understanding of cloud ML services including AWS SageMaker, Azure ML, and Google AI Platform for scalable model deployment. Knowledgeable in data engineering including ETL pipelines, data warehousing, and big data processing using Spark and Hadoop. Proficient in model optimization including quantization, pruning, and knowledge distillation for efficient inference. Experienced in deploying models using Docker, Kubernetes, and serverless architectures for production workloads. Skilled in monitoring model performance including drift detection, A/B testing, and canary deployments. Collaborative team player with excellent communication skills, experienced in translating business requirements into technical solutions. Passionate about building intelligent systems that deliver measurable business value and drive innovation.'
    , workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 37,
    initials: 'Qs',
    title: 'Machine Learning Engineer',
    experience: '5 years',
    skills: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'SQL', 'Docker', 'NumPy', 'XGBoost', 'Feature Engineering', 'Model Selection', 'Hyperparameter Tuning', 'Recommendation Systems', 'Time Series', 'ARIMA', 'Prophet', 'LSTM', 'Matplotlib', 'Seaborn', 'Plotly', 'PostgreSQL', 'MongoDB', 'Redis', 'Flask', 'FastAPI', 'A/B Testing'],
    skillCategory: 'AI/ML',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'ML engineer with 5+ years of strong statistical background, specializing in building recommendation systems, predictive models, and data-driven solutions for enterprise applications. Proficient in Python and ML libraries including scikit-learn, pandas, NumPy, and XGBoost for developing robust machine learning solutions. Experienced in feature engineering, model selection, and hyperparameter tuning for optimizing model performance. Skilled in building recommendation engines using collaborative filtering, content-based filtering, and hybrid approaches for personalized user experiences. Proficient in time series forecasting using ARIMA, Prophet, and LSTM models for demand planning and financial predictions. Strong understanding of statistical concepts including hypothesis testing, regression analysis, and Bayesian inference for data-driven decision making. Knowledgeable in data visualization using Matplotlib, Seaborn, and Plotly for communicating insights to stakeholders. Proficient in SQL and NoSQL databases including PostgreSQL, MongoDB, and Redis for efficient data storage and retrieval. Experienced in deploying models using Flask, FastAPI, and Docker for production-ready APIs. Skilled in A/B testing and experimentation frameworks for measuring model impact on business metrics. Collaborative team player with excellent communication skills, experienced in working with cross-functional teams to translate business problems into ML solutions. Passionate about leveraging data and machine learning to drive business growth and innovation.'
    , workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 38,
    initials: 'Ru',
    title: 'NLP Engineer',
    experience: '5 years',
    skills: ['Python', 'BERT', 'Transformers', 'SpaCy', 'FastAPI', 'Docker', 'NLTK', 'Hugging Face', 'Rasa', 'Dialogflow', 'Word2Vec', 'GloVe', 'Named Entity Recognition', 'Sentiment Analysis', 'Text Classification', 'Attention Mechanisms', 'Transfer Learning', 'Kubernetes', 'Elasticsearch', 'Vector Databases', 'Multilingual NLP'],
    skillCategory: 'AI/ML',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'NLP specialist with 5+ years of expertise in transformer models, specializing in building chatbots, text analysis systems, and language understanding solutions for enterprise applications. Proficient in Python and NLP libraries including spaCy, NLTK, Hugging Face Transformers, and BERT for developing advanced language models. Experienced in building conversational AI systems using Rasa, Dialogflow, and custom transformer architectures for intelligent chatbots. Skilled in text preprocessing, tokenization, and embedding techniques including Word2Vec, GloVe, and contextual embeddings for semantic understanding. Proficient in named entity recognition, sentiment analysis, and text classification for extracting insights from unstructured data. Strong understanding of attention mechanisms, self-attention, and multi-head attention for building state-of-the-art language models. Knowledgeable in transfer learning and fine-tuning pre-trained models for domain-specific NLP tasks. Proficient in deploying NLP models using FastAPI, Docker, and Kubernetes for production-ready APIs. Experienced in building search engines and information retrieval systems using Elasticsearch and vector databases. Skilled in multilingual NLP including cross-lingual transfer learning and multilingual transformers. Collaborative team player with excellent communication skills, experienced in working with product teams to define NLP requirements. Passionate about building intelligent language systems that understand and generate human-like text.'
    , workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 39,
    initials: 'Ks',
    title: 'Computer Vision Engineer',
    experience: '5 years',
    skills: ['Python', 'OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'Docker', 'Image Classification', 'Object Detection', 'Image Segmentation', 'Face Recognition', 'OCR', 'Video Analysis', 'Deep Learning', 'CNNs', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'MLOps', 'Model Deployment'],
    skillCategory: 'AI/ML',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
description: `
Computer Vision Specialist with strong expertise in designing, developing, and deploying intelligent vision-based systems for real-world applications.
Experienced in building end-to-end pipelines for image classification, object detection, and video analytics using deep learning techniques.
Proficient in frameworks such as TensorFlow, PyTorch, and OpenCV for developing scalable and high-performance computer vision models.
Hands-on experience with state-of-the-art architectures including CNNs, ResNet, EfficientNet, YOLO, SSD, and Faster R-CNN.
Developed real-time video processing systems capable of detecting, tracking, and analyzing objects with high accuracy and low latency.
Strong understanding of image preprocessing, augmentation, and feature extraction techniques to improve model performance.
Experience in training, fine-tuning, and optimizing deep learning models for production environments.
Worked on object tracking algorithms such as SORT and Deep SORT for multi-object tracking in dynamic environments.
Proficient in handling large-scale datasets and annotation tools for supervised learning tasks.
Implemented transfer learning techniques to reduce training time and improve model generalization.
Experience with edge deployment using TensorFlow Lite and ONNX for running models on resource-constrained devices.
Optimized models for performance using quantization, pruning, and hardware acceleration (GPU/TPU).
Strong background in mathematics including linear algebra, probability, and optimization techniques.
Built scalable APIs and backend services to serve machine learning models in production.
Integrated computer vision systems with cloud platforms such as AWS and GCP for scalable processing.
Experience in real-time streaming and video pipelines using tools like OpenCV and FFmpeg.
Familiar with 3D vision concepts, image segmentation, and pose estimation techniques.
Developed solutions for use cases like surveillance, facial recognition, autonomous systems, and retail analytics.
Strong debugging and problem-solving skills in handling model drift and production issues.
Experience with version control, experiment tracking, and model lifecycle management tools.
Collaborated with cross-functional teams including data engineers and product managers to deliver AI solutions.
Knowledge of MLOps practices including CI/CD for machine learning pipelines.
Continuously researching and implementing latest advancements in computer vision and deep learning.
Passionate about building intelligent systems that solve complex real-world problems using AI.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 40,
    initials: 'Ts',
    title: 'LLM/RAG Engineer',
    experience: '4 years',
    skills: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI', 'Docker', 'RAG', 'Embeddings', 'Pinecone', 'Weaviate', 'ChromaDB', 'Prompt Engineering', 'Fine-tuning', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'MLOps', 'Model Deployment', 'Chatbots', 'Document Q&A'],
    skillCategory: 'AI/ML',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
LLM Specialist with strong expertise in building intelligent AI systems using Large Language Models and Retrieval-Augmented Generation (RAG) architectures.
Experienced in designing and deploying scalable chatbot and document question-answering systems for real-world applications.
Proficient in working with modern LLM frameworks such as LangChain, LlamaIndex, and OpenAI APIs for building advanced AI workflows.
Hands-on experience in implementing RAG pipelines involving document ingestion, chunking, embedding, and semantic retrieval.
Skilled in vector databases such as Pinecone, Weaviate, and FAISS for efficient similarity search and knowledge retrieval.
Strong understanding of prompt engineering techniques to optimize model responses and improve accuracy.
Experience in fine-tuning and customizing LLMs for domain-specific use cases.
Built conversational AI systems with context awareness, memory handling, and multi-turn dialogue capabilities.
Expertise in integrating LLMs with structured and unstructured data sources including PDFs, databases, and APIs.
Experience in developing real-time chat applications with streaming responses and low-latency interactions.
Proficient in backend development using Python and FastAPI for serving AI models and APIs.
Worked on building scalable and secure AI systems with authentication, rate limiting, and monitoring.
Experience in deploying LLM applications on cloud platforms such as AWS and GCP.
Implemented caching strategies and optimization techniques to reduce latency and cost in LLM-based systems.
Strong understanding of embeddings, similarity search, and ranking mechanisms in RAG architectures.
Experience with evaluation frameworks to measure LLM performance, accuracy, and hallucination reduction.
Built tools for document summarization, semantic search, and knowledge base automation.
Familiar with multi-modal models and handling text, image, and structured data inputs.
Experience in integrating third-party APIs and tools to extend chatbot capabilities.
Knowledge of MLOps practices for model deployment, monitoring, and continuous improvement.
Worked in Agile environments collaborating with cross-functional teams to deliver AI-driven solutions.
Continuously exploring advancements in generative AI, LLM optimization, and scalable AI architectures.
Passionate about building intelligent, reliable, and production-ready AI systems using cutting-edge technologies.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Data Science Engineers
  {
    id: 41,
    initials: 'Us',
    title: 'Senior Data Scientist',
    experience: '7 years',
    skills: ['Python', 'R', 'SQL', 'TensorFlow', 'Tableau', 'AWS', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Statistical Analysis', 'Hypothesis Testing', 'Regression', 'Classification', 'Clustering', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps', 'Docker', 'Kubernetes'],
    skillCategory: 'Data Science',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
Senior Data Scientist with extensive experience in building data-driven solutions and delivering actionable insights for complex business problems.
Proficient in predictive analytics, statistical modeling, and machine learning techniques to drive strategic decision-making.
Hands-on expertise in developing end-to-end data science pipelines from data collection and preprocessing to model deployment and monitoring.
Strong experience working with large-scale structured and unstructured datasets using tools like Python, SQL, and big data technologies.
Skilled in machine learning frameworks such as Scikit-learn, TensorFlow, and PyTorch for building scalable models.
Developed predictive models for forecasting, classification, and recommendation systems across various domains.
Expertise in feature engineering, data cleaning, and exploratory data analysis (EDA) to extract meaningful insights.
Experience with advanced statistical methods including regression, hypothesis testing, and time-series analysis.
Built and deployed models into production environments using REST APIs and cloud platforms such as AWS and GCP.
Strong background in data visualization using tools like Tableau, Power BI, and Matplotlib to communicate insights effectively.
Worked on real-world business problems including customer segmentation, churn prediction, fraud detection, and demand forecasting.
Experience in A/B testing and experimentation frameworks to validate business hypotheses.
Optimized model performance using hyperparameter tuning, cross-validation, and ensemble techniques.
Proficient in working with big data tools such as Apache Spark and Hadoop ecosystems.
Collaborated with cross-functional teams including product managers, engineers, and stakeholders to deliver impactful solutions.
Experience in building automated data pipelines and workflows for continuous data processing.
Strong understanding of data governance, data quality, and best practices in data management.
Implemented model monitoring and retraining strategies to ensure long-term performance and reliability.
Experience working with Fortune 500 clients, delivering scalable and high-impact analytics solutions.
Knowledge of MLOps practices including CI/CD for machine learning models.
Strong problem-solving skills with a focus on delivering measurable business value.
Continuously learning and applying the latest advancements in data science, AI, and machine learning.
Passionate about transforming data into actionable insights and driving innovation through analytics.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 42,
    initials: 'Ds',
    title: 'Data Analyst & Scientist',
    experience: '5 years',
    skills: ['Python', 'SQL', 'Pandas', 'Tableau', 'Power BI', 'Excel', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Statistical Analysis', 'Data Cleaning', 'Data Visualization', 'ETL', 'Data Warehousing', 'Business Intelligence', 'Reporting', 'Dashboards', 'A/B Testing'],
    skillCategory: 'Data Science',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
description: `
Data Analyst with strong expertise in transforming raw data into meaningful insights through advanced visualization and reporting techniques.
Experienced in analyzing large datasets to identify trends, patterns, and actionable business opportunities.
Proficient in data visualization tools such as Tableau, Power BI, and Looker for creating interactive dashboards and reports.
Skilled in writing complex SQL queries for data extraction, transformation, and analysis from relational databases.
Strong experience in data cleaning, preprocessing, and validation to ensure data accuracy and reliability.
Hands-on experience with Excel including advanced functions, pivot tables, and data modeling.
Familiar with Python (Pandas, NumPy, Matplotlib, Seaborn) for data analysis and visualization.
Expertise in building automated reporting solutions to streamline business intelligence workflows.
Worked closely with stakeholders to understand business requirements and translate them into data-driven solutions.
Experience in creating KPI dashboards to track performance and support strategic decision-making.
Strong understanding of business intelligence concepts and data warehousing principles.
Experience with ETL processes and tools for integrating data from multiple sources.
Performed exploratory data analysis (EDA) to uncover insights and support business strategies.
Developed reports for various domains including sales, marketing, finance, and operations.
Experience in forecasting and trend analysis to support planning and budgeting.
Strong communication skills with the ability to present complex data in a simple and understandable format.
Collaborated with cross-functional teams to deliver insights that drive business growth.
Knowledge of A/B testing and basic statistical analysis for data-driven experimentation.
Ensured data integrity and consistency across reporting systems.
Experience working in Agile environments with iterative data delivery processes.
Continuously improving dashboards and reports based on user feedback and business needs.
Strong problem-solving mindset with attention to detail and data accuracy.
Passionate about leveraging data visualization to tell compelling stories and drive decision-making.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 43,
    initials: 'Ak',
    title: 'Big Data Engineer',
    experience: '6 years',
    skills: ['Python', 'Spark', 'Hadoop', 'Kafka', 'AWS', 'SQL', 'PySpark', 'Data Pipelines', 'ETL', 'Data Warehousing', 'Data Lake', 'S3', 'Redshift', 'Glue', 'Athena', 'EMR', 'Databricks', 'Snowflake', 'Airflow', 'dbt', 'Data Modeling', 'Data Quality', 'Monitoring', 'Logging'],
    skillCategory: 'Data Science',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Big data engineer with 6+ years of extensive experience in building and optimizing distributed computing systems capable of processing petabytes of data at scale. Expert in Apache Spark and PySpark for large-scale data processing, with deep knowledge of RDD transformations, DataFrame APIs, and Spark SQL optimization techniques. Proficient in designing and implementing robust ETL pipelines using Apache Airflow for workflow orchestration and scheduling. Experienced in building data lakes on AWS S3 with Glue catalog integration and Athena for serverless queries. Skilled in data warehousing solutions using Amazon Redshift and Snowflake for analytics workloads, including schema design, distribution keys, and performance tuning. Proficient in real-time data streaming using Apache Kafka for event-driven architectures and near real-time analytics. Experienced in big data infrastructure on AWS EMR and Databricks for managed Spark clusters with auto-scaling capabilities. Skilled in data modeling using dbt for transformation and business intelligence workflows. Strong understanding of data quality frameworks including Great Expectations and validation rules for ensuring data integrity. Proficient in monitoring and logging using CloudWatch, Prometheus, and Grafana for comprehensive system observability. Knowledgeable in infrastructure as code using Terraform and CloudFormation for reproducible environments. Experienced in CI/CD pipelines for data engineering using GitHub Actions and Jenkins. Strong understanding of security best practices including IAM roles, encryption at rest and in transit, and VPC configurations. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building scalable, reliable data infrastructure that powers analytics and machine learning at enterprise scale.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 44,
    initials: 'Ak',
    title: 'Data Engineer',
    experience: '5 years',
    skills: ['Python', 'SQL', 'Airflow', 'Snowflake', 'dbt', 'AWS', 'PySpark', 'Data Pipelines', 'ETL', 'Data Warehousing', 'Data Lake', 'S3', 'Redshift', 'Glue', 'Athena', 'EMR', 'Databricks', 'Kafka', 'Spark', 'Data Modeling', 'Data Quality', 'Monitoring', 'Logging', 'Terraform', 'Docker'],
    skillCategory: 'Data Science',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'Data engineer with 5+ years of expertise in modern data stack, specializing in building scalable data warehouses and robust ETL pipelines for enterprise analytics. Proficient in Python and SQL for data transformation and pipeline development. Experienced in orchestrating workflows using Apache Airflow for scheduling and managing complex data dependencies. Skilled in Snowflake and dbt for cloud-based data warehousing and transformation. Proficient in AWS data services including S3, Redshift, Glue, and Athena for serverless data processing. Experienced in PySpark for large-scale data processing and distributed computing. Strong understanding of data modeling principles including star schema, snowflake schema, and data vault. Skilled in implementing data quality frameworks and monitoring using Great Expectations. Proficient in containerization with Docker and infrastructure as code using Terraform. Experienced in CI/CD pipelines for data engineering using GitHub Actions and Jenkins. Strong understanding of data governance, cataloging, and metadata management. Knowledgeable in real-time data streaming using Kafka for event-driven architectures. Collaborative team player with excellent communication skills, experienced in Agile methodologies and cross-functional team coordination. Passionate about building reliable, scalable data infrastructure that powers analytics and business intelligence.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 45,
    initials: 'Ys',
    title: 'ML Data Scientist',
    experience: '5 years',
    skills: ['Python', 'TensorFlow', 'SQL', 'Pandas', 'Scikit-learn', 'Docker', 'NumPy', 'Keras', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps', 'MLflow', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Model Deployment', 'A/B Testing', 'Feature Engineering', 'Hyperparameter Tuning', 'Cross-validation', 'Ensemble Methods'],
    skillCategory: 'Data Science',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'ML-focused data scientist with 5+ years of strong engineering skills, specializing in building and deploying machine learning models to production. Proficient in Python, TensorFlow, and scikit-learn for developing robust ML solutions. Experienced in deep learning architectures including CNNs and RNNs for computer vision and NLP applications. Skilled in feature engineering, model selection, and hyperparameter tuning for optimal performance. Proficient in MLOps practices including model versioning with MLflow, containerization with Docker, and deployment using Kubernetes. Experienced in AWS, Azure, and GCP ML services for scalable model serving. Strong understanding of A/B testing and experimentation frameworks for measuring model impact. Skilled in data preprocessing using Pandas and NumPy for efficient data handling. Proficient in model optimization including quantization and pruning for edge deployment. Collaborative team player with excellent communication skills, experienced in translating business requirements into ML solutions. Passionate about building production-ready ML systems that deliver measurable business value.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Cloud Engineers
  {
    id: 46,
    initials: 'Ws',
    title: 'Senior Cloud Architect',
    experience: '8 years',
    skills: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'Python', 'GCP', 'CloudFormation', 'Ansible', 'Jenkins', 'Git', 'CI/CD', 'Prometheus', 'Grafana', 'ELK Stack', 'Linux', 'Shell Scripting', 'Networking', 'Security', 'Cost Optimization', 'Disaster Recovery', 'High Availability'],
    skillCategory: 'Cloud',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Cloud architect with 8+ years of multi-cloud expertise, specializing in designing and implementing enterprise-grade cloud solutions across AWS, Azure, and GCP. Proficient in infrastructure as code using Terraform and CloudFormation for repeatable deployments. Experienced in Kubernetes orchestration for container management and microservices architecture. Skilled in designing high-availability architectures with disaster recovery strategies. Proficient in security best practices including IAM, network security, and encryption at rest and in transit. Experienced in cost optimization strategies including reserved instances and right-sizing for efficient resource utilization. Strong understanding of DevOps practices including CI/CD pipelines using Jenkins, GitHub Actions, and GitLab. Knowledgeable in monitoring and observability using Prometheus, Grafana, and ELK Stack for comprehensive system insights. Proficient in networking concepts including VPC, subnets, load balancers, and DNS for robust cloud architectures. Collaborative leader with experience mentoring teams and conducting architecture reviews. Passionate about building scalable, reliable cloud infrastructure that enables business innovation.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 47,
    initials: 'Au',
    title: 'AWS Solutions Architect',
    experience: '6 years',
    skills: ['AWS', 'Terraform', 'CloudFormation', 'Lambda', 'DynamoDB', 'Python', 'S3', 'EC2', 'RDS', 'ECS', 'EKS', 'API Gateway', 'SQS', 'SNS', 'Step Functions', 'Jenkins', 'Git', 'CI/CD', 'Docker', 'Kubernetes', 'Monitoring', 'Logging', 'Security', 'Cost Optimization'],
    skillCategory: 'Cloud',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'AWS certified solutions architect with 6+ years of specialization in designing and implementing cloud-native solutions on AWS. Proficient in serverless architecture using Lambda, API Gateway, and Step Functions for event-driven applications. Experienced in building scalable applications using EC2, ECS, and EKS for containerized workloads. Skilled in database services including DynamoDB, RDS, and ElastiCache for optimal data storage. Proficient in messaging services including SQS and SNS for asynchronous communication. Strong understanding of security best practices including IAM roles, security groups, and encryption. Experienced in infrastructure as code using Terraform and CloudFormation for repeatable deployments. Knowledgeable in cost optimization strategies including Lambda concurrency and S3 lifecycle policies. Proficient in monitoring using CloudWatch and CloudTrail for operational insights. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building resilient, cost-effective cloud solutions on AWS.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 48,
    initials: 'Pt',
    title: 'Azure Cloud Engineer',
    experience: '5 years',
    skills: ['Azure', 'ARM Templates', 'Terraform', 'Kubernetes', '.NET', 'Python', 'Azure DevOps', 'Azure Functions', 'Azure SQL', 'Cosmos DB', 'App Service', 'Azure Monitor', 'Application Insights', 'Jenkins', 'Git', 'CI/CD', 'Docker', 'Linux', 'Shell Scripting', 'Networking', 'Security', 'Cost Optimization'],
    skillCategory: 'Cloud',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Azure cloud specialist with 5+ years of expertise in designing and implementing cloud infrastructure solutions. Proficient in Azure services including App Service, Azure Functions, Azure SQL, and Cosmos DB for comprehensive cloud solutions. Experienced in infrastructure as code using ARM templates and Terraform for repeatable deployments. Skilled in Azure Kubernetes Service for container orchestration and microservices architecture. Proficient in Azure DevOps for CI/CD pipelines and release management. Strong understanding of hybrid cloud solutions integrating on-premises with Azure resources. Experienced in Azure Monitor and Application Insights for comprehensive monitoring and observability. Knowledgeable in Azure security best practices including Azure AD, Key Vault, and managed identities. Proficient in Azure networking including Virtual Networks, VPN Gateway, and ExpressRoute. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building scalable, secure Azure cloud solutions.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 49,
    initials: 'Se',
    title: 'GCP Cloud Engineer',
    experience: '5 years',
    skills: ['GCP', 'Kubernetes', 'Terraform', 'Docker', 'Python', 'BigQuery', 'Cloud Functions', 'Cloud Run', 'Cloud SQL', 'Cloud Storage', 'Pub/Sub', 'Dataflow', 'Dataproc', 'Jenkins', 'Git', 'CI/CD', 'Linux', 'Shell Scripting', 'Networking', 'Security', 'Cost Optimization', 'Monitoring', 'Logging'],
    skillCategory: 'Cloud',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'GCP cloud specialist with 5+ years of Kubernetes and data analytics expertise, specializing in building cloud-native development solutions. Proficient in Google Cloud Platform services including GKE, Cloud Run, and Cloud Functions. Experienced in infrastructure as code using Terraform for repeatable deployments. Skilled in BigQuery and data analytics for large-scale data processing. Proficient in Docker and Kubernetes for container orchestration. Strong understanding of networking and security best practices. Experienced in CI/CD using Jenkins and GitHub Actions. Knowledgeable in monitoring using Cloud Monitoring and Logging. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building scalable GCP solutions.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 50,
    initials: 'Us',
    title: 'Cloud Security Engineer',
    experience: '6 years',
    skills: ['AWS', 'Security', 'Terraform', 'Docker', 'Kubernetes', 'Python', 'IAM', 'Security Groups', 'Encryption', 'Compliance', 'SOC 2', 'ISO 27001', 'GDPR', 'OWASP', 'Vulnerability Scanning', 'Penetration Testing', 'Incident Response', 'Jenkins', 'Git', 'CI/CD', 'Linux', 'Shell Scripting', 'Networking', 'Monitoring', 'Logging'],
    skillCategory: 'Cloud',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Cloud security specialist with 6+ years of expertise in implementing security best practices across AWS and Azure. Proficient in IAM policies, security groups, and network segmentation for secure cloud architectures. Experienced in encryption at rest and in transit using KMS and SSL/TLS certificates. Skilled in compliance frameworks including SOC 2, ISO 27001, and GDPR for regulatory compliance. Proficient in vulnerability scanning and penetration testing for identifying security weaknesses. Experienced in security monitoring using CloudTrail, GuardDuty, and Azure Security Center. Strong understanding of incident response procedures and threat mitigation strategies. Knowledgeable in security as code using Terraform and AWS Config for automated compliance checking. Proficient in secrets management using HashiCorp Vault and AWS Secrets Manager. Collaborative team player with excellent communication skills, experienced in security audits and risk assessments. Passionate about building secure cloud environments that protect sensitive data.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Blockchain Developers
  {
    id: 51,
    initials: 'St',
    title: 'Senior Blockchain Developer',
    experience: '5 years',
    skills: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts', 'Node.js', 'React'],
    skillCategory: 'Blockchain',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior blockchain developer with 5+ years of Ethereum expertise, specializing in building DeFi protocols and NFT marketplaces. Proficient in Solidity for smart contract development with security best practices. Experienced in Web3.js and Ethers.js for blockchain interaction and wallet integration. Skilled in ERC-20, ERC-721, and ERC-1155 token standards for various blockchain assets. Proficient in decentralized exchange protocols including Uniswap and SushiSwap integrations. Experienced in building NFT marketplaces with IPFS storage for immutable metadata. Strong understanding of gas optimization and smart contract security patterns. Knowledgeable in Layer 2 solutions including Polygon and Arbitrum for scalability. Proficient in testing frameworks including Hardhat and Foundry for smart contract testing. Collaborative team player with excellent communication skills, experienced in whitepaper analysis and tokenomics design. Passionate about building decentralized applications that transform industries.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 52,
    initials: 'Ko',
    title: 'Smart Contract Developer',
    experience: '4 years',
    skills: ['Solidity', 'Ethereum', 'Hardhat', 'OpenZeppelin', 'Web3.js', 'React'],
    skillCategory: 'Blockchain',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Smart contract specialist with 4+ years of security audit experience, focusing on building and auditing secure DeFi protocols. Proficient in Solidity with deep understanding of gas optimization and security patterns. Experienced in OpenZeppelin contracts for secure, battle-tested implementations. Skilled in writing comprehensive test suites using Hardhat and Foundry. Proficient in security analysis tools including Slither and Mythril for vulnerability detection. Experienced in multiple DeFi protocol audits with documented security findings. Strong understanding of common vulnerabilities including reentrancy, front-running, and flash loan attacks. Knowledgeable in upgradeable proxy patterns and diamond standard for modular contracts. Proficient in gas estimation and optimization techniques for cost-effective deployments. Collaborative team player with excellent communication skills, experienced in presenting audit findings. Passionate about building secure, reliable smart contracts that protect user funds.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 53,
    initials: 'Mu',
    title: 'Web3 Full Stack Developer',
    experience: '4 years',
    skills: ['Solidity', 'React', 'Node.js', 'Web3.js', 'IPFS', 'The Graph'],
    skillCategory: 'Blockchain',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Full-stack Web3 developer with 4+ years of expertise in building decentralized applications from concept to deployment. Proficient in Solidity for smart contract development and React for frontend interfaces. Experienced in Web3.js and Ethers.js for seamless blockchain integration. Skilled in IPFS for decentralized storage and The Graph for indexing blockchain data. Proficient in building custom token standards and NFT collections with metadata management. Experienced in wallet integration including MetaMask, WalletConnect, and hardware wallets. Strong understanding of gas optimization and network selection for optimal user experience. Knowledgeable in Layer 2 solutions for improved scalability and reduced costs. Proficient in testing and deployment using Hardhat and Remix for reliable smart contracts. Collaborative team player with excellent communication skills, experienced in community engagement. Passionate about building user-friendly dApps that drive Web3 adoption.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 54,
    initials: 'Of',
    title: 'Blockchain Architect',
    experience: '6 years',
    skills: ['Solidity', 'Ethereum', 'Hyperledger', 'Corda', 'Node.js', 'Python'],
    skillCategory: 'Blockchain',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
description: `
Blockchain Architect with extensive experience in designing and implementing secure, scalable, and decentralized enterprise solutions across multiple blockchain platforms.
Proficient in building and deploying blockchain applications using Ethereum, Hyperledger Fabric, Binance Smart Chain, and other distributed ledger technologies.
Strong expertise in smart contract development using Solidity, Vyper, and chaincode for enterprise-grade applications.
Experienced in designing system architecture for decentralized applications (dApps) with a focus on performance, scalability, and security.
Hands-on experience with Web3.js, Ethers.js, and blockchain integration with frontend and backend systems.
Built and deployed DeFi protocols, NFT marketplaces, and tokenization platforms for real-world use cases.
Strong understanding of consensus mechanisms such as Proof of Work (PoW), Proof of Stake (PoS), and delegated consensus models.
Expertise in cryptographic principles including hashing, digital signatures, and encryption for secure transaction processing.
Experience in designing permissioned and permissionless blockchain networks for enterprise and public use.
Implemented cross-chain interoperability solutions and blockchain bridges.
Strong knowledge of gas optimization techniques and smart contract auditing practices.
Experience with blockchain security best practices, vulnerability assessment, and risk mitigation strategies.
Worked on identity management and secure data sharing solutions using blockchain technology.
Integrated blockchain solutions with cloud platforms such as AWS and Azure for scalable deployments.
Experience in building APIs and middleware layers for seamless blockchain interaction.
Familiar with layer-2 scaling solutions such as Polygon, Optimism, and zk-rollups.
Designed and implemented governance models and token economics for decentralized ecosystems.
Experience in deploying and managing nodes, validators, and blockchain infrastructure.
Collaborated with cross-functional teams including product managers, developers, and stakeholders to deliver innovative blockchain solutions.
Strong understanding of regulatory and compliance considerations in blockchain applications.
Experience with CI/CD pipelines and DevOps practices for blockchain deployments.
Conducted performance tuning and optimization of blockchain networks and applications.
Continuously researching emerging trends in Web3, decentralized finance (DeFi), and blockchain scalability.
Passionate about building secure, transparent, and decentralized systems that transform traditional industries.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 55,
    initials: 'Ie',
    title: 'DeFi Developer',
    experience: '4 years',
    skills: ['Solidity', 'Ethereum', 'Uniswap', 'Aave', 'Web3.js', 'React'],
    skillCategory: 'Blockchain',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'DeFi developer with 4+ years of experience building decentralized exchanges and lending protocols on Ethereum. Proficient in Solidity for smart contract development with focus on security and gas efficiency. Experienced in AMM algorithms and liquidity pool mechanics for decentralized trading. Skilled in lending protocols including Aave and Compound integrations. Proficient in yield farming strategies and staking mechanisms. Strong understanding of impermanent loss and risk management in DeFi. Knowledgeable in cross-chain bridges and wrapped token implementations. Proficient in flash loans and arbitrage strategies for advanced DeFi operations. Experienced in governance tokens and DAO structures for decentralized decision making. Collaborative team player with excellent communication skills, experienced in tokenomics design. Passionate about building innovative DeFi solutions that democratize finance.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Cybersecurity Engineers
  {
    id: 56,
    initials: 'Js',
    title: 'Senior Cybersecurity Engineer',
    experience: '7 years',
    skills: ['Security', 'Penetration Testing', 'SIEM', 'Python', 'AWS', 'Docker'],
    skillCategory: 'Cybersecurity',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior cybersecurity engineer with 7+ years of penetration testing expertise, specializing in security assessments for Fortune 500 companies. Proficient in network penetration testing, web application security testing, and mobile app security assessments. Experienced in advanced persistent threat simulation and red team operations. Skilled in vulnerability assessment using tools like Nessus, Qualys, and OpenVAS. Proficient in exploitation frameworks including Metasploit and custom exploit development. Strong understanding of OWASP Top 10 and CVE vulnerabilities for comprehensive security coverage. Knowledgeable in social engineering techniques and physical security assessments. Proficient in reporting and remediation guidance for clients. Experienced in compliance testing including PCI DSS and HIPAA security requirements. Collaborative team player with excellent communication skills, experienced in presenting findings to executives. Passionate about helping organizations strengthen their security posture.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 57,
    initials: 'Us',
    title: 'Application Security Engineer',
    experience: '5 years',
    skills: ['Security', 'SAST', 'DAST', 'Python', 'Java', 'DevSecOps'],
    skillCategory: 'Cybersecurity',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Application security specialist with 5+ years of expertise in implementing security throughout the software development lifecycle. Proficient in SAST tools including SonarQube, Checkmarx, and Snyk for code security analysis. Experienced in DAST using OWASP ZAP and Burp Suite for dynamic testing. Skilled in secure code review and vulnerability remediation across multiple languages. Proficient in DevSecOps practices integrating security into CI/CD pipelines. Strong understanding of OWASP Top 10 and CWE for comprehensive security coverage. Knowledgeable in container security using Trivy and Clair for vulnerability scanning. Experienced in implementing security training and awareness programs for development teams. Proficient in threat modeling using STRIDE and PASTA methodologies. Collaborative team player with excellent communication skills, experienced in security architecture reviews. Passionate about building security-first applications that protect user data.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 58,
    initials: 'Ws',
    title: 'Cloud Security Specialist',
    experience: '6 years',
    skills: ['AWS', 'Security', 'Terraform', 'Docker', 'Kubernetes', 'Python'],
    skillCategory: 'Cybersecurity',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
Cloud Security Specialist with 6 years of experience in securing cloud infrastructures, applications, and DevOps pipelines across enterprise environments.
Strong expertise in implementing robust security controls and compliance frameworks on AWS cloud platforms.
Proficient in designing and enforcing Identity and Access Management (IAM) policies, roles, and least privilege access strategies.
Hands-on experience in securing containerized environments using Docker and Kubernetes with best practices and runtime protection.
Skilled in Infrastructure as Code (IaC) security using Terraform, including policy validation and secure configuration management.
Experience in implementing DevSecOps practices by integrating security into CI/CD pipelines.
Strong knowledge of cloud security services such as AWS Security Hub, GuardDuty, Inspector, and WAF.
Expertise in vulnerability assessment, penetration testing coordination, and risk mitigation strategies.
Experience in securing network architectures including VPCs, subnets, firewalls, and secure connectivity.
Proficient in monitoring and threat detection using tools like CloudWatch, SIEM systems, and log analysis platforms.
Strong understanding of encryption standards, key management (KMS), and data protection techniques.
Experience in implementing compliance frameworks such as ISO 27001, SOC 2, GDPR, and HIPAA.
Built automated security auditing and compliance checks to ensure continuous governance.
Hands-on experience with secrets management tools such as HashiCorp Vault and AWS Secrets Manager.
Experience in incident response, security monitoring, and root cause analysis of security breaches.
Skilled in writing Python scripts for automation of security tasks and threat detection.
Worked on securing APIs, authentication mechanisms (OAuth2, JWT), and web application security.
Strong understanding of Zero Trust architecture and modern security models.
Experience in container image scanning and vulnerability management.
Collaborated with DevOps and engineering teams to build secure-by-design systems.
Implemented logging and auditing mechanisms to track and investigate security events.
Continuously updated knowledge on emerging threats, vulnerabilities, and cloud security best practices.
Strong problem-solving skills with a focus on proactive risk identification and mitigation.
Passionate about building secure, compliant, and resilient cloud environments.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 59,
    initials: 'Sm',
    title: 'Security Operations Engineer',
    experience: '5 years',
    skills: ['SIEM', 'SOC', 'Incident Response', 'Python', 'Splunk', 'AWS'],
    skillCategory: 'Cybersecurity',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'SOC engineer with 5+ years of incident response expertise, specializing in managing security operations for enterprise clients. Proficient in SIEM platforms including Splunk, QRadar, and Azure Sentinel for security monitoring. Experienced in threat detection, triage, and incident response procedures. Skilled in log analysis and forensic investigation for identifying security breaches. Proficient in configuring detection rules and correlation searches for proactive threat hunting. Strong understanding of MITRE ATT&CK framework for threat classification. Knowledgeable in malware analysis and reverse engineering for advanced threat identification. Experienced in SOAR platforms for automating incident response workflows. Proficient in creating incident reports and presenting findings to stakeholders. Collaborative team player with excellent communication skills, experienced in on-call rotations. Passionate about protecting organizations from evolving cyber threats.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 60,
    initials: 'At',
    title: 'Penetration Tester',
    experience: '5 years',
    skills: ['Penetration Testing', 'Burp Suite', 'Metasploit', 'Python', 'Linux', 'Network Security'],
    skillCategory: 'Cybersecurity',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
Penetration Tester with 5 years of hands-on experience in identifying, exploiting, and mitigating security vulnerabilities across web, network, and application layers.
Skilled in conducting comprehensive penetration testing engagements including reconnaissance, scanning, exploitation, and post-exploitation activities.
Proficient in using industry-standard tools such as Burp Suite, Metasploit, Nmap, Wireshark, and Nessus for vulnerability assessment and exploitation.
Strong expertise in web application security testing based on OWASP Top 10 vulnerabilities including SQL Injection, XSS, CSRF, and authentication flaws.
Experience in performing network penetration testing to identify weaknesses in internal and external infrastructures.
Hands-on experience in red team exercises simulating real-world attack scenarios to test organizational defenses.
Skilled in manual testing techniques to uncover complex and business logic vulnerabilities beyond automated tools.
Proficient in scripting with Python and Bash to automate testing processes and develop custom exploitation tools.
Strong understanding of Linux systems, networking protocols, and security mechanisms.
Experience in conducting vulnerability assessments and risk analysis with detailed reporting and remediation recommendations.
Familiar with Active Directory security, privilege escalation techniques, and lateral movement strategies.
Experience in API security testing including REST and GraphQL endpoints.
Strong knowledge of secure coding practices and application security principles.
Worked with SIEM tools and log analysis for threat detection and incident investigation.
Experience in social engineering assessments and phishing simulations.
Proficient in using proxy tools, fuzzing techniques, and payload crafting for advanced exploitation.
Knowledge of cloud security testing across AWS and Azure environments.
Experience in mobile application security testing (Android/iOS) is a plus.
Delivered detailed penetration testing reports with proof-of-concepts and risk prioritization.
Collaborated with development and security teams to fix vulnerabilities and improve security posture.
Strong understanding of compliance standards such as ISO 27001, PCI-DSS, and GDPR.
Continuously staying updated with latest vulnerabilities, exploits, and cybersecurity trends.
Passionate about ethical hacking and strengthening organizational security through proactive testing.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Mobile Developers (iOS/Android)
  {
    id: 61,
    initials: 'Bu',
    title: 'Senior iOS Developer',
    experience: '7 years',
    skills: ['Swift', 'iOS', 'Objective-C', 'Xcode', 'Core Data', 'Firebase'],
    skillCategory: 'Mobile',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior iOS developer with 7+ years of App Store experience, specializing in building apps with millions of downloads. Proficient in Swift and Objective-C for native iOS development. Experienced in UIKit and SwiftUI for building responsive user interfaces. Skilled in Core Data and SQLite for local data persistence. Proficient in Firebase integration for backend services and analytics. Strong understanding of Apple guidelines and App Store review process. Experienced in implementing in-app purchases and subscription models. Knowledgeable in iOS performance optimization and memory management. Proficient in testing using XCTest and UI testing for reliable applications. Experienced in CI/CD using Fastlane for automated builds and deployment. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building high-quality iOS applications that users love.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 62,
    initials: 'Cm',
    title: 'Senior Android Developer',
    experience: '7 years',
    skills: ['Kotlin', 'Android', 'Java', 'Jetpack Compose', 'Firebase', 'MVVM'],
    skillCategory: 'Mobile',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Senior Android developer with 7+ years of Kotlin expertise, specializing in building high-performance apps with modern architecture. Proficient in Kotlin for concise, null-safe Android development. Experienced in Jetpack Compose for declarative UI and modern Android development. Skilled in MVVM and Clean Architecture patterns for maintainable codebases. Proficient in Firebase integration for authentication, analytics, and cloud services. Strong understanding of Android performance optimization and memory management. Experienced in material design and custom UI components for engaging user experiences. Knowledgeable in Android testing using Espresso and JUnit for reliable applications. Proficient in CI/CD using Fastlane and GitHub Actions for automated builds. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building polished Android applications that deliver exceptional user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 63,
    initials: 'Ds',
    title: 'iOS & Swift Developer',
    experience: '5 years',
    skills: ['Swift', 'iOS', 'SwiftUI', 'Combine', 'Core Data', 'REST API'],
    skillCategory: 'Mobile',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Swift specialist with 5+ years of SwiftUI expertise, specializing in building modern iOS apps with declarative UI. Proficient in Swift and SwiftUI for building beautiful, responsive interfaces. Experienced in Combine framework for reactive programming and data flow. Skilled in Core Data for local persistence and data modeling. Proficient in REST API integration for backend communication. Strong understanding of iOS lifecycle and memory management. Experienced in accessibility implementation for VoiceOver and Dynamic Type. Knowledgeable in iOS testing using XCTest and UI testing. Proficient in App Store deployment and version management. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building accessible, user-friendly iOS applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 64,
    initials: 'Es',
    title: 'Android & Kotlin Developer',
    experience: '5 years',
    skills: ['Kotlin', 'Android', 'Jetpack Compose', 'Coroutines', 'Room', 'Retrofit'],
    skillCategory: 'Mobile',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'Android & Kotlin specialist with 5+ years of Jetpack Compose expertise, specializing in building modern Android apps with clean architecture. Proficient in Kotlin and Jetpack Compose for declarative UI development. Experienced in Coroutines and Flow for asynchronous programming. Skilled in Room for local database and Retrofit for API integration. Strong understanding of MVVM and Clean Architecture patterns. Experienced in Material Design 3 and custom theming for brand consistency. Knowledgeable in Android testing using JUnit and Espresso. Proficient in CI/CD using GitHub Actions and Fastlane. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building maintainable, scalable Android applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 65,
    initials: 'Ds',
    title: 'Cross-Platform Mobile Developer',
    experience: '5 years',
    skills: ['React Native', 'Flutter', 'JavaScript', 'Dart', 'Firebase', 'REST API'],
    skillCategory: 'Mobile',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Cross-platform mobile specialist with 5+ years of expertise in both React Native and Flutter, specializing in building apps for iOS and Android. Proficient in React Native with TypeScript for type-safe mobile development. Experienced in Flutter with Dart for beautiful, performant cross-platform apps. Skilled in Firebase integration for authentication, analytics, and cloud services. Strong understanding of native modules and platform-specific implementations. Experienced in state management using Redux, Context, Provider, and Riverpod. Knowledgeable in CI/CD using Fastlane, Codemagic, and GitHub Actions. Proficient in app store submission and version management for both platforms. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building high-quality cross-platform apps that work seamlessly on both platforms.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Full Stack Developers
  {
    id: 66,
    initials: 'Kr',
    title: 'Senior Full Stack Developer',
    experience: '8 years',
    skills: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    skillCategory: 'Full Stack',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior full-stack developer with 8+ years of MERN stack expertise, specializing in building scalable web applications from concept to deployment. Proficient in React for building responsive, interactive user interfaces. Experienced in Node.js and Express for building robust backend APIs. Skilled in MongoDB for flexible data modeling and efficient querying. Proficient in PostgreSQL for relational data and complex queries. Experienced in AWS for cloud deployment and infrastructure management. Strong understanding of Docker for containerization and deployment. Knowledgeable in authentication using JWT, OAuth, and session-based approaches. Proficient in testing using Jest, React Testing Library, and Cypress. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building end-to-end solutions that deliver exceptional user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 67,
    initials: 'Hs',
    title: 'Full Stack Python Developer',
    experience: '6 years',
    skills: ['Python', 'Django', 'React', 'PostgreSQL', 'Docker', 'AWS'],
    skillCategory: 'Full Stack',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Full-stack Python developer with 6+ years of Django and React expertise, specializing in building data-driven web applications for enterprise clients. Proficient in Python and Django for robust backend development. Experienced in Django REST Framework for building scalable APIs. Skilled in React for building responsive frontend interfaces. Proficient in PostgreSQL for complex queries and data modeling. Experienced in Docker and Docker Compose for containerization. Strong understanding of Celery and Redis for background task processing. Knowledgeable in AWS for cloud deployment and infrastructure. Proficient in testing using pytest and Jest for comprehensive coverage. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building data-driven applications that scale.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 68,
    initials: 'If',
    title: 'Full Stack .NET Developer',
    experience: '6 years',
    skills: ['.NET', 'C#', 'Angular', 'SQL Server', 'Azure', 'Docker'],
    skillCategory: 'Full Stack',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Full-stack .NET developer with 6+ years of Angular frontend expertise, specializing in building enterprise applications with Microsoft stack. Proficient in C# and .NET for robust backend development. Experienced in Angular for building responsive, interactive user interfaces. Skilled in SQL Server for database design and optimization. Proficient in Azure cloud services for deployment and infrastructure. Strong understanding of Entity Framework for data access. Experienced in microservices architecture using Docker and Kubernetes. Knowledgeable in authentication using Azure AD and JWT. Proficient in testing using xUnit and Jasmine. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building enterprise-grade applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 69,
    initials: 'Gs',
    title: 'Full Stack Java Developer',
    experience: '7 years',
    skills: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS'],
    skillCategory: 'Full Stack',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'Full-stack Java developer with 7+ years of Spring Boot and React expertise, specializing in building enterprise applications with microservices architecture. Proficient in Java and Spring Boot for robust backend development. Experienced in Spring Cloud for microservices patterns and distributed systems. Skilled in React for building responsive frontend interfaces. Proficient in PostgreSQL and MongoDB for data storage. Experienced in Docker and Kubernetes for containerization and orchestration. Strong understanding of API design and RESTful services. Knowledgeable in message queues including RabbitMQ and Apache Kafka. Proficient in testing using JUnit and Mockito. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building scalable, resilient enterprise applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 70,
    initials: 'Kk',
    title: 'Full Stack PHP Developer',
    experience: '6 years',
    skills: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Docker', 'AWS'],
    skillCategory: 'Full Stack',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Full-stack PHP developer with 6+ years of Laravel and Vue.js expertise, specializing in building content management systems and e-commerce platforms. Proficient in PHP and Laravel for robust backend development. Experienced in Laravel Livewire for dynamic interfaces. Skilled in Vue.js for building responsive frontend applications. Proficient in MySQL for database design and optimization. Experienced in Docker for containerization and deployment. Strong understanding of RESTful API design and implementation. Knowledgeable in payment gateway integration including Stripe and PayPal. Proficient in testing using PHPUnit and Jest. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building feature-rich web applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Frontend Developers
  {
    id: 71,
    initials: 'Ls',
    title: 'Senior Frontend Developer',
    experience: '7 years',
    skills: ['JavaScript', 'TypeScript', 'React', 'Vue.js', 'CSS', 'Webpack'],
    skillCategory: 'Frontend',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior frontend developer with 7+ years of expertise in multiple frameworks, specializing in building high-performance web applications. Proficient in JavaScript and TypeScript for type-safe development. Experienced in React, Vue.js for building responsive user interfaces. Skilled in modern CSS including Tailwind CSS, SASS, and CSS-in-JS. Strong understanding of webpack, Vite for build optimization. Proficient in testing using Jest, React Testing Library, and Cypress. Experienced in accessibility standards and WCAG compliance. Knowledgeable in performance optimization and Core Web Vitals. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building accessible, performant web applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 72,
    initials: 'Ld',
    title: 'Frontend Architect',
    experience: '8 years',
    skills: ['React', 'TypeScript', 'GraphQL', 'Next.js', 'Performance', 'Testing'],
    skillCategory: 'Frontend',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Frontend architect with 8+ years of expertise in React and performance optimization, specializing in leading frontend teams at scale. Proficient in React and TypeScript for type-safe component development. Experienced in GraphQL and Apollo for efficient data fetching. Skilled in Next.js for server-side rendering and static generation. Strong understanding of performance metrics including Core Web Vitals. Proficient in testing strategies using Jest, React Testing Library, and Playwright. Experienced in design systems and component libraries. Knowledgeable in micro-frontend architectures and module federation. Collaborative leader with experience mentoring developers and establishing best practices. Passionate about building scalable frontend architectures.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 73,
    initials: 'Nf',
    title: 'Vue.js Developer',
    experience: '5 years',
    skills: ['Vue.js', 'Vuex', 'Nuxt.js', 'TypeScript', 'CSS', 'REST API'],
    skillCategory: 'Frontend',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Vue.js specialist with 5+ years of Nuxt.js expertise, specializing in building modern web applications with Vue ecosystem. Proficient in Vue.js for component-based development. Experienced in Vuex and Pinia for state management. Skilled in Nuxt.js for server-side rendering and static site generation. Strong understanding of Vue 3 composition API. Proficient in TypeScript for type-safe development. Experienced in REST API integration and GraphQL. Knowledgeable in testing using Vitest and Vue Test Utils. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building performant Vue applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 74,
    initials: 'Or',
    title: 'UI/UX Frontend Developer',
    experience: '5 years',
    skills: ['React', 'CSS', 'Figma', 'Tailwind', 'Animations', 'Accessibility'],
    skillCategory: 'Frontend',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'UI/UX focused frontend developer with 5+ years of design expertise, specializing in building beautiful and accessible user interfaces. Proficient in React for building responsive interfaces. Experienced in Figma for design handoff and implementation. Skilled in Tailwind CSS for rapid UI development. Strong understanding of animations and micro-interactions. Proficient in accessibility standards including WCAG 2.1 and ARIA. Experienced in responsive design and cross-browser compatibility. Knowledgeable in design systems and component libraries. Collaborative team player with excellent communication skills, experienced in design-developer workflows. Passionate about creating intuitive user experiences.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 75,
    initials: 'Pc',
    title: 'JavaScript Expert',
    experience: '6 years',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Testing', 'Performance'],
    skillCategory: 'Frontend',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'JavaScript expert with 6+ years of deep language knowledge, specializing in testing and performance optimization. Proficient in JavaScript including ES6+ features and async patterns. Experienced in TypeScript for type-safe development. Skilled in React and Node.js for full-stack development. Strong understanding of browser internals and rendering optimization. Proficient in testing using Jest, Cypress, and Playwright. Experienced in performance profiling and optimization techniques. Knowledgeable in modern build tools and bundlers. Collaborative team player with excellent communication skills, experienced in code reviews. Passionate about writing clean, performant JavaScript code.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Backend Developers
  {
    id: 76,
    initials: 'Gj',
    title: 'Senior Backend Developer',
    experience: '7 years',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    skillCategory: 'Backend',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Senior backend developer with 7+ years of expertise in multiple languages, specializing in building scalable APIs and microservices. Proficient in Node.js for asynchronous, event-driven backend development. Experienced in Python for data processing and API development. Skilled in PostgreSQL for relational database design and optimization. Proficient in Redis for caching and session management. Experienced in Docker for containerization and AWS for cloud deployment. Strong understanding of RESTful API design and GraphQL. Knowledgeable in microservices architecture and message queues. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building robust backend systems.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 77,
    initials: 'Rm',
    title: 'Go Backend Developer',
    experience: '5 years',
    skills: ['Go', 'gRPC', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
    skillCategory: 'Backend',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Go specialist with 5+ years of gRPC expertise, specializing in building high-performance backend services. Proficient in Go for concurrent, efficient backend development. Experienced in gRPC and Protocol Buffers for efficient API communication. Skilled in PostgreSQL for data persistence and complex queries. Proficient in Docker and Kubernetes for containerization and orchestration. Strong understanding of RESTful API design and microservices patterns. Experienced in AWS for cloud deployment and infrastructure. Knowledgeable in testing in Go using table-driven tests. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building performant Go services.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 78,
    initials: 'St',
    title: 'Rust Backend Developer',
    experience: '4 years',
    skills: ['Rust', 'Actix', 'PostgreSQL', 'Docker', 'WebAssembly', 'AWS'],
    skillCategory: 'Backend',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Rust specialist with 4+ years of systems programming expertise, specializing in building high-performance and safe backend services. Proficient in Rust for memory-safe, concurrent programming. Experienced in Actix-web for building async web services. Skilled in PostgreSQL for data persistence and complex queries. Proficient in WebAssembly for high-performance browser execution. Strong understanding of ownership and borrowing patterns. Experienced in Docker for containerization and deployment. Knowledgeable in testing using Rust test framework. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building safe, performant systems.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 79,
    initials: 'Sg',
    title: 'Java Backend Developer',
    experience: '6 years',
    skills: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'AWS'],
    skillCategory: 'Backend',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'Java backend developer with 6+ years of Spring Boot expertise, specializing in building enterprise microservices architecture. Proficient in Java and Spring Boot for robust backend development. Experienced in Spring Cloud for microservices patterns and distributed systems. Skilled in PostgreSQL for data persistence and complex queries. Proficient in Docker and Kubernetes for containerization and orchestration. Strong understanding of RESTful API design and OAuth2 security. Experienced in AWS for cloud deployment and infrastructure. Knowledgeable in testing using JUnit and Mockito. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building scalable Java applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 80,
    initials: 'Ams',
    title: 'Ruby on Rails Developer',
    experience: '5 years',
    skills: ['Ruby', 'Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'AWS'],
    skillCategory: 'Backend',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Ruby on Rails specialist with 5+ years of rapid development expertise, specializing in building web applications with clean code. Proficient in Ruby and Rails for efficient web development. Experienced in Active Record for database operations and migrations. Skilled in PostgreSQL for database design and optimization. Proficient in Redis for caching and Sidekiq for background jobs. Strong understanding of RESTful API design and JSON APIs. Experienced in AWS for cloud deployment and infrastructure. Knowledgeable in testing using RSpec and Factory Bot. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building maintainable Rails applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },

  // Additional Developers for variety
  {
    id: 81,
    initials: 'Ij',
    title: 'TypeScript Full Stack Developer',
    experience: '5 years',
    skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'GraphQL', 'Docker'],
    skillCategory: 'Full Stack',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
TypeScript Full Stack Developer with 5 years of experience in building scalable, maintainable, and type-safe applications across frontend and backend systems.
Strong expertise in developing modern web applications using React and TypeScript with a focus on performance and user experience.
Proficient in building robust backend services using Node.js and TypeScript, following clean architecture and modular design principles.
Hands-on experience in designing and consuming APIs using GraphQL and REST for efficient data communication.
Skilled in database design and management using PostgreSQL with a strong focus on query optimization and data integrity.
Experience in implementing end-to-end type safety across the stack to reduce runtime errors and improve developer productivity.
Proficient in using advanced TypeScript features such as generics, utility types, decorators, and strict typing.
Built reusable and scalable frontend components with modern state management solutions.
Experience with Next.js for server-side rendering (SSR) and improved SEO and performance.
Hands-on experience in containerizing applications using Docker for consistent development and deployment environments.
Implemented authentication and authorization mechanisms using JWT, OAuth, and role-based access control (RBAC).
Strong understanding of microservices architecture and API-driven development.
Experience in integrating third-party APIs and services into web applications.
Worked with CI/CD pipelines to automate testing, building, and deployment processes.
Proficient in version control using Git and collaborative development workflows.
Experience in writing unit and integration tests using tools like Jest and React Testing Library.
Optimized application performance through code splitting, lazy loading, and efficient state management.
Strong knowledge of HTML5, CSS3, and modern UI frameworks such as Tailwind CSS.
Collaborated with cross-functional teams including designers, backend engineers, and product managers.
Experience in debugging, troubleshooting, and maintaining production-grade applications.
Familiar with cloud platforms such as AWS for deploying and scaling applications.
Worked in Agile/Scrum environments delivering high-quality features in iterative cycles.
Continuously learning and adopting new technologies in the TypeScript ecosystem.
Passionate about writing clean, maintainable, and scalable code with a strong emphasis on type safety.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 82,
    initials: 'Wo',
    title: 'MERN Stack Developer',
    experience: '4 years',
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'AWS'],
    skillCategory: 'Full Stack',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'MERN stack specialist with 4+ years of JavaScript ecosystem expertise, specializing in building modern web applications. Proficient in MongoDB for flexible document-based data storage. Experienced in Express.js for building robust RESTful APIs. Skilled in React for building responsive, interactive user interfaces. Proficient in Redux for state management in complex applications. Strong understanding of JWT authentication and security. Experienced in AWS for cloud deployment and infrastructure. Knowledgeable in Docker for containerization. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building full-stack JavaScript applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 83,
    initials: 'Bs',
    title: 'Python Django Developer',
    experience: '5 years',
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    skillCategory: 'Python',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Django specialist with 5+ years of expertise in building robust web applications, specializing in ORM and admin customization. Proficient in Python and Django for rapid web development. Experienced in Django REST Framework for building scalable APIs. Skilled in PostgreSQL for database design and optimization. Proficient in Redis for caching and Celery for background tasks. Strong understanding of Django ORM and query optimization. Experienced in Docker for containerization and deployment. Knowledgeable in testing using pytest and coverage tools. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about building maintainable Django applications.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 84,
    initials: 'Ds',
    title: 'React & TypeScript Developer',
    experience: '5 years',
    skills: ['React', 'TypeScript', 'Redux', 'Jest', 'CSS-in-JS', 'Webpack'],
    skillCategory: 'React',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
description: `
React & TypeScript Developer with 5 years of experience in building scalable, high-performance, and type-safe web applications.
Strong expertise in developing modern frontend applications using React and TypeScript with a focus on maintainability and code quality.
Proficient in leveraging advanced TypeScript features such as generics, utility types, type inference, and strict typing for robust applications.
Experienced in state management using Redux, Redux Toolkit, Context API, and modern alternatives like Zustand.
Hands-on experience in building reusable and modular UI components following best practices and design patterns.
Strong understanding of component lifecycle, hooks, and custom hooks for efficient state and logic management.
Experience in developing server-side rendered (SSR) and static applications using Next.js for improved performance and SEO.
Skilled in styling approaches including CSS-in-JS, Styled Components, Tailwind CSS, and SASS.
Proficient in writing unit and integration tests using Jest, React Testing Library, and Cypress.
Experience in optimizing application performance through code splitting, lazy loading, memoization, and bundle optimization.
Strong understanding of Webpack, Vite, and modern frontend build tools.
Experience in integrating REST APIs and GraphQL for efficient data fetching and state synchronization.
Proficient in handling forms, validations, and complex UI interactions.
Experience in implementing authentication and authorization mechanisms in frontend applications.
Strong knowledge of HTML5, CSS3, and responsive design principles.
Familiar with accessibility (a11y) standards and building inclusive web applications.
Experience in CI/CD pipelines for automated testing and deployment workflows.
Proficient in version control using Git and collaborative development practices.
Worked in Agile/Scrum environments delivering high-quality features iteratively.
Collaborated with designers, backend developers, and product teams to deliver seamless user experiences.
Strong debugging and problem-solving skills in production environments.
Experience in building scalable frontend architectures for large applications.
Continuously learning and adopting new tools and best practices in the React ecosystem.
Passionate about writing clean, maintainable, and type-safe code for modern web applications.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 85,
    initials: 'Kr',
    title: 'Node.js & TypeScript Developer',
    experience: '5 years',
    skills: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    skillCategory: 'Node.js',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
Node.js & TypeScript Developer with 5 years of experience in building scalable, high-performance, and type-safe backend systems.
Strong expertise in developing server-side applications using Node.js and TypeScript with a focus on clean architecture and maintainability.
Proficient in using frameworks like Express and NestJS to build modular, scalable, and production-ready backend services.
Experienced in designing and implementing RESTful APIs and GraphQL services for efficient data communication.
Strong understanding of advanced TypeScript features including generics, decorators, interfaces, and strict typing.
Hands-on experience in designing and managing relational databases using PostgreSQL with a focus on performance and data integrity.
Familiar with ORM tools such as Prisma and TypeORM for efficient database interactions.
Experience in implementing caching strategies using Redis to improve system performance and reduce latency.
Skilled in building microservices architecture and event-driven systems for scalable applications.
Hands-on experience with message brokers such as Kafka and RabbitMQ for asynchronous communication.
Proficient in containerizing applications using Docker and deploying them on AWS cloud environments.
Experience in implementing authentication and authorization using JWT, OAuth2, and role-based access control.
Strong understanding of API security best practices and secure data handling.
Experience in setting up CI/CD pipelines for automated testing, building, and deployment workflows.
Proficient in writing unit and integration tests using Jest, Mocha, and Supertest.
Strong knowledge of asynchronous programming, event loop, and non-blocking I/O in Node.js.
Experience in integrating third-party APIs and external services into backend systems.
Skilled in debugging, profiling, and optimizing backend performance for high-load applications.
Familiar with Nginx, load balancing, and reverse proxy configurations.
Worked in Agile/Scrum environments delivering scalable backend solutions in iterative cycles.
Collaborated with frontend teams, DevOps engineers, and product stakeholders.
Experience in monitoring and logging using tools like CloudWatch and ELK Stack.
Strong problem-solving skills with a focus on performance, scalability, and reliability.
Continuously learning modern backend technologies and TypeScript best practices.
Passionate about building clean, maintainable, and type-safe backend systems.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 86,
    initials: 'Kr',
    title: 'Node.js & TypeScript Developer',
    experience: '5 years',
    skills: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    skillCategory: 'Node.js',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
Node.js & TypeScript Developer with 5 years of experience in designing and building scalable, high-performance, and type-safe backend systems.
Strong expertise in developing server-side applications using Node.js and TypeScript with a focus on clean architecture and maintainability.
Proficient in using frameworks like Express and NestJS to build modular and well-structured backend services.
Experienced in designing and implementing RESTful APIs and GraphQL services for efficient and flexible data communication.
Strong understanding of advanced TypeScript features including generics, decorators, interfaces, and strict typing.
Hands-on experience in designing and managing relational databases using PostgreSQL with a focus on performance and scalability.
Familiar with ORM tools such as Prisma and TypeORM for efficient database interactions and schema management.
Experience in implementing caching strategies using Redis to improve performance and reduce latency.
Skilled in building microservices architecture and event-driven systems for scalable and distributed applications.
Hands-on experience with message brokers such as Kafka and RabbitMQ for asynchronous communication.
Proficient in containerizing applications using Docker and deploying them on cloud platforms such as AWS.
Experience in implementing authentication and authorization using JWT, OAuth2, and role-based access control.
Strong understanding of API security best practices and data protection mechanisms.
Experience in setting up CI/CD pipelines for automated build, testing, and deployment workflows.
Proficient in writing unit and integration tests using Jest, Mocha, and Supertest.
Strong knowledge of asynchronous programming, event loop, and non-blocking I/O in Node.js.
Experience in integrating third-party APIs and external services into backend systems.
Skilled in debugging, profiling, and optimizing backend performance for high-load systems.
Familiar with Nginx, load balancing, and reverse proxy configurations.
Worked in Agile/Scrum environments delivering scalable backend solutions in iterative cycles.
Collaborated with frontend teams, DevOps engineers, and stakeholders to deliver high-quality products.
Experience in monitoring and logging using tools like CloudWatch and ELK Stack.
Strong problem-solving skills with a focus on performance, scalability, and reliability.
Continuously learning and adopting modern backend technologies and best practices.
Passionate about writing clean, maintainable, and type-safe backend code at scale.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 87,
    initials: 'Po',
    title: 'Angular & TypeScript Developer',
    experience: '5 years',
    skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Jasmine', 'Protractor'],
    skillCategory: 'Angular',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
description: `
Angular & TypeScript Developer with 5 years of experience in building scalable, high-performance, and enterprise-grade web applications.
Strong expertise in developing frontend applications using Angular and TypeScript with a focus on maintainability and clean architecture.
Proficient in leveraging advanced TypeScript features such as generics, decorators, interfaces, and strict typing for robust applications.
Experienced in reactive programming using RxJS for handling asynchronous data streams and complex state management.
Hands-on experience in state management using NgRx for building predictable and scalable application architectures.
Skilled in developing reusable, modular, and maintainable UI components following best practices and design patterns.
Strong understanding of Angular architecture including modules, components, services, directives, and dependency injection.
Experience in building responsive and cross-browser compatible user interfaces using HTML5, CSS3, and modern styling frameworks.
Proficient in writing unit and integration tests using Jasmine, Karma, and Protractor.
Experience in optimizing application performance using lazy loading, Ahead-of-Time (AOT) compilation, and change detection strategies.
Strong knowledge of RESTful API integration and handling HTTP requests efficiently.
Familiar with GraphQL for optimized data fetching and frontend-backend communication.
Experience in implementing authentication and authorization mechanisms in Angular applications.
Skilled in debugging and troubleshooting complex frontend issues in production environments.
Proficient in using modern build tools and bundlers such as Webpack and Angular CLI.
Experience in CI/CD pipelines for automated testing and deployment workflows.
Strong understanding of web security best practices including XSS, CSRF, and secure coding techniques.
Experience in working with version control systems like Git and collaborative development workflows.
Worked in Agile/Scrum environments delivering features in iterative cycles.
Collaborated with backend developers, designers, and product teams to deliver seamless user experiences.
Experience in building large-scale enterprise applications with complex workflows and data handling.
Continuously learning and adopting new Angular features and frontend best practices.
Strong problem-solving skills with attention to detail and code quality.
Passionate about building efficient, scalable, and user-friendly web applications using Angular and TypeScript.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 88,
    initials: 'Fw',
    title: 'Python & Data Science Developer',
    experience: '5 years',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter', 'SQL'],
    skillCategory: 'Data Science',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
Python & Data Science Developer with 5 years of experience in building scalable data pipelines, advanced analytics solutions, and machine learning models.
Strong expertise in Python programming with extensive use of libraries such as Pandas, NumPy, and Scikit-learn for data analysis and modeling.
Experienced in data cleaning, preprocessing, and transformation to ensure high-quality and reliable datasets.
Proficient in exploratory data analysis (EDA) to identify trends, patterns, and actionable insights from complex datasets.
Hands-on experience in building predictive models including regression, classification, clustering, and recommendation systems.
Skilled in data visualization using Matplotlib, Seaborn, and Plotly to create interactive dashboards and reports.
Proficient in writing complex SQL queries for data extraction, aggregation, and optimization from relational databases.
Experience in developing end-to-end data pipelines for automated data ingestion, processing, and reporting.
Strong understanding of statistical concepts including probability, hypothesis testing, and distributions.
Experience with machine learning workflows including feature engineering, model training, validation, and hyperparameter tuning.
Familiar with big data tools such as Apache Spark for large-scale data processing.
Experience in deploying machine learning models using REST APIs and cloud platforms such as AWS.
Hands-on experience with Jupyter Notebook for experimentation, prototyping, and data exploration.
Worked on real-world use cases such as customer segmentation, churn prediction, fraud detection, and sales forecasting.
Proficient in integrating data from multiple sources including APIs, databases, and flat files.
Strong problem-solving skills with a focus on delivering data-driven insights.
Experience in building dashboards and business intelligence reports for stakeholders.
Collaborated with cross-functional teams including analysts, engineers, and product managers.
Experience in optimizing data workflows for performance, scalability, and reliability.
Familiar with MLOps practices including model monitoring, versioning, and pipeline automation.
Proficient in version control using Git and collaborative development workflows.
Continuously learning and applying new tools and techniques in data science and machine learning.
Passionate about transforming data into actionable insights and driving business impact.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 89,
    initials: 'Gs',
    title: '.NET & Microservices Developer',
    experience: '6 years',
    skills: ['.NET', 'C#', 'Docker', 'Kubernetes', 'RabbitMQ', 'SQL Server'],
    skillCategory: '.NET',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
.NET & Microservices Developer with 6 years of experience in designing and building scalable, distributed systems using modern .NET technologies.
Strong expertise in C# and .NET Core for developing high-performance backend services and enterprise-grade applications.
Experienced in designing and implementing microservices architectures with a focus on scalability, resilience, and maintainability.
Hands-on experience in building RESTful APIs and event-driven systems using message brokers like RabbitMQ.
Proficient in containerizing applications using Docker and orchestrating them with Kubernetes for production environments.
Strong understanding of distributed system design patterns such as circuit breaker, retry, and bulkhead.
Experience in working with relational databases like SQL Server, including schema design, query optimization, and performance tuning.
Skilled in implementing asynchronous communication between services using messaging queues and event streaming.
Experience with API Gateway patterns and service-to-service communication strategies.
Proficient in implementing authentication and authorization mechanisms using JWT and OAuth2.
Strong knowledge of clean architecture, SOLID principles, and domain-driven design (DDD).
Experience in building fault-tolerant systems with proper error handling and logging strategies.
Hands-on experience with CI/CD pipelines for automated build, testing, and deployment.
Familiar with cloud platforms such as Azure and AWS for deploying and scaling applications.
Experience in monitoring and logging using tools like ELK Stack, Prometheus, and Grafana.
Proficient in debugging and troubleshooting production issues in distributed environments.
Experience in implementing caching strategies using Redis for improved performance.
Strong understanding of container networking and load balancing techniques.
Collaborated with cross-functional teams to design and deliver scalable backend systems.
Worked in Agile/Scrum environments with iterative development and continuous delivery.
Experience in building high-throughput systems capable of handling large volumes of requests.
Continuously improving system performance, reliability, and maintainability.
Passionate about building robust, scalable, and efficient microservices-based systems.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 90,
    initials: 'Ps',
    title: 'DevOps & GitOps Engineer',
    experience: '5 years',
    skills: ['GitOps', 'ArgoCD', 'Kubernetes', 'Docker', 'Terraform', 'AWS'],
    skillCategory: 'DevOps',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
description: `
DevOps & GitOps Engineer with 5 years of experience in building scalable, automated, and reliable infrastructure using modern DevOps and GitOps practices.
Strong expertise in implementing GitOps workflows using tools like ArgoCD for declarative and version-controlled deployments.
Experienced in managing containerized applications using Docker and orchestrating them with Kubernetes in production environments.
Proficient in Infrastructure as Code (IaC) using Terraform for automated provisioning and management of cloud resources.
Hands-on experience with AWS cloud services for deploying, scaling, and managing cloud-native applications.
Skilled in designing and maintaining CI/CD pipelines to enable continuous integration and continuous delivery.
Strong understanding of Kubernetes architecture, including deployments, services, ingress, and Helm charts.
Experience in managing configuration and application lifecycle through Git-based workflows.
Proficient in implementing automated rollbacks, blue-green deployments, and canary releases using GitOps principles.
Experience in monitoring and observability using tools like Prometheus, Grafana, and centralized logging systems.
Strong knowledge of Linux systems, shell scripting, and automation of operational tasks.
Experience in securing Kubernetes clusters and implementing best practices for container security.
Familiar with service mesh technologies such as Istio for traffic management and observability.
Experience in handling secrets management using tools like HashiCorp Vault and Kubernetes secrets.
Proficient in troubleshooting production issues and performing root cause analysis.
Experience in building highly available and fault-tolerant systems using auto-scaling and load balancing.
Strong understanding of networking concepts and cloud infrastructure design.
Collaborated with development teams to streamline deployment processes and improve release cycles.
Experience in implementing DevSecOps practices to integrate security into CI/CD pipelines.
Worked in Agile/Scrum environments delivering infrastructure solutions in iterative cycles.
Experience in managing multi-environment deployments (dev, staging, production) using GitOps.
Continuously improving infrastructure reliability, scalability, and deployment efficiency.
Passionate about automation, declarative infrastructure, and modern cloud-native practices.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 91,
    initials: 'Kf',
    title: 'AI/ML & Deep Learning Engineer',
    experience: '5 years',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Computer Vision', 'AWS'],
    skillCategory: 'AI/ML',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
description: `
AI/ML & Deep Learning Engineer with 5 years of experience in designing, developing, and deploying scalable machine learning and deep learning solutions.
Strong expertise in building and training neural networks using frameworks such as TensorFlow and PyTorch.
Experienced in developing end-to-end machine learning pipelines including data preprocessing, feature engineering, model training, evaluation, and deployment.
Proficient in Python programming with extensive use of libraries such as NumPy, Pandas, and Scikit-learn for data analysis and modeling.
Hands-on experience in deep learning techniques including CNNs, RNNs, LSTMs, and Transformers for various applications.
Skilled in computer vision tasks such as image classification, object detection, and image segmentation.
Experience in working with NLP models for text classification, sentiment analysis, and language understanding.
Strong understanding of model optimization techniques including hyperparameter tuning, regularization, and ensemble methods.
Experience in deploying machine learning models into production using REST APIs and cloud platforms such as AWS.
Familiar with MLOps practices including CI/CD pipelines, model versioning, monitoring, and retraining strategies.
Hands-on experience with GPU acceleration and distributed training for large-scale deep learning models.
Experience in working with large datasets and big data tools for scalable data processing.
Proficient in data visualization using Matplotlib, Seaborn, and Plotly for presenting insights.
Strong understanding of statistics, probability, and linear algebra fundamentals for machine learning.
Experience in building recommendation systems, predictive models, and anomaly detection systems.
Skilled in using tools like Jupyter Notebook for experimentation and prototyping.
Experience in integrating machine learning models into real-world applications and products.
Collaborated with data engineers, analysts, and product teams to deliver AI-driven solutions.
Strong debugging and problem-solving skills in optimizing model performance and accuracy.
Experience in building real-time inference systems with low latency and high throughput.
Familiar with containerization using Docker and deployment orchestration.
Continuously learning and implementing latest advancements in AI, deep learning, and generative AI.
Passionate about building intelligent systems that solve complex real-world problems using data.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 92,
    initials: 'Gd',
    title: 'Cloud & Infrastructure Engineer',
    experience: '6 years',
    skills: ['AWS', 'Terraform', 'CloudFormation', 'Docker', 'Kubernetes', 'Python'],
    skillCategory: 'Cloud',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
description: `
Cloud & Infrastructure Engineer with 6 years of experience in designing, deploying, and managing scalable, secure, and highly available cloud environments.
Strong expertise in building cloud infrastructure on AWS using best practices for performance, reliability, and cost optimization.
Proficient in Infrastructure as Code (IaC) using Terraform and AWS CloudFormation to automate provisioning and configuration.
Hands-on experience with containerization using Docker and orchestration using Kubernetes for managing microservices-based applications.
Experienced in designing and implementing CI/CD pipelines for automated build, testing, and deployment processes.
Strong understanding of cloud architecture patterns including high availability, fault tolerance, and disaster recovery strategies.
Skilled in configuring and managing networking components such as VPCs, subnets, load balancers, and security groups.
Experience in implementing auto-scaling solutions to handle dynamic workloads efficiently.
Proficient in scripting using Python and Shell for automation of infrastructure and operational tasks.
Experience in monitoring and logging using tools such as CloudWatch, Prometheus, and Grafana for system observability.
Strong knowledge of Linux systems administration and performance tuning.
Experience in managing and securing cloud environments using IAM roles, policies, and best security practices.
Hands-on experience with configuration management tools such as Ansible for system automation.
Skilled in optimizing infrastructure costs through resource monitoring, rightsizing, and efficient architecture design.
Experience in building and maintaining data storage solutions using services like S3, EBS, and RDS.
Worked on microservices architecture and container-based deployments for scalable systems.
Proficient in troubleshooting production issues and performing root cause analysis.
Experience in implementing DevOps practices and collaborating with development teams for faster delivery cycles.
Familiar with multi-cloud environments and hybrid cloud architectures.
Strong understanding of networking protocols and secure communication practices.
Experience in backup, disaster recovery planning, and business continuity strategies.
Worked in Agile/Scrum environments delivering reliable infrastructure solutions.
Continuously learning and adopting new cloud technologies and best practices.
Passionate about building resilient, scalable, and efficient infrastructure systems.
`,    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 93,
    initials: 'Ms',
    title: 'Blockchain & Web3 Developer',
    experience: '4 years',
    skills: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Node.js', 'IPFS'],
    skillCategory: 'Blockchain',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'Web3 developer with 4+ years of blockchain expertise, specializing in building decentralized applications and smart contracts. Proficient in Solidity for smart contract development. Experienced in Ethereum for blockchain development. Skilled in Web3.js for blockchain interaction. Proficient in React for frontend interfaces. Strong understanding of wallet integration and authentication. Experienced in IPFS for decentralized storage. Knowledgeable in testing using Hardhat. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about Web3 innovation.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 94,
    initials: 'Pf',
    title: 'Security & Compliance Engineer',
    experience: '6 years',
    skills: ['Security', 'Compliance', 'AWS', 'Terraform', 'Python', 'SIEM'],
    skillCategory: 'Cybersecurity',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'Compliance engineer with 6+ years of security expertise, specializing in implementing SOC 2 and ISO 27001 frameworks. Proficient in security best practices and risk assessment. Experienced in compliance frameworks including SOC 2, ISO 27001, and GDPR. Skilled in AWS for secure cloud infrastructure. Proficient in Terraform for security as code. Strong understanding of SIEM tools and log analysis. Experienced in vulnerability assessment and remediation. Knowledgeable in security automation using Python. Collaborative team player with excellent communication skills, experienced in audits. Passionate about security compliance.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 95,
    initials: 'St',
    title: 'Mobile & React Native Developer',
    experience: '5 years',
    skills: ['React Native', 'JavaScript', 'TypeScript', 'Firebase', 'Redux', 'AWS'],
    skillCategory: 'Mobile',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'React Native specialist with 5+ years of TypeScript expertise, specializing in building cross-platform mobile apps. Proficient in React Native with TypeScript for type-safe mobile development. Experienced in JavaScript for flexible mobile development. Skilled in Firebase for backend services and authentication. Proficient in Redux for state management in complex apps. Strong understanding of native module integration. Experienced in AWS for backend deployment. Knowledgeable in app store submission and optimization. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about React Native development.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 96,
    initials: 'Gs',
    title: 'Full Stack JavaScript Developer',
    experience: '5 years',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
    skillCategory: 'Full Stack',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'JavaScript full-stack developer with 5+ years of MERN expertise, specializing in building modern web applications. Proficient in JavaScript and ES6+ features. Experienced in React for frontend development. Skilled in Node.js and Express for backend APIs. Proficient in MongoDB for data storage. Strong understanding of RESTful API design. Experienced in AWS for deployment. Knowledgeable in authentication using JWT. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about JavaScript development.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 97,
    initials: 'Wj',
    title: 'Frontend & React Developer',
    experience: '5 years',
    skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'Redux', 'Testing'],
    skillCategory: 'Frontend',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'React specialist with 5+ years of strong frontend skills, specializing in building responsive and accessible web applications. Proficient in React for component-based development. Experienced in JavaScript and TypeScript. Skilled in CSS and modern styling techniques. Proficient in Redux for state management. Strong understanding of accessibility standards and WCAG. Experienced in testing using Jest and React Testing Library. Knowledgeable in performance optimization. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about user experience.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 98,
    initials: 'Dg',
    title: 'Backend & API Developer',
    experience: '5 years',
    skills: ['Node.js', 'Python', 'REST API', 'GraphQL', 'PostgreSQL', 'Docker'],
    skillCategory: 'Backend',
    availability: 'Available in 2 weeks',
    availabilityClass: 'bg-yellow-500',
    description: 'API specialist with 5+ years of expertise in REST and GraphQL, specializing in building scalable backend services. Proficient in Node.js for backend development. Experienced in Python for API development. Skilled in RESTful API design and implementation. Proficient in GraphQL for flexible data fetching. Strong understanding of PostgreSQL for data storage. Experienced in Docker for containerization. Knowledgeable in authentication and authorization patterns. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about API development.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 99,
    initials: 'El',
    title: 'Python & ML Engineer',
    experience: '5 years',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'SQL', 'Docker'],
    skillCategory: 'AI/ML',
    availability: 'Available Now',
    availabilityClass: 'bg-green-500',
    description: 'ML engineer with 5+ years of strong Python skills, specializing in building and deploying machine learning models. Proficient in Python for ML development. Experienced in TensorFlow and Keras for deep learning. Skilled in Scikit-learn for traditional ML models. Proficient in Pandas for data manipulation. Strong understanding of model deployment and inference. Experienced in Docker for containerization. Knowledgeable in SQL for data queries. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about ML solutions.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  },
  {
    id: 100,
    initials: 'Pj',
    title: 'Cloud & DevOps Engineer',
    experience: '6 years',
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Jenkins',
      'Python',
      'AWS Lambda',
      'Amazon ECS',
      'Amazon EKS',
      'AWS CloudFormation',
      'AWS IAM',
      'AWS VPC',

      // CI/CD & DevOps
      'Git',
      'GitHub Actions',
      'GitLab CI/CD',
      'CI/CD Pipelines',
      'ArgoCD',
      'Ansible',
      'Shell Scripting',
      'Infrastructure as Code (IaC)',
      'Prometheus',
      'Grafana',
      'ELK Stack (Elasticsearch, Logstash, Kibana)',
      'CloudWatch',
      'Helm',
      'Container Security',
      'Linux Administration',
      'Networking',
      'SSL/TLS',
      'Secrets Management (Vault)',
      'Nginx',
      'Apache',
      'REST APIs',
      'Microservices Architecture'],
    skillCategory: 'Cloud',
    availability: 'Available in 1 week',
    availabilityClass: 'bg-yellow-500',
    description: 'Cloud DevOps engineer with 6+ years of AWS expertise, specializing in building and maintaining cloud infrastructure and CI/CD pipelines. Proficient in AWS for comprehensive cloud solutions. Experienced in Docker and Kubernetes for containerization and orchestration. Skilled in Terraform for infrastructure as code. Proficient in Jenkins and GitHub Actions for CI/CD pipelines. Strong understanding of serverless architectures using Lambda. Experienced in monitoring using Prometheus, Grafana, and CloudWatch. Knowledgeable in security best practices including IAM and VPC configuration. Collaborative team player with excellent communication skills, experienced in Agile methodologies. Passionate about automation and reliability.',
    workType: 'Remote',
    location: 'India',
    englishLevel: 'Fluent'
  }
];

const filterButtons = [
  'All',
  'React',
  'Node.js',
  'Angular',
  'Python',
  'Flutter',
  '.NET',
  'AI/ML',
  'DevOps',
  'Data Science',
  'Cloud',
  'Blockchain',
  'Cybersecurity',
  'Mobile',
  'Full Stack',
  'Frontend',
  'Backend'
];

const ITEMS_PER_PAGE = 9;

const DevelopersPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [techStackSearch, setTechStackSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredDevelopers, setFilteredDevelopers] = useState(developersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSkillsCard, setShowSkillsCard] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const highlightedIndexRef = useRef(-1);

  // Get all unique tech stacks and developer titles from developers data
  const allTechStacks = [...new Set(developersData.flatMap(dev => dev.skills))].sort();
  const allDeveloperTitles = [...new Set(developersData.map(dev => dev.title))].sort();
  const allSuggestions = [...new Set([...allTechStacks, ...allDeveloperTitles])].sort();

  useEffect(() => {
    initializePageTracking('Developers - Talent Marketplace', '/developers', {
      page_type: 'talent_marketplace'
    });
  }, []);

  // Filter developers based on active filter and tech stack search
  useEffect(() => {
    let filtered = developersData;

    // Filter by active filter (category)
    if (activeFilter !== 'All') {
      filtered = filtered.filter(dev => dev.skillCategory === activeFilter);
    }

    // Filter by tech stack search (skills and title)
    if (techStackSearch.trim()) {
      filtered = filtered.filter(dev =>
        dev.skills.some(skill =>
          skill.toLowerCase().includes(techStackSearch.toLowerCase())
        ) ||
        dev.title.toLowerCase().includes(techStackSearch.toLowerCase())
      );
    }

    setFilteredDevelopers(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeFilter, techStackSearch]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setTechStackSearch(''); // Clear tech stack search when using filter buttons
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.tech-stack-search-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Reset highlighted index when search query changes
  useEffect(() => {
    setHighlightedIndex(-1);
    highlightedIndexRef.current = -1;
  }, [techStackSearch]);

  // Handle keyboard navigation for dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showDropdown || !techStackSearch) return;

      const filteredSuggestions = allSuggestions
        .filter(suggestion =>
          suggestion.toLowerCase().includes(techStackSearch.toLowerCase())
        )
        .slice(0, 10);

      if (e.key === 'PageDown') {
        e.preventDefault();
        if (filteredSuggestions.length > 0) {
          const newIndex = highlightedIndexRef.current < filteredSuggestions.length - 1
            ? highlightedIndexRef.current + 1
            : 0;
          setHighlightedIndex(newIndex);
          highlightedIndexRef.current = newIndex;
        }
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        if (filteredSuggestions.length > 0) {
          const newIndex = highlightedIndexRef.current > 0
            ? highlightedIndexRef.current - 1
            : filteredSuggestions.length - 1;
          setHighlightedIndex(newIndex);
          highlightedIndexRef.current = newIndex;
        }
      } else if (e.key === 'Enter' && techStackSearch.trim()) {
        if (highlightedIndexRef.current >= 0 && highlightedIndexRef.current < filteredSuggestions.length) {
          e.preventDefault();
          // Select the highlighted suggestion
          const selectedSuggestion = filteredSuggestions[highlightedIndexRef.current];
          setTechStackSearch(selectedSuggestion);
          setShowDropdown(false);
          const filtered = developersData.filter(dev =>
            dev.skills.some(skill =>
              skill.toLowerCase().includes(selectedSuggestion.toLowerCase())
            ) ||
            dev.title.toLowerCase().includes(selectedSuggestion.toLowerCase())
          );
          setFilteredDevelopers(filtered);
          setActiveFilter('All');
        }
      } else if (e.key === 'Escape') {
        setShowDropdown(false);
        setHighlightedIndex(-1);
        highlightedIndexRef.current = -1;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showDropdown, techStackSearch, allSuggestions]);

  const openModal = (developer) => {
    setSelectedDeveloper(developer);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDeveloper(null);
    document.body.style.overflow = 'unset';
  };


  // Pagination logic
  const totalPages = Math.ceil(filteredDevelopers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentDevelopers = filteredDevelopers.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const formatMaskedName = (name) => {
    if (!name) return '';
    if (name.length <= 1) return name;
    return name[0] + '*' + name[name.length - 1];
  };

  const goToPreviousPage = () => {
    goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <Head>
        <title>Hire Pre-Vetted Developers | Talent Marketplace - Brandsmashers Tech</title>
        <meta name="description" content="Browse our talent marketplace and hire pre-vetted developers. Top 3% of applicants. Interview-ready in 48 hours. Start risk-free." />
        <meta name="keywords" content="hire developers, talent marketplace, pre-vetted developers, remote developers, React, Node.js, Python, Angular, Flutter, AI/ML, DevOps, Data Science, Cloud, Blockchain, Cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Hire Pre-Vetted Developers | Talent Marketplace" />
        <meta property="og:description" content="Top 3% of applicants. Interview-ready in 48 hours. Start risk-free." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://brandsmashers.com/developers" />
      </Head>

      <div className="bg-white min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 pb-10 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 mb-12">          <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Browse Our Pre-Vetted Developers
          </h1>

          {/* Header Badges - Prominent Style */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 border-2 border-white/30 px-6 py-3 rounded-lg backdrop-blur-sm">
              <span className="text-green-400 text-xl font-bold">✓</span>
              <span className="text-white font-semibold text-lg">100% Pre-Vetted</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border-2 border-white/30 px-6 py-3 rounded-lg backdrop-blur-sm">
              <span className="text-green-400 text-xl font-bold">✓</span>
              <span className="text-white font-semibold text-lg">Interview Ready in 48 Hours</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border-2 border-white/30 px-6 py-3 rounded-lg backdrop-blur-sm">
              <span className="text-green-400 text-xl font-bold">✓</span>
              <span className="text-white font-semibold text-lg">7-Day Risk-Free Trial</span>
            </div>
          </div>

          <p className="text-xl text-white/90 mb-8">
            Top 3% of applicants. Interview-ready in 48 hours. Start risk-free.
          </p>

          {/* Tech Stack Search Bar */}
          <div className="tech-stack-search-container relative w-full max-w-2xl mx-auto">
            <div
              className="relative flex items-center px-6 py-3"
              style={{
                height: '60px',
                borderRadius: '40px',
                background: '#F2F2F2',
              }}
            >
              {/* Search Input */}
              <input
                type="text"
                value={techStackSearch}
                onChange={(e) => {
                  setTechStackSearch(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && techStackSearch.trim() && highlightedIndexRef.current === -1) {
                    // No suggestion highlighted, perform regular search
                    setShowDropdown(false);
                    const filtered = developersData.filter(dev =>
                      dev.skills.some(skill =>
                        skill.toLowerCase().includes(techStackSearch.toLowerCase())
                      ) ||
                      dev.title.toLowerCase().includes(techStackSearch.toLowerCase())
                    );
                    setFilteredDevelopers(filtered);
                    setActiveFilter('All');
                  }
                }}
                placeholder="Search by tech stack or profile name (e.g., React, Full Stack Developer, MERN)"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />

              {/* Search Button */}
              <button
                onClick={() => {
                  if (techStackSearch.trim()) {
                    const filtered = developersData.filter(dev =>
                      dev.skills.some(skill =>
                        skill.toLowerCase().includes(techStackSearch.toLowerCase())
                      ) ||
                      dev.title.toLowerCase().includes(techStackSearch.toLowerCase())
                    );
                    setFilteredDevelopers(filtered);
                    setActiveFilter('All');
                  }
                }}
                className="p-3 rounded-full transition-colors"
                style={{
                  background: 'rgb(255,80,16)',
                  color: '#1a1a1a',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {showDropdown && techStackSearch && (
                <div
                  className="absolute left-0 right-0 top-full mt-2 rounded-lg shadow-md z-50"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(255, 80, 16, 0.2)',
                    maxHeight: '300px',
                    overflowY: 'auto',
                  }}
                >
                  <div className="p-2">
                    {allSuggestions
                      .filter(suggestion =>
                        suggestion.toLowerCase().includes(techStackSearch.toLowerCase())
                      )
                      .sort((a, b) => {
                        const searchTerm = techStackSearch.toLowerCase();
                        const aLower = a.toLowerCase();
                        const bLower = b.toLowerCase();

                        // Exact match gets highest priority
                        if (aLower === searchTerm && bLower !== searchTerm) return -1;
                        if (bLower === searchTerm && aLower !== searchTerm) return 1;

                        // Starts with search term gets second priority
                        const aStartsWith = aLower.startsWith(searchTerm);
                        const bStartsWith = bLower.startsWith(searchTerm);
                        if (aStartsWith && !bStartsWith) return -1;
                        if (bStartsWith && !aStartsWith) return 1;

                        // Otherwise maintain alphabetical order
                        return a.localeCompare(b);
                      })
                      .slice(0, 10)
                      .map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setTechStackSearch(suggestion);
                            setShowDropdown(false);
                            const filtered = developersData.filter(dev =>
                              dev.skills.some(skill =>
                                skill.toLowerCase().includes(suggestion.toLowerCase())
                              ) ||
                              dev.title.toLowerCase().includes(suggestion.toLowerCase())
                            );
                            setFilteredDevelopers(filtered);
                            setActiveFilter('All');
                          }}
                          onMouseEnter={() => {
                            setHighlightedIndex(index);
                            highlightedIndexRef.current = index;
                          }}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${highlightedIndex === index
                            ? 'bg-orange-50 text-orange-600'
                            : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                            }`}
                        >
                          {suggestion}
                        </button>
                      ))}
                    {allSuggestions.filter(suggestion =>
                      suggestion.toLowerCase().includes(techStackSearch.toLowerCase())
                    ).length === 0 && (
                        <p className="text-gray-500 text-sm px-4 py-2">No matching suggestions found</p>
                      )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        </section>

        {/* Filter Section */}
        <section className="px-4 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {filterButtons.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Developers Grid */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentDevelopers.map((developer, index) => (
                <div
                  key={developer.id}
                  data-skill={developer.skillCategory}
                  className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#E6440A] flex flex-col h-full`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {formatMaskedName(developer.initials)}
                        </span>                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-md">{developer.title}</h3>
                        <p className="text-gray-500 text-sm">{developer.company}</p>
                        <span className="text-[#E6440A] font-semibold text-sm">{developer.experience} experience</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {developer.skills.slice(0, 5).map((skill, index) => (
                      <span
                        key={index}
                        className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-full border border-indigo-100 font-medium transition-all duration-200 hover:bg-indigo-100 hover:border-indigo-200"
                      >
                        {skill}
                      </span>
                    ))}
                    {developer.skills.length > 5 && (
                      <button
                        onClick={() => openModal(developer)}
                        className="text-indigo-600 text-xs font-semibold hover:text-indigo-800 hover:underline transition-colors duration-200 cursor-pointer"
                      >
                        +{developer.skills.length - 5} more
                      </button>
                    )}
                  </div>
                  <div className="border-t border-gray-100 my-4"></div>


                  {/* Availability and Button */}
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${developer.availabilityClass}`}></span>
                      <span className={`text-sm font-medium ${developer.availability.toLowerCase().includes('available now') || developer.availability.toLowerCase().includes('available') && !developer.availability.toLowerCase().includes('in')
                        ? 'text-green-500'
                        : 'text-amber-500'
                        }`}>{developer.availability}</span>
                    </div>
                    <button
                      onClick={() => openModal(developer)}
                      className="bg-[#E6440A] hover:bg-[#c73a08] text-white font-semibold py-1 px-2 rounded-lg transition-all duration-300 text-sm"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredDevelopers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No developers found for this category.</p>
                <p className="text-gray-400">Please try another filter or contact us for custom requirements.</p>
              </div>
            )}

            {/* Pagination */}
            {filteredDevelopers.length > 0 && totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                {/* Previous Button */}
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex gap-2">
                  {getPageNumbers().map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' && goToPage(page)}
                      disabled={page === '...'}
                      className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${page === currentPage
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : page === '...'
                          ? 'bg-transparent text-gray-400 cursor-default'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                >
                  Next
                </button>
              </div>
            )}

            {/* Page Info */}
            {filteredDevelopers.length > 0 && (
              <div className="text-center mt-4 text-gray-500 text-sm">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredDevelopers.length)} of {filteredDevelopers.length} developers
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Custom Requirements?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Can't find the right developer? We have access to 500+ additional pre-vetted talent. Let us find your perfect match.
            </p>
            <a
              href="https://calendly.com/productsaas0/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </section>

        <Footer />

        {/* Modal */}
        {isModalOpen && selectedDeveloper && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-100 shadow-lg">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{formatMaskedName(selectedDeveloper.initials)}</span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-2xl">{selectedDeveloper.title}</h3>
                    <p className="text-gray-400">{selectedDeveloper.company}</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-gray-400 text-xs mb-1">Experience</p>
                    <p className="text-gray-900 font-semibold">{selectedDeveloper.experience}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-gray-400 text-xs mb-1">Work Type</p>
                    <p className="text-gray-900 font-semibold">{selectedDeveloper.workType}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-gray-400 text-xs mb-1">Location</p>
                    <p className="text-gray-900 font-semibold">{selectedDeveloper.location}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-gray-400 text-xs mb-1">English</p>
                    <p className="text-gray-900 font-semibold">{selectedDeveloper.englishLevel}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2 mb-6">
                  <span className={`w-3 h-3 rounded-full ${selectedDeveloper.availabilityClass}`}></span>
                  <span className="text-gray-700 font-medium">{selectedDeveloper.availability}</span>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-gray-900 font-semibold mb-2">About</h4>
                  <p className="text-gray-500 leading-relaxed">{selectedDeveloper.description}</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-gray-900 font-semibold mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDeveloper.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-50 text-gray-600 text-sm px-3 py-1.5 rounded-xl border border-gray-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    console.log("Redirecting to Calendly...");
                    window.open("https://calendly.com/productsaas0/30min", "_blank");
                  }}
                  className="w-full bg-[#E6440A] hover:bg-[#c73a08] text-white font-semibold py-4 rounded-xl text-md shadow-md hover:shadow-lg transition-all duration-300"                >
                  Schedule Interview
                </button>                <p className="text-center text-gray-400 text-sm mt-3">
                  7-day risk-free trial available
                </p>
              </div>
            </div>
          </div>
        )}
      </div>


    </>
  );
};

export default DevelopersPage;
