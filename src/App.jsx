import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import KeyFaetures from './components/KeyFaetures'
import PricingPlans from './components/PricingPlans'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <KeyFaetures />
      <PricingPlans />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App