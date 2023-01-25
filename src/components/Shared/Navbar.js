import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const menuItems = user && <>
        <li><Link to='/products'>Products</Link></li>
        <li><Link>Cart</Link></li>
        <li><Link>Orders</Link></li>
        <li><Link>Customers</Link></li>
    </>

    const handleLogOut = () => {
        console.log('logout');
        logout()
            .then(res => { })
        .catch(err=>console.error(err))
    }

    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">E-SHOP</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menuItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link onClick={handleLogOut} className="btn">Log Out</Link>
                        :
                        <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;