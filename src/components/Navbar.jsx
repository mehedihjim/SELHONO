import React from 'react'
import Logo from '../assets/SELHONO-Logo.png'
import Link from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full bg-green-300 pt-[54px] pb-[66px]'>
            <div className="w-container flex justify-between mx-auto">
                <img src={Logo} alt="" />
                <ul>
                    <li><Link to='/about-us' >Home</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar