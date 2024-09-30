import heroImg from '../assets/Hero.png'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
    return (
        <section className='pt-[40px] pb-[70px] md:pt-[70px] md:pb-[95px]'>
            <div className="w-container flex flex-col md:flex-row justify-between mx-auto px-4 md:px-0">
                <div className="relative w-full h-[450px] md:h-[758px] rounded-tl-[50px] md:rounded-tl-[100px] rounded-br-[50px] md:rounded-br-[100px] overflow-hidden">
                    <img src={heroImg} alt="" className="w-full h-full object-cover" />
                    <div className="absolute top-[50%] left-[15px] md:left-[25px] -translate-y-[50%] z-10">
                        <h1 className='font-primary font-normal text-[32px] md:text-[65px] text-white w-[90%] md:w-[699px] leading-[120%] md:leading-[125%] mb-[9px]'>
                            Let's make your home beautiful together
                        </h1>
                        <p className='font-secondary font-medium text-[16px] md:text-[22px] text-white w-[85%] md:w-[470px] leading-[140%] md:leading-[150%] tracking-[1%] mb-[20px] md:mb-[28px]'>
                            There are many variations of the passages of lorem Ipsum from available, majority.
                        </p>
                        <Link to='/' className='flex gap-[10px] w-fit rounded-[12px] md:rounded-[18px] py-[15px] md:py-[25px] px-[30px] md:px-[47px] border border-[#CDA274] bg-[#CDA274] hover:bg-transparent text-white leading-[120%] tracking-[2%] font-secondary font-semibold text-[14px] md:text-[18px] duration-300'>
                            Get Started <IoMdArrowForward className='my-auto' />
                        </Link>
                    </div>
                    <div className="w-full h-full bg-black/30 absolute top-0 left-0"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
