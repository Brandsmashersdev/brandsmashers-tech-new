import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import HeroSectionTech from "@/components/HireDevelopers/HeroSectionForTech";
import Stats from "@/components/HireDevelopers/Android/Stats";
import PartnerCompanies from "@/components/HireDevelopers/Android/PartnerCompanies";
import AndroidHero from "@/components/HireDevelopers/Android/AndroidHero";
import ServiceGrids from "@/components/HireDevelopers/Android/ServiceGrid";
// import AndroidCarousel from "@/components/HireDevelopers/Android/AndroidCarousel";
import DynamicCarousel from "@/components/HireDevelopers/DynamicCarousel";
import Head from "next/head";
import FAQSection from "@/components/HomePage/FAQSection";
import ComingSoon from "@/pages/coming-soon";


// Technology data
const technologyData = {
  "android-developer": {
    title: "Hire Best Android App Developer from India",
    description:
      "Need a remote Android app developer from India? Your search ends here! Hire top Android developers through Brandsmashers Tech and get custom-built mobile solutions designed for a seamless, visually stunning user experience. Our experts ensure high-quality, performance-driven apps tailored to your business needs",
    buttonText: "Hire Android Developer",
    services: {
      mainTitle: "Hire Top-Tier Android Developers for Your Next Project",
      // highlightedWord: "App Developers",
      subTitle:
        "Hire offshore Android app programmers to create feature-rich applications.",
      services: [
        {
          title: "Tailored Android App Development",
          description:
            "Hire our expert developers to craft a custom Android app from the ground up. Our skilled engineers specialize in Android Studio and ensure high-quality, feature-rich mobile applications tailored to your business needs.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: " Blockchain Mobile App Development",
          description:
            "Looking to harness the power of Blockchain technology? Hire experienced Android developers from Brandsmashers to build a secure, decentralized Blockchain mobile app tailored to your business needs.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Android Game Development",
          description:
            "Mobile gaming is on the rise! Our skilled game developers craft immersive, high-performance, and engaging gaming apps designed for maximum user retention and revenue growth.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "UI/UX Design",
          description:
            "Captivate your users with stunning, user-friendly interfaces. Hire our expert developers to create seamless and visually engaging UI/UX designs for your mobile apps.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Android App Consulting",
          description:
            "Work with a skilled Android app developer in India who can guide you through the entire mobile app development journey. From evaluating your app idea to discussing feasibility, development strategies, and key technical aspects, we ensure a smooth process.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Android App Migration",
          description:
            "Looking to convert your iOS app into an Android app without losing any data? Hire our migration experts at Brandsmashers to seamlessly transition your app while enhancing it with advanced features.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "Android Application Developers",
        afterHighlight: "from India with Expertise in Relevant Technologies"
      },

      description: "The Android platform is a powerful and widely preferred choice for developing high-quality mobile applications. Whether you're looking to build a custom app or enhance an existing one, hiring an Android app developer from India gives you access to skilled professionals with expertise in the latest Android technologies. Explore our comprehensive range of services to create innovative, feature-rich Android apps that meet your business needs.",
      cardsData: [
        {
          id: 1,
          title: 'Android + Kotlin',
          description: 'Modern Android development with Kotlin. 100% Java interoperability and reduced boilerplate code.',
          icon1: '/android-techicon.png',
          icon2: '/icon-techkotlin.png'
        },
        {
          id: 2,
          title: 'Android + Java',
          description: 'Traditional Android development with Java. Robust, secure, and highly scalable applications.',
          icon1: '/android-techicon.png',
          icon2: '/icon-techjava.png'
        },
        {
          id: 3,
          title: 'Android + Flutter',
          description: 'Cross-platform development with Flutter. Create beautiful native interfaces for Android devices.',
          icon1: '/android-techicon.png',
          icon2: '/icon-techflutter.png'
        },
        {
          id: 4,
          title: 'Android + React Native',
          description: 'Build native Android apps using React Native. Leverage JavaScript for mobile development.',
          icon1: '/android-techicon.png',
          icon2: '/icon-techreact.png'
        },
        {
          id: 5,
          title: 'Android + Firebase',
          description: 'Integrate Firebase services for robust backend solutions. Real-time database, authentication, and cloud functions.',
          icon1: '/android-techicon.png',
          icon2: '/icon-techfirebase.png'
        },
        {
          id: 6,
          title: 'Android + Jetpack',
          description: 'Leverage Android Jetpack components for modern app architecture. Build robust, maintainable applications.',
          icon1: '/android-techicon.png',
          icon2: '/icon-techjetpack.png'
        },
        {
          id: 7,
          title: 'Android + NDK',
          description: 'Native Development Kit for high-performance applications. Optimize critical components with C/C++.',
          icon1: '/android-techicon.png',
          icon2: '/icon-techndk.png'
        },
        {
          id: 8,
          title: 'Android + Unity',
          description: 'Create immersive gaming experiences for Android. Develop high-quality 2D and 3D games.',
          icon1: '/android-techicon.png',
          icon2: '/icon-techunity.png'
        },
        {
          id: 9,
          title: 'Android + TensorFlow',
          description: 'Implement machine learning in Android apps. Add AI capabilities with TensorFlow Lite.',
          icon1: '/android-techicon.png',
          icon2: '/icon-techtensorflow.png'
        }
      ]
    }
  },
  "ios-developer": {
    title: "Hire Expert iOS Developers",
    description:
      "Are you looking for a remote ios app developer from India? Look nowhere and hire Android app developers through Best Remote Team. Our skilled Android experts offer the best-in-class, tailor-made mobile solutions that provide a visually enticing experience to your app users.",
    buttonText: "Hire iOS Developer",

    services: {
      mainTitle:
        "Hire expert iOS developers to build robust, high-performance apps.",
      // highlightedWord: "App Developers",
      subTitle:
        "Our iOS app developers provide a broad range of iOS app development services. Purchase an excellent, user-friendly, and high-performing iOS app.",
      services: [
        {
          title: "Apple Vision Pro Development",
          description:
            "Let us create advanced iOS applications that seamlessly integrate with Apple Vision Pro technology, delivering highly immersive and next-generation virtual experiences that captivate your audience.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "iPhone Game Development",
          description:
            "Our expert iOS developers specialize in crafting captivating and scalable gaming apps for iPhones. Partner with us to create thrilling, interactive, and innovative gaming experiences for users across the globe.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "iOS Developer with UI/UX Expertise",
          description:
            "Our iOS developers focus on delivering beautifully designed, intuitive user interfaces. We ensure your app offers an engaging experience with precise, user-centered design, making every interaction smooth and enjoyable.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Enterprise iOS App Development",
          description:
            "Transform your business operations with a custom-built enterprise iOS app tailored to your specific needs. Enhance productivity, streamline processes, and improve overall efficiency with our reliable, scalable solutions.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "iOS Testing Services",
          description:
            "Our comprehensive testing services guarantee flawless performance for your iOS apps. With our rigorous testing protocols, we ensure bug-free, smooth functionality and optimal performance, enhancing user satisfaction.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "iOS App Support and Maintenance",
          description:
            "Keep your app running smoothly with our ongoing support and maintenance services. From timely updates to addressing technical issues, we ensure your app stays current and delivers a seamless experience for users.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Top ",
        highlight: "iOS Application Developers",
        afterHighlight: " from India – Pre-Vetted Experts for Flawless App Development"
      },
      description: "Leverage our skilled developers to build high-performance, user-friendly iOS apps tailored to your business needs.",
      cardsData: [
        {
          id: 1,
          title: 'iOS + Swift',
          description: 'Modern iOS development with Swift. Build fast, safe, and interactive applications with Apples preferred language.',
          icon1: '/icon-techios.png',
          icon2: '/icon-techswift.png'
        },
        {
          id: 2,
          title: 'iOS + Objective-C',
          description: 'Traditional iOS development with Objective-C. Perfect for maintaining legacy apps and utilizing established codebases.',
          icon1: '/icon-techios.png',
          icon2: '/icon-techobjectiveC.png'
        },
        {
          id: 3,
          title: 'iOS + Objective-C++',
          description: 'Combine Objective-C with C++ for high-performance computing and complex algorithms in iOS applications.',
          icon1: '/icon-techios.png',
          icon2: '/icon-techobjectiveC++.png'
        },
        {
          id: 4,
          title: 'iOS + Python',
          description: 'Integrate Python scripts and libraries into iOS apps using Pythonkit. Perfect for data analysis and ML features.',
          icon1: '/icon-techios.png',
          icon2: '/icon-techpython.png'
        },
        {
          id: 5,
          title: 'iOS + JavaScript',
          description: 'Utilize JavaScript with frameworks like React Native or integrate JS libraries into native iOS applications.',
          icon1: '/icon-techios.png',
          icon2: '/icon-techjavascript.png'
        },
        {
          id: 6,
          title: 'iOS + C++',
          description: 'Leverage C++ for performance-critical components and cross-platform code sharing in iOS applications.',
          icon1: '/icon-techios.png',
          icon2: '/icon-techobjectiveC++.png'
        },
        {
          id: 7,
          title: 'iOS + Ruby',
          description: 'Integrate Ruby scripts and automate iOS development workflows. Perfect for custom build tools and testing.',
          icon1: '/icon-techios.png',
          icon2: '/icon-techruby.png'
        },
        {
          id: 8,
          title: 'iOS + Dart',
          description: 'Build iOS applications using Flutter/Dart. Create beautiful, natively compiled applications from a single codebase.',
          icon1: '/icon-techios.png',
          icon2: '/icon-techdart.png'
        },
        {
          id: 9,
          title: 'iOS + Shell Script',
          description: 'Automate iOS development processes and create custom build scripts using Shell scripting for enhanced workflow.',
          icon1: '/icon-techios.png',
          icon2: '/icon-techshellscript.png'
        }
      ]
    }
  },
  "flutter-developer": {
    title: "Hire Best Flutter Developer from India",
    description:
      "Are you looking for a remote Flutter developer from India? Look nowhere and hire Android app developers through Best Remote Team. Our skilled Android experts offer the best-in-class, tailor-made mobile solutions that provide a visually enticing experience to your app users.",
    buttonText: "Hire Flutter Developer",
    services: {
      mainTitle:
        "Hire Expert Flutter Developers to Build High-Performance Apps",
      // highlightedWord: "App Developers",
      subTitle:
        "Hire Flutter developers to create high-quality, tailored, and feature-packed cross-platform apps that meet the unique needs of startups and businesses.",
      services: [
        {
          title: "Cross-Platform Mobile Development",
          description:
            "Build high-quality apps for both iOS and Android with a single codebase using Flutter. Our developers specialize in creating efficient, cross-platform solutions that save time and reduce costs without compromising performance.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Custom Flutter App Solutions",
          description:
            "Tailor your app to meet your unique business requirements with our custom Flutter app development services. We ensure seamless user experiences, modern designs, and top-notch performance to help your app stand out.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "UI/UX Design with Flutter",
          description:
            "Leverage Flutter's powerful widgets to create visually stunning, responsive, and interactive app designs. Our team focuses on delivering user-friendly interfaces that enhance customer engagement and satisfaction.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Flutter for Startups and Enterprises",
          description:
            "Whether you’re a startup or an enterprise, Flutter is the perfect choice for building scalable, dynamic apps. Our experts deliver robust and future-proof solutions to support your business growth.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Seamless App Integration",
          description:
            "Enhance your existing systems with Flutter apps integrated with your APIs, third-party services, and databases. Our developers ensure smooth integration to optimize your app’s functionality.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Maintenance and Support for Flutter Apps",
          description:
            "Keep your Flutter app running smoothly with our comprehensive maintenance and support services. We ensure your app is updated, secure, and performing at its best at all times.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "Flutter Application Developers",
        afterHighlight: " from India with Expertise in Cross-Platform Development"
      },
      description: "Leverage the power of Flutter to build stunning, high-performance apps for iOS and Android with our experienced developers.",
      cardsData: [
        {
          id: 1,
          title: 'Flutter + Firebase',
          description: 'Build scalable apps with Firebase backend. Integrate real-time databases, authentication, cloud functions, and analytics.',
          icon1: '/icon-techflutter.png',
          icon2: '/icon-techfirebase.png'
        },
        {
          id: 2,
          title: 'Flutter + REST APIs',
          description: 'Develop apps with RESTful services integration. Handle complex API interactions, data serialization, and state management.',
          icon1: '/icon-techflutter.png',
          icon2: '/icon-techrestapi.png'
        },
        {
          id: 3,
          title: 'Flutter + GraphQL',
          description: 'Create efficient data-driven applications using GraphQL. Optimize network requests and implement real-time features.',
          icon1: '/icon-techflutter.png',
          icon2: '/icon-techgraphql.png'
        },
        {
          id: 4,
          title: 'Flutter + BLoC',
          description: 'Implement robust state management using BLoC pattern. Build predictable and testable application architecture.',
          icon1: '/icon-techflutter.png',
          icon2: '/icon-techbloc.png'
        },
        {
          id: 5,
          title: 'Flutter + GetX',
          description: 'Leverage GetX for state, route, and dependency management. Build lightweight and high-performance applications.',
          icon1: '/icon-techflutter.png',
          icon2: '/icon-techgetx.png'
        },
        {
          id: 6,
          title: 'Flutter + ML Kit',
          description: 'Integrate machine learning capabilities with ML Kit. Add features like text recognition, face detection, and image labeling.',
          icon1: '/icon-techflutter.png',
          icon2: '/icon-techmlkit.png'
        },
        {
          id: 7,
          title: 'Flutter + WebRTC',
          description: 'Build real-time communication apps with WebRTC. Implement video calls, chat, and data sharing functionalities.',
          icon1:'/icon-techflutter.png',
          icon2: '/icon-techwebrtc.png'
        },
        {
          id: 8,
          title: 'Flutter + SQLite',
          description: 'Implement local data persistence using SQLite. Create offline-first applications with robust data management.',
          icon1: '/icon-techflutter.png',
          icon2: '/icon-techsqlite.png'
        },
        {
          id: 9,
          title: 'Flutter + Provider',
          description: 'Use Provider pattern for efficient state management. Build scalable apps with dependency injection and reactive programming.',
          icon1: '/icon-techflutter.png',
          icon2: '/icon-techprovider.png' 
        }
      ]
    }
  },
  "react-native-developer": {
    title: "Hire Best React Native Developer from India",
    description:
      "Do you want to develop a high-performance cross-platform mobile app for your business? Hire a React Native Developer through Brandsmashers Tech and leverage our expertise to build scalable, user-friendly, and feature-rich React Native applications for Android, iOS, and other platforms. Our skilled developers ensure seamless performance, intuitive UI/UX, and business-centric solutions tailored to your needs.",
    buttonText: "Hire React Natiive Developer",
    services: {
      mainTitle: "Our Extensive Expertise in React Native Development",
      // highlightedWord: "App Developers",
      subTitle:
        "Our experienced mobile developers excel in React Native app development and deliver a broad spectrum of services related to it.",
      services: [
        {
          title: "React Native Android App Development",
          description:
            "If you're looking to create an Android app for your business, our React Native developers will design a high-performance, secure, and adaptable application that functions seamlessly like a native app. Consider hiring a React Native developer to bring your vision to life!",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "React Native App Development",
          description:
            "Our skilled React Native developers provide end-to-end app development services from the ground up. With extensive experience in creating and launching React Native mobile applications, they ensure a smooth and native-like user experience. Partner with us for your React Native app development needs!",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "React Native iOS App Development",
          description:
            "Create a premium, cross-platform iOS app that delivers a native-like experience. Our React Native iOS developers provide reliable and cost-effective development services tailored to your needs. Hire a React Native developer today to elevate your app's performance and user satisfaction!",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "React Native UI/UX Design",
          description:
            "Our React Native developers create highly intuitive, visually appealing, and engaging user interfaces that provide an exceptional user experience for your target audience. Let us enhance your app's design to captivate users and drive engagement!",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "React Native Enterprise App Development",
          description:
            "Our enterprise app development services improve business operations and streamline processes, giving you a competitive edge. With React Native, you can build robust applications that enhance collaboration and efficiency. Hire a React Native developer for tailored enterprise solutions!",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "React Native Consultation",
          description:
            "Hire our expert React Native app developers for personalized consultation on your app ideas, technology choices, and any questions you may have. We’re here to guide you through the development process and ensure you make informed decisions for your project!",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "React Native Application Developers",
        afterHighlight: " from India – Pre-Vetted Experts for Seamless Development"
      },
      description: "Our React Native developers leverage their expertise to deliver future-ready and highly scalable mobile applications, ensuring top-notch solutions for your business. Hire React Native Developers from Brandsmashers Tech to build cutting-edge apps with seamless performance and innovation.",
      cardsData: [
        {
          id: 1,
          title: 'React Native + Redux',
          description: 'Implement robust state management with Redux. Build predictable app states, manage complex data flows, and enable easy debugging.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techredux.png'
        },
        {
          id: 2,
          title: 'React Native + TypeScript',
          description: 'Develop type-safe applications with TypeScript. Enhance code quality, catch errors early, and improve development experience.',
          icon1: '//icon-techreact.png',
          icon2: '/icon-techtypescript.png'
        },
        {
          id: 3,
          title: 'React Native + Firebase',
          description: 'Build scalable apps with Firebase integration. Implement authentication, real-time database, cloud functions, and analytics.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techfirebase.png'
        },
        {
          id: 4,
          title: 'React Native + GraphQL',
          description: 'Create efficient data-driven applications using GraphQL. Optimize API calls and implement real-time features with subscriptions.',
          iicon1: '/icon-techreact.png',
          icon2: '/icon-techgraphql.png'
        },
        {
          id: 5,
          title: 'React Native + MobX',
          description: 'Utilize MobX for simple and scalable state management. Build reactive applications with automatic state tracking.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techmobx.png'
        },
        {
          id: 6,
          title: 'React Native + Native Modules',
          description: 'Extend app capabilities with native modules. Bridge native Android/iOS functionalities for optimal performance.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-technativemodules.png'
        },
        {
          id: 7,
          title: 'React Native + Realm',
          description: 'Implement efficient local database with Realm. Create offline-first apps with real-time synchronization capabilities.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techrealm.png'
        },
        {
          id: 8,
          title: 'React Native + Socket.IO',
          description: 'Build real-time applications with Socket.IO. Implement live chat, notifications, and bi-directional communication.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techsocketio.png'
        },
        {
          id: 9,
          title: 'React Native + AWS Amplify',
          description: 'Leverage AWS services with Amplify integration. Add cloud storage, authentication, APIs, and analytics to your app.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techawsamplify.png'
        }
      ]
    }
   
  },
  "angular-developer": {
    title: "Hire Best Angular Developer from India",
    description:
      "Looking for a remote AngularJS developer from India? We've got you covered! Hire top AngularJS developers through Brandsmashers Tech to build dynamic, scalable web applications with a seamless user experience. Our experts deliver high-performance, responsive, and feature-rich solutions tailored to your business needs.",
    buttonText: "Hire Angular Developer",
    services: {
      mainTitle: "Get Expert AngularJS Developers for Your Next Web Project!",
      // highlightedWord: "App Developers",
      subTitle:
        "Build dynamic, high-performance web applications with our skilled developers. We ensure seamless functionality, scalability, and a top-notch user experience.",
      services: [
        {
          title: "Custom AngularJS Development",
          description:
            "Hire dedicated AngularJS developers to build secure, scalable, and high-performing web applications tailored to your business needs. Our experts ensure cutting-edge solutions to give you a competitive edge.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "AngularJS Mobile & Single-Page Applications",
          description:
            "Develop cross-platform mobile apps or dynamic Single-Page Applications (SPAs) with AngularJS. Our developers create seamless, high-performing solutions that provide a native-like experience for your users.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "AngularJS UI/UX Design & Development",
          description:
            "Enhance user engagement with stunning, interactive, and intuitive UI/UX designs. Our AngularJS developers focus on creating visually appealing and user-friendly interfaces for web and mobile applications.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "API Development & Integration",
          description:
            "Extend your app’s capabilities with custom API development and seamless third-party integrations. Our skilled AngularJS developers ensure secure and efficient API solutions tailored to your business requirements.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "AngularJS Upgrade & Migration Services",
          description:
            "Upgrade your existing applications to the latest AngularJS version for better performance, security, and scalability. Our team ensures a smooth migration with minimal downtime and enhanced functionality.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Ongoing Support & Maintenance",
          description:
            "Ensure your web and mobile applications run smoothly with our dedicated support and maintenance services. Our AngularJS experts provide timely updates, performance optimizations, and quick issue resolutions.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "Angular Application Developers",
        afterHighlight: " from India with Expertise in Cross-Platform Development"
      },
      description: "Build dynamic, high-performance web applications with our skilled AngularJS developers, ensuring scalability and smooth user experiences.",
      cardsData: [
        {
          id: 1,
          title: 'Angular + TypeScript',
          description: 'Build enterprise applications with TypeScript. Leverage strong typing, decorators, and advanced OOP features for robust development.',
          icon1: '/icon-techangular.png',
          icon2: '/icon-techtypescript.png'
        },
        {
          id: 2,
          title: 'Angular + RxJS',
          description: 'Implement reactive programming with RxJS. Handle complex data streams, event management, and asynchronous operations.',
          icon1: '/icon-techangular.png',
          icon2: '/icon-techrjxs.png'
        },
        {
          id: 3,
          title: 'Angular + NgRx',
          description: 'Manage state with NgRx store. Implement Redux pattern for predictable state management and improved application scalability.',
          icon1: '/icon-techangular.png',
          icon2: '/icon-techngrx.png'
        },
        {
          id: 4,
          title: 'Angular + Material',
          description: 'Create beautiful UIs with Angular Material. Build responsive, modern interfaces following Material Design principles.',
          icon1: '/icon-techangular.png',
          icon2: '/icon-techmaterial.png'
        },
        {
          id: 5,
          title: 'Angular + Firebase',
          description: 'Integrate Firebase backend services. Implement authentication, real-time database, hosting, and cloud functions.',
          icon1: '/icon-techangular.png',
          icon2: '/icon-techfirebase.png'
        },
        {
          id: 6,
          title: 'Angular + GraphQL',
          description: 'Build efficient APIs with GraphQL integration. Optimize data fetching and implement real-time features with Apollo Client.',
          icon1: '/icon-techangular.png',
          icon2: '/icon-techgraphql.png'
        },
        {
          id: 7,
          title: 'Angular + PWA',
          description: 'Develop Progressive Web Applications. Create installable, offline-capable web apps with native-like features.',
          icon1: '/icon-techangular.png',
          icon2: '/icon-techpwa.png'
        },
        {
          id: 8,
          title: 'Angular + Jest',
          description: 'Implement comprehensive testing with Jest. Write unit tests, integration tests, and ensure code quality.',
          icon1: '/icon-techangular.png',
          icon2: '/icon-techjest.png'
        },
        {
          id: 9,
          title: 'Angular + Nx',
          description: 'Build monorepo applications with Nx. Create scalable enterprise applications with shared libraries and efficient tooling.',
          icon1: '/icon-techangular.png',
          icon2: '/icon-technx.png'
        }
      ]
    }
  },
  "react-js-developer": {
    title: "Hire Best React Js Developer from India",
    description:
      "Seeking a remote ReactJS developer from India? Look no further! Hire top ReactJS developers from Brandsmashers Tech to craft dynamic, scalable, and high-performing web applications. Our experts ensure responsive designs, seamless user experiences, and feature-packed solutions tailored to meet your business objectives. Hire ReactJS developers today to build innovative applications that drive growth and success.",
    buttonText: "Hire React Developer",
    services: {
      mainTitle:
        "Hire Expert ReactJS Developers for Your Upcoming Web Project!",
      // highlightedWord: "App Developers",
      subTitle:
        "Build dynamic, responsive, and high-performance web applications with our skilled ReactJS developers, ensuring a seamless user experience and innovative solutions tailored to your business.",
      services: [
        {
          title: "Custom ReactJS App Development",
          description:
            "Our dedicated ReactJS developers work closely with you to understand your business needs, audience, and competitors, then create a custom web or mobile app that aligns perfectly with your objectives.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "SPA (Single Page Application) Development",
          description:
            "Single Page Applications (SPAs) are in high demand for their speed and efficiency. Our full-stack developers create highly customized and feature-rich SPAs that provide a seamless user experience and quick loading times.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "ReactJS E-Commerce Development",
          description:
            "Looking to build a scalable e-commerce platform? Our developers leverage the ReactJS framework to develop feature-rich, responsive, and high-performance e-commerce web and mobile apps tailored to your business needs.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "UI/UX Design",
          description:
            "Our expert UI/UX designers craft intuitive and visually appealing interfaces that attract and engage users, ensuring a superior experience that drives user satisfaction and business growth.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "App Migration to ReactJS",
          description:
            "Want to migrate your existing app to ReactJS? Our experienced developers use the best migration practices to ensure a smooth transition with no data loss and improved performance post-migration.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "App Support & Maintenance",
          description:
            "Our dedicated team provides ongoing support and maintenance for your ReactJS apps, ensuring they stay up-to-date, run smoothly, and deliver a seamless experience for your users.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "ReactJS Developers",
        afterHighlight: " from India – Pre-Vetted Experts for Seamless Web Development"
      },
      description: "Build dynamic, high-performance web applications with our skilled ReactJS developers. We focus on delivering scalable solutions and smooth, responsive user experiences that align perfectly with your business goals.",
      cardsData: [
        {
          id: 1,
          title: 'React + Redux',
          description: 'Implement robust state management with Redux. Create predictable state containers, manage complex data flows, and enable powerful debugging.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techredux.png'
        },
        {
          id: 2,
          title: 'React + TypeScript',
          description: 'Build type-safe applications with TypeScript. Enhance code quality, catch errors during development, and improve team collaboration.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techtypescript.png'
        },
        {
          id: 3,
          title: 'React + Next.js',
          description: 'Create server-side rendered applications with Next.js. Optimize for SEO, improve performance, and enhance user experience.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-technextjs.png'
        },
        {
          id: 4,
          title: 'React + GraphQL',
          description: 'Build efficient APIs with GraphQL integration. Optimize data fetching and implement real-time features using Apollo Client.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techgraphql.png'
        },
        {
          id: 5,
          title: 'React + Material UI',
          description: 'Design beautiful interfaces with Material UI. Create responsive, modern UIs with customizable components and themes.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techmaterialui.png'
        },
        {
          id: 6,
          title: 'React + Tailwind CSS',
          description: 'Style applications with Tailwind CSS. Build custom designs efficiently with utility-first CSS framework.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techtailwindcss.png'
        },
        {
          id: 7,
          title: 'React + Firebase',
          description: 'Integrate Firebase backend services. Implement authentication, real-time database, hosting, and serverless functions.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techfirebase.png'
        },
        {
          id: 8,
          title: 'React + Testing Library',
          description: 'Ensure code quality with Testing Library. Write maintainable tests that replicate user behavior and scenarios.',
         icon1: '/icon-techreact.png',
          icon2: '/icon-techtestinglibrary.png'
        },
        {
          id: 9,
          title: 'React + Zustand',
          description: 'Manage state with Zustand. Implement simple yet powerful state management with minimal boilerplate code.',
          icon1: '/icon-techreact.png',
          icon2: '/icon-techzustand.png'
        }
      ]
    }
  },
  "js-developer": {
    title: "Hire Best Javascript Developer from India",
    description:
      "Are you looking for dedicated JavaScript developers to build high-quality, feature-packed, and scalable web or mobile applications? Hire JS developers from Brandsmashers Tech, with a proven track record of delivering tailored, business-focused JavaScript solutions that drive results and enhance your online presence.",
    buttonText: "Hire JavaScript Developer",
    services: {
      mainTitle: "Our Comprehensive JavaScript Development Services",
      // highlightedWord: "App Developers",
      subTitle:
        "At Brandsmashers Tech, our dedicated team of expert JavaScript developers is committed to building innovative. Explore the range of JavaScript development services we offer to help you stay ahead of the competition.",
      services: [
        {
          title: "Tailored Web Application Development",
          description:
            "Our expert JavaScript developers craft custom web applications designed specifically for your business, utilizing cutting-edge technologies and tools to enhance performance and scalability.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Dynamic Single-Page Application Solutions",
          description:
            "We specialize in developing high-performance single-page applications (SPAs) that provide users with smooth, fast, and interactive browsing experiences.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Custom Content Management Systems",
          description:
            "Our developers can build seamless, high-quality content management systems (CMS) with JavaScript, offering powerful features to streamline content management for your team.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Scalable Mobile App Development",
          description:
            "Let our skilled JavaScript developers build custom, dynamic mobile apps that are scalable, visually stunning, and deliver exceptional user experiences across all devices.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Advanced JavaScript Plugin Development",
          description:
            "Enhance the functionality of your web or mobile app with custom-built plugins, tailored to meet your specific needs and improve user engagement.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "E-commerce Platform Development",
          description:
            "Leverage JavaScript to create robust and feature-rich e-commerce stores, integrating third-party APIs, payment systems, and custom features to improve your online business.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "JavaScript Developers",
        afterHighlight: " from India – Experts for Robust Web Solutions!"
      },
      description: " Our skilled JavaScript developers are well-versed in the latest technologies and tools to deliver high-quality, scalable web solutions tailored to your business needs.",
      cardsData: [
        {
          id: 1,
          title: 'JavaScript + Node.js',
          description: 'Build scalable server-side applications with Node.js. Create fast, event-driven backends and RESTful APIs.',
          icon1: '/icon-techjavascript.png',
          icon2: '/icon-technodejs.png'
        },
        {
          id: 2,
          title: 'JavaScript + Express.js',
          description: 'Develop web applications with Express.js framework. Create robust APIs, handle middleware, and manage routing efficiently.',
          icon1: '/icon-techjavascript.png',
          icon2: '/icon-techexpressjs.png'
        },
        {
          id: 3,
          title: 'JavaScript + MongoDB',
          description: 'Implement NoSQL database solutions with MongoDB. Build flexible, scalable data storage with powerful querying capabilities.',
          icon1: '/icon-techjavascript.png',
          icon2: '/icon-techmongodb.png'
        },
        {
          id: 4,
          title: 'JavaScript + Vue.js',
          description: 'Create dynamic front-end applications with Vue.js. Build reactive interfaces with a progressive JavaScript framework.',
          icon1: '/icon-techjavascript.png',
          icon2: '/icon-techvuejs.png'
        },
        {
          id: 5,
          title: 'JavaScript + WebSocket',
          description: 'Implement real-time features with WebSocket. Build bi-directional communication for live updates and notifications.',
          icon1: '/icon-techjavascript.png',
          icon2: '/icon-techwebsocket.png'
        },
        {
          id: 6,
          title: 'JavaScript + jQuery',
          description: 'Enhance web applications with jQuery. Simplify DOM manipulation, event handling, and AJAX interactions.',
          icon1: '/icon-techjavascript.png',
          icon2: '/icon-techjquery.png'
        },
        {
          id: 7,
          title: 'JavaScript + Three.js',
          description: 'Create 3D visualizations with Three.js. Build immersive web experiences and interactive 3D graphics.',
          icon1: '/icon-techjavascript.png',
          icon2: '/icon-techthreejs.png'
        },
        {
          id: 8,
          title: 'JavaScript + D3.js',
          description: 'Build data visualizations with D3.js. Create interactive charts, graphs, and custom data representations.',
          icon1: '/icon-techjavascript.png',
          icon2: '/icon-techd3js.png'
        },
        {
          id: 9,
          title: 'JavaScript + Jest',
          description: 'Ensure code quality with Jest testing. Implement comprehensive testing suites for reliable applications.',
          icon1: '/icon-techjavascript.png',
          icon2: '/icon-techjest.png'
        }
      ]
    }
  },
  "next-js-developer": {
    title: "Hire Best Next JS Developer from India",
    description:
      "Searching for a skilled Next JS developer from India? Look no further! At Brandsmashers Tech, we specialize in providing top-notch Next JS development services to help you create fast, SEO-friendly, and scalable web applications. Our expert Next JS developers use the latest tools and techniques to deliver seamless, high-performance solutions that align perfectly with your business goals and user needs. Hire Next JS developer from India today and elevate your web development to the next level!",
    buttonText: "Hire Next Js Developer",
    services: {
      mainTitle: "Our Premium Next.js Development Solutions",
      // highlightedWord: "App Developers",
      subTitle:
        "Our Next.js development services ensure your app stands out with robust features, SEO optimization, and seamless performance across devices.",
      services: [
        {
          title: "Next.js Server-Side Rendering Solutions",
          description:
            "Unlock fast, SEO-friendly apps with Next.js server-side rendering. Our experts ensure optimal performance with quicker load times and enhanced SEO, resulting in an exceptional user experience from the moment the page loads.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Custom Next.js Plugin Development",
          description:
            "Enhance the functionality of your Next.js app with tailor-made plugins. Our developers specialize in creating custom modules to improve user engagement, app performance, and technical capabilities, helping you stay ahead in your market.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: " Next.js Consultation & Strategy",
          description:
            "Maximize your app's potential with expert guidance from our seasoned Next.js consultants. We provide strategic advice and insights on framework best practices, optimal use cases, and efficient development strategies tailored to your project needs.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: " Next.js API & Third-Party Integrations",
          description:
            "Seamlessly integrate external platforms, APIs, and services with your Next.js application. Our developers ensure smooth data exchange, superior performance, and seamless integration with third-party tools to enhance your app’s capabilities.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Static Web Development with Next.js",
          description:
            "For businesses requiring fast, reliable, and SEO-optimized static websites, we provide Next.js-based static site generation. Your website will load instantaneously, offering a seamless experience to users and improving your online visibility.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Next.js App Migration & Customization Services",
          description:
            "Looking to migrate to Next.js? Trust our experts to seamlessly transition your app with no data loss or functionality issues. Additionally, we offer customization services to create unique app visuals, functionality, and personalized components.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "Next.js Developers",
        afterHighlight: " from India – Pre-Vetted Experts for Seamless Web Development"
      },
      description: "Leverage the power of Next.js with our skilled developers to create fast, SEO-optimized, and scalable web applications. Whether you're building dynamic websites or complex enterprise solutions, our Next.js experts deliver seamless, high-performance experiences that accelerate your business growth.",
      cardsData: [
        {
          id: 1,
          title: 'Next.js + TypeScript',
          description: 'Build type-safe applications with TypeScript integration. Enhance code quality, catch errors early, and improve development workflow.',
          icon1: '/icon-technextjs.png',
          icon2: '/icon-techtypescript.png'
        },
        {
          id: 2,
          title: 'Next.js + Prisma',
          description: 'Implement robust database operations with Prisma ORM. Create type-safe database queries and efficient data modeling.',
          icon1: '/icon-technextjs.png',
          icon2: '/icon-techprisma.png'
        },
        {
          id: 3,
          title: 'Next.js + tRPC',
          description: 'Build end-to-end typesafe APIs with tRPC. Create seamless full-stack applications with automatic type inference.',
          icon1: '/icon-technextjs.png',
          icon2: '/icon-techtrpc.png'
        },
        {
          id: 4,
          title: 'Next.js + Tailwind CSS',
          description: 'Style applications efficiently with Tailwind CSS. Create responsive, modern interfaces using utility-first approach.',
          icon1: '/icon-technextjs.png',
          icon2: '/icon-techtailwindcss.png'
        },
        {
          id: 5,
          title: 'Next.js + Redux Toolkit',
          description: 'Manage complex state with Redux Toolkit. Implement efficient state management with modern Redux best practices.',
          icon1: '/icon-technextjs.png',
          icon2: '/icon-techreduxtoolkit.png'
        },
        {
          id: 6,
          title: 'Next.js + Vercel',
          description: 'Deploy and scale applications with Vercel. Utilize serverless functions, edge computing, and global CDN.',
         icon1: '/icon-technextjs.png',
          icon2: '/icon-techvercel.png'
        },
        {
          id: 7,
          title: 'Next.js + Auth.js',
          description: 'Implement authentication with Auth.js (NextAuth). Add secure, flexible authentication with multiple providers.',
          icon1: '/icon-technextjs.png',
          icon2: '/icon-techauthjs.png'
        },
        {
          id: 8,
          title: 'Next.js + React Query',
          description: 'Manage server state with React Query. Handle caching, synchronization, and real-time data updates efficiently.',
          icon1: '/icon-technextjs.png',
          icon2: '/icon-techreactquery.png'
        },
        {
          id: 9,
          title: 'Next.js + Jest/Testing Library',
          description: 'Ensure application quality with comprehensive testing. Implement unit, integration, and end-to-end tests.',
          icon1: '/icon-technextjs.png',
          icon2: '/icon-techjest.png'
        }
      ]
    }
  },
  
  "laravel-developer": {
    title: "Hire Best Laravel Developer from India",
    description:
      "Need a proficient Laravel developer from India? We’ve got you covered! At Brandsmashers Tech, we provide expert Laravel development services to help you build feature-rich, maintainable, and scalable web applications. Our experienced Laravel developers use the latest practices to craft solutions that are both robust and user-friendly, ensuring your business achieves its goals efficiently. Hire Laravel developers from India today and experience the best in web development!",
    buttonText: "Hire Laravel Developer",
    services: {
      mainTitle: "Our End-to-End Laravel Development Solutions",
      // highlightedWord: "App Developers",
      subTitle:
        "At Brandsmashers Tech, we specialize in delivering custom Laravel solutions tailored to your business needs. Whether it’s web development, API integration, or enterprise applications, our team ensures seamless performance and top-notch security.",
      services: [
        {
          title: "Custom Laravel Web Development",
          description:
            "Leverage the power of Laravel to create tailor-made, feature-rich web applications. Our skilled developers ensure that your business gets a fully optimized and scalable solution that enhances user experience and performance.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Laravel E-Commerce Solutions",
          description:
            "Looking to build an interactive and engaging e-commerce store? Our Laravel developers specialize in developing custom online stores with advanced features, ensuring seamless transactions and an elevated shopping experience.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Seamless Laravel Migration",
          description:
            "Upgrade your existing web application effortlessly with our Laravel migration services. Our experts handle smooth transitions, ensuring data integrity and minimizing downtime, so your business operations remain uninterrupted.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Intuitive Laravel UI/UX Design",
          description:
            "We craft visually appealing and user-friendly interfaces that enhance engagement and user satisfaction. Our Laravel UI/UX design services focus on creating seamless navigation and a superior user experience.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Laravel API Development & Integration",
          description:
            "Need to develop custom APIs or integrate third-party services? Our developers build secure and efficient APIs to enhance the functionality and connectivity of your Laravel web application.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Personalized Laravel Customization",
          description:
            "We offer extensive customization and integration services, enabling businesses to modify their applications with tailor-made features and third-party integrations to suit their specific needs.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "Laravel Developers",
        afterHighlight: " from India – Experts in Building Scalable & Secure Web Applications"
      },
      description: "Get top Laravel developers to build secure, high-performance web applications tailored to your business needs. Experience seamless development with expert solutions.",
      cardsData: [
        {
          id: 1,
          title: 'Laravel + Vue.js',
          description: 'Create dynamic single-page applications with Vue.js integration. Build reactive interfaces with Laravel\'s preferred front-end framework.',
          icon1: '/icon-techlaravel.png',
          icon2: '/icon-techvue.png'
        },
        {
          id: 2,
          title: 'Laravel + Livewire',
          description: 'Build dynamic interfaces without writing JavaScript. Create full-stack applications with real-time functionality using Livewire.',
          icon1: '/icon-techlaravel.png',
          icon2: '/icon-techlivewire.png'
        },
        {
          id: 3,
          title: 'Laravel + MySQL',
          description: 'Implement robust database solutions with MySQL. Utilize Eloquent ORM for efficient database operations and relationships.',
          icon1: '/icon-techlaravel.png',
          icon2: '/icon-techmysql.png'
        },
        {
          id: 4,
          title: 'Laravel + Redis',
          description: 'Enhance application performance with Redis caching. Implement queue systems and real-time features efficiently.',
          icon1: '/icon-techlaravel.png',
          icon2: '/icon-techredis.png'
        },
        {
          id: 5,
          title: 'Laravel + Docker',
          description: 'Containerize applications with Docker integration. Create consistent development and deployment environments.',
          icon1: '/icon-techlaravel.png',
          icon2: '/icon-techdocker.png'
        },
        {
          id: 6,
          title: 'Laravel + Tailwind CSS',
          description: 'Style applications with Tailwind CSS framework. Build modern, responsive interfaces using utility-first approach.',
          icon1: '/icon-techlaravel.png',
          icon2: '/icon-techtailwindcss.png'
        },
        {
          id: 7,
          title: 'Laravel + PHPUnit',
          description: 'Ensure code quality with PHPUnit testing. Implement comprehensive testing suites for reliable applications.',
          icon1: '/icon-techlaravel.png',
          icon2: '/icon-techphpunit.png'
        },
        {
          id: 8,
          title: 'Laravel + AWS',
          description: 'Deploy and scale applications on AWS. Utilize cloud services for storage, queuing, and serverless functions.',
          icon1: '/icon-techlaravel.png',
          icon2: '/icon-techaws.png'
        },
        {
          id: 9,
          title: 'Laravel + Sanctum',
          description: 'Implement secure authentication with Sanctum. Build token-based APIs and SPAs with robust security features.',
          icon1: '/icon-techlaravel.png',
          icon2: '/icon-techsanctum.png'
        }
      ]
    }
  },
  "node-js-developer": {
    title: "Hire Best Node Js Developer from India",
    description:
      "On the lookout for an experienced Node.js developer from India? Look no further! At Brandsmashers Tech, we offer exceptional Node.js development services to help you create high-performance, real-time applications. Our expert Node.js developers are equipped with the right skills and knowledge to develop scalable, fast, and reliable web applications that cater to your business needs. Hire Node.js developers from India now and build next-gen web solutions that power your business growth!",
    buttonText: "Hire NodeJS Developer",
    services: {
      mainTitle:
        "Hire Expert Node.js Developers to Build Scalable, High-Performance Applications.",
      // highlightedWord: "App Developers",
      subTitle:
        "Our Node.js developers offer a wide range of backend development services. Get a fast, efficient, and scalable Node.js solution tailored to your business needs.",
      services: [
        {
          title: "Custom Node.js Development",
          description:
            "Leverage our expertise to build custom, industry-specific Node.js applications from scratch. We ensure your web app is robust, scalable, and optimized for superior performance.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Node.js Plugin & Package Development",
          description:
            "Enhance your application with custom-built Node.js plugins and reusable packages that integrate seamlessly, providing advanced features and extended functionality.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Enterprise-Grade Node.js Solutions",
          description:
            "Boost your business efficiency with scalable enterprise applications designed to streamline operations, automate workflows, and improve productivity.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Microservices & API Development",
          description:
            "Build flexible, modular applications with Node.js microservices architecture and custom API development, enabling seamless communication between services and third-party integrations.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Node.js UI/UX Design & Consulting",
          description:
            "Get a business-focused, intuitive UI/UX design that enhances user engagement. Our experts also offer consultation services to help you choose the best Node.js solutions for your project.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Ongoing Support & Maintenance",
          description:
            "Ensure the long-term stability and efficiency of your application with our Node.js support and maintenance services, including regular updates, bug fixes, and performance enhancements.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "Node.js Developers",
        afterHighlight: " from India – Experts in Building Scalable & High-Performance Applications"
      },
      description: "Get top Node.js developers to build secure, scalable backend solutions tailored to your business needs. Experience seamless development with expert solutions.",
      cardsData: [
        {
          id: 1,
          title: 'Node.js + Express',
          description: 'Build robust web applications with Express framework. Create RESTful APIs, handle middleware, and implement secure routing.',
          icon1: '/icon-technodejs.png',
          icon2: '/icon-techexpressjs.png'
        },
        {
          id: 2,
          title: 'Node.js + MongoDB',
          description: 'Implement NoSQL database solutions with MongoDB. Create flexible, scalable data storage with Mongoose ODM integration.',
          icon1: '/icon-technodejs.png',
          icon2: '/icon-techmongodb.png'
        },
        {
          id: 3,
          title: 'Node.js + PostgreSQL',
          description: 'Build reliable database systems with PostgreSQL. Utilize Sequelize ORM for efficient relational data management.',
          icon1: '/icon-technodejs.png',
          icon2: '/icon-techpostgresql.png'
        },
        {
          id: 4,
          title: 'Node.js + Socket.IO',
          description: 'Create real-time applications with Socket.IO. Build chat systems, live dashboards, and collaborative features.',
          icon1: '/icon-technodejs.png',
          icon2: '/icon-techsocketio.png'
        },
        {
          id: 5,
          title: 'Node.js + GraphQL',  
          description: 'Build efficient APIs with GraphQL. Optimize data fetching and implement flexible query capabilities.',
          icon1: '/icon-technodejs.png',
          icon2: '/icon-techgraphql.png'
        },
        {
          id: 6,
          title: 'Node.js + Redis',
          description: 'Enhance performance with Redis caching. Implement session management, caching, and real-time features.',
          icon1: '/icon-technodejs.png',
          icon2: '/icon-techredis.png'
        },
        {
          id: 7,
          title: 'Node.js + Microservices',
          description: 'Build distributed systems with microservices architecture. Create scalable and maintainable service-oriented applications.',
          icon1: '/icon-technodejs.png',
          icon2: '/icon-techmicroservices.png'
        },
        {
          id: 8,
          title: 'Node.js + Docker',
          description: 'Containerize applications with Docker. Create consistent development and deployment environments.',
          icon1: '/icon-technodejs.png',
          icon2: '/icon-techdocker.png'
        },
        {
          id: 9,
          title: 'Node.js + AWS',
          description: 'Deploy and scale on AWS infrastructure. Utilize serverless functions, cloud storage, and managed services.',
          icon1: '/icon-technodejs.png',
          icon2: '/icon-techaws.png'
        }
      ]
    }
  },
  "python-developer": {
    title: "Hire Best Python Developer from India",
    description:
      "Looking for a skilled Python developer from India? Your search ends here! At Brandsmashers Tech, we specialize in providing top-tier Python development services that enable you to build powerful, scalable, and secure web applications. Our Python experts leverage the latest frameworks and technologies to create high-performance solutions that align with your business needs. Hire Python developers from India today to unlock the potential of your next project and take it to new heights!",
    buttonText: "Hire Python Developer",
    services: {
      mainTitle:
        "Hire Expert Python Developers to Build Scalable, High-Performance Applications.",
      // highlightedWord: "App Developers",
      subTitle:
        "Our Python developers offer a wide range of backend development services. Get a fast, efficient, and scalable Node.js solution tailored to your business needs.",
      services: [
        {
          title: "Custom Python Development",
          description:
            "Leverage our expertise to build custom, industry-specific Python applications from scratch. We ensure your web app is robust, scalable, and optimized for superior performance.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Python Plugin & Package Development",
          description:
            "Enhance your application with custom-built Python plugins and reusable packages that integrate seamlessly, providing advanced features and extended functionality.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Enterprise-Grade Python Solutions",
          description:
            "Boost your business efficiency with scalable enterprise applications designed to streamline operations, automate workflows, and improve productivity.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Microservices & API Development",
          description:
            "Build flexible, modular applications with Python microservices architecture and custom API development, enabling seamless communication between services and third-party integrations.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Python UI/UX Design & Consulting",
          description:
            "Get a business-focused, intuitive UI/UX design that enhances user engagement. Our experts also offer consultation services to help you choose the best Python solutions for your project.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Ongoing Support & Maintenance",
          description:
            "Ensure the long-term stability and efficiency of your application with our Node.js support and maintenance services, including regular updates, bug fixes, and performance enhancements.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "Python Developers",
        afterHighlight: " from India – Experts in Building Scalable & Data-Driven Applications"
      },
      description: "Get top Python developers to build powerful, efficient solutions tailored to your business needs. Experience seamless development with expert solutions in web, data science, and automation.",
      cardsData: [
        {
          id: 1,
          title: 'Python + Django',
          description: 'Build robust web applications with Django framework. Create secure, scalable backends with built-in admin interface and ORM capabilities.',
          icon1: '/icon-techpython.png',
          icon2: '/icon-techdjango.png'
        },
        {
          id: 2,
          title: 'Python + Flask',
          description: 'Develop lightweight web applications with Flask. Create RESTful APIs, microservices, and flexible routing with minimal framework overhead.',
          icon1: '/icon-techpython.png',
          icon2: '/icon-techflask.png'
        },
        {
          id: 3,
          title: 'Python + PostgreSQL',
          description: 'Build reliable database systems with PostgreSQL. Utilize SQLAlchemy ORM for efficient relational data management and complex queries.',
          icon1: '/icon-techpython.png',
          icon2: '/icon-techpostgresql.png'
        },
        {
          id: 4,
          title: 'Python + Data Science',
          description: 'Leverage NumPy, Pandas, and Scikit-learn for data analysis and machine learning. Build predictive models and data visualization solutions.',
          icon1: '/icon-techpython.png',
          icon2: '/icon-techdatascience.png'
        },
        {
          id: 5,
          title: 'Python + FastAPI',
          description: 'Create high-performance APIs with FastAPI. Build async-capable endpoints with automatic OpenAPI documentation and type validation.',
          icon1: '/icon-techpython.png',
          icon2: '/icon-techfastapi.png'
        },
        {
          id: 6,
          title: 'Python + Redis',
          description: 'Enhance application performance with Redis caching. Implement session management, task queues, and real-time features.',
          icon1: '/icon-techpython.png',
          icon2: '/icon-techredis.png'
        },
        {
          id: 7,
          title: 'Python + Microservices',
          description: 'Build distributed systems with microservices architecture. Create scalable applications using FastAPI or Flask with Docker integration.',
          icon1: '/icon-techpython.png',
          icon2: '/icon-techmicroservices.png'
        },
        {
          id: 8,
          title: 'Python + Docker',
          description: 'Containerize applications with Docker. Ensure consistent deployment across environments and simplify development workflows.',
          icon1: '/icon-techpython.png',
          icon2: '/icon-techdocker.png'
        },
        {
          id: 9,
          title: 'Python + AWS',
          description: 'Deploy and scale on AWS infrastructure. Utilize Lambda functions, S3 storage, and other cloud services for serverless applications.',
          icon1: '/icon-techpython.png',
          icon2: '/icon-techaws.png'
        }
      ]
    }
  },
  "dotnet-developer": {
    title: "Hire Best Dotnet Developer from India",
    description:
      "Need a proficient Dotnet developer from India? We’ve got you covered! At Brandsmashers Tech, we provide expert Dotnet development services to help you build feature-rich, maintainable, and scalable web applications. Our experienced Dotnet developers use the latest practices to craft solutions that are both robust and user-friendly, ensuring your business achieves its goals efficiently. Hire Dotnet developers from India today and experience the best in web development!",
    buttonText: "Hire Dotnet Developer",
    services: {
      mainTitle: "Our End-to-End Dotnet Development Solutions",
      // highlightedWord: "App Developers",
      subTitle:
        "At Brandsmashers Tech, we specialize in delivering custom Dotnet solutions tailored to your business needs. Whether it’s web development, API integration, or enterprise applications, our team ensures seamless performance and top-notch security.",
      services: [
        {
          title: "Custom Dotnet Web Development",
          description:
            "Leverage the power of Dotnet to create tailor-made, feature-rich web applications. Our skilled developers ensure that your business gets a fully optimized and scalable solution that enhances user experience and performance.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Dotnet E-Commerce Solutions",
          description:
            "Looking to build an interactive and engaging e-commerce store? Our Dotnet developers specialize in developing custom online stores with advanced features, ensuring seamless transactions and an elevated shopping experience.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Seamless Laravel Migration",
          description:
            "Upgrade your existing web application effortlessly with our Laravel migration services. Our experts handle smooth transitions, ensuring data integrity and minimizing downtime, so your business operations remain uninterrupted.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Intuitive Dotnet UI/UX Design",
          description:
            "We craft visually appealing and user-friendly interfaces that enhance engagement and user satisfaction. Our Dotnet UI/UX design services focus on creating seamless navigation and a superior user experience.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Dotnet API Development & Integration",
          description:
            "Need to develop custom APIs or integrate third-party services? Our developers build secure and efficient APIs to enhance the functionality and connectivity of your Dotnet web application.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Personalized Dotnet Customization",
          description:
            "We offer extensive customization and integration services, enabling businesses to modify their applications with tailor-made features and third-party integrations to suit their specific needs.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: ".NET Developers",
        afterHighlight: " from India – Experts in Building Enterprise-Grade & Cloud-Native Applications"
      },
      description: "Get top .NET developers to build secure, scalable enterprise solutions tailored to your business needs. Experience seamless development with expert solutions in web, cloud, and microservices.",
      cardsData: [
        {
          id: 1,
          title: '.NET + ASP.NET Core',
          description: 'Build modern web applications with ASP.NET Core. Create high-performance APIs, MVC applications, and Razor Pages with cross-platform compatibility.',
          icon1: '/icon-technet.png',
          icon2: '/icon-techaspnetcore.png'
        },
        {
          id: 2,
          title: '.NET + Entity Framework',
          description: 'Implement robust data access with Entity Framework Core. Create efficient database operations with code-first approach and LINQ integration.',
          icon1: '/icon-technet.png',
          icon2: '/icon-techerframework.png'
        },
        {
          id: 3,
          title: '.NET + SQL Server',
          description: 'Build enterprise-grade database solutions with SQL Server. Utilize stored procedures, transactions, and advanced querying capabilities.',
          icon1: '/icon-technet.png',
          icon2: '/icon-techsqlserver.png'
        },
        {
          id: 4,
          title: '.NET + Blazor',
          description: 'Create interactive web UIs with Blazor. Build single-page applications using C# instead of JavaScript for both client and server.',
          icon1: '/icon-technet.png',
          icon2: '/icon-techblazor.png'
        },
        {
          id: 5,
          title: '.NET + Azure',
          description: 'Deploy and scale applications on Azure cloud. Leverage App Services, Azure Functions, and managed services for cloud-native solutions.',
          icon1: '/icon-technet.png',
          icon2: '/icon-techazure.png'
        },
        {
          id: 6,
          title: '.NET + Microservices',
          description: 'Build distributed systems using microservices architecture. Create scalable, containerized services with service mesh integration.',
          icon1: '/icon-technet.png',
          icon2: '/icon-techmicroservices.png'
        },
        {
          id: 7,
          title: '.NET + SignalR',
          description: 'Implement real-time features with SignalR. Build chat applications, live dashboards, and collaborative features with WebSocket support.',
          icon1: '/icon-technet.png',
          icon2: '/icon-techsignalr.png'
        },
        {
          id: 8,
          title: '.NET + Docker',
          description: 'Containerize applications with Docker. Create consistent development and deployment environments across different platforms.',
          icon1: '/icon-technet.png',
          icon2: '/icon-techdocker.png'
        },
        {
          id: 9,
          title: '.NET + Xamarin',
          description: 'Build cross-platform mobile applications with Xamarin. Create native iOS and Android apps using shared C# codebase and .NET features.',
          icon1: '/icon-technet.png',
          icon2: '/icon-techxamarin.png'
        }
      ]
    }
  },
  "php-developer": {
    title: "Hire Best PHP Developer from India",
    description:" Looking for a skilled PHP developer from India? Your search ends here At Brandsmashers Tech, we specialize in providing top-tier PHP development services to help you build dynamic, scalable, and secure web applications. Our expert PHP developers use the latest frameworks and technologies to create high-performance, user-friendly solutions tailored to your business needs. Hire PHP developers from India today and transform your web development with robust and efficient PHP solutions",
    buttonText: "Hire php Developer",
    services: {
      mainTitle: "Hire Skilled PHP Developers to Drive Your Business Growth",
      // highlightedWord: "App Developers",
      subTitle:
        "At Brandsmashers Tech, our skilled PHP developers specialize in building scalable, high-performance, and secure web applications.",
      services: [
        {
          title: "Custom PHP Web Development",
          description:
            "Our skilled PHP developers craft dynamic, feature-rich, and secure web applications tailored to meet your business requirements. We leverage PHP frameworks like Laravel, Symfony, and CodeIgniter to create scalable and high-performance web solutions.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Enterprise PHP Application Development",
          description:
            "Our expert PHP developers specialize in building robust enterprise-level applications that streamline your internal processes, enhance collaboration, and improve productivity with scalable solutions designed to meet your business goals",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "PHP CMS Development",
          description:
            "Let our PHP developers create customized content management systems (CMS) that allow you to manage and update your website effortlessly. We offer secure and scalable CMS solutions to suit your unique business needs.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "E-commerce Solutions with PHP",
          description:
            "Our PHP developers specialize in developing feature-rich, secure, and responsive e-commerce platforms. From payment gateway integration to inventory management, we create seamless online store experiences that drive sales.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "API Development & Integration",
          description:
            "Our developers can build custom APIs for your PHP applications, enabling smooth data exchanges between different systems. We also integrate third-party APIs to enhance the functionality and features of your website.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "PHP Web Application Migration",
          description:
            "If you want to migrate your existing application to a more modern PHP framework, we can help. Our developers ensure seamless migration without data loss, improving the scalability, security, and performance of your web app.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "PHP Developers",
        afterHighlight: " from India Experts in Building Dynamic & Robust Web Applications"
      },
      description: "Get top PHP developers to build secure, scalable web solutions tailored to your business needs. Experience seamless development with expert solutions in CMS, e-commerce, and custom applications.",
      cardsData: [
        {
          id: 1,
          title: 'PHP + Laravel',
          description: 'Build elegant web applications with Laravel framework. Create secure, maintainable solutions with MVC architecture, Eloquent ORM, and Blade templating.',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techlaravel.png'
        },
        {
          id: 2,
          title: 'PHP + Symfony',
          description: 'Develop enterprise-grade applications with Symfony framework. Utilize reusable components, Doctrine ORM, and robust security features.',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techsymfony.png'
        },
        {
          id: 3,
          title: 'PHP + MySQL',
          description: 'Build reliable database systems with MySQL. Implement efficient data management with optimized queries and transaction handling.',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techmysql.png'
        },
        {
          id: 4,
          title: 'PHP + WordPress',
          description: 'Create custom WordPress solutions. Develop themes, plugins, and extend core functionality for content management systems.',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techwordpress.png'
        },
        {
          id: 5,
          title: 'PHP + WooCommerce',
          description: 'Build e-commerce solutions with WooCommerce. Create custom shopping experiences with payment integrations and inventory management.',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techwoocommerce.png'
        },
        {
          id: 6,
          title: 'PHP + Redis',
          description: 'Enhance performance with Redis caching. Implement session management, caching layers, and real-time features for faster applications.',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techredis.png'
        },
        {
          id: 7,
          title: 'PHP + Microservices',
          description: 'Build distributed systems with microservices architecture. Create scalable and maintainable service-oriented applications with API integration.',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techmicroservices.png'
        },
        {
          id: 8,
          title: 'PHP + Docker',
          description: 'Containerize applications with Docker. Ensure consistent development environments and streamline deployment processes.',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techdocker.png'
        },
        {
          id: 9,
          title: 'PHP + Cloud Platforms',
          description: 'Deploy and scale on major cloud platforms. Utilize AWS, Google Cloud, or Azure services for robust hosting and scaling solutions.',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techcloud.png'
        }
      ]
    },
  },
  "wordpress": {
    title: "Hire Best Wordpress Developer from India",
    description:"Unlock the Power of WordPress with Expert Developers from India!At Brandsmashers Tech, we bring your vision to life with cutting-edge WordPress development services. Whether you need a custom website, theme development, plugin integration, or a complete eCommerce solution, our skilled WordPress developers craft seamless, high-performing, and SEO-friendly websites tailored to your business goals.Hire dedicated WordPress developers from India today and experience innovation, scalability, and excellence in web development! ",
    buttonText: "Hire Dotnet Developer",
    services: {
      mainTitle: "Hire Skilled WordPress Developers to Elevate Your Online Presence!",
      // highlightedWord: "App Developers",
      subTitle:
        "At Brandsmashers Tech, our experienced WordPress developers specialize in crafting feature-rich, responsive, and user-friendly websites to help your business thrive online.",
      services: [
        {
          title: "Custom WordPress Website Development",
          description:
            " Hire our expert WordPress developers to build a unique and high-performing website from scratch.Our developers specialize in creating fully customized, SEO-friendly WordPress websites tailored to your business needs.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "WordPress Theme Development & Customization",
          description:
            "Get a visually stunning and fully responsive WordPress theme designed for your brand.We build and customize themes to match your vision, ensuring a modern and professional web presence.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "WordPress Plugin Development & Integration",
          description:
            "Enhance your website’s functionality with custom plugin development.Our experts create and integrate powerful plugins that improve performance, security, and user engagement.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "WooCommerce Development for Online Stores",
          description:
            "Launch and grow your eCommerce business with a feature-rich WooCommerce website.We develop secure, scalable, and fully optimized online stores that boost sales and improve user experience.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "WordPress Speed & Performance Optimization",
          description:
            "Improve website loading speed and overall performance with our optimization services.We fine-tune your WordPress site for fast loading, better user experience, and higher search engine rankings.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "WordPress Security & Maintenance Services",
          description:
            "Keep your website safe, updated, and running smoothly with our expert maintenance services.We provide regular updates, security audits, and 24/7 support to ensure your site is secure and up-to-date.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
          carousel: {
            "heading": {
              "beforeHighlight": "Hire Remote",
              "highlight": " Programmatic Developers ",
              "afterHighlight": "from India – Automate, Optimize & Scale Your Business"
            },
          
            "description": "Get top programmatic developers to build intelligent, data-driven automation solutions for your business. Leverage custom scripts, API integrations, and workflow automation to enhance efficiency, reduce manual effort, and scale seamlessly.",
          
            "cardsData": [
              {
                "id": 1,
                "title": "Custom Scripting & Automation",
                "description": "Automate repetitive tasks with custom scripts in Python, JavaScript, and Shell. Enhance efficiency and reduce operational overhead.",
                "icon1": "/icon-techprogrammatic.png",
                "icon2": "/icon-techautomation.png"
              },
              {
                "id": 2,
                "title": "API Development & Integration",
                "description": "Integrate third-party APIs, create custom RESTful services, and automate data exchanges between applications.",
                "icon1": "/icon-techprogrammatic.png",
                "icon2": "/icon-techapi.png"
              },
              {
                "id": 3,
                "title": "Web Scraping & Data Extraction",
                "description": "Extract valuable insights from the web using advanced web scraping techniques and structured data parsing.",
                "icon1": "/icon-techprogrammatic.png",
                "icon2": "/icon-techscraping.png"
              },
              {
                "id": 4,
                "title": "Workflow Automation",
                "description": "Optimize business processes by automating tasks across multiple platforms using Zapier, Integromat, and custom scripts.",
                "icon1": "/icon-techprogrammatic.png",
                "icon2": "/icon-techworkflow.png"
              },
              {
                "id": 5,
                "title": "Cloud & Serverless Automation",
                "description": "Deploy automation solutions using AWS Lambda, Google Cloud Functions, and Azure Functions for cost-effective scalability.",
                "icon1": "/icon-techprogrammatic.png",
                "icon2": "/icon-techcloud.png"
              },
              {
                "id": 6,
                "title": "AI & Machine Learning Automation",
                "description": "Integrate AI-powered automation using NLP, computer vision, and predictive analytics to enhance decision-making.",
                "icon1": "/icon-techprogrammatic.png",
                "icon2": "/icon-techai.png"
              },
              {
                "id": 7,
                "title": "Database Automation & Management",
                "description": "Automate database tasks such as backups, performance tuning, and real-time data synchronization.",
                "icon1": "/icon-techprogrammatic.png",
                "icon2": "/icon-techdatabase.png"
              },
              {
                "id": 8,
                "title": "AdTech & Programmatic Advertising",
                "description": "Leverage programmatic advertising automation for campaign optimization, real-time bidding, and audience targeting.",
                "icon1": "/icon-techprogrammatic.png",
                "icon2": "/icon-techadtech.png"
              },
              {
                "id": 9,
                "title": "CI/CD & DevOps Automation",
                "description": "Implement continuous integration and deployment pipelines with Jenkins, GitHub Actions, and Kubernetes for seamless software delivery.",
                "icon1": "/icon-techprogrammatic.png",
                "icon2": "/icon-techdevops.png"
        },
      ],
    }
  },

  
  "programmatic-developer": {
    title: "Transform Your Business with Programmatic Advertising Experts",
    description:"Boost your brand’s reach and drive data-driven results with Brandsmashers Tech — your trusted partner for hiring programmatic advertising experts. Our team connects you with skilled professionals who use AI-powered strategies to automate ad placements, optimize bidding, and maximize ROI. Whether you're scaling an eCommerce store or expanding your SaaS platform, our programmatic advertising experts tailor campaigns to target the right audience at the right time. Don’t let outdated ad strategies hold you back — partner with Brandsmashers Tech to hire programmatic advertising experts for measurable results and sustained growth. ",
    buttonText: "Programmatic Advertising Experts",
    services: {
      mainTitle: "Hire Skilled Programmatic Advertising Experts to Maximize Your ROI",
      // highlightedWord: "App Developers",
      subTitle:
        "At Brandsmashers Tech, our skilled programmatic advertising experts harness the power of automation and data analytics to streamline ad buying and drive campaign performance.",
      services: [
        {
          title: "Custom Programmatic Advertising Strategy",
          description:
            "Our experts design tailored programmatic ad strategies aligned with your business goals. From real-time bidding (RTB) to audience segmentation, we create targeted campaigns that boost your brand visibility and ROI.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "AI-Powered Ad Optimization",
          description:
            "We leverage AI algorithms to analyze user behavior, optimize ad placements, and adjust bidding strategies in real-time — ensuring your ads reach the most relevant audience with maximum efficiency.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Cross-Platform Advertising ",
          description:
            "Our programmatic advertising experts manage multi-channel campaigns across display, video, mobile, and social media platforms, helping you engage your audience wherever they are online.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Audience Targeting & Segmentation ",
          description:
            "We use advanced data analytics to segment your audience based on demographics, interests, and online behavior, delivering personalized ad experiences that drive higher engagement and conversions.",
        },
        {
          title: "Ad Performance Tracking & Reporting",
          description:
            "Stay informed with detailed reports on ad performance, including impressions, click-through rates (CTR), conversion rates, and ROI. Our transparent reporting helps you make data-backed decisions for continuous improvement.",
        },
        {
          title: "Retargeting & Remarketing Campaigns ",
          description:
            "Our experts develop retargeting strategies to re-engage users who’ve shown interest in your products or services, boosting your chances of conversion and customer retention.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      "heading": {
        "beforeHighlight": "Hire Remote",
        "highlight": " Programmatic Developers ",
        "afterHighlight": "from India – Automate, Optimize & Scale Your Business"
      },
    
      "description": "Get top programmatic developers to build intelligent, data-driven automation solutions for your business. Leverage custom scripts, API integrations, and workflow automation to enhance efficiency, reduce manual effort, and scale seamlessly.",
    
      "cardsData": [
        {
          "id": 1,
          "title": "Custom Scripting & Automation",
          "description": "Automate repetitive tasks with custom scripts in Python, JavaScript, and Shell. Enhance efficiency and reduce operational overhead.",
          "icon1": "/icon-techprogrammatic.png",
          "icon2": "/icon-techautomation.png"
        },
        {
          "id": 2,
          "title": "API Development & Integration",
          "description": "Integrate third-party APIs, create custom RESTful services, and automate data exchanges between applications.",
          "icon1": "/icon-techprogrammatic.png",
          "icon2": "/icon-techapi.png"
        },
        {
          "id": 3,
          "title": "Web Scraping & Data Extraction",
          "description": "Extract valuable insights from the web using advanced web scraping techniques and structured data parsing.",
          "icon1": "/icon-techprogrammatic.png",
          "icon2": "/icon-techscraping.png"
        },
        {
          "id": 4,
          "title": "Workflow Automation",
          "description": "Optimize business processes by automating tasks across multiple platforms using Zapier, Integromat, and custom scripts.",
          "icon1": "/icon-techprogrammatic.png",
          "icon2": "/icon-techworkflow.png"
        },
        {
          "id": 5,
          "title": "Cloud & Serverless Automation",
          "description": "Deploy automation solutions using AWS Lambda, Google Cloud Functions, and Azure Functions for cost-effective scalability.",
          "icon1": "/icon-techprogrammatic.png",
          "icon2": "/icon-techcloud.png"
        },
        {
          "id": 6,
          "title": "AI & Machine Learning Automation",
          "description": "Integrate AI-powered automation using NLP, computer vision, and predictive analytics to enhance decision-making.",
          "icon1": "/icon-techprogrammatic.png",
          "icon2": "/icon-techai.png"
        },
        {
          "id": 7,
          "title": "Database Automation & Management",
          "description": "Automate database tasks such as backups, performance tuning, and real-time data synchronization.",
          "icon1": "/icon-techprogrammatic.png",
          "icon2": "/icon-techdatabase.png"
        },
        {
          "id": 8,
          "title": "AdTech & Programmatic Advertising",
          "description": "Leverage programmatic advertising automation for campaign optimization, real-time bidding, and audience targeting.",
          "icon1": "/icon-techprogrammatic.png",
          "icon2": "/icon-techadtech.png"
        },
        {
          "id": 9,
          "title": "CI/CD & DevOps Automation",
          "description": "Implement continuous integration and deployment pipelines with Jenkins, GitHub Actions, and Kubernetes for seamless software delivery.",
          "icon1": "/icon-techprogrammatic.png",
          "icon2": "/icon-techdevops.png"
        
        }
      ]
    }
    
  },
  "SEO": {
    title: "Hire Professional SEO Experts For Your Project.",
    description:"Boost your online presence with Brandsmashers Tech — your go-to partner for hiring remote SEO experts. Our team connects you with top-tier SEO specialists, ensuring you get the expertise to elevate your website's performance. Whether it's a SaaS platform or an eCommerce site, our experts drive organic traffic, optimize site structure, and enhance user experience. From keyword research to technical SEO audits and link-building, we craft strategies tailored to your business goals. Don’t let competitors outrank you — partner with Brandsmashers Tech to hire remote SEO experts for measurable results and long-term growth.",
    buttonText: "Hire SEO Developer",
    services: {
      mainTitle: "Hire Skilled SEO Experts to Drive Your Business Growth.",
      // highlightedWord: "App Developers",
      subTitle:
        "Boost Your Online Presence At Brandsmashers Tech, our skilled SEO experts specialize in driving organic traffic, improving search engine rankings, and enhancing your website's performance.",
      services: [
        {
          title: "Custom SEO Strategy Development",
          description:
            " Our SEO experts craft tailored SEO strategies focused on your business goals. From in-depth keyword research to on-page and off-page optimization, we ensure your website ranks higher and reaches the right audience.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Technical SEO Optimization.",
          description:
            "We identify and fix technical SEO issues that may be affecting your site's performance. Our team optimizes site speed, mobile responsiveness, and indexing to ensure search engines can easily crawl and rank your pages",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Content Optimization & Strategy",
          description:
            "Let our SEO experts create and optimize content that not only engages your audience but also aligns with search engine algorithms. We focus on high-quality, keyword-rich content that drives traffic and boosts conversions",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Link Building & Off-Page SEO",
          description:
            "Our SEO specialists build high-quality backlinks and develop effective off-page strategies to increase your website's domain authority and search rankings.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "Local SEO Solutions",
          description:
            "Target your local audience with precision. We optimize your website for local search, ensuring your business appears in local listings, Google Maps, and location-based searches.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
        {
          title: "SEO Audit & Reporting",
          description:
            "Our SEO experts conduct comprehensive SEO audits to uncover opportunities for growth. With transparent reporting, we provide actionable insights and track progress to ensure your SEO strategies deliver measurable results.",
          iconSrc: "/Android-page-img/mobile-icon.svg",
        },
      ],
    },
    carousel: {
      "heading": {
        "beforeHighlight": "Hire Remote",
        "highlight": "SEO Developers",
        "afterHighlight": "from India – Optimize, Rank & Grow Your Business"
      },
    
      "description": "Get top SEO developers to build high-performance, search engine-optimized websites and automation solutions. Leverage technical SEO, website speed optimization, structured data, and AI-driven strategies to enhance rankings, drive traffic, and maximize conversions.",
    
      "cardsData": [
        {
          "id": 1,
          "title": "Technical SEO & Site Optimization",
          "description": "Enhance website performance with Core Web Vitals optimization, structured data implementation, and mobile-first indexing strategies.",
          "icon1": "/icon-techseo.png",
          "icon2": "/icon-techoptimization.png"
        },
        {
          "id": 2,
          "title": "SEO Automation & AI Integration",
          "description": "Implement AI-driven SEO automation for content generation, keyword research, and rank tracking using machine learning models.",
          "icon1": "/icon-techseo.png",
          "icon2": "/icon-techai.png"
        },
        {
          "id": 3,
          "title": "Schema Markup & Structured Data",
          "description": "Boost search visibility with JSON-LD, microdata, and rich snippets to enhance Google rankings and click-through rates.",
          "icon1": "/icon-techseo.png",
          "icon2": "/icon-techschema.png"
        },
        {
          "id": 4,
          "title": "API & SEO Tool Integrations",
          "description": "Seamlessly integrate SEO tools like Google Search Console, SEMrush, Ahrefs, and Moz for data-driven insights and automation.",
          "icon1": "/icon-techseo.png",
          "icon2": "/icon-techapi.png"
        },
        {
          "id": 5,
          "title": "Content Optimization & NLP",
          "description": "Leverage NLP and AI to create high-quality, search-optimized content that ranks for competitive keywords and improves engagement.",
          "icon1": "/icon-techseo.png",
          "icon2": "/icon-technlp.png"
        },
        {
          "id": 6,
          "title": "Page Speed & Core Web Vitals",
          "description": "Optimize load times with advanced caching, lazy loading, and CDN integration to meet Google's Core Web Vitals standards.",
          "icon1": "/icon-techseo.png",
          "icon2": "/icon-techspeed.png"
        },
        {
          "id": 7,
          "title": "E-Commerce SEO & Marketplace Optimization",
          "description": "Boost sales and visibility on platforms like Shopify, WooCommerce, and Amazon with structured SEO strategies.",
          "icon1": "/icon-techseo.png",
          "icon2": "/icon-techcommerce.png"
        },
        {
          "id": 8,
          "title": "SEO-Optimized Web Development",
          "description": "Develop websites with clean code, SEO-friendly architecture, and mobile-first design for better indexing and rankings.",
          "icon1": "/icon-techseo.png",
          "icon2": "/icon-techdevelopment.png"
        },
        {
          "id": 9,
          "title": "Local SEO & Google My Business Optimization",
          "description": "Improve local search visibility with GMB optimization, citation management, and geo-targeted SEO strategies.",
          "icon1": "/icon-techseo.png",
          "icon2": "/icon-techlocal.png"
        }
      ]
    }
  },
  "shopify": {
    title: "Hire Best Shopify Developer from India",
    description:" Looking for a skilled Shopify developer from India? Your search ends here! Hire top Shopify developers from Brandsmashers Tech to build secure, scalable, and high-performing eCommerce stores. Our experts ensure seamless integrations, user-friendly designs, and customized solutions tailored to meet your business needs. Hire Shopify developers today to create a feature-rich online store that drives conversions and growth.",
    buttonText: "Hire Shopify Developer",
    services: {
      mainTitle: "Hire Expert Shopify Developers to Elevate Your eCommerce Business!",
      
      subTitle:
        "Build high-performing, scalable, and fully customized Shopify stores with our skilled developers, ensuring a seamless shopping experience and optimized sales potential.",
      services: [
        {
          title: "Custom Shopify Store Development",
          description: "Our expert Shopify developers craft unique, user-friendly, and visually appealing Shopify stores tailored to your brand’s identity, ensuring a seamless shopping experience.",
          iconSrc: "/android-techicon.png"
        },
        {
          title: "Shopify Theme Development & Customization",
          description: "Enhance your store with custom themes and modifications. Our developers ensure mobile responsiveness, fast loading times, and a visually engaging shopping experience.",
          iconSrc: "/android-techicon.png"
        },
        {
          title: "Shopify App Development & Integration",
          description: "Extend your Shopify stores functionality with custom apps and third-party integrations, from payment gateways to CRM solutions, ensuring smooth business operations.",
          iconSrc: "/android-techicon.png"
        },
        {
          title: "Shopify Migration Services",
          description: "Seamlessly migrate your existing store from platforms like WooCommerce or Magento to Shopify, ensuring zero data loss, SEO preservation, and enhanced performance.",
          iconSrc: "/android-techicon.png"
        },
        {
          title: "Performance Optimization & SEO",
          description: "Boost your Shopify stores speed and visibility with our optimization services. We enhance load times, improve search engine rankings, and drive organic traffic.",
          iconSrc: "/android-techicon.png"
        },
        {
          title: "Ongoing Shopify Support & Maintenance",
          description: "Ensure smooth operation with our dedicated Shopify support. We provide regular updates, bug fixes, and feature enhancements to keep your store running efficiently.",
          iconSrc: "/android-techicon.png"
        },
      ],
    },
    carousel: {
      heading: {
        beforeHighlight: "Hire Remote ",
        highlight: "Android Application Developers",
        afterHighlight: " The WordPress platform is a powerful and widely preferred solution for building dynamic, scalable, and feature-rich websites. Explore our range of expert WordPress development services."
      },
      description: "The WordPress platform is a powerful and widely preferred solution for building dynamic, scalable, and feature-rich websites. Explore our range of expert WordPress development services.",
      cardsData: [
        {
          id: 1,
          title: 'Wordpress + Reactjs',
          description: 'WordPress and ReactJS can be combined to develop high-end web solutions.We have a team of dedicated WP developer who are well-versed inReactJS as well. ',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techlaravel.png'
        },
        {
          id: 2,
          title: 'WordPress + Ruby On Rails',
          description: 'if you want to develop highly customized plugins for website,you can use Ruby on Rails a server-side web development framework to build scalable web pages ',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techsymfony.png'
        },
        {
          id: 3,
          title: 'WordPress + AJAX',
          description: 'AJAX can be hlpful in web application development for data exchange between wordpress and other systems seamlessly',
          icon1: '/icon-techphp.png',
          icon2: '/icon-techmysql.png'
        },
        
      ]
    }
  },


};

export default function TechnologyDetails() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const heroImage = "/Tech-Dropdown-Image.png";

  // Update data when route changes
  useEffect(() => {
    if (router.isReady && router.query.technology) {
      setData(technologyData[router.query.technology] || null);
    }
  }, [router.isReady, router.query.technology]);

  if (!data) {
    return (
      <>
        <Navbar />
        <ComingSoon />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title} - Brand Smashers</title>
        <meta name="description" content={data.description} />
      </Head>

      <Navbar />
      <HeroSectionTech
        title={data.title}
        description={data.description}
        buttonText={data.buttonText}
        imageSrc={heroImage}
      />
      <Stats />
      <PartnerCompanies />
       <AndroidHero/>
       {/* <ServiceGrids/> */}
       <ServiceGrids serviceData={data.services} />
       {data.carousel && (
  <DynamicCarousel
    heading={data.carousel.heading}
    title={data.carousel.title}
    description={data.carousel.description}
    cardsData={data.carousel.cardsData}
  />
)}
       {/* <AndroidCarousel/> */}
      <FAQSection/>
      <Footer />
    </>
  );
}
