import brand1 from '../assets/Brands/Frame.png'
import brand2 from '../assets/Brands/big-commerce.png'
import brand3 from '../assets/Brands/won.png'
import brand4 from '../assets/Brands/Frame-2.png'


const Brands = () => {
    return (
        <section className='w-full pt-[188px] pb-[202px]'>
            <div className="w-container mx-auto flex justify-between ">
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
            </div>
        </section>
    )
}

export default Brands