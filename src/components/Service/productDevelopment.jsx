import { useState } from "react";
import Image from 'next/image';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Code,
  Database,
  Layers,
  Figma,
  Cloud,
  TestTube,
  Wrench,
  ArrowRight,
  Clock,
  FileCode,
  Smartphone,
  Search,
  ArrowUpRight,
  MessageCircle,
  Cpu,
  Rocket,
  Lightbulb,
  Settings,
  Zap,
  FileText,
  Mail,
  Monitor,
  X
} from "lucide-react";
import TechGrid from "./TechGrid";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";

export default function ProductDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);


  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };


  //email functionality code
  const toastConfig = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
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




  const primaryColor = "#ff5010";
  const secondaryColor = "#ff7a47";
  const darkColor = "#222";
  const whiteColor = "#ffffff";

  // Services with their icons
  const services = [
    {
      title: "Expert Consulting",
      description: "Our Product Development Consulting and Strategy services help you build the right product the right way. We work closely with you to define clear goals, validate ideas, and create a winning roadmap — aligning your vision with user needs and market trends.",
      icon: Lightbulb
    },
    {
      title: "Product Engineering",
      description: "Our product engineering services cover the complete technical execution of your product, from architecture and development to testing and deployment. We leverage modern tools and best practices to deliver high-quality, scalable, and performance-driven software solutions.",
      icon: Settings
    },
    {
      title: "Digital Product Development",
      description: "From concept to launch, our digital product development services bring your ideas to life through agile processes and cutting-edge technologies. We craft scalable, user-friendly digital products that align with your business goals and exceed user expectations.",
      icon: Rocket
    },
    {
      title: "Product Design",
      description: "Our product design services focus on creating intuitive, visually appealing, and user-centric experiences. From UI/UX design to prototyping, we ensure your product is not only functional but also delights users at every touchpoint.",
      icon: Figma
    },
    {
      title: "API Development",
      description: "We provide robust and secure API development services to help your systems communicate efficiently. Whether building custom APIs or integrating third-party solutions, we ensure smooth data flow, scalability, and strong performance across platforms.",
      icon: Database
    },
    {
      title: "Full-Cycle Development",
      description: "From ideation to deployment and beyond, we handle the entire software product lifecycle — ensuring smooth execution, timely delivery, and continuous improvement for your business and customers.",
      icon: Zap
    }
  ];

  // Development process steps
  const process = [
    {
      title: "Discovery & Research",
      description: "We understand your goals, market, and user needs to build a solid foundation for your product.",
      icon: Search
    },
    {
      title: "Strategy & Planning",
      description: "We define the product scope, roadmap, and tech stack to ensure successful development.",
      icon: Clock
    },
    {
      title: "Design & Prototyping",
      description: "Our experts craft user-friendly interfaces and interactive prototypes for validation.",
      icon: Figma
    },
    {
      title: "Development",
      description: "We build your product using agile methodology, clean code, and scalable architecture.",
      icon: Code
    },
    {
      title: "Testing & QA",
      description: "Thorough testing ensures your product is stable, secure, and delivers a flawless experience.",
      icon: TestTube
    },
    {
      title: "Deployment & Support",
      description: "We launch your product and provide ongoing maintenance to support your growth.",
      icon: Cloud
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      title: "Tailored Solutions for Your Unique Needs",
      description: "We don't believe in one-size-fits-all. Every product we build is custom-developed to match your specific business goals, user needs, and industry standards."
    },
    {
      title: "Full-Cycle Development Expertise",
      description: "From ideation to deployment and beyond, we handle the entire software product lifecycle — ensuring smooth execution, timely delivery, and continuous improvement."
    },
    {
      title: "Cutting-Edge Tech Stacks",
      description: "We use the latest, most reliable technologies and frameworks to create scalable, secure, and future-ready digital products that stand the test of time."
    },
    {
      title: "Agile & Transparent Process",
      description: "Stay in the loop with our agile development approach, regular updates, and collaborative workflows that keep you informed and involved every step of the way."
    },
    {
      title: "Dedicated Support & Long-Term Partnership",
      description: "Our relationship doesn't end at launch. We provide continuous support, maintenance, and optimization to keep your product growing and evolving with your business."
    },
    {
      title: "Industry-Specific Solutions",
      description: "With experience across fintech, healthcare, e-commerce, and more, we deliver products that address real-world challenges in your specific industry."
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "What are product development services?",
      answer: "Product development services refer to the complete process of bringing a digital product from idea to market. At Brandsmashers Tech, our product development services include consulting, product design, engineering, development, testing, deployment, and post-launch support. We help you build scalable, high-performing software products tailored to your business needs."
    },
    {
      question: "Why should I choose Brandsmashers Tech as my software product development company?",
      answer: "Brandsmashers Tech is a trusted software product development company with a proven track record of building innovative and scalable solutions. We offer full-cycle development, use cutting-edge tech stacks, follow agile methodologies, and ensure complete transparency. Our dedicated team works closely with you to transform your idea into a market-ready product that delivers real business impact."
    },
    {
      question: "How does your team ensure scalability and performance in product development?",
      answer: "Our approach to product development services focuses on scalability from the ground up. We use modern, reliable tech stacks, modular architectures, cloud-based infrastructure, and rigorous performance testing. Whether you're building an MVP or a full-scale product, we ensure it grows seamlessly with your business."
    },
    {
      question: "What industries do you serve with your product development solutions?",
      answer: "As a versatile software product development company, we serve a wide range of industries, including fintech, healthcare, e-commerce, logistics, education, and more. Our cross-industry expertise helps us create user-centric solutions that address real-world challenges and deliver measurable results."
    },
    {
      question: "Can you help with product strategy and consulting before development begins?",
      answer: "Absolutely! Our product development services include consulting and strategy to help you build the right product the right way. We conduct market research, define goals, validate ideas, and help you choose the best technology stack, ensuring a solid foundation before development starts."
    }
  ];

  // Tech stack categories
  const techStack = [
    {
      category: "Frontend",
      techs: ["React.js", "Next.js", "Vue.js", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express.js", "Python", "Django", "PHP", "Laravel", "Java", "Spring Boot"]
    },
    {
      category: "Database",
      techs: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis", "GraphQL"]
    },
    {
      category: "Mobile",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  return (
    <div>

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
           Product Development
              </h1>
              {/* Modified paragraph to create two distinct lines */}
              <div className="text-lg mb-8 font-medium text-white">
                <p className="mb-2">
                Bring your ideas to life with our full-cycle product development services — from concept to launch. We craft innovative, scalable, and industry-leading solutions that set your brand apart.
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
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Scalable & Custom Product Development Services for Your Business</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We redefine excellence through our custom product development services designed to meet your specific business goals. From initial concept to final launch, our expert team builds scalable, high-performing digital products that set you apart in the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
                <div style={{ color: "#ff5010" }} className="mb-4">
                  <service.icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Metrics Section */}
      <section className="py-16 bg-[#0b0b0b] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Scalable and <span className="text-[#ff5722]">Intelligent Product Development</span> Solutions You Can Trust
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We help businesses build smart, scalable digital products that solve real problems and drive growth. As a leading product development company, we combine strategic thinking, modern technologies, and deep industry knowledge to turn your ideas into high-performing solutions — faster, smarter, and with measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Products Launched' },
              { value: '85%', label: 'Client Retention' },
              { value: '12+', label: 'Years Experience' },
              { value: '40+', label: 'Team Members' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-[#161616] border border-gray-800 rounded-xl shadow-[0_0_20px_#ff572233] hover:shadow-[0_0_25px_#ff572244] transition-shadow duration-300">
                <div className="text-4xl font-extrabold mb-2 text-[#ff5722] drop-shadow-[0_0_6px_#ff5722aa]">
                  {item.value}
                </div>
                <p className="text-lg text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Glowing Accent Circle in Background */}
        <div className="absolute -top-20 left-0 w-64 h-64 bg-[#ff5722] opacity-10 blur-3xl rounded-full"></div>
      </section>


      {/* Cost section*/}
      <section className="py-16 px-6 md:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hire a <span className="text-[#ff5010]">Product Development</span> Tailored to Your Business Needs
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Boost your online presence with expert digital marketers who understand your goals. Whether it&#39;s
              SEO, social media, paid ads, or full-scale strategy — hire dedicated professionals on flexible terms with complete transparency and security.
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
                    placeholder="Tell us about your Product Development needs..."
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
            <h2 className="text-3xl font-bold mb-4 text-black">Our Product Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here is a streamlined overview of our custom product development process.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>

              {/* Process steps */}
              {process.map((step, index) => (
                <div key={index} className="relative mb-12">
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
                        <h3 className="text-xl font-bold text-black">{step.title}</h3>
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
      {/* Why Choose Us Section */}
      <section className="py-16 text-white bg-[#0b0b0b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="text-[#ff5010]">Brandsmashers Tech</span> Is Your Ideal Partner for Software Product Development
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

      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how we have helped businesses transform their digital presence with our product development expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {[
              {
                title: "Fintech Mobile App",
                description: "Developed a secure, scalable financial solution with real-time data processing",
                industry: "Finance"
              },
              {
                title: "E-commerce Platform",
                description: "Built a high-performance marketplace with advanced search capabilities",
                industry: "Retail"
              },
              {
                title: "Healthcare Management System",
                description: "Created an integrated platform for patient records and telemedicine",
                industry: "Healthcare"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/api/placeholder/400/200"
                    alt="Project"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-[#ff5010] mb-2">{item.industry}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
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

          <div className="inline-block mb-16">
            <button className="bg-transparent hover:bg-[#ff5722] transition-colors px-8 py-3 rounded-md font-medium text-white border-2 border-[#ff5722] hover:border-[#ff5722] hover:text-black">
              Discuss Your Business Requirements
            </button>
          </div>

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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-5 bg-gray-50 text-left text-black"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg text-black">{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="p-5 border-t border-gray-200">
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