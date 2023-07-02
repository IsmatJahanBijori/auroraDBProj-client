import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Toaster, toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onSubmit = (data) => {
        console.log(data.name, data.email, data.password, data.photo)
        createUser(data.email, data.password)
            .then(result => {
                const savedUser = { name: data.name, email: data.email }
                console.log(result.user)
                updateUserProfile(data.name, data.photo)
                    .then(() => {

                        console.log("User profile updated")

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    // reset();
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                })
                    .catch(error =>
                        console.log(error.message))
            };

        return (
            <form onSubmit={handleSubmit(onSubmit)} className='w-full ml-5 mr-5 md:w-1/4 md:mx-auto mt-20 mb-10'>

                {/*Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered bg-slate-200"
                        {...register("name", { maxLength: 20 })}
                    />
                </div>

                {/*Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered bg-slate-200"
                        {...register("email")}
                    />
                </div>


                {/*photo url */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoUrl</span>
                    </label>
                    <input
                        type="url"
                        name="photo"
                        placeholder="Photo"
                        className="input input-bordered bg-slate-200"
                        {...register("photo")}
                    />
                </div>

                {/*password */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input placeholder='Give your Password' className="input input-bordered bg-slate-200"
                        type={passwordVisible ? 'text' : 'password'}
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                        })}
                    />
                    {errors.password?.type === 'required' && <span className='text-red-700'>This field is required</span>}
                    {errors.password?.type === 'minLength' && (
                        <span className='text-red-700'>Password must be at least 6 characters long</span>
                    )}
                    {errors.password?.type === 'pattern' && (
                        <span className='text-red-700'>Password must contain a capital letter and a special character</span>
                    )}
                    <div className='btn mt-5 w-1/3' onClick={togglePassword}>{passwordVisible ? <FaEyeSlash className='w-10' /> : <FaEye className='w-10' />}</div>
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input placeholder='Confirm your Password' className="input input-bordered bg-slate-200"
                        type={passwordVisible ? 'text' : 'password'}
                        {...register("confirmPassword", {
                            required: true,
                            validate: (value) => value === watch("password"),
                        })}
                    />
                    {errors.confirmPassword && (
                        <span className='text-red-700'>Passwords do not match</span>
                    )}
                </div>
                <input type="submit" className='btn btn-primary mt-5 w-2/3' value="Submit" />

                <p className='mt-3'>Already Have An Account?Please <Link to='/login' className='font-bold'>Login</Link></p>
                <SocialLogin />
            </form>
        );

    };

    export default Signup;