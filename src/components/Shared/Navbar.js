import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const menuItems = user &&
        <>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            {isAdmin && <>
                <li><Link to='/orders'>Orders</Link></li>
                <li><Link to='/customers'>Customers</Link></li>
            </>}
        </>

    const handleLogOut = () => {
        console.log('logout');
        logout()
            .then(res => { })
            .catch(err => console.error(err))
    }

    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-25 bg-slate-400 rounded-box w-52 font-semibold">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">E-SHOP</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {
                        menuItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link onClick={handleLogOut} className="btn btn-outline btn-error">Log Out</Link>
                        :
                        <>
                            <Link to='/login' className="btn btn-outline btn-info mr-2">Login</Link>
                            <Link to='/signup' className="btn btn-outline btn-accent">Sign Up</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;