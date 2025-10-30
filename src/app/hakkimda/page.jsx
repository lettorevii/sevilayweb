import React from 'react'
import Hakkimda from '../../components/Hakkimda'
import AboutSection from '../../components/About'

const AboutPage = () => {
  return (
    <div>
      <Hakkimda />
      <AboutSection />
      <div className='ml-48 mt-14 mb-80'>
        <img src="yazi2.png" alt="" className='w-[1200px]' />
      </div>
          <div className='mt-12 w-full h-auto'>
        <img src="/footer.png" alt="" />
      </div>
      
    </div>
  )
}

export default AboutPage
