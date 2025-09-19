'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function SocialMediaCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Growing Brand Awareness with Social Media & Content Marketing</title>
        <meta name="description" content="A case study on a 360° social media and content marketing strategy to boost engagement and brand awareness for a fitness company." />
        <meta property="og:title" content="Social Media & Content Marketing - Case Study" />
        <meta property="og:image" content="/social-media-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Growing Brand Awareness with Social Media & Content Marketing
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/social-media-1.jpeg" // Placeholder image
              alt="Social Media Strategy Overview"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              In a crowded market, the client needed to boost engagement and drive traffic to their platforms. The goal was to enhance local brand visibility, cultivate a loyal online community, and establish a cohesive brand voice.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-pink-500">
              <li>Enhance Local Brand Visibility in a competitive fitness market.</li>
              <li>Cultivate a Loyal Online Community to convert followers into members.</li>
              <li>Elevate Social Media Engagement on platforms like Instagram and TikTok.</li>
              <li>Establish a Cohesive Brand Voice across all digital content.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600">Our Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/social-media-2.jpeg" // Placeholder image
                alt="Social Media Content"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We developed a powerful **360° social media and content marketing strategy**. This approach combined creativity, analytics, and growth tactics to inspire and engage the community, building a strong digital presence from the ground up.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-pink-500">
              <li>**Social Media Content Strategy:** Created a 3-month content calendar with themed days and a cohesive visual style.</li>
              <li>**Video Content Creation:** Produced engaging Instagram Reels, TikToks, and YouTube Shorts to capture attention and showcase the brand&apos;s energy.</li>
              <li>**Influencer Partnerships:** Collaborated with local micro-influencers and wellness brands to host challenges and giveaways.</li>
              <li>**Community Management:** Responded daily to comments and DMs, hosted live Q&A sessions, and launched a user-generated content campaign.</li>
              <li>**Paid Social Ads:** Ran targeted campaigns on Facebook and Instagram, using A/B testing to optimize cost per lead for gym visits.</li>
              <li>**Blog & SEO Content:** Published weekly blog posts to drive organic traffic from social media and establish the brand as a knowledge leader.</li>
              <li>**Analytics & Reporting:** Tracked key metrics like reach, engagement, and conversions with a social media dashboard.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600">The Results</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/social-media-3.jpeg" // Placeholder image
                alt="Social Media Analytics"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-pink-500">
              <li>**Instagram:** Achieved **300% follower growth** with 5 viral posts reaching over 100,000 local views.</li>
              <li>**TikTok:** Grew from 0 to **10,000 followers** in just 3 months.</li>
              <li>**Engagement:** Noticed a **45% increase** in likes, comments, and shares across all platforms.</li>
              <li>**Lead Generation:** Experienced a **40% increase** in gym membership inquiries.</li>
              <li>**Website Traffic:** Saw a **60% rise** in organic traffic from social media and blog content.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}