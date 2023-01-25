import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row-reverse w-full md:w-3/5 lg:max-w-sm">
                <div className="card shadow-2xl w-full border-t">
                    <h2 className='text-4xl text-center font-bold mt-4 text-white'>Sign Up</h2>
                    <form className="card-body pt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Full Name</span>
                            </label>
                            <input type="text" placeholder="John Doe" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="john@example.com" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="P@$$w0Rd" className="input input-bordered" />
                        </div>
                        <label className="label">
                            <span className="label-text-alt text-white">Already have an account? <Link to="/login" className='link link-hover text-md text-cyan-500 font-bold'>Login</Link></span>
                        </label>
                        <div className="form-control mt-4">
                            <button className="btn btn-outline text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;