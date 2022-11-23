import React from 'react';
import bgContact from "../../../assets/images/appointment.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='text-center rounded-md py-10' style={{background:`url(${bgContact})`}}>
            <div className='my-20 '>
                <h2 className='text-primary text-lg nb-2'>Contact Us</h2>
                <h2 className='text-white text-3xl'>Stay Connected With Us</h2>
            </div>
            <div className='flex flex-col gap-5 items-center mb-10 '>
                <input type="email" placeholder="Your Email" className="input lg:w-1/3" />
                <input type="text" placeholder="Subject" className="input  lg:w-1/3" />
                <input type="text" placeholder="Your Message" className="input text-start h-44  lg:w-1/3" />
            </div>
            <PrimaryButton>Submit</PrimaryButton>
        </section>
    );
};

export default ContactUs;