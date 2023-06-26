import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    // const [bookInfo, setBookInfo] = useState([]);
    const bookInfo = useLoaderData()
    console.log(bookInfo)
    return (
        <div className="hero max-h-screen bg-base-100 m-32">
            <div className="hero-content flex-col lg:flex-row">
                <img src={bookInfo.image} className="rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookInfo.title}</h1>
                    <p className="py-6">{bookInfo.subtitle}</p>
                    <p className="py-6">{bookInfo.price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;