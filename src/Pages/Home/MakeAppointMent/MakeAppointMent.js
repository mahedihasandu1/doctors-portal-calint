import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointMent from  '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointMent = () => {
    return (
        <section className=''
        
        style={{background:`url(${appointMent})`}}>
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={doctor} className="lg:w-1/2 hidden md:block rounded-lg -mt-48 -mb-5 " />
                    <div>
                        <h3 className='text-xl font-bold text-primary'>Appointment</h3>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                       <Link to='/appointment'>   <PrimaryButton>AppointMent</PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointMent;