import {  useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AvailableAppointmentOption from './AvailableAppointmentOption';

const AvailableAppointMent = ({ selectedDate }) => {
    // const [availableOptions, setAvailableOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
   const date=format(selectedDate,'PP')


    // const {data:availableOptions=[]}=useQueries({
    //     queryKey:['availableOptions'],
    //     queryFn:()=>fetch('http://localhost:5000/availableOptions')
    //     .then(res => res.json())

    // })
    const { data: availableOptions = [],refetch ,isLoading} = useQuery({
        queryKey: ['availableOptions',date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/availableOptions?date=${date}`)
            const data = await res.json();
            return data
        }
    });
    if(isLoading){
        return <Loading></Loading>
    }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/availableOptions`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAvailableOptions(data)
    //             console.log(data);
    //         })
    // }, [])
    return (
        <section className='mt-20'>
            <p className='text-center text-lg font-bold text-secondary '>Available Appointment On :{format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    availableOptions.map(options => <AvailableAppointmentOption
                        key={options._id}
                        options={options}
                        setTreatment={setTreatment}
                    ></AvailableAppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    treatment={treatment}
                    refetch ={refetch}
                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointMent;