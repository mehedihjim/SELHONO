import ContactImg1 from '../assets/Contact-1.png'
import ContactImg2 from '../assets/Contact-2.png'

const ContactSection = () => {
    return (
        <section className="w-container flex justify-between mx-auto">
            <div
                className="w-1/2 bg-cover bg-center h-[500px]"
                style={{ backgroundImage: `url(${ContactImg1})` }}
            >

            </div>
            <div
                className="w-1/2 bg-cover bg-center h-[500px]"
                style={{ backgroundImage: `url(${ContactImg2})` }}
            >

            </div>
        </section>
    )


}

export default ContactSection