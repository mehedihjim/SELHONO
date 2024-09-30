import ContactSectionImg from '../assets/ContactSection.png'
import { IoCallOutline } from "react-icons/io5";

const ContactSection = () => {
    return (
        <section className="w-full mb-[194px]">
            <div
                className="w-container mx-auto bg-fixed bg-cover bg-center h-[500px] px-[25px] pt-[100px]"
                style={{ backgroundImage: `url(${ContactSectionImg})` }}
            >
                <h2 className='font-primary font-normal text-[55px] leading-[125%] w-[368px] text-white mb-[20px]'>We create art
                    for modern life</h2>
                <p className='font-secondary font-medium text-[22px] leading-[150%] tracking-[1%] w-[368px] text-white mb-[20px]'>There are many variations of the passages of lorem Ipsum from
                    available, majority.</p>
                <div className="flex gap-[15px]">
                    <div className="w-[93px] h-[93px] bg-white rounded-full flex justify-center items-center text-[32px] text-[#CDA274]">
                        <IoCallOutline />
                    </div>
                    <div className="my-auto">
                        <h3 className='font-secondary font-bold text-[24px] leading-[150%] tracking-[1%] w-[368px] text-white'>012345678</h3>
                        <h4 className='font-secondary font-medium text-[22px] leading-[150%] tracking-[1%] w-[368px] text-white'>Call Us Anytime</h4>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default ContactSection