import React from 'react'
import Hero from '../components/Hero'
import ShortAbout from '../components/ShortAbout'
import ContactSection from '../components/ContactSection'
import Testimonials from '../components/Testimonials'
import Brands from '../components/Brands'

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <ShortAbout />
            <ContactSection />
            <Testimonials />
            <Brands />
        </div>
    )
}

export default Home