import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-4xl text-center font-bold mt-4'>Login</h2>
                    <form className="card-body pt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <label className="label">
                            <span className="label-text-alt">New to E-Shop? <Link to="/signup" className='link link-hover text-md text-cyan-500 font-bold'>Sign Up</Link></span>
                        </label>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;