
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
   
    const { data: doctors = [], isLoading ,refetch} = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            try {
                const res = await fetch(`https://doctors-portal-server-nine-cyan.vercel.app/dashboard/doctors`, {
                    headers: {
                        authorization:`bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = res.json();
                return data
            }
            catch (error) {
                console.log(error)
            }
        }
    });
    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const handleDeleteDoctor=doctor=>{
        fetch(`https://doctors-portal-server-nine-cyan.vercel.app/dashboard/doctors/${doctor?._id}`,{
            method:'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
            
        }).then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                toast.success('Doctor Delete Successfully')
                refetch()
            }
            
        })
    };


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Toaster/>
            <h1 className='text-3xl font-semibold' >Manage Doctors : {doctors?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors&&
                            doctors.map((doctor, i) =>

                                <tr key={doctor._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img alt='doctor' src={doctor.image} />
                                        </div>
                                    </div></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>< label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn-sm btn btn-error " > Delete</label ></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor &&
                <ConfirmationModal
                    title={`Are you sure want to delete ? `}
                    message={`If you delete ${deletingDoctor.name}.It cannot be undone.`}
                    handleDeleteDoctor={handleDeleteDoctor}
                    modalData={deletingDoctor}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;