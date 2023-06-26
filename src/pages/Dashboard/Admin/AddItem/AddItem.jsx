import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        
        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product added successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }})
    }
    return (
        <div className="hero min-h-screen bg-slate-100">
            <div className="card w-[500px] shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-4xl">Add New item</h1>

                        {/**book image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                        </div>

                        {errors.image && <span className='text-red-300 mt-5'>This field is required</span>}


                        {/**Book Title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder='Product Title' {...register("title", { required: true })} className="input input-bordered max-w-xs" />
                        </div>
                        {errors.title && <span className='text-red-300 mt-5'>This field is required</span>}

                        {/**Book Subtitle */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">SubTitle</span>
                            </label>
                            <input type="text" placeholder='Product SubTitle' {...register("subtitle", { required: true })} className="input input-bordered max-w-xs" />
                        </div>
                        {errors.subtitle && <span className='text-red-300 mt-5'>This field is required</span>}

                        {/**Price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">$ Price</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered max-w-xs" />
                        </div>
                        {errors.price && <span className='text-red-300 mt-5'>This field is required</span>}


                        <div className="form-control mt-6">
                            <input className="btn btn-info max-w-xs" type="submit" value="Add Item" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;