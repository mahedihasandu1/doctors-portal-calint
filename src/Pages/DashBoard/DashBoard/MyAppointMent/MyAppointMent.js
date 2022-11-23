import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyAppointMent = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings = [] ,isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json()
            return data
        }

    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text=3xl font-semibold mb-5'>My Appointment</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, I) =>

                                <tr key={booking._id} booking={booking} className="hover">
                                    <th>{I + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatMent}</td>
                                    <td>{booking.Date}</td>
                                    <td>{booking.slot}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointMent;