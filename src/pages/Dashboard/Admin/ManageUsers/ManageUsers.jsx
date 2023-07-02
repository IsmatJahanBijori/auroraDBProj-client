import React, { useEffect, useState } from 'react';
import { FaUserTag } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const ManageUsers = () => {
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/users').then(res => res.json()).then(data => setUsers(data))
    // }, [])
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    // const { user } = useContext(AuthContext)

    const handleAdmin = (user) => {
        if (user) {
            fetch(`http://localhost:5000/users/admin/${user._id}`,
                {
                    method: 'PATCH'
                }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: `${user.name} is admin now`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }
    return (
        <div>
            <h2 className='text-4xl my-3 text-center'>Manage Users</h2>
            <hr className='mb-5' />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'Admin' ? 'Admin' : <button onClick={() => handleAdmin(user)} className='button1 btn btn-active btn-ghost my-1'><FaUserTag />Make Admin</button>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;