import { useState } from "react";
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
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, FileText, ArrowUpRight, ChevronDown, ChevronUp, X } from 'react-feather';


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

  const handleServiceFormSubmit = async(e) => {
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
               name:'',
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
      <header className="relative text-white bg-black" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url("/api/placeholder/1200/600")',
        backgroundSize: 'cover'
      }} 
      >
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-6 md:px-24 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">Product Development Services</h1>
            <p className="text-xl mb-8">Bring your ideas to life with our full-cycle product development services — from concept to launch. We craft innovative, scalable, and industry-leading solutions that set your brand apart.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contactus">
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
      </header>

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

      {/* Hire Digital Marketing Expert Section */}
      <section className="py-16 px-6 md:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hire a <span className="text-[#ff5010]">Product Development</span> Tailored to Your Business Needs
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Boost your online presence with expert digital marketers who understand your goals. Whether it's SEO, social media, paid ads, or full-scale strategy — hire dedicated professionals on flexible terms with complete transparency and security.
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Tell us about your project"
                  />
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#ff5010] hover:bg-[#ff672b] text-white font-bold py-2 px-4 rounded-md w-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

