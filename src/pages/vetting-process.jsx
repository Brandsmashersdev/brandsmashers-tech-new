import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { CheckCircle, FileText, Code, Users, Clock, ArrowRight, Shield, Star, Zap } from "lucide-react";

const vettingStages = [
  {
    step: 1,
    title: "Application Screening",
    description: "Resume review, portfolio analysis, and experience verification to assess candidate background and credentials.",
    passRate: "40%",
    icon: FileText,
    details: [
      "Comprehensive resume review",
      "Portfolio and work sample analysis",
      "Employment history verification",
      "Educational background check"
    ]
  },
  {
    step: 2,
    title: "Technical Assessment",
    description: "Timed coding challenge covering algorithms, system design, and domain-specific skills to evaluate technical proficiency.",
    passRate: "25%",
    icon: Code,
    details: [
      "Algorithm and data structure problems",
      "System design challenges",
      "Domain-specific technical tests",
      "Code quality and efficiency evaluation"
    ]
  },
  {
    step: 3,
    title: "Live Expert Interview",
    description: "90-minute session with senior engineers including code review, problem solving, and architecture discussions.",
    passRate: "15%",
    icon: Users,
    details: [
      "Live coding session",
      "Code review and best practices",
      "Problem-solving scenarios",
      "System architecture discussions"
    ]
  },
  {
    step: 4,
    title: "Culture & Communication Fit",
    description: "Assessment of English proficiency, collaboration skills, and timezone flexibility for seamless integration.",
    passRate: "8%",
    icon: Clock,
    details: [
      "English proficiency evaluation",
      "Communication skills assessment",
      "Team collaboration aptitude",
      "Timezone flexibility check"
    ]
  },
  {
    step: 5,
    title: "Paid Test Project",
    description: "1-week real-world project with comprehensive code quality review to validate practical skills.",
    passRate: "3%",
    icon: Shield,
    details: [
      "Real-world project assignment",
      "Code quality review",
      "Deadline management",
      "Client communication evaluation"
    ]
  }
];

const stats = [
  { value: "3%", label: "Make Final Cut", icon: Star },
  { value: "500+", label: "Applications/Month", icon: FileText },
  { value: "90+", label: "Expert Interviews", icon: Users },
  { value: "48h", label: "Average Response", icon: Clock },
];

export default function VettingProcess() {
  return (
    <>
      <Head>
        <title>How We Vet Talent | Brandsmashers Tech</title>
        <meta
          name="description"
          content="Discover our rigorous 5-point vetting process. Only 3% of applicants make it through our comprehensive screening to join Brandsmashers."
        />
      </Head>
      
      <div className="bg-[#343333]">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff5010]/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#ff5010]/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff5010]/10 border border-[#ff5010]/30 mb-8">
                <Star className="w-4 h-4 text-[#ff5010] mr-2" />
                <span className="text-[#ff5010] font-semibold text-sm">The Top 3% Standard</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                How We <span className="text-[#ff5010]">Vet Talent</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our rigorous 5-point vetting process ensures we only work with the top 3% of tech talent. 
                Every developer we match has passed our exhaustive screening.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#ff5010] text-white font-semibold rounded-lg hover:bg-[#ff5010]/90 transition-all">
                  Hire vetted Developers
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/developers" className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:border-[#ff5010] transition-all">
                  View Available Talent
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff5010]/10 mb-4">
                    <stat.icon className="w-8 h-8 text-[#ff5010]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vetting Process Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our 5-Point Vetting Process
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Each stage is designed to thoroughly evaluate different aspects of technical excellence
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff5010] via-[#ff5010] to-transparent transform md:-translate-x-1/2"></div>
              
              {/* Stages */}
              <div className="space-y-12">
                {vettingStages.map((stage, index) => (
                  <div 
                    key={stage.step} 
                    className={`relative flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ml-16 md:ml-0`}>
                      <div className="bg-white/50 rounded-xl p-6 border border-gray-200 shadow-md hover:border-[#ff5010]/50 transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ff5010] text-white font-bold text-sm">
                            {stage.step}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">{stage.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{stage.description}</p>
                        
                        <ul className="space-y-2">
                          {stage.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                              <CheckCircle className="w-4 h-4 text-[#ff5010] flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Icon Circle */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#ff5010] flex items-center justify-center z-10 shadow-md">
                      <stage.icon className="w-7 h-7 text-[#ff5010]" />
                    </div>
                    
                    {/* Pass Rate Badge */}
                    <div className="hidden md:flex flex-1 items-center justify-center">
                      <div className="bg-[#ff5010]/10 rounded-lg px-6 py-3 border border-[#ff5010]/30 shadow-sm">
                        <div className="text-2xl font-bold text-[#ff5010]">{stage.passRate}</div>
                        <div className="text-gray-500 text-xs">Pass Rate</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Cut Section */}
        <section className="py-20 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5010]/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#ff5010] mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Only 3% Make the Final Cut
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Our comprehensive vetting process ensures that every developer in our network 
                  has demonstrated exceptional technical ability, communication skills, and professionalism.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#ff5010] text-white font-semibold rounded-lg hover:bg-[#ff5010]/90 transition-all">
                    Start Hiring Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link href="/vetting-process" onClick={(e) => {}} className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:border-[#ff5010] transition-all">
                    Learn More About Our Process
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Brandsmashers Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Our Vetting Matters
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We invest heavily in vetting so you can focus on building your product
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff5010]/10 mb-4">
                  <Shield className="w-6 h-6 text-[#ff5010]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quality Guaranteed</h3>
                <p className="text-gray-400">
                  Every vetted developer has proven their skills through rigorous testing and real-world projects.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff5010]/10 mb-4">
                  <Clock className="w-6 h-6 text-[#ff5010]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fast Deployment</h3>
                <p className="text-gray-400">
                  Pre-vetted talent means you can start your project immediately without lengthy screening processes.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff5010]/10 mb-4">
                  <Users className="w-6 h-6 text-[#ff5010]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reliable Partnership</h3>
                <p className="text-gray-400">
                  Our culture fit assessment ensures seamless collaboration and long-term team compatibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work with Top 3% Talent?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Connect with our pre-vetted developers and accelerate your project today.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#ff5010] text-white font-semibold rounded-lg hover:bg-[#ff5010]/90 transition-all">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
