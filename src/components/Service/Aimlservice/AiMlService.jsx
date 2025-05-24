import React from 'react'
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from "react-countup";
import { Check, Calendar } from 'lucide-react';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Code,
  Database,
  Layers,
  FileCode,
  Cloud,
  X,
  TestTube,
  Wrench,
  ArrowRight,
  Clock,
  MessageCircle,
  Search,
  ArrowUpRight,
  Settings,
  Users,
  Monitor,
  Laptop,
  Smartphone,
  Zap,
  BrainCog,
  Boxes,
  Workflow,
  ServerCog,
  LifeBuoy,
  RefreshCw,
  FileText,
} from "lucide-react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



import AimlSolutionMetrix from './AimlSolutionMetrix';
import AimlHiring from './AimlHiring';
import Link from 'next/link';
const primaryColor = "#ff5010";

const toastConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  style: { background: '#2CC5D9', color: 'white' }
};
const AiMlService = () => {

  //email functionality code

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

          setShowContactForm(false);
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


  //services data
  const services = [
    {
      title: " AI-Powered Software Development",
      description: "We build AI-driven software tailored to your business processes, helping you streamline operations, reduce manual effort, and boost performance.",
      icon: Search
    },
    {
      title: "Machine Learning Model Development",
      description: "Our experts design and train custom ML models that learn from your data and deliver predictive insights to help you make smarter business decisions",
      icon: Code
    },
    {
      title: " Natural Language Processing (NLP) Solutions",
      description: "Unlock the power of language with our NLP services. From chatbots to sentiment analysis, we help your apps understand and respond to human language naturally.",
      icon: Layers
    },
    {
      title: "Computer Vision Applications:",
      description: "We develop computer vision systems that recognize images, scan documents, detect objects, and more—perfect for automation, quality checks, and security..",
      icon: Monitor
    },
    {
      title: "AI Consulting Services",
      description: "Not sure where to start? Our AI consultants assess your business, identify automation opportunities, and help you plan scalable AI strategies that deliver real value.",
      icon: Settings
    },
    {
      title: "AI-Powered Analytics & BI Solutions",
      description: "Transform raw data into actionable insights with AI-enhanced analytics and business intelligence tools. We help you monitor KPIs, forecast trends, and make data-driven decisions with ease.",
      icon: Users
    },

  ];

  //cost section
  const cards = [
    {
      id: 'hourly',
      price: '$2',
      note: '*',
      subtitle: 'Hourly (USD)',
      highlightText: 'MOST POPULAR',
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

  //why choose section data
  const whyChooseUs = [
    {
      title: "Experienced AI/ML Professionals",
      description: "Our team consists of skilled developers and data scientists with hands-on experience in building and deploying intelligent solutions tailored to various industries.",
      icon: BrainCog
    },
    {
      title: "Custom AI Solution for Every Business",
      description: "We don’t believe in one-size-fits-all. Our AI/ML services are fully customized to match your unique business goals, workflows, and data challenges.",
      icon: Boxes
    },
    {
      title: "End-to-End Project Execution",
      description: "From idea validation and model development to deployment and post-launch support — we handle the entire AI/ML development lifecycle seamlessly.",
      icon: Workflow
    },
    {
      title: "Scalable and Future-Ready Architecture",
      description: "We build AI systems that are designed to scale with your growing data and user base, ensuring long-term performance and adaptability.",
      icon: ServerCog
    },
    {
      title: "Transparent Process & Timely Delivery",
      description: "We follow a streamlined development process with regular updates, clear communication, and on-time delivery—keeping your project on track and stress-free.",
      icon: Clock
    },
    {
      title: "Post-Launch Support",
      description: "Our partnership doesn't end at deployment. We provide comprehensive maintenance and support to ensure your software continues to perform optimally.",
      icon: LifeBuoy
    },
  
  ];

  //process data
  const process = [
    {
      title: "Requirement Analysis",
      description: "We begin by understanding your business needs and identifying the AI opportunities that align with your goals.",
      icon: Clock
    },
    {
      title: "Data Exploration",
      description: " We gather, clean, and analyze relevant data to uncover patterns and insights essential for model training.",
      icon: Laptop
    },
    {
      title: "Solution Designing",
      description: "Our experts architect the best-fit AI solution, choosing the right algorithms, tools, and infrastructure.",
      icon: Code
    },
    {
      title: " AI Model Development",
      description: "We build, train, and fine-tune AI models to ensure accuracy, performance, and scalability.",
      icon: TestTube
    },
    {
      title: "Integration & Deployment",
      description: " We integrate the AI solution into your existing systems and ensure a smooth, efficient deployment.",
      icon: Cloud
    },
    {
      title: "Maintenance & Support",
      description: "We offer ongoing support, monitoring, and updates to keep your AI systems optimized and future-ready.",
      icon: Wrench
    }
  ];

  //faq section data
  const faqs = [
    {
      question: " What makes Brandsmashers Tech one of the best AI/ML development services providers?",
      answer: "At Brandsmashers Tech, we combine domain expertise with cutting-edge technology to deliver scalable, intelligent solutions. As a leading AI/ML development company, we specialize in automating workflows, improving decision-making, and driving business growth through custom AI and machine learning solutions."
    },
    {
      question: " What industries do you serve with your AI/ML development services?",
      answer: "Our AI/ML development services cater to a wide range of industries including healthcare, retail, education, logistics, real estate, and finance. We tailor each solution to the specific data, challenges, and goals of the industry to ensure maximum impact."
    },
    {
      question: "How do I know if my business is ready for AI/ML integration?",
      answer: " If you're looking to automate tasks, gain predictive insights, or enhance customer experiences, your business may be ready for AI. As an experienced AI/ML development company, we offer consulting services to assess your current systems and identify the best AI use cases tailored to your needs."
    },
    {
      question: "What technologies do you use for delivering the best AI/ML development services?",
      answer: "As one of the Best Custom Software Development Companies in India, we serve a wide range of industries, including healthcare, finance, education, logistics, eCommerce, real estate, and more. Our team builds solutions tailored to each industry's specific challenges and goals."
    },
    {
      question: "How long does it take to develop a custom AI/ML solution?",
      answer: "Timelines vary based on project complexity, data availability, and solution requirements. However, as a trusted AI/ML development company, we follow an agile approach to ensure efficient delivery with regular updates and milestones."
    }
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);



  const toggleFaq = (index) => {
    setActiveFaq(prevIndex => (prevIndex === index ? null : index));
  };

  //handle form submit


  return (
    <div className="font-sans text-gray-800">
      <ToastContainer />
      {/**header section */}
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
        AI/ML Developer
              </h1>
              {/* Modified paragraph to create two distinct lines */}
              <div className="text-lg mb-8 font-medium text-white">
                <p className="mb-2">
                Unlock the power of intelligent automation and data-driven insights with our AI/ML development services. We build smart, scalable, and adaptive solutions that help you innovate faster and make smarter business decisions.
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

      {/** services section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Smart AI/ML Solutions for Your Business Automation Needs
            </h2>
            <p className="text-lg text-gray-600">
              At Brandsmashers Tech, we use the power of AI and Machine Learning to create smart, custom software that grows with your business. Our expert developers work with the latest technologies to build intelligent solutions that automate tasks, improve decision-making, and drive success.

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
      <AimlSolutionMetrix />

      {/** cost section */}

      <section className="py-16 px-6 md:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hire a <span className="text-[#ff5010]">AI/ML Developer</span> Tailored to Your Business Needs
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
      {/**process section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Services Delivery Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We seamlessly deliver AI solutions from concept to deployment through our efficient and streamlined development process.

            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>

              {/* Process steps */}
              {process.map((step, index) => (
                <div key={index} className="relative mb-10">
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
        style={{ backgroundColor: `${primaryColor}05 ` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">AI/ML Development Technologies We Work On</h2>
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
      {/**why choose section */}
      <section className="py-16 text-white bg-[#0b0b0b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="text-[#ff5010]">Brandsmashers Tech</span> Is Your Ideal Partner for AI/ML Development
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
      {/**case study section */}
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
                <div className="h-48 bg-gray-300"></div>
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
      {/**faq section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-5 bg-gray-50 text-left text-black"
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
  )
}

export default AiMlService