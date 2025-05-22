// pages/terms-of-service.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  // Company details - replace with your actual company information
  const companyDetails = {
    name: "Brandsmashers Tech",
    address: "Bhopal, India",
    email: "info@brandsmashers.com",
    phone: "7000863918",
    website: "www.brandsmashers.com",
   
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Terms of Service | {companyDetails.name}</title>
        <meta name="description" content="Privacy Policy for Brandsmashers Tech" />
      </Head>

     

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">
              Terms of <span className="text-orange-600">Services</span>
            </h1>
            <div className="h-1 w-16 bg-orange-600 mb-6"></div>
            {/* <p className="text-gray-400">
              Last Updated: May 20, 2025
            </p> */}
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
              Welcome to {companyDetails.name}. These Terms of Service govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
              </p>
            
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
              <p className="text-gray-300 mb-4">
              Throughout these Terms, the following definitions apply:
              </p>
             
              <p className="text-gray-300 mb-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 ml-4">
  <li className="mb-2">&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; refers to {companyDetails.name}.</li>
  <li className="mb-2">&quot;Services&quot; refers to all products, software, solutions, and services offered by {companyDetails.name}.</li>
  <li className="mb-2">&quot;User&quot;, &quot;you&quot;, or &quot;your&quot; refers to any individual or entity using our Services.</li>
  <li className="mb-2">&quot;Website&quot; refers to {companyDetails.website} and all subdomains.</li>
</ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Use of Services</h2>
              <p className="text-gray-300 mb-4">
              Our services are designed to empower businesses across all industries with innovative, tailor-made technology solutions. You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from using our services in any way that could damage, disable, or impair our services.
               
              </p>
         
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4.Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of {companyDetails.name} and are protected by international copyright, trademark, patent, and other intellectual property laws.
              </p>
           
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Privacy Policy</h2>
              <p className="text-gray-300 mb-4">
              Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
              To the maximum extent permitted by law, {companyDetails.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on this page with a new effective date. Your continued use of our services after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide by them.

              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8.  Contact Information</h2>
              <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at:
              </p>
            </section>
            <div className="bg-[#141C2F] p-6 rounded-md">
              <p className="text-gray-300 mb-1"><strong>Company:</strong> {companyDetails.name}</p>
              <p className="text-gray-300 mb-1"><strong>Address:</strong> {companyDetails.address}</p>
              <p className="text-gray-300 mb-1"><strong>Email:</strong> {companyDetails.email}</p>
              <p className="text-gray-300 mb-1"><strong>Phone:</strong> {companyDetails.phone}</p>
              <p className="text-gray-300"><strong>Website:</strong> {companyDetails.website}</p>
            </div>
           
          </div>
        </div>
      </main>

      {/* Footer */}
     
    </div>
  );
}