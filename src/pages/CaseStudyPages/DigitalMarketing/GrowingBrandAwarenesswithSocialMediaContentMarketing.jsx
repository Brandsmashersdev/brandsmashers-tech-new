// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function SocialMediaCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Growing Brand Awareness with Social Media & Content Marketing</title>
//         <meta name="description" content="A case study on a 360° social media and content marketing strategy to boost engagement and brand awareness for a fitness company." />
//         <meta property="og:title" content="Social Media & Content Marketing - Case Study" />
//         <meta property="og:image" content="/social-media-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Growing Brand Awareness with Social Media & Content Marketing
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/social-media-1.jpeg" // Placeholder image
//               alt="Social Media Strategy Overview"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-pink-600">The Challenge</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               In a crowded market, the client needed to boost engagement and drive traffic to their platforms. The goal was to enhance local brand visibility, cultivate a loyal online community, and establish a cohesive brand voice.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-pink-500">
//               <li>Enhance Local Brand Visibility in a competitive fitness market.</li>
//               <li>Cultivate a Loyal Online Community to convert followers into members.</li>
//               <li>Elevate Social Media Engagement on platforms like Instagram and TikTok.</li>
//               <li>Establish a Cohesive Brand Voice across all digital content.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-pink-600">Our Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/social-media-2.jpeg" // Placeholder image
//                 alt="Social Media Content"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We developed a powerful **360° social media and content marketing strategy**. This approach combined creativity, analytics, and growth tactics to inspire and engage the community, building a strong digital presence from the ground up.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-pink-500">
//               <li>**Social Media Content Strategy:** Created a 3-month content calendar with themed days and a cohesive visual style.</li>
//               <li>**Video Content Creation:** Produced engaging Instagram Reels, TikToks, and YouTube Shorts to capture attention and showcase the brand&apos;s energy.</li>
//               <li>**Influencer Partnerships:** Collaborated with local micro-influencers and wellness brands to host challenges and giveaways.</li>
//               <li>**Community Management:** Responded daily to comments and DMs, hosted live Q&A sessions, and launched a user-generated content campaign.</li>
//               <li>**Paid Social Ads:** Ran targeted campaigns on Facebook and Instagram, using A/B testing to optimize cost per lead for gym visits.</li>
//               <li>**Blog & SEO Content:** Published weekly blog posts to drive organic traffic from social media and establish the brand as a knowledge leader.</li>
//               <li>**Analytics & Reporting:** Tracked key metrics like reach, engagement, and conversions with a social media dashboard.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-pink-600">The Results</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/social-media-3.jpeg" // Placeholder image
//                 alt="Social Media Analytics"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-pink-500">
//               <li>**Instagram:** Achieved **300% follower growth** with 5 viral posts reaching over 100,000 local views.</li>
//               <li>**TikTok:** Grew from 0 to **10,000 followers** in just 3 months.</li>
//               <li>**Engagement:** Noticed a **45% increase** in likes, comments, and shares across all platforms.</li>
//               <li>**Lead Generation:** Experienced a **40% increase** in gym membership inquiries.</li>
//               <li>**Website Traffic:** Saw a **60% rise** in organic traffic from social media and blog content.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


// src/components/SocialMediaCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeGoals = [
  'Enhance Local Brand Visibility in a competitive fitness market.',
  'Cultivate a Loyal Online Community to convert followers into members.',
  'Elevate Social Media Engagement on platforms like Instagram and TikTok.',
  'Establish a Cohesive Brand Voice across all digital content.',
];

const solutionDetails = [
  {
    title: 'Social Media Content Strategy',
    description: 'Created a 3-month content calendar with themed days and a cohesive visual style.',
  },
  {
    title: 'Video Content Creation',
    description: 'Produced engaging Instagram Reels, TikToks, and YouTube Shorts to capture attention and showcase the brand’s energy.',
  },
  {
    title: 'Influencer Partnerships',
    description: 'Collaborated with local micro-influencers and wellness brands to host challenges and giveaways.',
  },
  {
    title: 'Community Management',
    description: 'Responded daily to comments and DMs, hosted live Q&A sessions, and launched a user-generated content campaign.',
  },
  {
    title: 'Paid Social Ads',
    description: 'Ran targeted campaigns on Facebook and Instagram, using A/B testing to optimize cost per lead for gym visits.',
  },
  {
    title: 'Blog & SEO Content',
    description: 'Published weekly blog posts to drive organic traffic from social media and establish the brand as a knowledge leader.',
  },
];

const results = [
  { value: '300%', label: 'Instagram Follower Growth' },
  { value: '45%', label: 'Increase in Engagement' },
  { value: '40%', label: 'Increase in Membership Inquiries' },
  { value: '60%', label: 'Rise in Organic Traffic' },
];

export default function SocialMediaCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Social Media & Content Marketing</title>
        <meta name="description" content="A case study on a 360° social media and content marketing strategy to boost engagement and brand awareness for a fitness company." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Social Media & Content Marketing
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Growing Brand Awareness with a 360° Strategy
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              In a crowded market, a fitness company needed to boost engagement and drive traffic to its platforms by enhancing local visibility and cultivating a loyal online community.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Core Goals</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                {challengeGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We developed a powerful **360° social media and content marketing strategy** that combined creativity, analytics, and growth tactics to inspire and engage the community.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
                  {solutionDetails.map((detail, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{detail.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/social-media-solution.png" // Placeholder image
                  alt="Social Media Content"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {results.map((result, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="italic text-lg" style={{ color: '#222222' }}>
                The strategy successfully enhanced local visibility and cultivated a loyal community, demonstrating the power of a cohesive digital presence.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}