// Dynamic metadata generator for SEO optimization

export const generateMetadata = (page, customData = {}) => {
  const baseUrl = 'https://brandsmashers.tech';
  
  const metadata = {
    title: customData.title || `Brandsmashers Tech - ${page}`,
    description: customData.description || `Expert ${page} services by Brandsmashers Tech. Custom software development, web development, and IT solutions.`,
    keywords: customData.keywords || `${page}, software development, web development, IT solutions, custom software, Brandsmashers Tech`,
    openGraph: {
      title: customData.ogTitle || `Brandsmashers Tech - ${page}`,
      description: customData.ogDescription || `Professional ${page} services. Expert developers, custom solutions, and innovative technology.`,
      type: 'website',
      url: `${baseUrl}/${customData.slug || ''}`,
      image: customData.ogImage || `${baseUrl}/logo.jpg`,
      siteName: 'Brandsmashers Tech',
    },
    twitter: {
      card: 'summary_large_image',
      title: customData.twitterTitle || `Brandsmashers Tech - ${page}`,
      description: customData.twitterDescription || `Expert ${page} services and custom software development.`,
      image: customData.twitterImage || `${baseUrl}/logo.jpg`,
    },
    alternates: {
      canonical: `${baseUrl}/${customData.slug || ''}`,
    },
  };

  return metadata;
};

// Service-specific metadata
export const serviceMetadata = {
  'web-development': {
    title: 'Web Development Services',
    description: 'Custom web development solutions with modern technologies. React, Node.js, and scalable web applications.',
    keywords: 'web development, React, Node.js, JavaScript, custom websites, frontend development',
    ogTitle: 'Professional Web Development Services',
    ogDescription: 'Expert web development with modern frameworks. Custom websites and web applications.',
  },
  'mobile-apps': {
    title: 'Mobile App Development Services',
    description: 'Native and cross-platform mobile app development. iOS, Android, React Native, and Flutter solutions.',
    keywords: 'mobile app development, iOS, Android, React Native, Flutter, mobile applications',
    ogTitle: 'Mobile App Development Services',
    ogDescription: 'Custom mobile applications for iOS and Android. Expert mobile development team.',
  },
  'custom-software': {
    title: 'Custom Software Development',
    description: 'Tailored software solutions for your business needs. Enterprise software and custom applications.',
    keywords: 'custom software, enterprise software, business solutions, software development',
    ogTitle: 'Custom Software Development Services',
    ogDescription: 'Bespoke software solutions designed for your business requirements.',
  },
  'uiux-development': {
    title: 'UI/UX Design Services',
    description: 'User-centered design solutions. Intuitive interfaces and exceptional user experiences.',
    keywords: 'UI design, UX design, user interface, user experience, design services',
    ogTitle: 'UI/UX Design Services',
    ogDescription: 'Professional UI/UX design for web and mobile applications.',
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    description: 'Comprehensive digital marketing solutions. SEO, SEM, social media, and content marketing.',
    keywords: 'digital marketing, SEO, SEM, social media marketing, content marketing',
    ogTitle: 'Digital Marketing Services',
    ogDescription: 'Strategic digital marketing to grow your online presence and reach.',
  },
  'ai-ml': {
    title: 'AI & Machine Learning Services',
    description: 'Cutting-edge AI and machine learning solutions. Data science and intelligent automation.',
    keywords: 'AI, machine learning, artificial intelligence, data science, automation',
    ogTitle: 'AI & Machine Learning Services',
    ogDescription: 'Advanced AI and ML solutions to transform your business processes.',
  },
};

// Technology-specific metadata
export const technologyMetadata = {
  'react': {
    title: 'React Development Services',
    description: 'Expert React development with modern practices. Custom React applications and components.',
    keywords: 'React, React.js, frontend development, JavaScript, web development',
  },
  'node-js': {
    title: 'Node.js Development Services',
    description: 'Scalable Node.js backend development. REST APIs, microservices, and server-side solutions.',
    keywords: 'Node.js, backend development, JavaScript, API development, server-side',
  },
  'python': {
    title: 'Python Development Services',
    description: 'Python development for web applications, data science, and automation solutions.',
    keywords: 'Python, Django, Flask, data science, automation, web development',
  },
  'java': {
    title: 'Java Development Services',
    description: 'Enterprise Java development. Spring Boot, microservices, and scalable applications.',
    keywords: 'Java, Spring Boot, enterprise development, microservices, backend',
  },
  'android': {
    title: 'Android App Development',
    description: 'Native Android application development. Kotlin, Java, and modern Android practices.',
    keywords: 'Android, mobile development, Kotlin, Java, mobile apps',
  },
  'ios': {
    title: 'iOS App Development',
    description: 'Native iOS application development. Swift, Objective-C, and Apple ecosystem.',
    keywords: 'iOS, mobile development, Swift, iPhone apps, Apple development',
  },
};

// Structured data for SEO
export const generateStructuredData = (type, data) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Brandsmashers Tech',
    url: 'https://brandsmashers.tech',
    logo: 'https://brandsmashers.tech/logo.jpg',
    description: 'Custom software development and IT solutions company',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@brandsmashers.tech',
    },
    sameAs: [
      'https://www.linkedin.com/company/brandsmashers-tech',
      'https://twitter.com/brandsmashers',
    ],
  };

  switch (type) {
    case 'Organization':
      return baseStructuredData;
    
    case 'Service':
      return {
        ...baseStructuredData,
        '@type': 'Service',
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: 'Brandsmashers Tech',
        },
      };
    
    case 'WebPage':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.title,
        description: data.description,
        url: `https://brandsmashers.tech/${data.slug}`,
      };
    
    case 'Article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Organization',
          name: 'Brandsmashers Tech',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Brandsmashers Tech',
          logo: {
            '@type': 'ImageObject',
            url: 'https://brandsmashers.tech/logo.jpg',
          },
        },
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate,
      };
    
    default:
      return baseStructuredData;
  }
};

const metadataUtils = { generateMetadata, serviceMetadata, technologyMetadata, generateStructuredData };

export default metadataUtils;
