import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleUser } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        googleUser()
        .then(result => {
            // console.log(result.user)
            const loggedUser = result.user
            const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedUser)
            })
                .then(res => res.json())
                .then(() => {
                    // console.log(data)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully user login!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    navigate(from, { replace: true });
                })
        })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn btn-primary mt-5 w-2/3'><FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;