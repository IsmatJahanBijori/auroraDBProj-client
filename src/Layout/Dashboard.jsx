import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import '../index.css'
const Dashboard = () => {
    const isAdmin = true
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-20">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    {/* Sidebar content here */}
                    {isAdmin ?
                        <React.Fragment>
                            <li><NavLink to='manageUsers' className="hover:text-blue-700 bg-slate-100 font-semibold">Manage Users</NavLink></li>
                            <li><NavLink to='addItem' className="hover:text-blue-700 bg-slate-100 font-semibold">Add Item</NavLink></li>
                            <li><NavLink to='updateItem' className="hover:text-blue-700 bg-slate-100 font-semibold">Update Item</NavLink></li>
                        </React.Fragment>
                        :

                        <React.Fragment>
                            <li><NavLink to='' className="hover:text-blue-700 bg-slate-100 font-semibold">Sidebar Item 1</NavLink></li>
                            <li><NavLink to='' className="hover:text-blue-700 bg-slate-100 font-semibold">Sidebar Item 1</NavLink></li>
                        </React.Fragment>}

                    <hr className='w-full border-black my-5' />

                    <React.Fragment>
                        <li><NavLink to='/' className="hover:text-blue-700 bg-slate-100 font-semibold">Home</NavLink></li>
                        <li><NavLink to='/catalog' className="hover:text-blue-700 bg-slate-100 font-semibold">Product Catalog</NavLink></li>
                    </React.Fragment>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;