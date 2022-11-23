import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key
    // console.log(imageHostKey);

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`)
            const data = res.json()
            return data
        }

    })
    const handleAddDoctor = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    // console.log();
                    const doctorData = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch(`http://localhost:5000/dashboard/addDoctor`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorData)
                    }).then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`${data.name} Add Successfully`)
                                navigate('/dashboard/manageDoctors')
                            }
                        })
                }
            })


    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7'>
            <Toaster />
            <h1 className='text-3xl font-semibold'>Add a New Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: "Please enter your name" })} className="input input-bordered w-full max-w-xs" />
                    {errors.name &&
                        <p className='text-red-600' >{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.email &&
                        <p className='text-red-600' >{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register("specialty")}
                        className="select select-bordered w-full max-w-xs">
                        {/* <option disabled selected>Please select a Specialty</option> */}
                        {
                            specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("img", { required: "Please upload Your Image" })} className="input input-bordered w-full max-w-xs" />
                    {errors.img &&
                        <p className='text-red-600' >{errors.img?.message}</p>}
                </div>
                <input className='btn btn-accent w-full my-2' value={"Add Doctor"} type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;