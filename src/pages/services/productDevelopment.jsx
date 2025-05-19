import Footer from '@/components/footer/footer'
// import HeroSection from '@/components/HomePage/herosection'
import Navbar from '@/components/navbar/navbar'
import ProductDevelopment from '@/components/Service/productDevelopment'

function ProductDevelopmentPage() {
  return (
    <div>
      <Navbar />
      <ProductDevelopment />
      {/* Uncomment if needed */}
      {/* <HeroSection /> */}
      <Footer/>
      
    </div>
  )
}

export default ProductDevelopmentPage;

