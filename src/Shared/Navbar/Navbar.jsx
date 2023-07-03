import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully user logout!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => { console.log(error.message) })
    }

//     <Link to="/carts" className="mr-3">
//     Order
// </Link>
    const navItems = (
        <React.Fragment>
            <Link to="/" className="mr-3">
                Home
            </Link>
            <Link to="/catalog" className="mr-3">
                Product Catalog
            </Link>
            <Link to="/dashboard" className="mr-3">
                Dashboard
            </Link>
            <Link to="/about" className="mr-3">
                About Us
            </Link>
            
            {
                user ?
                    <React.Fragment>
                        
                        <Link onClick={handleLogout} to="/" className="mr-3">
                            Logout
                        </Link>
                        {
                            user ? (
                                <Link to="/" className="mr-3">
                                    <label tabIndex={0} className="btn btn-ghost">
                                        <img src={user.photoURL} className="w-8 h-8 rounded-full" alt="" />
                                    </label>
                                </Link>
                            ) : (<Link to="/" className="mr-3">
                                <label tabIndex={0} className="btn btn-ghost">
                                    <img src="https://i.ibb.co/XXrxqkq/default-user-image.png" className="w-8 h-8 rounded-full" alt="" />
                                </label>
                            </Link>)
                        }
                    </React.Fragment> :
                    <React.Fragment>
                        <Link to="/login" className="mr-3">
                            Login
                        </Link>
                        <Link to="/signup" className="mr-3">
                            SignUp
                        </Link>
                    </React.Fragment>
            }
        </React.Fragment>
    );

    return (
        <div className="navbar bg-black text-white bg-opacity-40">
            <div className="navbar-start">
                <div className="dropdown">
                    {/* sm screen */}
                    <label tabIndex={0} className="btn btn-ghost">
                        <img src="https://i.ibb.co/30vSHtY/logo.jpg" className="w-8 h-8 rounded-full" alt="" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black  font-semibold lg:hidden"
                        style={{ fontFamily: "sans-serif" }}>
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Aurora Shopping Center</a>
            </div>
            {/* lg screen */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu md:text-white  menu-horizontal px-1" style={{ fontFamily: "sans-serif", fontWeight: "300px", fontSize: "25px" }}>
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
