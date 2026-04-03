import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Globe,
  ArrowRight,
  Sparkles,
  Users,
  Link2,
  Calendar,
  Star,
  Award,
  Briefcase,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import ActionCard from "../components/shared/ActionCard";

export default function BrandsmashersShowcase() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero"); // Kept for future use if navigation is added

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      const existingLink = document.querySelector(
        'link[href="https://assets.calendly.com/assets/external/widget.css"]'
      );
      if (existingScript) existingScript.remove();
      if (existingLink) existingLink.remove();
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/brandsmashers/30min",
      });
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/brandsmashers-tech-llp/posts/?feedView=all",
      color: "from-blue-700 to-blue-900",
      hoverColor: "hover:shadow-blue-700/50",
      // followers: '12K+'
    },
    {
      name: "Google",
      icon: ExternalLink,
      url: "https://share.google/XEglW0XXsrAlMfuRO",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50",
      // followers: 'Visit'
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/brandsmashers_technologies/?hl=en",
      color: "from-pink-600 via-purple-600 to-orange-500",
      hoverColor: "hover:shadow-pink-500/50",
      // followers: '40K+'
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/brandsamsherstechnologies/",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:shadow-blue-500/50",
      // followers: '25K+'
    },
  ];

  const actionButtons = [
    {
      name: "Website",
      icon: Globe,
      url: "https://www.brandsmashers.com",
      color: "from-green-600 to-emerald-700",
      hoverColor: "hover:shadow-green-500/50",
      followers: "Visit",
    },
    {
      name: "Book a Call",
      icon: Calendar,
      url: "#",
      color: "from-teal-600 to-cyan-700",
      hoverColor: "hover:shadow-teal-500/50",
      followers: "Schedule",
      isCalendly: true,
    },
    {
      name: "Glassdoor",
      icon: Star,
      url: "https://www.glassdoor.co.in/Overview/Working-at-Brandsmashers-Tech-EI_IE10462960.11,29.htm",
      color: "from-orange-600 to-red-600",
      hoverColor: "hover:shadow-orange-500/50",
      followers: "Reviews",
    },
    {
      name: "AmbitionBox",
      icon: Award,
      url: "https://www.ambitionbox.com/overview/brandsmashers-overview",
      color: "from-purple-600 to-pink-600",
      hoverColor: "hover:shadow-purple-500/50",
      followers: "Ratings",
    },
    {
      name: "Clutch",
      icon: Briefcase,
      url: "https://clutch.co/profile/brandsmashers-tech",
      color: "from-indigo-600 to-purple-700",
      hoverColor: "hover:shadow-indigo-500/50",
      followers: "Reviews",
    },
  ];

  const teamMembers = [
    {
      name: "Aayush Jain",
      role: "Founder & CEO",
      bio: "Visionary tech leader with 7+ years of experience, driving innovation and building high-performing teams to deliver impactful solutions.",
      image: "AayushSir.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/aayush-jain-code/",
      },
    },
    {
      name: "Muskan Chhatrasal",
      role: "Founder & Director",
      bio: "Dynamic leader with 6+ years in technology, focused on strategy, growth, and creating meaningful client partnerships.",

      image: "IMG_6798.JPG",
      social: {
        linkedin: "https://www.linkedin.com/in/muskan-chhatrasal/",
      },
    },
    {
      name: "Raksha Kawadkar",
      role: "HR Manager",
      bio: "Seasoned HR professional with 3+ years of expertise in talent acquisition, employee engagement, and HR operations. Passionate about fostering positive workplace cultures.",
      image: "rakshamam.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/raksha-kawadkar-b79507230/",
      },
    },
    {
      name: "Mayuri Urkude",
      role: " Operations Manager",
      bio: "Efficient operations leader with 5+ years of experience, ensuring smooth processes and delivering excellence across projects.",
      image: "MayuriNewPhoto.png",
      social: {
        linkedin: "https://www.linkedin.com/in/mayuri-urkude-95944022b/",
        // instagram: 'https://instagram.com/davidkim',
        // email: 'david@brandsmashers.com'
      },
    },
  ];

  const parallaxOffset = scrollY * 0.5;

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-center bg-fixed"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-gray-900" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 80, 16, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 80, 16, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              animation: "gridMove 20s linear infinite",
            }}
          />
        </div>
        <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-2 py-4">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-[#ff5010] rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto animate-fadeInUp">
            {/* Small Logo */}
            {/* <div className="mb-4 sm:mb-6">
  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#ff5010]/20 backdrop-blur-sm rounded-full border border-[#ff5010]/30 mb-4 overflow-hidden">
    <img 
      src="/logo.jpg" 
      alt="Logo" 
      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
    />
  </div>
</div> */}

            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#ff5010]/20 backdrop-blur-sm rounded-full border border-[#ff5010]/30 mb-6 sm:mb-8 animate-bounce">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5010]" />
              <span className="text-xs sm:text-sm font-medium">
                Connect With Innovation
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#ff5010] via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              Brandsmashers Tech
            </h1>

            {/* <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Where creativity meets technology. Join our community across platforms and meet the brilliant minds behind our innovation.
          </p> */}

            {/* Connect With Us Section - Main Frame */}
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-8 sm:mb-10">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#ff5010]/20 backdrop-blur-sm rounded-full border border-[#ff5010]/30 mb-4 sm:mb-6">
                <Link2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5010]" />
                {/* <span className="text-xs sm:text-sm font-medium">Social Media</span> */}
                {/* </div> */}
                {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#ff5010] to-orange-400 bg-clip-text text-transparent">
                Connect With Us
              </h2> */}
                {/* <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Follow us across platforms for updates, insights, and behind-the-scenes content
              </p> */}
              </div>

              {/* Social Media Links */}
              <div className="mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff5010] to-orange-400 bg-clip-text text-transparent">
                  Social Media
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 max-w-5xl mx-auto">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-700 hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2 ${social.hoverColor} hover:shadow-2xl`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* ... (Existing card structure for animation) ... */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-95 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-all duration-500" />
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative p-4 sm:p-6 flex flex-col items-center justify-center h-28 sm:h-36">
                          <div className="mb-2 sm:mb-3 relative">
                            <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full group-hover:from-white/30 group-hover:to-white/10 transition-all duration-500" />
                            <div className="relative bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-full border-2 border-white/40 group-hover:border-white/60 group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-6 sm:group-hover:rotate-12 transition-all duration-500 shadow-lg">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:drop-shadow-lg" />
                            </div>
                          </div>

                          <h3 className="text-xs sm:text-sm font-bold mb-0.5 text-center text-white group-hover:text-white/90 transition-colors duration-300">
                            {social.name}
                          </h3>
                          <p className="text-white/90 text-[10px] sm:text-xs font-semibold group-hover:text-white transition-colors duration-300">
                            {social.followers}
                          </p>
                        </div>

                        <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full transform translate-x-6 -translate-y-6 sm:translate-x-8 sm:-translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 sm:group-hover:translate-x-6 sm:group-hover:-translate-y-6 group-hover:scale-110 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6 group-hover:-translate-x-2 group-hover:translate-y-2 sm:group-hover:-translate-x-4 sm:group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff5010] to-orange-400 bg-clip-text text-transparent">
                  Connect & Engage
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
                  {actionButtons.map((button, index) => (
                    <ActionCard
                      key={index}
                      name={button.name}
                      icon={button.icon}
                      url={button.url}
                      color={button.color}
                      hoverColor={button.hoverColor}
                      followers={button.followers}
                      isCalendly={button.isCalendly}
                      onClick={button.isCalendly ? openCalendly : undefined}
                      index={socialLinks.length + index}
                    />
                  ))}
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 max-w-xs sm:max-w-3xl mx-auto">
                {[
                  { label: "Years", value: "8+" },
                  { label: "Projects", value: "500+" },
                  { label: "Experts", value: "50+" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-[#ff5010] mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-[10px] sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
              <a
                href="#team"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 sm:hover:scale-110 text-sm sm:text-base"
              >
                Meet Our Team
              </a>
              <Link
                href="/learn-more"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#ff5010] to-orange-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-[#ff5010]/50 text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="relative px-2 py-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#ff5010]/20 backdrop-blur-sm rounded-full border border-[#ff5010]/30 mb-4 sm:mb-6">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5010]" />
              <span className="text-xs sm:text-sm font-medium">Our Team</span>
            </div> */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#ff5010] to-orange-400 bg-clip-text text-transparent">
                Meet The Innovators
              </h2>
              <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Passionate professionals dedicated to pushing boundaries and
                creating exceptional experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-xl md:max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Container */}
                  <div className="relative h-80 sm:h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                    <Image
                      src={`/${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: "center top" }}
                    />

                    {/* Hover Overlay - Reduced opacity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff5010]/40 via-[#ff5010]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                  </div>

                  {/* Content */}
                  <div className="relative p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#ff5010] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-2 sm:gap-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 sm:p-2.5 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                        >
                          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 sm:p-2.5 bg-gray-600/20 hover:bg-gray-600 border border-gray-500/30 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 sm:p-2.5 bg-pink-600/20 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 border border-pink-500/30 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                        >
                          <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          className="p-2 sm:p-2.5 bg-[#ff5010]/20 hover:bg-[#ff5010] border border-[#ff5010]/30 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#ff5010]/50"
                        >
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#ff5010]/30 to-transparent rounded-bl-full transform translate-x-12 -translate-y-12 sm:translate-x-16 sm:-translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 sm:group-hover:translate-x-12 sm:group-hover:-translate-y-12 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="relative px-2 py-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-[#ff5010]/20 to-orange-600/20 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5010]/10 via-orange-600/10 to-red-600/10 animate-pulse" />

              <div className="relative z-10">
                <Globe className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-[#ff5010]" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Let&apos;s Create Something Amazing
                </h2>
                <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
                  Ready to collaborate? Get in touch with us and let&apos;s
                  bring your vision to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@brandsmashers.com"
                    className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#ff5010] to-orange-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff5010]/50 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Email Us
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openCalendly();
                    }}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/9039231369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-2 py-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#ff5010] to-orange-400 bg-clip-text text-transparent mb-1">
                  Brandsmashers Tech
                </h3>
                <p className="text-gray-400 text-sm">From Vision To Impact</p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all duration-300 hover:scale-110 hover:border-[#ff5010]/50"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center text-gray-400 text-xs sm:text-sm">
              <p>
                 © 2026 Brandsmashers Tech.  All rights reserved. |  Crafted with
                passion and innovation.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
