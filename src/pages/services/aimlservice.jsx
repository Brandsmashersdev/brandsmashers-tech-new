import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

import AiMlService from '@/components/Service/Aimlservice/AiMlService'
import React from 'react'

const aimlservice = () => {
  return (
    <div>
        <Navbar/>
        <AiMlService/>
        <Footer/>
    </div>
  )
}

export default aimlservice