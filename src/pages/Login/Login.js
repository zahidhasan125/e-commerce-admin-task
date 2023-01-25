import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { user, login } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email + ' clicked ' + password);
        login(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div className="hero my-10">
            {!user ? <div className="hero-content flex-col lg:flex-row-reverse w-full md:w-3/5 lg:max-w-sm">
                <div className="card shadow-2xl w-full border-t">
                    <h2 className='text-4xl text-center font-bold mt-4 text-white'>Login</h2>
                    <form onSubmit={handleLogin} className="card-body pt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="john@example.com" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="P@$$w0Rd" className="input input-bordered" />
                        </div>
                        <label className="label">
                            <span className="label-text-alt text-white">New to E-Shop? <Link to="/signup" className='link link-hover text-md text-cyan-500 font-bold'>Sign Up</Link></span>
                        </label>
                        <div className="form-control mt-4">
                            <button className="btn btn-outline text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
                :
                <div className="hero my-10">
                    <h2 className='text-4xl text-center font-bold mt-4 text-white'>You are already logged in!</h2>
                </div>
            }
        </div>
    );
};

export default Login;