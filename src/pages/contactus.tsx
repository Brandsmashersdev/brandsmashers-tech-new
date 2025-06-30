import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ContactPage from '@/components/ContactUsPage/ContactPage';
import SEO from '@/components/SEO';

export default function contactus() {
  return (
    <>
      <SEO
        title="Contact Us | Brandsmashers Tech"
        description="Contact Brandsmashers Tech for custom software development, IT outsourcing, and digital solutions. We're here to help!"
        ogImage="/logo.jpg"
      />
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}
