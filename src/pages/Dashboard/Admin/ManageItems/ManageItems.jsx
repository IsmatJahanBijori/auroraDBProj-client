import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { RxUpdate } from "react-icons/rx";
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
const ManageItems = () => {

    // const [catalog, setCatalog] = useState([])
    // // const {loading}=useContext(AuthContext)
    // // if(loading){
    // //     <span className="loading loading-ring loading-lg"></span>
    // // }
    // // const bookInfo = useLoaderData()
    // // const {  _id } = bookInfo


    //     useEffect(() => {
    //     fetch('http://localhost:5000/books',{
    //         method:'GET'
    //     })
    //         .then(res => res.json())
    //         .then(data => setCatalog(data))
    // }, [])

    // const handleUpdate=(_id)=>{
        
    // }

    const [axiosSecure]=useAxiosSecure()
    const { data: catalog = [], refetch } = useQuery(['books'], async () => {
        const res = await axiosSecure.get('/books')
        return res.data
    })
    
    const handleDelete=(item)=>{
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
                fetch(`http://localhost:5000/books/${item._id}`,
                {
                    method: 'DELETE'
                }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: `${item.title} is deleted now`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

            }
        })
    }
    return (
        <div>
            <h2 className='text-4xl my-3 text-center'>Manage Items</h2>
            <hr className='mb-5' />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>              
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            catalog.map((item, index) =>
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
            </div>
        </div>
    );
};

export default ManageItems;

{/**
<th>Update</th>
<td>{<Link to={`/updateItem/${_id}`}><button onClick={() => handleUpdate(item._id)} className='button1 btn btn-active btn-ghost my-1'><RxUpdate /></button></Link>}</td> */}