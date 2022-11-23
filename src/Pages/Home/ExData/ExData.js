import React from 'react';
import image from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ExData = () => {
    return (
        <div className="hero my-44">
            <div className="hero-content  flex-col lg:flex-row">
                <img alt='' src={image} className=" lg:w-1/3 lg:mr-44  rounded-lg shadow-2xl" />
                <div className='lg:mr-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExData;