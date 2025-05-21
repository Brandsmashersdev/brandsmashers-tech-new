// pages/privacy-policy.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Privacy Policy | Brandsmashers Tech</title>
        <meta name="description" content="Privacy Policy for Brandsmashers Tech" />
      </Head>

     

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">
              Privacy <span className="text-orange-600">Policy</span>
            </h1>
            <div className="h-1 w-16 bg-orange-600 mb-6"></div>
            <p className="text-gray-400">
              Last Updated: May 20, 2025
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                At Brandsmashers Tech, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-300">
                We encourage you to read this privacy policy carefully to understand our practices regarding your personal data and how we will treat it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We may collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register on the site, fill out a form, and in connection with other activities, services, features, or resources we make available.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information</h3>
              <p className="text-gray-300 mb-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company information</li>
                <li>Billing and payment information</li>
                <li>Information provided in forms or surveys</li>
                <li>Information about your use of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                Brandsmashers Tech may collect and use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>To provide and improve our services</li>
                <li>To personalize user experience</li>
                <li>To process transactions</li>
                <li>To send periodic emails regarding your order or other products and services</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate data collection, storage, processing practices, and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
              </p>
              <p className="text-gray-300">
                However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Disclosure</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or rent users&apos; personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
              </p>
              <p className="text-gray-300">
                We may use third-party service providers to help us operate our business and the site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes if you have given us your permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookie Policy</h2>
              <p className="text-gray-300 mb-4">
                Our website may use &quot;cookies&quot; to enhance the user experience. A user&apos;s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert you when cookies are being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal data, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectify inaccurate personal data</li>
                <li>The right to request the deletion of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 mb-4">
                Brandsmashers Tech has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 mb-2"><strong>Brandsmashers Tech</strong></p>
                <p className="text-gray-300 mb-2">123 Tech Avenue</p>
                <p className="text-gray-300 mb-2">San Francisco, CA 94105</p>
                <p className="text-gray-300 mb-2">Email: privacy@brandsmashers.tech</p>
                <p className="text-gray-300">Phone: (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
     
    </div>
  );
}