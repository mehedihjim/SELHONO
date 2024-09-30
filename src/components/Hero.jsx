import heroImg from '../assets/Hero.png'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
    return (
        <div className='pt-[70px] pb-[95px]'>
            <div className="w-container flex justify-between mx-auto">
                <div className="relative w-full h-[758px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
                    <img src={heroImg} alt="" />
                    <div className="absolute top-[50%] left-[25px] -translate-y-[50%] z-10">
                        <h1 className='font-primary font-normal text-[65px] text-white w-[699px] leading-[125%] mb-[9px]'>Let's make your
                            home beautiful together</h1>
                        <p className='font-secondary font-medium text-[22px] text-white w-[470px] leading-[150%] tracking-[1%] mb-[28px]'>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                        <Link to='/' className='flex gap-[10px] w-fit rounded-[18px] py-[25px] px-[47px] border border-[#CDA274] bg-[#CDA274] hover:bg-transparent text-white leading-[125%] tracking-[2%] font-secondary font-semibold text-[18px] duration-300'>Get Started<IoMdArrowForward className='my-auto' /></Link>
                    </div>
                    <div className="w-full h-[758px] bg-black/30 absolute top-0 left-0"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero