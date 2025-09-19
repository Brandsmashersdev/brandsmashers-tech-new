'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function BankAIUseCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | How a Leading Bank Harnessed AI to Predict Risk and Strengthen Customer Loyalty</title>
        <meta name="description" content="A case study on using AI to predict financial risk, reduce customer churn, and improve personalized recommendations for a leading bank." />
        <meta property="og:title" content="Bank AI - Predictive Analytics & Customer Loyalty" />
        <meta property="og:image" content="/bank-ai-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: How a Leading Bank Harnessed AI to Predict Risk and Strengthen Customer Loyalty
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/bank-ai-1.jpeg" // Placeholder image
              alt="Bank AI Dashboard"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">The Challenge: Unseen Threats Lurking Beneath the Surface</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              A leading bank, despite its outward success, was struggling with a rise in loan defaults and customer churn. They had plenty of data but lacked the predictive insights needed to anticipate problems before they occurred.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>Increasing customer churn, especially among mid-tier account holders.</li>
              <li>Ineffective marketing campaigns for cross-selling.</li>
              <li>A reactive rather than proactive approach to risk and customer behavior.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">The Solution: Transforming Data into Predictive Insights</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/bank-ai-2.jpeg" // Placeholder image
                alt="AI Prediction Models"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We developed a multi-faceted AI/ML framework to turn the bank’s vast data into a powerful asset. The solution included several key engines designed to predict and act on future trends.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>**Credit Risk Prediction Engine:** Engineered advanced ML models (Random Forest, XGBoost) to predict risky loan applicants by analyzing over 40 data points.</li>
              <li>**Customer Churn Predictor:** Trained a deep learning model to predict customer departure with over **82% accuracy**, enabling proactive engagement.</li>
              <li>**Personalized Product Recommendation Engine:** Created a hybrid recommendation system to align customers with the financial products that best suit their lifestyles.</li>
              <li>**Streamlined Insights & Dashboards:** Integrated all components into dynamic dashboards using Power BI and AWS, providing real-time, AI-driven insights to all departments.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">The Impact: From Guesswork to Intelligent Banking</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/bank-ai-3.jpeg" // Placeholder image
                alt="Revenue Growth"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>Achieved an **18% reduction** in non-performing assets through improved loan default predictions.</li>
              <li>Saw a **25% decrease in customer churn** within key segments.</li>
              <li>Led to a **33% increase in personalized offer conversions** from smarter cross-selling strategies.</li>
              <li>Enabled a data-driven culture across the organization, shifting from reactive to proactive decision-making.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}