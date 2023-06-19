import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <button  className='btn btn-primary'><FaGoogle style={{ "color": "red" }} /></button>
        </div>
    );
};

export default SocialLogin;