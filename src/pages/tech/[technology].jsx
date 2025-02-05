import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import HeroSectionTech from "@/components/HireDevelopers/HeroSectionForTech";
import Stats from "@/components/HireDevelopers/Android/Stats";
import PartnerCompanies from "@/components/HireDevelopers/Android/PartnerCompanies";
import AndroidHero from "@/components/HireDevelopers/Android/AndroidHero";
import ServiceGrids from "@/components/HireDevelopers/Android/ServiceGrid";
import AndroidCarousel from "@/components/HireDevelopers/Android/AndroidCarousel";
import Head from "next/head";
import FAQSection from "@/components/HomePage/FAQSection";

// Technology data
const technologyData = {
  "android-developer": {
    title: "Hire Best Android App Developer from India",
    description:
      "Need a remote Android app developer from India? Your search ends here! Hire top Android developers through Brandsmashers Tech...",
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
  },
  "node-js-developer": {
    title: "Hire Best Node Js Developer from India",
    description:
      "On the lookout for an experienced Node.js developer from India? Look no further! At Brandsmashers Tech, we offer exceptional Node.js development services to help you create high-performance, real-time applications. Our expert Node.js developers are equipped with the right skills and knowledge to develop scalable, fast, and reliable web applications that cater to your business needs. Hire Node.js developers from India now and build next-gen web solutions that power your business growth!",
    buttonText: "Hire Flutter Developer",
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
  },
};

export default function TechnologyDetails() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const heroImage = '/Tech-Dropdown-Image.png';

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
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold">Page Not Found</h1>
          <p className="text-gray-400 mt-2">This technology does not exist.</p>
        </div>
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
       <AndroidCarousel/>
      <FAQSection/>
      <Footer />
    </>
  );
}
