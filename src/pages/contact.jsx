import ContactForm from '@/components/contactform'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const contact = () => {
  return (
    <div>
        <Navbar/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default contact