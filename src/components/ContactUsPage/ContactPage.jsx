import React, { useState, useEffect } from "react";
import {
  Check,
  ChevronDown,
  Code,
  Database,
  Globe,
  Server,
  Cpu,
  Cloud,
  Smartphone,
  Palette,
  Users,
  Brain,
  BarChart3,
  Send,
  Phone,
  Mail,
  User,
  Rocket,
  Award,
  Zap,
} from "lucide-react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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
    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-lg border border-white/10  transition-all duration-300 text-xs md:text-sm">
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
    { icon: <BarChart3 size={18} />, label: "Data" },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center my-8">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm p-2 px-3 md:p-3 md:px-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-red-500/30 border border-white/10 hover:border-orange-500/30"
        >
          <span className="text-gray-300 group-hover:text-white transition-colors">
            {tech.icon}
          </span>
          <span className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
            {tech.label}
          </span>
        </div>
      ))}
    </div>
  );
};

// New component: Featured Clients for social proof
const FeaturedClients = () => {
  return (
    <div className="mt-6 md:mt-8 mb-4 md:mb-6">
      <h3 className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3 font-medium">
        Trusted By
      </h3>
      <div className="flex flex-wrap gap-2 md:gap-4 items-center">
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">
          Google
        </div>
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">
          Microsoft
        </div>
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">
          Amazon
        </div>
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">
          Meta
        </div>
        <div className="bg-white/5 px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-300 text-xs font-medium">
          + 50 more
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    skills: "",
    source: "",
    techStack: "",
  });

  const [errors, setErrors] = useState({});
  const [helpType, setHelpType] = useState(null);
  const [countryCode, setCountryCode] = useState('+91');

  const countryCodes = [
    { code: '+91', country: 'India', flag: 'in' },
    { code: '+1', country: 'USA', flag: 'us' },
    { code: '+44', country: 'UK', flag: 'gb' },
    { code: '+61', country: 'Australia', flag: 'au' },
    { code: '+81', country: 'Japan', flag: 'jp' },
    { code: '+49', country: 'Germany', flag: 'de' },
    { code: '+86', country: 'China', flag: 'cn' },
    { code: '+82', country: 'South Korea', flag: 'kr' },
    { code: '+33', country: 'France', flag: 'fr' },
    { code: '+971', country: 'UAE', flag: 'ae' },
    { code: '+965', country: 'Kuwait', flag: 'kw' },
    { code: '+968', country: 'Oman', flag: 'om' },
    { code: '+973', country: 'Bahrain', flag: 'bh' },
    { code: '+974', country: 'Qatar', flag: 'qa' },
    { code: '+966', country: 'Saudi Arabia', flag: 'sa' },
  ];

  const Flag = ({ code }) => (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt={code}
      className="w-5 h-4 rounded-sm object-cover mr-2"
      style={{ display: 'inline', filter: 'brightness(1.1)' }}
    />
  );

  useEffect(() => {
    if (router.query.tech) {
      const decodedTech = decodeURIComponent(router.query.tech);
      setFormData((prev) => ({
        ...prev,
        techStack: decodedTech,
      }));
    }
  }, [router.query.tech]);

  const skillOptions = [
    "React js",
    "Node js",
    "JavaScript",
    "Python",
    "Java",
    "SQL",
    "AWS",
    "Machine Learning",
    "Angular",
    "Android",
    "iOS",
    "Flutter",
    "React Native",
    "Next.js",
    "Laravel",
    "PHP",
    ".NET",
    "WordPress",
    "Shopify",
    "DevOps",
    "Cloud",
    "Blockchain",
    "Data Science",
  ];

  const technologyLabels = {
    "nodejs-developer": "Node.js Developer",
    "node-js-developer": "Node.js Developer",
    "python-developer": "Python Developer",
    "react-developer": "React Developer",
    "angular-developer": "Angular Developer",
    "laravel-developer": "Laravel Developer",
    "php-developer": "PHP Developer",
    "dot-net-developer": ".NET Developer",
    "nextjs-developer": "Next.js Developer",
    "javascript-developer": "JavaScript Developer",
    "android-developer": "Android Developer",
    "ios-developer": "iOS Developer",
    "flutter-developer": "Flutter Developer",
    "react-native-developer": "React Native Developer",
    "wordpress-developer": "WordPress Developer",
    "shopify-developer": "Shopify Developer",
    "seo-developer": "SEO Developer",
  };

  const sourceOptions = [
    "Google",
    "Twitter",
    "LinkedIn",
    "The Right Hire",
    "Blog/News/Article",
    "Friend/Colleague",
  ];

  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: { background: "#ff5010", color: "white" },
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
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 6 && digits.length <= 15;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (value && !validateName(value)) {
          error = "Please enter only letters";
          newValue = formData[name];
        }
        break;

      case "phone":
        const digits = value.replace(/\D/g, "");
        if (digits.length > 10) {
          newValue = formData[name];
        }
        break;

      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    console.log('Validating form with data:', formData);
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = "Please enter only letters";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = "Please enter only letters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Enter 6-15 digits";
    }

    // Skills and Source are now optional
    // if (!formData.skills) {
    //   newErrors.skills = "Please select your skills";
    // }

    // if (!formData.source) {
    //   newErrors.source = "Please select how you heard about us";
    // }

    setErrors(newErrors);
    console.log('Validation errors:', newErrors);
    console.log('Is valid:', Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submit triggered');

    if (validateForm()) {
      console.log('Form validated, submitting...');
      try {
        // Save to local CSV file
        const savePromise = fetch('/api/save-hire-request', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: countryCode + formData.phone,
            skills: formData.skills,
            source: formData.source,
            techStack: formData.techStack,
            helpType: helpType,
          }),
        });

        // Save to local/Google Sheets
        const localSaveResponse = await savePromise;
        const localSaveData = await localSaveResponse.json();

        console.log('Save response:', localSaveData);

        // Show success popup
        toast.success("Form submitted! Data saved.", {
          position: "top-right",
          autoClose: 5000,
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          skills: "",
          source: "",
          techStack: router.query.tech ? decodeURIComponent(router.query.tech) : "",
        });
        setHelpType(null);
      } catch (error) {
        console.error("Submission Error:", error);
        toast.error("Network error. Please try again later.", toastConfig);
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Brandsmashers
                </span>{" "}
                Tech.
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white/80 leading-relaxed">
                Work With <span className="text-orange-500">Only The</span>
                <br className="hidden md:block" />
                Top Pre-vetted{" "}
                <span className="text-orange-500">Tech Talent</span>
              </h2>
            </div>

            {/* Badges with better layout */}
            <div className="flex flex-wrap md:flex-row gap-2 md:gap-4 mb-4 md:mb-8">
              <Badge
                icon={<Award size={14} />}
                text="Top 20 Indians Startups of 2023"
              />
              <Badge icon={<Zap size={14} />} text="AI Bootcamp Top 20" />
            </div>

            {/* Featured Clients component */}
            <FeaturedClients />

            {/* Tagline with clearer typography */}
            <p className="text-base md:text-lg text-gray-300 font-medium border-l-4 border-orange-500 pl-3 md:pl-4 py-1 md:py-2">
              Top Devs, Trusted by The{" "}
              <span className="text-orange-500 font-semibold">Best</span> in
              Business
            </p>

            {/* Tech Icons section */}
            <TechIcons />

            {/* Statistics section for social proof */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6 md:mt-8">
              <div className="text-center p-2 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-xl md:text-3xl font-bold text-orange-500">
                  500+
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">
                  Developers
                </div>
              </div>
              <div className="text-center p-2 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-xl md:text-3xl font-bold text-orange-500">
                  98%
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">
                  Success Rate
                </div>
              </div>
              <div className="text-center p-2 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-xl md:text-3xl font-bold text-orange-500">
                  100+
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">
                  Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right section - Form */}
          <div className="w-full lg:w-7/12 bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-orange-500/10 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-orange-500/10 rounded-full -ml-24 md:-ml-32 -mb-24 md:-mb-32 blur-xl"></div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Get Hired
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                {/* Name fields */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1 md:mb-2">
                    First Name
                  </label>
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
                      className={`w-full pl-10 pr-3 py-2 bg-white/10 border ${
                        errors.firstName ? "border-red-500" : "border-white/20"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1 md:mb-2">
                    Last Name
                  </label>
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
                      className={`w-full pl-10 pr-3 py-2 bg-white/10 border ${
                        errors.lastName ? "border-red-500" : "border-white/20"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1 md:mb-2">
                    Email
                  </label>
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
                      className={`w-full pl-10 pr-3 py-2 bg-white/10 border ${
                        errors.email ? "border-red-500" : "border-white/20"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1 md:mb-2">
                    Phone Number
                  </label>
                  <div className={`flex items-center bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg overflow-hidden focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500 transition-all duration-200`}>
                    <div className="flex items-center pl-3" style={{ filter: 'brightness(1.1)' }}>
                      <Flag code={countryCodes.find(c => c.code === countryCode)?.flag} />
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-transparent text-white font-medium focus:outline-none py-2.5 cursor-pointer"
                      >
                        {countryCodes.map((cc) => (
                          <option key={cc.code} value={cc.code} className="text-gray-900 text-xs">
                            {cc.code}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-px h-9 bg-white/30"></div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="1234567890"
                      className="flex-1 bg-transparent text-white px-3 py-2.5 focus:outline-none transition-all duration-200"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
</div>
              {/* Tech Stack - Auto-filled from URL */}
              {formData.techStack && (
                <div className="mb-4 md:mb-6">
                  <label className="block text-gray-300 text-sm mb-1 md:mb-2">
                    Selected Technology
                  </label>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                    <Code size={18} className="text-orange-500" />
                    <span className="text-white font-medium">
                      {technologyLabels[formData.techStack] || formData.techStack.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                </div>
              )}

              {/* How we can help */}
              <div className="mb-4 md:mb-6">
                <label className="block text-gray-300 text-sm mb-2 md:mb-3">
                  How we can Help
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div
                    onClick={() => setHelpType("recruiting")}
                    className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg cursor-pointer transition-all ${
                      helpType === "recruiting"
                        ? "bg-gradient-to-r from-orange-500/30 to-orange-700/30 border border-orange-500/50"
                        : "bg-white/10 border border-white/20 hover:bg-white/15"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border ${
                        helpType === "recruiting"
                          ? `border-orange-500 bg-orange-500`
                          : "border-white/30"
                      }`}
                    >
                      {helpType === "recruiting" && (
                        <Check size={10} className="text-white" />
                      )}
                    </div>
                    <span className="text-sm md:text-base">
                      I&apos;m Recruiting
                    </span>
                  </div>

                  <div
                    onClick={() => setHelpType("developer")}
                    className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg cursor-pointer transition-all ${
                      helpType === "developer"
                        ? "bg-gradient-to-r from-red-500/30 to-red-700/30 border border-red-500/50"
                        : "bg-white/10 border border-white/20 hover:bg-white/15"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border ${
                        helpType === "developer"
                          ? "border-red-500 bg-red-500"
                          : "border-white/30"
                      }`}
                    >
                      {helpType === "developer" && (
                        <Check size={10} className="text-white" />
                      )}
                    </div>
                    <span className="text-sm md:text-base">
                      I&apos;m a Developer
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 md:mt-8 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-semibold rounded-lg hover:bg-gradient-to-l transition-all active:scale-95 active:from-orange-600 active:to-red-600"
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
