import React from 'react';
import useCart from '../../../../hooks/useCart';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';

const MyCart = () => {

    const [cart, refetch] = useCart()
    console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const totalPrice = parseFloat(total.toFixed(2));

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h2 className='text-4xl my-3 text-center'>My Carts</h2>
            <hr className='mb-5' />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Title</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>$ {item.price}</td>
                                    <td>{<button onClick={() => handleDelete(item)} className='button1 btn btn-active btn-ghost my-1'><FaTrash /></button>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <h1 className='text-left mt-5 font-bold'>Total Price: $ {totalPrice}</h1>
            </div>
        </div>
    );
};


export default MyCart;