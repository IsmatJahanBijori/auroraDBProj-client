import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Toaster, toast } from 'react-hot-toast';
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { loginUser } = useContext(AuthContext)
    const navigate=useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onSubmit = (data) => {
        console.log(data.email, data.password)
        loginUser(data.email, data.password)
        .then(result => {
            console.log(result.user)
            navigate(from, { replace: true });
            // toast.success('Successfully user login!')
        })
        .catch(error =>
            console.log(error.message))
    };
    const notify=()=>{
        toast.success('Successfully user login!')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full ml-5 mr-5 md:w-1/4 md:mx-auto mt-20 mb-10'>

            {/*Email */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-slate-200"
                    {...register("email")}
                />
            </div>

            {/*password */}
            <div className="form-control flex">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input placeholder='Give your Password' className="input input-bordered bg-slate-200"
                type={passwordVisible ? 'text' : 'password'} 
                    {...register("password",)}
                />
                <div className='btn mt-5 w-1/3' onClick={togglePassword}>{passwordVisible?<FaEyeSlash className='w-10'/>:<FaEye className='w-10'/>}</div>
            </div>
            <input type="submit" onClick={notify} className='btn btn-primary mt-5 w-2/3' value="Submit" />
            <Toaster
                position="top-center"
            />
            <p className='mt-3'>New To This Site?Please <Link to='/signup' className='font-bold'>Signup</Link></p>
            <SocialLogin/>
        </form>
    );

};

export default Login;