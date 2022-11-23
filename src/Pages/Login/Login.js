import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const [logInError, setLoginError] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleLogin, forgetPassword } = useContext(AuthContext)
    let navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from.pathname || '/'
    const provider = new GoogleAuthProvider()

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogIn = data => {
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email)
                console.log(user)
            }).catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            })

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
    const resetPassword = () => {
        forgetPassword()

    }
    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-lg rounded-lg' >
                <h1 className='text-xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogIn)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email &&
                            <p className='text-red-600' >{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password Required',
                            minLength: { value: 6, message: "Password must be 6 characters " }
                        })} className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            <button onClick={resetPassword} >Forget Password</button>
                        </label>
                        {errors.password &&
                            <p className='text-red-600' >{errors.password?.message}</p>}
                    </div>
                    <div>
                        {
                            logInError && <p className='text-red-600'>{logInError}</p>
                        }
                    </div>
                    <input className='btn btn-accent w-full my-2' value={"Login"} type="submit" />
                    <p>New To Doctors Portal<Link className='text-secondary font-semibold' to='/signup'>Create New Account</Link></p>
                    <div className="divider">OR</div>
                   
                </form>
                <button onClick={handleGoogleLogin} className='btn-outline btn w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;