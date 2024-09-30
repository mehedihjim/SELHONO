import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/SELHONO-Logo.png';
import { Link, useLocation } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchBox, setSearchBox] = useState(false);
    const searchRef = useRef(null);
    const location = useLocation();

    const isHomeActive = location.pathname === '/' || location.pathname === '/home';

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 50) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Hide search box when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchBox(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`z-50 w-full sticky top-0 left-0 backdrop-blur-lg transition-all duration-300 ${isScrolled ? 'pt-[36px] pb-[22px] border-b border-slate-300' : 'pt-[54px] pb-[66px]'}`}>
            <div className="w-container flex justify-between mx-auto">
                <img src={Logo} alt="Logo" />
                <div className="flex gap-[46px]">
                    <ul className="flex gap-[48px] my-auto font-secondary font-medium leading-[125%] text-[22px] text-[#292F36]">
                        <li>
                            <Link
                                to='/'
                                className={`${isHomeActive ? 'text-[#C76904]' : 'text-black'} hover:text-[#C76904]/60 duration-300`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about-us'
                                className={`${location.pathname === '/about-us' ? 'text-[#C76904]' : 'text-black'} hover:text-[#C76904]/60 duration-300`}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/services'
                                className={`${location.pathname === '/services' ? 'text-[#C76904]' : 'text-black'} hover:text-[#C76904]/60 duration-300`}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/projects'
                                className={`${location.pathname === '/projects' ? 'text-[#C76904]' : 'text-black'} hover:text-[#C76904]/60 duration-300`}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/blogs'
                                className={`${location.pathname === '/blogs' ? 'text-[#C76904]' : 'text-black'} hover:text-[#C76904]/60 duration-300`}
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/contact'
                                className={`${location.pathname === '/contact' ? 'text-[#C76904]' : 'text-black'} hover:text-[#C76904]/60 duration-300`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="my-auto relative" ref={searchRef}> {/* Ref for the search icon and box */}
                        <LuSearch onClick={() => setSearchBox(!searchBox)} className="cursor-pointer text-[22px]" /> {/* Toggle search box */}
                        {searchBox && (
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-[220px] outline-none px-2 py-3 border-b border-slate-300 bg-white absolute top-[160%] right-0"
                            />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
