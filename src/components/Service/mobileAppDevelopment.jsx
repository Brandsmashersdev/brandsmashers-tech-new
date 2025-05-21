import { useState, useEffect } from 'react';
import { FileText, X } from "lucide-react";

import { ChevronDown, ChevronRight, Code, SmartphoneCharging, Layers, Laptop, Watch, Gamepad, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MobileAppDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);


  const primaryColor = "#ff5010";
  const secondaryColor = "#ff7a47";
  const darkColor = "#222";

  const services = [
    {
      title: "Android App Development",
      icon: <SmartphoneCharging size={24} />,
      description: "Unlock Android power with custom-built applications using Kotlin, Java, and Jetpack Compose. Our team specializes in developing scalable, high-performance Android apps tailored for diverse screen sizes and devices."
    },
    {
      title: "iOS App Development",
      icon: <Laptop size={24} />,
      description: "Create powerful, native iOS applications with cutting-edge technologies like Swift and Objective-C. Our iOS experts build high-performance apps optimized for iPhone, iPad, Apple Watch, and Apple TV."
    },
    {
      title: "React Native App Development",
      icon: <Code size={24} />,
      description: "Build high-performing, cross-platform mobile apps faster with React Native. Our team specializes in creating scalable, enterprise-level applications with seamless integrations and native-like performance."
    },
    {
      title: "Flutter App Development",
      icon: <Layers size={24} />,
      description: "Create visually rich and high-speed mobile apps for both iOS and Android using Flutter and Dart. Our developers deliver cross-platform solutions with smooth performance and expressive UI."
    },
    {
      title: "Cross-platform App Development",
      icon: <Code size={24} />,
      description: "Accelerate time-to-market with cross-platform mobile apps built using React Native and Flutter. We develop with a single codebase to ensure consistent performance across iOS and Android."
    },
    {
      title: "Wearables & Embedded Software",
      icon: <Watch size={24} />,
      description: "Drive innovation with custom software solutions for wearable and embedded devices. Using technologies like Arduino, PlatformIO, and MBED, we develop responsive, low-latency applications."
    },
    {
      title: "Mobile Game App Development",
      icon: <Gamepad size={24} />,
      description: "Design engaging, high-performance mobile games with powerful engines like Unity, Unreal Engine, and Cocos2d. We specialize in creating visually rich, responsive games with smooth mechanics."
    }
  ];

  const process = [
    {
      title: "Planning",
      description: "We begin by understanding your goals, target audience, and requirements to create a clear roadmap and project timeline."
    },
    {
      title: "Design",
      description: "Our UI/UX experts craft intuitive, engaging, and user-friendly interfaces that align with your brand identity."
    },
    {
      title: "Development",
      description: "We bring your app to life using robust code, scalable architecture, and modern tech stacks across iOS and Android platforms."
    },
    {
      title: "Testing",
      description: "Rigorous testing ensures your app is bug-free, secure, and performs smoothly across all devices and scenarios."
    },
    {
      title: "Launch",
      description: "We deploy the app to app stores with proper optimization and ensure a smooth go-live experience."
    },
    {
      title: "Maintenance",
      description: "Post-launch, we provide ongoing support, updates, and improvements to keep your app running flawlessly."
    }
  ];

  const advantages = [
    {
      title: "Expert App Developers",
      description: "Our skilled developers bring years of experience and stay updated with the latest tech to build top-quality apps."
    },
    {
      title: "Customized Solutions",
      description: "We create mobile apps that are fully tailored to your unique business needs and goals."
    },
    {
      title: "Scalable Architecture",
      description: "Our apps are built to grow with your business, ensuring smooth performance as your user base expands."
    },
    {
      title: "On-Time Delivery",
      description: "We follow agile practices to deliver your app on schedule without compromising on quality."
    },
    {
      title: "Full Support & Maintenance",
      description: "From launch to updates, we provide continuous support to keep your app running at its best."
    }
  ];

  const faqItems = [
    {
      question: "What types of mobile apps do you develop at Brandsmashers?",
      answer: "At Brandsmashers, a leading Mobile App Development Company, we specialize in building a wide range of applications including native apps for Android and iOS, cross-platform apps using Flutter and React Native, as well as progressive web apps (PWAs). Our Mobile App Development Services are tailored to meet the unique needs of startups, SMEs, and enterprises."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "The development timeline varies based on the app's complexity, features, and platform. Typically, our Mobile App Development Services deliver MVPs within 4–8 weeks. As a reliable Mobile App Development Company, we follow agile methodology to ensure faster delivery without compromising quality."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes, we provide end-to-end support even after your app is launched. Our Mobile App Development Services include regular updates, bug fixes, performance monitoring, and feature enhancements. Brandsmashers believes in building long-term partnerships as your go-to Mobile App Development Company."
    },
    {
      question: "Can you help with app store submission and approval?",
      answer: "Absolutely! As part of our comprehensive Mobile App Development Services, we assist in preparing your app for Google Play Store and Apple App Store submissions. Our team ensures your app meets all guidelines and requirements to get approved quickly by the respective stores."
    },
    {
      question: "Why should I choose Brandsmashers as my Mobile App Development Company?",
      answer: "Brandsmashers stands out due to its client-centric approach, experienced developers, and transparent process. Our Mobile App Development Services are designed to turn your ideas into scalable and engaging mobile apps that drive business growth and customer satisfaction."
    }
  ];

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section with Background Image - IMPROVED TEXT LAYOUT */}
      <section
        className="py-16 px-6 md:px-12 text-white relative bg-gray-900 flex-grow"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1920&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Darker Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {/* Modified title to ensure it stays on one line */}
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 whitespace-nowrap"
                style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}
              >
           Mobile App Development
              </h1>
              {/* Modified paragraph to create two distinct lines */}
              <div className="text-lg mb-8 font-medium text-white">
                <p className="mb-2">
               Create intuitive, scalable, and high-performance mobile apps that elevate your brand and engage your users.
Whether you are building for iOS, Android, or both, our custom mobile solutions provide seamless experiences that integrate with your business needs
</p>
              </div>
              <div className="flex space-x-4">
                <Link href="/contactus" className="inline-block">
                  <button
                    className="rounded-md px-6 py-3 font-bold flex items-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Get Started <ArrowRight className="ml-2" size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Mobile App Development Services</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-800 font-medium">
              Transform your ideas into high-performing mobile apps with end-to-end development services tailored for iOS, Android, and cross-platform solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div
                  className="p-3 rounded-full inline-flex mb-4"
                  style={{ backgroundColor: `${primaryColor}20 ` }}
                >
                  <div style={{ color: primaryColor }}>{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-800">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Matrix */}
      <section
        className="py-16 px-6 md:px-12 text-white"
        style={{ backgroundColor: darkColor }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Trusted Partner for Scalable and Custom Mobile App Development
            </h2>
            {/* Improved visibility for paragraph text */}
            <p className="max-w-3xl mx-auto text-lg font-medium text-white">
              At Brandsmashers Tech, we build custom mobile apps that are scalable, secure, and user-friendly. From idea to launch, our expert team ensures your app meets your business goals and delivers a seamless user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>200+</div>
              <p className="text-white font-medium">Apps Delivered</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>50+</div>
              <p className="text-white font-medium">Tech Experts</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>95%</div>
              <p className="text-white font-medium">Client Satisfaction</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>8+</div>
              <p className="text-white font-medium">Years Experience</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>100%</div>
              <p className="text-white font-medium">Project Delivery</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>24/7</div>
              <p className="text-white font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
   
   <section className="py-16 px-6 md:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hire a <span className="text-[#ff5010]">Mobile Development</span> Tailored to Your Business Needs
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Boost your online presence with expert digital marketers who understand your goals. Whether it&apos;s SEO, social media, paid ads, or full-scale strategy — hire dedicated professionals on flexible terms with complete transparency and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Simple & Transparent Pricing",
                icon: CheckCircle,
                description: "Clear pricing structure with no hidden costs. Pay only for what you need."
              },
              {
                title: "Fully Signed NDA",
                icon: FileText,
                description: "Your business information stays secure with legally binding non-disclosure agreements."
              },
              {
                title: "Easy Exit Policy",
                icon: ArrowRight,
                description: "Flexible engagement models with straightforward exit terms if needed."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="flex items-center mb-4">
                  <item.icon className="text-[#ff5010] mr-3" size={24} />
                  <h3 className="text-lg font-bold text-black">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="inline-block bg-[#ff5010] hover:bg-[#ff672b] text-white font-medium px-8 py-3 rounded-md transition"
            >
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative">
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold mb-6 text-center text-black">Schedule a Call</h3>
              <form onSubmit={handleServiceFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={serviceForm.name}
                    onChange={handleServiceFormChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={serviceForm.email}
                    onChange={handleServiceFormChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={serviceForm.phone}
                    onChange={handleServiceFormChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="+1 (123) 456-7890"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    How can we help you? (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={serviceForm.message}
                    onChange={handleServiceFormChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                    placeholder="Tell us about your digital marketing needs..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-[#ff5010] hover:bg-[#ff672b] text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline w-full"
                  >
                    Submit
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}
      </section>
      {/* Process Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Mobile App Development Process</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-800 font-medium">
              We follow a streamlined process to deliver high-quality mobile apps—from idea validation and UI/UX design to agile development, testing, and launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {process.map((step, index) => (
              <div key={index} className="flex">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center font-bold text-white shrink-0 mt-1"
                  style={{ backgroundColor: primaryColor }}
                >
                  {index + 1}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-black">{step.title}</h3>
                  <p className="text-gray-800">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        className="py-16 px-6 md:px-12"
        style={{ backgroundColor: `${primaryColor}05 ` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">App Development Technologies We Work On</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-800 font-medium">
              Leverage the expertise of a top app development company to build high-performance, feature-rich mobile apps.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java', 'Objective-C', 'Unity', 'Firebase'].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-full shadow-md font-medium"
                style={{ color: primaryColor }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Why Brandsmashers Tech Is a Smart Choice for Custom Mobile App Development
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-800 font-medium">
              Brandsmashers Tech stands out as a smart choice for custom mobile app development with its blend of innovation, expertise, and client-first approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-black">
                  <CheckCircle
                    size={20}
                    className="mr-2"
                    style={{ color: primaryColor }}
                  />
                  {advantage.title}
                </h3>
                <p className="text-gray-800">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 px-6 md:px-12 text-white bg-black relative overflow-hidden"
      >
        {/* Small orange accent shape */}
        <div
          className="absolute -bottom-10 right-0 w-32 h-32 md:w-64 md:h-64 bg-orange-500 rounded-full opacity-10"
        ></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="text-orange-500">Mobile App?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-12 text-white font-medium">
            Let&apos;s transform your idea into a powerful mobile application that drives growth and engages users.
          </p>
          <div className="inline-block mb-16">
            <button
              className="bg-transparent hover:bg-orange-500 transition-colors px-8 py-3 rounded-md font-medium text-white border-2 border-orange-500 hover:border-orange-500"
            >
              Get a Free Consultation
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-6 md:space-y-0">
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Expert Developers</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-800 font-medium">
              Find answers to common questions about our mobile app development services.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-medium text-black"
                  onClick={() => toggleFaq(index)}
                >
                  {item.question}
                  {activeFaq === index ?
                    <ChevronDown size={20} /> :
                    <ChevronRight size={20} />
                  }
                </button>
                {activeFaq === index && (
                  <div className="p-4 pt-0 text-gray-800 border-t">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}