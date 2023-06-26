import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const BookCatalog = ({ bookCatalog }) => {
    const { image, title, price, _id } = bookCatalog;
    const {loading}=useContext(AuthContext)
    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }
    return (
        <Link to={`/books/${_id}`}>
            <div className='relative transition duration-100 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                <img src={image} alt="" className='object-cover w-full' />
                <div className='bg-black px-6 py-4 bg-opacity-50 opacity-0 hover:opacity-50 absolute inset-0 transition-opacity duration-100 flex flex-col'>
                    <p className='text-black font-extrabold'>Title: {title}</p>
                    <br />
                    <p className='text-black font-extrabold mt-auto'>Price: {price}</p>
                    <br />
                </div>
            </div>
        </Link>
    );
};

export default BookCatalog;