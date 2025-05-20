import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Search, 
  BarChart, 
  Mail, 
  Share2, 
  ShoppingCart, 
  Target, 
  LineChart,
  ArrowRight,
  X,
  Clock,
  FileText,
  Users,
  ArrowUpRight,
  MessageCircle,
  FileSearch,
  Settings,
  Rocket,
  Zap,
  
} from "lucide-react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function DigitalMarketingPage() {
  const [activeFaq, setActiveFaq] = useState(null);
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

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const primaryColor = "#ff5010";
  const secondaryColor = "#ff7a47";
  const darkColor = "#222";
  const whiteColor = "#ffffff";

  // Services with their icons
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility on search engines with our tailored SEO strategies, including keyword research, on-page optimization, and high-quality backlinks.",
      icon: Search
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Engage your audience and grow your brand on platforms like Instagram, LinkedIn, and Facebook with content-driven campaigns and targeted ads.",
      icon: Share2
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Get instant traffic and measurable results with Google Ads and social media ad campaigns optimized for maximum ROI.",
      icon: Target
    },
    {
      title: "Content Marketing",
      description: "Build authority and trust with compelling blogs, videos, infographics, and more — crafted to educate, engage, and convert your target audience.",
      icon: FileText
    },
    {
      title: "Email Marketing",
      description: "Reach and retain your audience with personalized email campaigns that drive engagement and sales. From automation to newsletters, we create content that converts and keeps your customers coming back.",
      icon: Mail
    },
    {
      title: "Performance Marketing",
      description: "Maximize your ROI with goal-oriented, data-backed advertising campaigns. We focus on results — whether it's lead generation, sales, or app installs — using channels like Google Ads, Meta Ads, and more.",
      icon: LineChart
    },
    {
      title: "eCommerce Marketing",
      description: "Boost your online store's traffic and sales with targeted eCommerce marketing strategies. From SEO and paid ads to abandoned cart recovery, we help you scale and succeed in the competitive online marketplace.",
      icon: ShoppingCart
    },
    {
      title: "Consulting & Strategy",
      description: "Get expert guidance to build a winning digital marketing strategy tailored to your business goals. We analyze your brand, audience, and competitors to craft a data-driven roadmap for long-term growth and success.",
      icon: Settings
    }
  ];

  // Process steps
  const process = [
    {
      title: "Requirement Understanding",
      description: "We start by learning about your business goals, audience, and challenges to craft a tailored marketing roadmap.",
      icon: FileSearch
    },
    {
      title: "Strategy Building",
      description: "Based on insights, we develop a result-oriented digital strategy that aligns with your objectives and market trends.",
      icon: Settings
    },
    {
      title: "Execution",
      description: "Our team puts the strategy into action across the right platforms — whether it's SEO, social, paid ads, or content.",
      icon: Rocket
    },
    {
      title: "Reporting",
      description: "We provide clear, timely reports with actionable insights to track performance and optimize campaigns continuously.",
      icon: BarChart
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      title: "Tailored Strategies for Your Business",
      description: "We don't use templates. Every digital marketing plan is built from scratch to align with your goals, industry, and audience."
    },
    {
      title: "Full-Funnel Expertise",
      description: "From awareness to conversion, we optimize every stage of your marketing funnel for maximum ROI and long-term growth."
    },
    {
      title: "Performance-Driven Approach",
      description: "We focus on measurable results — traffic, leads, and revenue — not just vanity metrics. Every move we make is backed by data."
    },
    {
      title: "Dedicated Marketing Experts",
      description: "Work with a skilled team of SEO strategists, content creators, ad specialists, and analysts who live and breathe digital marketing."
    },
    {
      title: "Transparent Reporting & Communication",
      description: "You stay in the loop at all times with regular updates, clear reports, and proactive strategy recommendations."
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "What makes your digital marketing services the best for my business?",
      answer: "At Brandsmashers Tech, we combine strategy, creativity, and data to offer the best digital marketing services tailored to your unique goals. Whether you need SEO, social media marketing, PPC, or full-scale digital strategy, we focus on real results — more traffic, quality leads, and better ROI."
    },
    {
      question: "How do I know which digital marketing service is right for me?",
      answer: "Don't worry — we've got you! During your free consultation, our experts will understand your business needs and recommend the best digital marketing services to meet your goals. Whether it's growing brand awareness or increasing conversions, we'll guide you every step of the way."
    },
    {
      question: "Do you offer customized digital marketing strategies?",
      answer: "Absolutely! We don't believe in one-size-fits-all solutions. Every brand is different, and so are our strategies. We build fully customized plans that align with your industry, audience, and goals — ensuring you get the best results from digital marketing."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "It depends on the services you choose. SEO can take a few months, while PPC and social ads can deliver faster results. Rest assured, our focus is always on delivering scalable, long-term growth through the best digital marketing services."
    },
    {
      question: "Can I track the performance of my campaigns?",
      answer: "Yes! Transparency is key. We provide regular reports and updates so you can see what's working, what's not, and how we're optimizing. With our data-driven approach to digital marketing, you're always in the know."
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "E-commerce Traffic Growth",
      description: "Increased organic traffic by 170% and conversions by 85% through comprehensive SEO and content strategy",
      industry: "E-commerce"
    },
    {
      title: "B2B Lead Generation",
      description: "Generated 120+ qualified leads monthly through targeted LinkedIn campaigns and content marketing",
      industry: "SaaS"
    },
    {
      title: "Local Business Visibility",
      description: "Boosted local search visibility by 200% and increased in-store visits through local SEO and GMB optimization",
      industry: "Retail"
    }
  ];

return (
    <div>
      <ToastContainer />
      {/* Hero Section with Digital Marketing Background */}
      <header className="relative text-white bg-black" 
      style={{ 
        // backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} 
      >
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 md:px-12 py-24 relative z-10">
          <div className="text-left">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              {/* Adding decorative element behind the text */}
              <span className="relative inline-block">
                <span className="absolute -left-3 -top-3 w-12 h-12 rounded-full opacity-20" 
                  style={{ backgroundColor: "#ff5010", filter: "blur(15px)" }}>
                </span>
                Best Digital Marketing Services
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl">Drive growth, boost visibility, and attract the right audience with our best-in-class digital marketing services. From SEO and social media to paid ads and content marketing, we create data-driven strategies that deliver real results for your business.</p>
            <div className="flex flex-wrap gap-4">
              <button style={{ backgroundColor: "#ff5010" }} className="px-8 py-3 rounded-md font-medium hover:opacity-90 transition">
                Get a Free Consultation
              </button>
              <button className="px-8 py-3 rounded-md font-medium border border-white hover:bg-white hover:text-gray-900 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>
    
   
    

      {/* Main Service Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Result-Driven Digital Marketing Services to Grow Your Business</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock your brand's full potential with our comprehensive digital marketing services. From boosting visibility to driving leads and sales, we use proven strategies and modern tools to help your business thrive in the digital world.
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
              Your Trusted Partner for <span className="text-[#ff5722]">Scalable and Result-Driven</span> Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We help brands grow faster with scalable and result-driven digital marketing services. From strategy to execution, our expert team delivers measurable results through SEO, social media, paid ads, and more, tailored to your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '92%', label: 'Client Satisfaction' },
              { value: '15+', label: 'Years Experience' },
              { value: '35+', label: 'Marketing Experts' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-[#161616] border border-gray-800 rounded-xl shadow-[0_0_20px_#ff572233] hover:shadow-[0_0_25px_#ff572244] transition-shadow duration-300">
                <div className="text-4xl font-extrabold mb-2 text-[#ff5722] drop-shadow-[0_0_6px_#ff5722aa]">
                  {item.value}
                </div>
                <p className="text-lg text-gray-300 text-black">{item.label}</p>
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
              Hire a <span className="text-[#ff5010]">Digital Marketing Expert</span> Tailored to Your Business Needs
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
            <h2 className="text-3xl font-bold mb-4 text-black">Proven Digital Marketing Process That Delivers Real Results</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our digital marketing approach is built on clarity, strategy, and performance. From understanding your business to delivering measurable results, we follow a streamlined process that drives consistent growth.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>
              
              {/* Process steps */}
              {process.map((step, index) => (
                <div key={index} className="relative mb-12 md:mb-24">
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

      {/* Why Choose Us Section */}
      <section className="py-16 text-white bg-[#0b0b0b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="text-[#ff5010]">Brandsmashers Tech</span> Is a Smart Choice for Digital Marketing Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400">
              At Brandsmashers Tech, we blend strategy, creativity, and data to deliver digital marketing services that drive real business growth. From boosting visibility to generating leads, we craft tailored campaigns that produce measurable results for every client.
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
              Real results for real businesses. See how our digital marketing services have transformed brands and driven measurable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img src="/api/placeholder/400/200" alt="Project" className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-[#ff5010] mb-2">{item.industry}</div>
                  <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
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
            Ready to <span className="text-[#ff5722]">Boost Your Brand</span> Online?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-12 text-gray-400">
            Take the first step toward digital marketing success. Get a free consultation and learn how we can help your business grow.
          </p>

          <div className="inline-block mb-16">
            <button className="bg-transparent hover:bg-[#ff5722] transition-colors px-8 py-3 rounded-md font-medium text-white border-2 border-[#ff5722] hover:border-[#ff5722] hover:text-black">
              Get a Free Consultation Today
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-6 md:space-y-0">
            {[
              { text: 'ROI-Focused Strategies' },
              { text: 'Expert Team' },
              { text: 'Transparent Reporting' },
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

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Brandsmashers Tech</h3>
              <p className="text-gray-400 mb-6">
                Your trusted partner for digital marketing solutions that drive business growth.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>SEO</li>
                <li>Social Media Marketing</li>
                <li>PPC Advertising</li>
                <li>Content Marketing</li>
                <li>Email Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@brandsmashers.com</li>
                <li>+91 123 456 7890</li>
                <li>Govindpura, Bhopal, India</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                {/* Social media icons would go here */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Brandsmashers Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}