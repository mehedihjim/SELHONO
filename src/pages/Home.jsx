import React from 'react'
import Hero from '../components/Hero'
import ShortAbout from '../components/ShortAbout'
import ContactSection from '../components/ContactSection'

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <ShortAbout />
            <ContactSection />
        </div>
    )
}

export default Home