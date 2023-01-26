import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Customers = () => {
    const { user } = useContext(AuthContext);
    const { data: customers = [], isLoading } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_dnsName}/customers?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('e-shop-task-token')}`
                }
            })
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <progress className="progress w-full mx-auto"></progress>;
    }

    return (
        <div className="overflow-x-auto">
            <h2 className='text-center text-4xl font-bold my-6 text-white'>All customers: {customers.length}</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((user, idx) => <tr key={idx} className="hover">
                            <th>{idx + 1}</th>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td>{user?.type === 'admin' ? 'Admin' : 'Buyer'}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Customers;