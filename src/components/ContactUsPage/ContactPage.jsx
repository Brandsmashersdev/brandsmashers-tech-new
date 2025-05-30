import React, { useState } from 'react';
import { Check, ChevronDown, Code, Database, Globe, Server, 
         Cpu, Cloud, Smartphone, Palette, Users, Brain, 
         BarChart3, Send, Phone, Mail, User, Rocket, Award, Zap } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// Improved gradient background with new theme color
const GradientBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-64 right-0 w-80 h-80 bg-orange-600 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-red-500 opacity-20 rounded-full blur-3xl"></div>
    </div>
  );
};

// Improved Badge component with better spacing and visual appeal
const Badge = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 text-xs md:text-sm">
      <span className="font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full shadow-lg">
        {icon}
      </span>
      <span className="text-gray-200">{text}</span>
    </div>
  );
};

// Improved Tech icons with better layout and hover effects
const TechIcons = () => {
  const technologies = [
    { icon: <Code size={18} />, label: "Frontend" },
    { icon: <Database size={18} />, label: "Backend" },
    { icon: <Globe size={18} />, label: "Web Dev" },
    { icon: <Brain size={18} />, label: "AI/ML" },
    { icon: <Smartphone size={18} />, label: "Mobile" },
    { icon: <Users size={18} />, label: "UI/UX" },
    { icon: <BarChart3 size={18} />, label: "Data" }
  ];



 


  return (
    <div className="flex flex-wrap gap-3 justify-center my-8">
      
      {technologies.map((tech, index) => (
        <div 
          key={index} 
          className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm p-2 px-3 md:p-3 md:px-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-red-500/30 border border-white/10 hover:border-orange-500/30"
        >
          <span className="text-gray-300 group-hover:text-white transition-colors">{tech.icon}</span>
          <span className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{tech.label}</span>
        </div>
      ))}
    </div>
  );
};

// New component: Featured Clients for social proof
const FeaturedClients = () => {
  return (
    <div className="mt-6 md:mt-8 mb-4 md:mb-6">
      <h3 className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3 font-medium">Trusted By</h3>
      <div className="flex flex-wrap gap-2 md:gap-4 items-center">
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">Google</div>
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">Microsoft</div>
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">Amazon</div>
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">Meta</div>
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">+ 50 more</div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    skills: '',
    source: ''
  });

  const [errors, setErrors] = useState({});
  const [helpType, setHelpType] = useState(null);

  const skillOptions = [
    'React js',
    'Node js',
    'JavaScript',
    'Python',
    'Java',
    'SQL',
    'AWS',
    'Machine Learning',
    'Angular',
    'Android'
  ];

  const sourceOptions = [
    'Google',
    'Twitter',
    'LinkedIn',
    'The Right Hire',
    'Blog/News/Article',
    'Friend/Colleague'
  ];

  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: { background: '#ff5010', color: 'white' }
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    let error = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value && !validateName(value)) {
          error = 'Please enter only letters';
          newValue = formData[name];
        }
        break;

      case 'phone':
        const digits = value.replace(/\D/g, '');
        if (digits.length > 10) {
          newValue = formData[name];
        } 
        break;

      default:
        break;
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = 'Please enter only letters';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = 'Please enter only letters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.skills) {
      newErrors.skills = 'Please select your skills';
    }

    if (!formData.source) {
      newErrors.source = 'Please select how you heard about us';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const formDataToSend = new FormData();
        
        Object.keys(formData).forEach(key => {
          formDataToSend.append(key, formData[key]);
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
          
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            skills: '',
            source: '',
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

return (
  <div className="min-h-screen bg-gray-900 text-white relative">
    <ToastContainer />
    <GradientBackground />
    
    <div className="container mx-auto px-4 py-6 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
        {/* Left section - About */}
        <div className="w-full lg:w-5/12 space-y-4 md:space-y-6">
          {/* Heading with better text hierarchy */}
          <div className="mb-4 md:mb-8">
            <div className="inline-block px-2 py-1 md:px-3 md:py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full text-orange-500 text-xs font-semibold tracking-wider mb-2 md:mb-4">
              TECH TALENT EXPERTS
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Brandsmashers</span> Tech.
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white/80 leading-relaxed">
              Work With <span className="text-orange-500">Only The</span>
              <br className="hidden md:block" />
              Top Pre-vetted <span className="text-orange-500">Tech Talent</span>
            </h2>
          </div>
          
          {/* Badges with better layout */}
          <div className="flex flex-wrap md:flex-row gap-2 md:gap-4 mb-4 md:mb-8">
            <Badge icon={<Award size={14} />} text="Top 20 Indians Startups of 2023" />
            <Badge icon={<Zap size={14} />} text="AI Bootcamp Top 20" />
          </div>
          
          {/* Featured Clients component */}
          <FeaturedClients />
          
          {/* Tagline with clearer typography */}
          <p className="text-base md:text-lg text-gray-300 font-medium border-l-4 border-orange-500 pl-3 md:pl-4 py-1 md:py-2">
            Top Devs, Trusted by The <span className="text-orange-500 font-semibold">Best</span> in Business
          </p>
          
          {/* Tech Icons section */}
          <TechIcons />

          {/* Statistics section for social proof */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6 md:mt-8">
            <div className="text-center p-2 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-xl md:text-3xl font-bold text-orange-500">500+</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">Developers</div>
            </div>
            <div className="text-center p-2 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-xl md:text-3xl font-bold text-orange-500">98%</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">Success Rate</div>
            </div>
            <div className="text-center p-2 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-xl md:text-3xl font-bold text-orange-500">100+</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">Clients</div>
            </div>
          </div>
        </div>

        {/* Right section - Form */}
        <div className="w-full lg:w-7/12 bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-orange-500/10 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-orange-500/10 rounded-full -ml-24 md:-ml-32 -mb-24 md:-mb-32 blur-xl"></div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Get Hired</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {/* Name fields */}
              <div>
                <label className="block text-gray-300 text-sm mb-1 md:mb-2">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={16} className="text-orange-500" />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className={`w-full pl-10 pr-3 py-2 bg-white/10 border ${errors.firstName ? 'border-red-500' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  />
                </div>
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-1 md:mb-2">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={16} className="text-orange-500" />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className={`w-full pl-10 pr-3 py-2 bg-white/10 border ${errors.lastName ? 'border-red-500' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  />
                </div>
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
              
              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm mb-1 md:mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={16} className="text-orange-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className={`w-full pl-10 pr-3 py-2 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              {/* Phone */}
              <div>
                <label className="block text-gray-300 text-sm mb-1 md:mb-2">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone size={16} className="text-orange-500" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className={`w-full pl-10 pr-3 py-2 bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            
            {/* How we can help */}
            <div className="mb-4 md:mb-6">
              <label className="block text-gray-300 text-sm mb-2 md:mb-3">How we can Help</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div 
                  onClick={() => setHelpType('recruiting')}
                  className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg cursor-pointer transition-all ${
                    helpType === 'recruiting' 
                    ? 'bg-gradient-to-r from-orange-500/30 to-orange-700/30 border border-orange-500/50' 
                    : 'bg-white/10 border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border ${
                    helpType === 'recruiting' ? `border-orange-500 bg-orange-500` : 'border-white/30'
                  }`}>
                    {helpType === 'recruiting' && <Check size={10} className="text-white" />}
                  </div>
                  <span className="text-sm md:text-base">I&apos;m Recruiting</span>
                </div>
                
                <div 
                  onClick={() => setHelpType('developer')}
                  className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg cursor-pointer transition-all ${
                    helpType === 'developer' 
                    ? 'bg-gradient-to-r from-red-500/30 to-red-700/30 border border-red-500/50' 
                    : 'bg-white/10 border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border ${
                    helpType === 'developer' ? 'border-red-500 bg-red-500' : 'border-white/30'
                  }`}>
                    {helpType === 'developer' && <Check size={10} className="text-white" />}
                  </div>
                  <span className="text-sm md:text-base">I&apos;m a Developer</span>
                </div>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 mt-6 md:mt-8 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-semibold rounded-lg hover:bg-gradient-to-l transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);


};


export default ContactPage;