import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import ProductDevelopment from '@/components/Service/productDevelopment'
import CalendlyWidget from '@/components/CalendlyWidget';

function ProductDevelopmentPage() {
  return (
    <div>
      <Navbar />
      <ProductDevelopment />
      <div className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book a Free 30-Minute Consultation
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Speak directly with our engineering team. No sales pitch — just an honest conversation about your needs.
            </p>
          </div>
          <CalendlyWidget />
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default ProductDevelopmentPage;
