import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center my-8 text-white'>
            <h1 className='text-4xl'>Hello Admin</h1>
            <h3 className='text-3xl font-bold'>Welcome to Admin Panel</h3>
            <p className='text-lg'>Please <Link to="/login" className='underline'>Login</Link> to access your Dashboard</p>
        </div>
    );
};

export default Home;