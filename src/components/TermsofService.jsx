// pages/terms-of-service.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  // Company details - replace with your actual company information
  const companyDetails = {
    name: "Brandsmashers Tech",
    address: "123 Tech Boulevard, Innovation City, IC 10101",
    email: "legal@brandsmashers.com",
    phone: "+1 (555) 123-4567",
    website: "www.brandsmashers.com",
    lastUpdated: "May 15, 2025"
  };

  return (
    <>
      <Head>
        <title>Terms of Service | {companyDetails.name}</title>
        <meta name="description" content="Terms of Service for Brandsmashers Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen text-white ">
        {/* Navigation */}
        <header className="border-b border-gray-800 bg-white
        ">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <div className="text-2xl font-bold cursor-pointer flex items-center">
                <span className="text-white">{companyDetails.name}</span>
              </div>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-[#FF5722] transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-[#FF5722] transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-[#FF5722] transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF5722] transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">
              Terms of <span className="text-[#FF5722]">Service</span>
            </h1>
            <div className="h-1 w-48 bg-[#FF5722] mb-6"></div>
            <p className="text-gray-300">
              Last updated: {companyDetails.lastUpdated}
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-[#1A2235] p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold mb-6">1. Introduction</h2>
            <p className="text-gray-300 mb-6">
              Welcome to {companyDetails.name}. These Terms of Service govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold mb-6">2. Definitions</h2>
            <p className="text-gray-300 mb-3">
              Throughout these Terms, the following definitions apply:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 ml-4">
  <li className="mb-2">&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; refers to {companyDetails.name}.</li>
  <li className="mb-2">&quot;Services&quot; refers to all products, software, solutions, and services offered by {companyDetails.name}.</li>
  <li className="mb-2">&quot;User&quot;, &quot;you&quot;, or &quot;your&quot; refers to any individual or entity using our Services.</li>
  <li className="mb-2">&quot;Website&quot; refers to {companyDetails.website} and all subdomains.</li>
</ul>


            <h2 className="text-2xl font-semibold mb-6">3. Use of Services</h2>
            <p className="text-gray-300 mb-6">
              Our services are designed to empower businesses across all industries with innovative, tailor-made technology solutions. You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from using our services in any way that could damage, disable, or impair our services.
            </p>

            <h2 className="text-2xl font-semibold mb-6">4. Intellectual Property</h2>
            <p className="text-gray-300 mb-6">
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of {companyDetails.name} and are protected by international copyright, trademark, patent, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold mb-6">5. Privacy Policy</h2>
            <p className="text-gray-300 mb-6">
              Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.
            </p>

            <h2 className="text-2xl font-semibold mb-6">6. Limitation of Liability</h2>
            <p className="text-gray-300 mb-6">
              To the maximum extent permitted by law, {companyDetails.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>

            <h2 className="text-2xl font-semibold mb-6">7. Changes to Terms</h2>
            <p className="text-gray-300 mb-6">
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on this page with a new effective date. Your continued use of our services after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide by them.
            </p>

            <h2 className="text-2xl font-semibold mb-6">8. Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-[#141C2F] p-6 rounded-md">
              <p className="text-gray-300 mb-1"><strong>Company:</strong> {companyDetails.name}</p>
              <p className="text-gray-300 mb-1"><strong>Address:</strong> {companyDetails.address}</p>
              <p className="text-gray-300 mb-1"><strong>Email:</strong> {companyDetails.email}</p>
              <p className="text-gray-300 mb-1"><strong>Phone:</strong> {companyDetails.phone}</p>
              <p className="text-gray-300"><strong>Website:</strong> {companyDetails.website}</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#0F141E] py-8 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4">{companyDetails.name}</h3>
                <p className="text-gray-400 max-w-md">
                  Empowering businesses across all industries with innovative, tailor-made technology solutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="text-gray-400">
                  <li className="mb-2">
                    <Link href="/privacy-policy" className="hover:text-[#FF5722] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/terms-of-service" className="text-[#FF5722] transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy" className="hover:text-[#FF5722] transition-colors">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800 text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} {companyDetails.name}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}