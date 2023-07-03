import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const SingleBook = () => {
    // const [bookInfo, setBookInfo] = useState([]);
    const bookInfo = useLoaderData()
    const { title, subtitle, image, price } = bookInfo
    // console.log(bookInfo)
    const { user } = useContext(AuthContext)
    const handleBuy = (bookInfo) => {
        if (user) {
            const orderItem = { itemId: bookInfo._id, title, subtitle, image, price, email: user?.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Item Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }

    return (
        <div className="hero max-h-screen bg-base-100 m-32">
            <div className="hero-content flex-col lg:flex-row">
                <img src={bookInfo.image} className="rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookInfo.title}</h1>
                    <p className="py-6">{bookInfo.subtitle}</p>
                    <p className="py-6">{bookInfo.price}</p>
                    <button onClick={() => handleBuy(bookInfo)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;