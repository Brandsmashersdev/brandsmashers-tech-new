"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const solutions = {
  "real-estate": {
    title: "Real Estate Solutions",
    subtitle: "Simplify property management and elevate customer engagement.",
    body: "Our Real Estate Solutions are designed to simplify property management and enhance customer engagement through digital innovation. We build intelligent platforms that enable seamless property listing, virtual tours, tenant management, and smart building operations. By integrating advanced analytics and automation, we help real estate businesses improve decision-making, increase occupancy rates, and deliver superior customer experiences.",
    features: [
      "Property listing and management systems",
      "Virtual and 3D property tours",
      "CRM for brokers and agents",
      "Tenant and lease management",
      "Smart building applications",
      "Sales and occupancy analytics dashboards",
      
    ],
  },
  retail: {
    title: "Retail Solutions",
    subtitle: "Streamline operations and deliver seamless customer journeys.",
    body: "Our Retail Solutions empower businesses with end-to-end digital platforms that streamline operations and improve customer journeys. From scalable e-commerce systems to inventory and loyalty management, we help retailers deliver personalized, omnichannel experiences while maintaining operational efficiency and real-time visibility.",
    features: [
      "Custom e-commerce platforms",
      "Inventory and warehouse management",
      "POS integration",
      "Customer loyalty and rewards systems",
      "Order tracking and fulfillment automation",
      "Sales and demand analytics",
    ],
  },
  automotive: {
    title: "Automotive Solutions",
    subtitle: "Connected platforms for vehicles, dealers, and service providers.",
    body: "Our Automotive Solutions support manufacturers, dealers, and service providers with robust digital systems that manage vehicles, customers, and operations efficiently. We develop connected platforms that enable real-time vehicle tracking, service scheduling, and dealer management, ensuring smooth operations and improved customer satisfaction.",
    features: [
      "Vehicle and fleet management systems",
      "Dealer management platforms",
      "Service and maintenance scheduling",
      "Connected car applications",
      "GPS and telematics integration",
      "Customer web and mobile portals",
    ],
  },
  "ev-industry": {
    title: "E.V. Industry Solutions",
    subtitle: "Intelligent software ecosystems for electric mobility.",
    body: "Our EV Industry Solutions focus on building intelligent software ecosystems for electric mobility. We design scalable platforms that manage charging infrastructure, monitor battery health, and track EV fleets, helping businesses optimize energy usage and deliver seamless experiences to EV users.",
    features: [
      "EV charging station management software",
      "Battery health and performance monitoring",
      "Electric fleet management",
      "Energy consumption analytics",
      "EV user mobile applications",
      "IoT and smart grid integration",
    ],
  },
  cloud: {
    title: "Cloud Solutions",
    subtitle: "Secure, scalable, and high-performance cloud environments.",
    body: "Our Cloud Solutions enable businesses to leverage secure, scalable, and high-performance cloud environments tailored to their needs. From cloud migration to cloud-native development, we help organizations optimize infrastructure, ensure high availability, and maintain strong security and compliance standards.",
    features: [
      "Cloud migration and deployment",
      "AWS, Azure, and Google Cloud services",
      "Cloud-native application development",
      "DevOps and CI/CD pipelines",
      "Data backup and disaster recovery",
      "Cloud security and compliance",
    ],
  },
  healthcare: {
    title: "Healthcare Solutions",
    subtitle: "Digital transformation with compliance and patient-first focus.",
    body: "Our Healthcare Solutions drive digital transformation across medical and healthcare services while ensuring data security and regulatory compliance. We build advanced platforms for patient management, telemedicine, and healthcare analytics that improve operational efficiency and enhance patient care.",
    features: [
      "Hospital and patient management systems",
      "EHR and EMR solutions",
      "Telemedicine platforms",
      "Appointment scheduling and billing",
      "Healthcare data analytics",
      "HIPAA-compliant security frameworks",
    ],
  },
  education: {
    title: "Education Solutions",
    subtitle: "Interactive, scalable, and accessible learning experiences.",
    body: "Our Education Solutions are designed to create interactive, scalable, and accessible learning experiences. We develop smart digital platforms that support virtual classrooms, learning management, and performance tracking for institutions, educators, and learners.",
    features: [
      "Learning management systems (LMS)",
      "Virtual classroom solutions",
      "Student and teacher management portals",
      "Online assessments and performance tracking",
      "Course content management",
      "Mobile e-learning applications",
    ],
  },
  finance: {
    title: "Finance IT Solutions",
    subtitle: "Secure, compliant, and data-driven financial platforms.",
    body: "Our Finance IT Solutions deliver secure, high-performance software for banking, insurance, and investment sectors. We build robust financial platforms that ensure accuracy, regulatory compliance, and secure transactions while enabling data-driven financial decision-making.",
    features: [
      "Banking and financial management software",
      "Insurance policy and claims systems",
      "Investment and portfolio tracking platforms",
      "Payment gateway integration",
      "Risk and compliance tools",
      "Advanced data security and fraud detection",
    ],
  },
};

const TechSolutionDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const solution = slug ? solutions[slug] : null;

  const pageTitle = solution
    ? `${solution.title} | Brandsmashers Tech`
    : "Solution Not Found | Brandsmashers Tech";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {solution && (
          <meta
            name="description"
            content={solution.subtitle || solution.title}
          />
        )}
      </Head>

      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {!solution ? (
            <div className="text-center space-y-6">
              <h1 className="text-3xl font-bold">Solution not found</h1>
              <p className="text-gray-400">
                The page you are looking for does not exist. Please return to the
                technologies page.
              </p>
              <Link
                href="/technologies"
                className="inline-flex items-center px-6 py-3 rounded-full font-semibold"
                style={{ backgroundColor: "#ff5010" }}
              >
                Back to Technologies
              </Link>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="space-y-4">
                <Link
                  href="/technologies"
                  className="inline-flex items-center text-sm text-gray-300 hover:text-white"
                >
                  ← Back to Technologies
                </Link>
                <h1 className="text-4xl font-bold leading-tight">
                  {solution.title}
                </h1>
                <p className="text-lg text-gray-300 max-w-3xl">
                  {solution.subtitle}
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="h-1 w-24 rounded-full" style={{ backgroundColor: "#ff5010" }} />
                <p className="text-gray-200 leading-relaxed">{solution.body}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {solution.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-gray-800/40 border border-gray-800 rounded-xl px-4 py-3"
                    >
                      <span
                        className="mt-1 inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#ff5010" }}
                      />
                      <p className="text-gray-200 text-sm sm:text-base">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TechSolutionDetail;

