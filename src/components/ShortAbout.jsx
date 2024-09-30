import { Link } from 'react-router-dom'
import { IoMdArrowForward } from "react-icons/io";

const ShortAbout = () => {
    return (
        <section className='pb-[154px]'>
            <div className="w-container mx-auto">
                <div className="flex justify-between">
                    <div className="w-[358px] h-[225px] bg-white duration-300 flex flex-col justify-between text-center">
                        <h4 className='font-primary font-normal text-[25px] text-[#292F36] leading-[125%] flex gap-[10px] mx-auto'>Project Plan</h4>
                        <p className='mx-auto font-secondary font-normal text-[22px] leading-[150%] tracking-[1%] text-[#4D5053] flex gap-[10px]'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <Link to='/' className='mx-auto font-secondary font-semibold text-lg text-[#4D5053] leading-[125%] tracking-[2%] flex gap-[10px] hover:pl-2 duration-300'>Read More<IoMdArrowForward className='my-auto' /></Link>
                    </div>
                    <div className="w-[358px] h-[225px] bg-white duration-300 flex flex-col justify-between text-center">
                        <h4 className='font-primary font-normal text-[25px] text-[#292F36] leading-[125%] flex gap-[10px] mx-auto'>Interior Work</h4>
                        <p className='mx-auto font-secondary font-normal text-[22px] leading-[150%] tracking-[1%] text-[#4D5053] flex gap-[10px]'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <Link to='/' className='mx-auto font-secondary font-semibold text-lg text-[#4D5053] leading-[125%] tracking-[2%] flex gap-[10px] hover:pl-2 duration-300'>Read More<IoMdArrowForward className='my-auto' /></Link>
                    </div>
                    <div className="w-[358px] h-[225px] bg-white duration-300 flex flex-col justify-between text-center">
                        <h4 className='font-primary font-normal text-[25px] text-[#292F36] leading-[125%] flex gap-[10px] mx-auto'>Realization</h4>
                        <p className='mx-auto font-secondary font-normal text-[22px] leading-[150%] tracking-[1%] text-[#4D5053] flex gap-[10px]'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <Link to='/' className='mx-auto font-secondary font-semibold text-lg text-[#4D5053] leading-[125%] tracking-[2%] flex gap-[10px] hover:pl-2 duration-300'>Read More<IoMdArrowForward className='my-auto' /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShortAbout