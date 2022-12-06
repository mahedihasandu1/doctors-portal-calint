import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate ,refetch}) => {
    const { user } = useContext(AuthContext)
    const { name, slots ,price} = treatment
    const date = format(selectedDate, 'PP')
    console.log(user);
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const slot = form.slot.value;
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value
        const booking = {
            treatMent: name,
            Date: date,
            patient,
            slot,
            email,
            phone,
            price
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Booking Confirmed')
                    refetch()
                }
                else{
                    toast.error(data.message)
                }
                console.log(data)
                setTreatment(null)
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">  {name}</h3>
                    <form onSubmit={handleSubmit} className='grid gap-3 mt-10'>
                        <input  type="text" readOnly disabled value={date} className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input defaultValue={user?.displayName} name='name' readOnly type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <input readOnly defaultValue={user?.email} name='email' type="email" placeholder="Your Email" className="input input-bordered w-full " />
                        <input required name='phone' type="text" placeholder="Phone" className="input input-bordered w-full " />
                        {
                            user?.uid ?<input required type="submit" value="Submit" className='w-full btn btn-enable' />:
                            <input required type="submit" disabled value="Submit" className='w-full btn btn-enable' />
                        }
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;