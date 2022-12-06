import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [createUserEmail, setCreateUserEmail] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext)
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from.pathname || '/'
    const provider = new GoogleAuthProvider()
    const [token] = useToken(createUserEmail)
    if (token) {
        navigate('/')
    }
    const handleSignUp = data => {
        createUser(data.email, data.password, data)
            .then(result => {
                setSignUPError('')
                const user = result.user
                toast.success('User Created Successfully')
                handleUpdateUser(data)
                console.log(user)

            })
            .catch(error => {
                setSignUPError(error.message)
            })
    }
    const handleUpdateUser = (data) => {
        const userInfo = {
            displayName: data.name
        }
        updateUser(userInfo)
            .then(() => {
                saveUser(data.name, data.email)
            })
            .catch(error => { console.error(error) })
    }
    const handleGoogleLogin = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch(`https://doctors-portal-server-nine-cyan.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setCreateUserEmail(email)
                navigate(from, { replace: true })
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <Toaster />
            <div className='w-96 p-7 shadow-lg rounded-lg' >
                <h1 className='text-xl text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password Required',
                            minLength: { value: 6, message: "Password must be 6 characters " },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong' }
                        })} className="input input-bordered w-full max-w-xs" />

                        {errors.password &&
                            <p className='text-red-600' >{errors.password?.message}</p>}
                    </div>
                    <div>
                        {
                            signUpError && <p className='text-red-600'>{signUpError}</p>
                        }
                    </div>
                    <input className='btn btn-accent w-full my-2' value={"Sign Up"} type="submit" />
                    <p>Already have an Account<Link className='text-secondary font-semibold' to='/login'>Please LogIn</Link></p>
                    <div className="divider">OR</div>
                   
                </form>
                <button onClick={handleGoogleLogin} className='btn-outline btn w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;