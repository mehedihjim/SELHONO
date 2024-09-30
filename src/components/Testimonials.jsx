import Testi1 from '../assets/Testi-1.jpg'
import Testi2 from '../assets/Testi-2.jpg'
import Testi3 from '../assets/Testi-3.jpg'

const Testimonials = () => {
    return (
        <div className='w-full'>
            <div className="w-container mx-auto">
                <div className="w-full py-[88px] px-[24px] bg-[#D8A876] rounded-[70px]">
                    <h2 className='font-primary font-normal leading-[125%] text-[50px] text-white tracking-[2%] w-[547px] mx-auto mb-[38px] text-center'>What the People Thinks
                        About Us</h2>
                    <div className="flex justify-between">
                        <div className="py-[53px] px-[37px] bg-white rounded-3xl hover:shadow-lg duration-300 cursor-pointer">
                            <div className="flex gap-[23px] mb-[25px]">
                                <div className="w-[77px] h-[77px] rounded-full overflow-hidden">
                                    <img src={Testi1} alt="" className='w-full' />
                                </div>
                                <div className="my-auto">
                                    <h3 className='font-primary font-normal text-[25px] text-[#292F36] leading-[150%] tracking-[1%]'>Natasha</h3>
                                    <h4 className='font-secondary font-normal text-[18px] text-[#4D5053] leading-[150%] tracking-[1%]'>Moscow, Russia</h4>
                                </div>
                            </div>
                            <p className='w-[296px] font-secondary font-normal text-[22px] text-[#4D5053] leading-[150%] tracking-[1%]'>Lorem Ipsum is simply dummy
                                text of the typesetting industry.
                                Ipsum has been.</p>
                        </div>
                        <div className="py-[53px] px-[37px] bg-white rounded-3xl hover:shadow-lg duration-300 cursor-pointer">
                            <div className="flex gap-[23px] mb-[25px]">
                                <div className="w-[77px] h-[77px] rounded-full overflow-hidden">
                                    <img src={Testi2} alt="" className='w-full' />
                                </div>
                                <div className="my-auto">
                                    <h3 className='font-primary font-normal text-[25px] text-[#292F36] leading-[150%] tracking-[1%]'>Raymond Galario</h3>
                                    <h4 className='font-secondary font-normal text-[18px] text-[#4D5053] leading-[150%] tracking-[1%]'>UK, London</h4>
                                </div>
                            </div>
                            <p className='w-[296px] font-secondary font-normal text-[22px] text-[#4D5053] leading-[150%] tracking-[1%]'>Lorem Ipsum is simply dummy
                                text of the typesetting industry.
                                Ipsum has been.</p>
                        </div>
                        <div className="py-[53px] px-[37px] bg-white rounded-3xl hover:shadow-lg duration-300 cursor-pointer">
                            <div className="flex gap-[23px] mb-[25px]">
                                <div className="w-[77px] h-[77px] rounded-full overflow-hidden">
                                    <img src={Testi3} alt="" className='w-full' />
                                </div>
                                <div className="my-auto">
                                    <h3 className='font-primary font-normal text-[25px] text-[#292F36] leading-[150%] tracking-[1%]'>Benny Roll</h3>
                                    <h4 className='font-secondary font-normal text-[18px] text-[#4D5053] leading-[150%] tracking-[1%]'>USA, New York</h4>
                                </div>
                            </div>
                            <p className='w-[296px] font-secondary font-normal text-[22px] text-[#4D5053] leading-[150%] tracking-[1%]'>Lorem Ipsum is simply dummy
                                text of the typesetting industry.
                                Ipsum has been.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials