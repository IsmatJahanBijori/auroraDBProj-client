import React, { useContext, useEffect, useState } from 'react';
import BookCatalog from './BookCatalog';
import { AuthContext } from '../../Provider/AuthProvider';

const Catalog = () => {
    const [catalog, setCatalog] = useState([])
    const {loading}=useContext(AuthContext)
    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }
        useEffect(() => {
        fetch('http://localhost:5000/books',{
            method:'GET'
        })
            .then(res => res.json())
            .then(data => setCatalog(data))
    }, [])
    console.log(catalog)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 text-center gap-10 mx-20 my-20'>
        {
            catalog.map(bookCatalog=><BookCatalog key={bookCatalog._id} bookCatalog={bookCatalog}></BookCatalog>)
        }
        </div>
    );
};

export default Catalog;