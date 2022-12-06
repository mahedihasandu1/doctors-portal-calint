import React from 'react';


const AvailableAppointmentOption = ({ options,setTreatment }) => {
    const { name, slots,price } = options
    return (
        <div className="card shadow-xl">
            <div className=" card-body">
                <h2 className="text-center text-2xl text-secondary">{name}</h2>
                <p className='text-center'>{slots.length >0 ? slots[0]:'Today Closed'}</p>
                <p className='text-center'>{slots.length} {slots.length>1? 'spaces':'space'} Available</p>
                <p className='text-center'>Price :$ {price}</p>
                

                <div className="card-actions justify-center">
                   <label onClick={()=>setTreatment(options)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointmentOption;