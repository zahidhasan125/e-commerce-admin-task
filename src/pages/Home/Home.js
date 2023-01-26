import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='text-center my-8 text-white'>
            <h1 className='text-4xl'>Hello Admin</h1>
            <h3 className='text-3xl font-bold'>Welcome to Admin Panel</h3>
            {
                user ? <p className='text-lg'>Please <Link to="/products" className='underline'>Continue</Link> Shopping!</p>
                    :
                    <p className='text-lg'>Please <Link to="/login" className='underline'>Login</Link> to access your Dashboard</p>}
        </div>
    );
};

export default Home;