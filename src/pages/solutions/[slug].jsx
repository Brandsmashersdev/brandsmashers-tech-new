// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import Navbar from '@/components/navbar/navbar';
// import Footer from '@/components/footer/footer';

// const solutionData = {
//   'real-estate': {
//     icon: '🏠',
//     title: 'Real Estate Solutions',
//     description: 'Our Real Estate Solutions are designed to simplify property management and enhance customer engagement through digital innovation. We build intelligent platforms that enable seamless property listing, virtual tours, tenant management, and smart building operations. By integrating advanced analytics and automation, we help real estate businesses improve decision-making, increase occupancy rates, and deliver superior customer experiences.',
//     features: [
//       'Property listing and management systems',
//       'Virtual and 3D property tours',
//       'CRM for brokers and agents',
//       'Tenant and lease management',
//       'Smart building applications',
//       'Sales and occupancy analytics dashboards'
//     ]
//   },
//   'retail': {
//     icon: '🛒',
//     title: 'Retail Solutions',
//     description: 'Our Retail Solutions empower businesses with end-to-end digital platforms that streamline operations and improve customer journeys. From scalable e-commerce systems to inventory and loyalty management, we help retailers deliver personalized, omnichannel experiences while maintaining operational efficiency and real-time visibility.',
//     features: [
//       'Custom e-commerce platforms',
//       'Inventory and warehouse management',
//       'POS integration',
//       'Customer loyalty and rewards systems',
//       'Order tracking and fulfillment automation',
//       'Sales and demand analytics'
//     ]
//   },
//   'automotive': {
//     icon: '🚗',
//     title: 'Automotive Solutions',
//     description: 'Our Automotive Solutions support manufacturers, dealers, and service providers with robust digital systems that manage vehicles, customers, and operations efficiently. We develop connected platforms that enable real-time vehicle tracking, service scheduling, and dealer management, ensuring smooth operations and improved customer satisfaction.',
//     features: [
//       'Vehicle and fleet management systems',
//       'Dealer management platforms',
//       'Service and maintenance scheduling',
//       'Connected car applications',
//       'GPS and telematics integration',
//       'Customer web and mobile portals'
//     ]
//   },
//   'ev-industry': {
//     icon: '⚡',
//     title: 'E.V. Industry Solutions',
//     description: 'Our EV Industry Solutions focus on building intelligent software ecosystems for electric mobility. We design scalable platforms that manage charging infrastructure, monitor battery health, and track EV fleets, helping businesses optimize energy usage and deliver seamless experiences to EV users.',
//     features: [
//       'EV charging station management software',
//       'Battery health and performance monitoring',
//       'Electric fleet management',
//       'Energy consumption analytics',
//       'EV user mobile applications',
//       'IoT and smart grid integration'
//     ]
//   },
//   'cloud': {
//     icon: '☁️',
//     title: 'Cloud Solutions',
//     description: 'Our Cloud Solutions enable businesses to leverage secure, scalable, and high-performance cloud environments tailored to their needs. From cloud migration to cloud-native development, we help organizations optimize infrastructure, ensure high availability, and maintain strong security and compliance standards.',
//     features: [
//       'Cloud migration and deployment',
//       'AWS, Azure, and Google Cloud services',
//       'Cloud-native application development',
//       'DevOps and CI/CD pipelines',
//       'Data backup and disaster recovery',
//       'Cloud security and compliance'
//     ]
//   },
//   'healthcare': {
//     icon: '🏥',
//     title: 'Healthcare Solutions',
//     description: 'Our Healthcare Solutions drive digital transformation across medical and healthcare services while ensuring data security and regulatory compliance. We build advanced platforms for patient management, telemedicine, and healthcare analytics that improve operational efficiency and enhance patient care.',
//     features: [
//       'Hospital and patient management systems',
//       'EHR and EMR solutions',
//       'Telemedicine platforms',
//       'Appointment scheduling and billing',
//       'Healthcare data analytics',
//       'HIPAA-compliant security frameworks'
//     ]
//   },
//   'education': {
//     icon: '🎓',
//     title: 'Education Solutions',
//     description: 'Our Education Solutions are designed to create interactive, scalable, and accessible learning experiences. We develop smart digital platforms that support virtual classrooms, learning management, and performance tracking for institutions, educators, and learners.',
//     features: [
//       'Learning management systems (LMS)',
//       'Virtual classroom solutions',
//       'Student and teacher management portals',
//       'Online assessments and performance tracking',
//       'Course content management',
//       'Mobile e-learning applications'
//     ]
//   },
//   'finance': {
//     icon: '💰',
//     title: 'Finance IT Solutions',
//     description: 'Our Finance IT Solutions deliver secure, high-performance software for banking, insurance, and investment sectors. We build robust financial platforms that ensure accuracy, regulatory compliance, and secure transactions while enabling data-driven financial decision-making.',
//     features: [
//       'Banking and financial management software',
//       'Insurance policy and claims systems',
//       'Investment and portfolio tracking platforms',
//       'Payment gateway integration',
//       'Risk and compliance tools',
//       'Advanced data security and fraud detection'
//     ]
//   }
// };

// export default function SolutionDetail() {
//   const router = useRouter();
//   const { slug } = router.query;

//   if (!slug || !solutionData[slug]) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
//             <p className="text-gray-400">The solution you're looking for doesn't exist.</p>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   const solution = solutionData[slug];

//   return (
//     <>
//       <Head>
//         <title>{solution.title} - Brandsmashers Tech</title>
//         <meta name="description" content={solution.description} />
//       </Head>
//       <Navbar />
//       <div className="min-h-screen bg-[#000000] text-white">
//         <div className="max-w-7xl mx-auto px-6 py-14">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <div className="text-6xl mb-6">{solution.icon}</div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               {solution.title}
//             </h1>
//           </div>

//           {/* Description */}
//           <div className="bg-[#131313] border border-gray-800 rounded-lg p-8 mb-8">
//             <p className="text-lg text-gray-300 leading-relaxed">
//               {solution.description}
//             </p>
//           </div>

//           {/* Key Features */}
//           <div className="bg-[#131313] border border-orange-600 rounded-lg p-8">
//             <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-500">
//               Key Features:
//             </h2>
//             <ul className="space-y-4">
//               {solution.features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="text-orange-500 mr-3 mt-1">•</span>
//                   <span className="text-gray-300 text-lg">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
