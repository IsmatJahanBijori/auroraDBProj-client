import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const img_api = import.meta.env.VITE_img_api_key
console.log(img_api)


const AddItem = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const img_url = `https://api.imgbb.com/1/upload?key=${img_api}`

    const onSubmit = data => {
        console.log(data)

        const formData = new FormData()
        formData.append("image", data.image[0])


        fetch(img_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData.data)
                if (imgData.success) {
                    const imgURL = imgData.data.display_url;
                    const { title, subtitle, price } = data
                    const newItem = {
                        title, subtitle, price: parseFloat(price), image: imgURL
                    }
                    fetch('http://localhost:5000/books', {
                        method:"POST",
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(newItem)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data)
                        if(data.insertedId){
                            reset()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Item added successfully',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
            })
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