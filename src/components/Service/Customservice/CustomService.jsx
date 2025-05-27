import { useState, useEffect, useRef } from "react";
import { Check, Calendar } from 'lucide-react';
import { DollarSign } from "lucide-react";
import {
  ChevronDown,
  Code,
  Rocket,
  ShieldCheck,
  Timer,
  Users,

  Lightbulb,
  Wrench,
  ChevronUp,
  CheckCircle,
  Database,
  Layers,
  FileCode,
  Cloud,
  TestTube,
  FileText,
  ArrowRight,
  Clock,
  MessageCircle,
  Search,
  ArrowUpRight,
  Settings,
  X,
  Monitor,
  Laptop,
  Smartphone,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from "react-countup";
import DeveloperHiringSection from "./DeveloperHiringSection";
import CustomSoftwareStats from "./CustomSoftwareStats";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";

export default function CustomSoftwareDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  //email functionality
  const primaryColor = "#ff5010";
  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: { background: '#ff5010', color: 'white' }
  };
  const [showContactForm, setShowContactForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [helpType, setHelpType] = useState(null);
  const [serviceForm, setServiceForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleServiceFormChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    let error = '';
    switch (name) {
      case 'name':
        if (value && !validateName(value)) {
          error = 'Please enter only letters';
          newValue = serviceForm[name];
        }
        break;
      case 'email':
        if (value && !validateEmail(value)) {
          error = 'Please enter only letters';
          newValue = serviceForm[name];
        }
        break;

      case 'phone':
        const digits = value.replace(/\D/g, '');
        if (digits.length > 10) {
          newValue = serviceForm[name];
        }
        break;


      default:
        break;
    }

    setServiceForm(prev => ({
      ...prev,
      [name]: value
    }));


    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

  };

  const handleServiceFormSubmit = async (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    if (validateForm()) {
      try {
        const formDataToSend = new FormData();

        Object.keys(serviceForm).forEach(key => {
          formDataToSend.append(key, serviceForm[key]);
        });
        formDataToSend.append('helpType', helpType);
        formDataToSend.append('access_key', 'ced5f765-5f1b-4a75-8584-5ca061816ed2');

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formDataToSend
        });

        const data = await response.json();

        if (data.success) {
          toast.success('Form submitted successfully!', toastConfig);
          alert()

          setServiceForm({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
          setHelpType(null);
        } else {
          toast.error('Error submitting form. Please try again.', toastConfig);
        }
      } catch (error) {
        console.error('Submission Error:', error);
        toast.error('Network error. Please try again later.', toastConfig);
      }
    }
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!serviceForm.name) {
      newErrors.firstName = 'First name is required';
    } else if (!validateName(serviceForm.firstName)) {
      newErrors.firstName = 'Please enter only letters';
    }
    if (!serviceForm.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(serviceForm.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!serviceForm.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(serviceForm.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };




  // Services with their icons
  const services = [
    {
      title: "Software Consulting Services",
      description: "Unlock your business potential with expert software consulting services. We analyze your unique challenges and craft tailored digital solutions to drive innovation, streamline operations, and boost ROI.",
      icon: Search
    },
    {
      title: "Custom Software Development Services",
      description: "Empower your business with our custom software development services. From concept to deployment, we build scalable, secure, and high-performance software solutions tailored to your specific needs.",
      icon: Code
    },
    {
      title: "Enterprise Software Development Services",
      description: "Transform your operations with robust enterprise software development services. We design and develop large-scale software systems that ensure efficiency, integration, and business agility.",
      icon: Layers
    },
    {
      title: "Software Product Development Services",
      description: "Bring your product idea to life with our end-to-end software product development services. We specialize in building innovative, market-ready software products that deliver value and growth.",
      icon: Monitor
    },
    {
      title: "Software Integration Services",
      description: "Streamline your workflows with seamless software integration services. We help you connect disparate systems and applications to enhance performance, reduce data silos, and improve decision-making.",
      icon: Settings
    },
    {
      title: "Custom CRM Development Services",
      description: "Enhance customer relationships with our custom CRM development services. We create personalized CRM platforms that automate sales, boost productivity, and offer deep customer insights.",
      icon: Users
    },
  
  ];




  // Development process steps
  const process = [
    {
      title: "Planning",
      description: "We define goals, gather requirements, and create a clear development roadmap tailored to your business.",
      icon: Clock
    },
    {
      title: "UI/UX Design",
      description: "We design clean, user-friendly interfaces that deliver smooth and engaging user experiences.",
      icon: Laptop
    },
    {
      title: "Development",
      description: "Our developers build secure, scalable, and custom software using the latest technologies.",
      icon: Code
    },
    {
      title: "Quality Assurance",
      description: "We test thoroughly to ensure your software is bug-free, reliable, and performs flawlessly.",
      icon: TestTube
    },
    {
      title: "Launch",
      description: "We deploy your software smoothly and ensure it's fully functional from day one.",
      icon: Cloud
    },
    {
      title: "Maintenance",
      description: "We provide ongoing support, updates, and enhancements to keep your software optimized.",
      icon: Wrench
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      title: "Expert Developers",
      description: "Our team is made up of highly experienced software engineers who specialize in modern tech stacks.",
      icon: Code
    },
    {
      title: "Faster Time to Market",
      description: "We build, test, and launch your product efficiently with agile methodologies and CI/CD pipelines.",
      icon: Rocket
    },
    {
      title: "Secure Architecture",
      description: "We follow best security practices, encrypt sensitive data, and ensure compliance with industry standards.",
      icon: ShieldCheck
    },
    {
      title: "On-Time Delivery",
      description: "Timely project completion is part of our DNA, backed by strong project planning and execution.",
      icon: Timer
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with your team, ensuring complete transparency and shared progress at every step.",
      icon: Users
    },
    {
      title: "Scalable Solutions",
      description: "Our software is built to scale with your growing business needs, without performance compromise.",
      icon: Layers
    },
    {
      title: "Innovation-Driven",
      description: "We don’t just deliver software—we innovate, helping your brand stay ahead of the curve.",
      icon: Lightbulb
    },
    {
      title: "Comprehensive Support",
      description: "Post-launch support and maintenance to ensure your product runs smoothly and evolves as needed.",
      icon: Wrench
    },
    {
      title: "Cost-Effective Solutions",
      description: "We maximize your ROI by delivering high-quality software solutions that meet your budget without compromising on performance or features.",
      icon: DollarSign 
    }
  ];


  // Business solutions
  const businessSolutions = [
    {
      title: "Tailored Software Development",
      description: "We create fully customized software solutions designed to match your specific business workflows, goals, and user needs. Our approach ensures that your software is efficient, user-friendly, and aligned with your long-term growth strategy.",
      icon: Code
    },
    {
      title: "Scalable Enterprise Solutions",
      description: "Our team builds powerful enterprise software systems that are secure, scalable, and built to handle complex business operations. Whether you're automating internal processes or enhancing customer engagement, we've got you covered.",
      icon: Layers
    },
    {
      title: "End-to-End Product Engineering",
      description: "From idea validation to post-launch support, we manage every phase of product development. We ensure your software is built with precision, performs reliably, and delivers real business value from day one.",
      icon: Settings
    },
    {
      title: "Cross-Platform Web & Mobile Apps",
      description: "We design and develop high-performance web and mobile applications that work seamlessly across all devices. Our apps are responsive, intuitive, and optimized for both speed and user engagement.",
      icon: Smartphone
    },
    {
      title: "Technology Consulting & Innovation",
      description: "Our experts provide strategic tech consulting to help you adopt the right tools, modernize legacy systems, and implement innovative solutions that future-proof your business and boost competitiveness.",
      icon: Zap
    },
    {
      title: "Cloud Integration & DevOps",
      description: "We help businesses streamline operations with scalable cloud infrastructure and DevOps best practices. From CI/CD pipelines to cloud-native applications, we ensure faster delivery, better reliability, and lower operational costs.",
      icon: Cloud 
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "What are Custom Software Development Services?",
      answer: "Custom Software Development Services involve designing and building software solutions tailored to a specific business's needs, workflows, and goals. Unlike off-the-shelf software, custom solutions are developed from the ground up, ensuring seamless integration, better scalability, and enhanced performance. Brandsmashers Tech specializes in delivering tailored software that empowers business growth and innovation."
    },
    {
      question: "Why should I choose Brandsmashers Tech for Custom Software Development Services?",
      answer: "Brandsmashers Tech is recognized as one of the Best Custom Software Development Companies in India. Our expert team combines deep technical knowledge with a client-centric approach to deliver secure, scalable, and performance-driven software. From startups to enterprises, we provide end-to-end development backed by innovation and transparency."
    },
    {
      question: "How long does it take to develop custom software?",
      answer: "The timeline for custom software development depends on the project's scope, complexity, and features. Typically, projects can range from a few weeks to several months. As a trusted provider of Custom Software Development Services, we ensure efficient project planning and timely delivery without compromising quality."
    },
    {
      question: "What industries do you serve with your Custom Software Development Services?",
      answer: "As one of the Best Custom Software Development Companies in India, we serve a wide range of industries, including healthcare, finance, education, logistics, eCommerce, real estate, and more. Our team builds solutions tailored to each industry's specific challenges and goals."
    },
    {
      question: "Will I have ownership of the custom software you build?",
      answer: "Yes, absolutely. At Brandsmashers Tech, we ensure full ownership and intellectual property rights of the software we develop for you. That's one of the reasons why clients trust us as their go-to partner for Custom Software Development Services in India."
    }
  ];

  // Tech stack categories
  const cards = [
    {
      id: 'hourly',
      price: '$2',
      note: '*',
      subtitle: 'Hourly (USD)',
      features: [
        "Fully signed NDA for confidentiality",
        "Full code ownership",
        "Flexible scaling based on needs"
      ],
      buttonText: 'Get Started'
    },
    {
      id: 'monthly',
      price: '$2',
      note: '***',
      subtitle: 'Monthly (USD)',
      highlightText: 'STARTS WITH',
      features: [
        "4+ Years Senior Developer",
        "160 hours/month",
        "Dedicated resource"
      ],
      buttonText: 'Get Started'
    },
    {
      id: 'fixed',
      price: 'Get a Quote',
      subtitle: 'Fixed Cost Solution',
      features: [
        "Timely Delivery",
        "Within Budget",
        "Complete scoping & planning"
      ],
      buttonText: 'Request Quote'
    }
  ];

  const [current, setCurrent] = useState(0);
  const getPositionClass = (index) => {
    if (index === current) return 'z-20 scale-110';
    if ((index + 1) % 3 === current) return 'translate-x-[-120%] opacity-70 scale-95';
    if ((index + 2) % 3 === current) return 'translate-x-[120%] opacity-70 scale-95';
    return 'hidden';
  };

  return (
    <div className="font-sans text-gray-800 bg-black">
      <ToastContainer />
      {/* Hero Section */}
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
         Custom Software Development 
              </h1>
              {/* Modified paragraph to create two distinct lines */}
              <div className="text-lg mb-8 font-medium text-white">
                <p className="mb-2">
                Empower your business with tailor-made software solutions built to match your unique workflows and goals. Our custom development approach ensures high performance, scalability, and a perfect fit for your operational needs.
</p>
              </div>
              <div className="flex space-x-4">
                <Link href="/contact" className="inline-block">
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

      {/* Main Service Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">End-to-End Custom Software Development Service</h2>
            <p className="text-lg text-gray-600">
              Our custom software development process is built on a hyper-focused approach that prioritizes personalized user experiences and the creation of highly efficient solutions. We ensure a transparent and trusted partnership, delivering impactful and innovative software solutions that drive real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
                <div style={{ color: "#ff5010" }} className="mb-4">
                  <service.icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    {/* Solution Metrics Section */}
    <CustomSoftwareStats />
  


      {/* cost Section */}

      <section className="py-16 px-6 md:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hire a <span className="text-[#ff5010]">Custom Software Development</span> Tailored to Your Business Needs
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Custom Software Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here is a streamlined overview of our custom web app development process.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>

              {/* Process steps */}
              {process.map((step, index) => (
                <div key={index} className="relative mb-10 ">
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Circle on timeline */}
                    <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-300 transform -translate-x-1/2 z-10">
                      <div className="w-full h-full flex items-center justify-center">
                        <step.icon size={20} style={{ color: "#ff5010" }} />
                      </div>
                    </div>

                    {/* Step number for mobile */}
                    <div className="md:hidden w-12 h-12 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center mb-4">
                      <step.icon size={20} style={{ color: "#ff5010" }} />
                    </div>

                    {/* Content box */}
                    <div className={`w-full md:w-5/12 p-6 bg-white rounded-lg shadow-lg border border-gray-100 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <div className="flex items-center mb-3">
                        <div style={{ color: "#ff5010" }} className="text-2xl font-bold mr-2">{index + 1}.</div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



  
        {/* Technologies Section */}
    <section
      className="py-16 px-6 md:px-12"
      style={{ backgroundColor: '#ffffff' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Custom Software Development Technologies We Work On</h2>
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
   

      {/* Business Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Empower Your Business with Custom Software Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our collaborative and transparent approach allows us to deeply understand your vision and craft high-performance solutions that go beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessSolutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
                <div style={{ color: "#ff5010" }} className="mb-4">
                  <solution.icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


  {/* Why Choose Us Section */}
  <section className="py-16 text-white bg-[#0b0b0b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="text-[#ff5010]">Brandsmashers Tech</span> Is Your Ideal Partner for Custom Software Development
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400">
              Looking for a reliable partner to bring your software idea to life? Brandsmashers Tech is your go-to expert for end-to-end software product development. We blend innovation, agility, and top-tier talent to build powerful, scalable solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-[#161616] p-6 rounded-xl border border-[#2c2c2c] shadow-lg hover:shadow-[0_0_20px_#ff5722aa] transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-[#ff5010] mr-3" size={28} />
                  <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                </div>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Case Studies From Different Industries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how our custom software solutions have transformed businesses across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Healthcare", "Finance", "E-Commerce"].map((industry) => (
              <div key={industry} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <div className="h-48 bg-gray-300">
                  {/* <img src="https://i.pinimg.com/736x/d9/dc/07/d9dc073561f34685fd7622aa73bebee3.jpg" className="h-48 w-full bg-cover bg-center"/> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{industry} Solution</h3>
                  <p className="text-gray-600 mb-4">How we helped a {industry.toLowerCase()} company streamline operations and boost efficiency with custom software.</p>
                  <a
                    href="#"
                    style={{ color: "#ff5010" }}
                    className="flex items-center font-medium hover:underline"
                  >
                    View Case Study
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          {/* Call to Action Section */}
          <section className="py-16 px-6 md:px-12 text-white bg-[#0b0b0b] relative overflow-hidden">

{/* Glowing Accent Shape */}
<div className="absolute -bottom-10 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#ff5722] rounded-full opacity-20 blur-2xl"></div>

<div className="max-w-6xl mx-auto text-center relative z-10">
  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Ready to Build Your <span className="text-[#ff5722]">Next Product?</span>
  </h2>
  <p className="max-w-2xl mx-auto text-lg mb-12 text-gray-400">
    Lets transform your idea into a powerful digital product that drives growth and engages users.
  </p>



  <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-6 md:space-y-0">
    {[
      { text: 'Technical Excellence' },
      { text: 'Dedicated Team' },
      { text: 'Innovative Solutions' },
    ].map((item, index) => (
      <div key={index} className="flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-[#161616] border-2 border-[#ff5722] flex items-center justify-center mr-3 shadow-[0_0_10px_#ff572255]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff5722]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-white text-lg">{item.text}</span>
      </div>
    ))}
  </div>
</div>
</section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-5 bg-gray-100 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="p-5 border-t border-gray-200 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
}