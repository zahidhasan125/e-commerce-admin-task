import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import DeleteModal from '../Cart/DeleteModal/DeleteModal';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8082/orders?email=${user?.email}`, {
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
    const handleRemoveFromCart = item => {
        fetch(`http://localhost:8082/cart?id=${item._id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('e-shop-task-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Item deleted successfully!');
                    refetch();
                }
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div className='text-white'>
            {orders.length > 0
                ?
                <h2 className='text-center text-4xl font-bold my-6'>All ordered items</h2>
                :
                <h2 className='text-center text-4xl font-bold my-6'>No Items Found. Please Add Products to Cart.</h2>
            }
            {
                orders.length > 0 && <div className="overflow-x-auto w-full">
                    <table className="table w-full text-black">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Customer Email</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.thumbnail} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.title}</div>
                                                <div className="text-sm opacity-50">${item.price}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.customer}</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td className='font-bold'>${item.quantity * item.price}</td>
                                    <th>
                                        <button className="btn btn-success btn-xs mr-2">Checkout</button>
                                        <label htmlFor='delete-confirm-modal' onClick={() => setSelectedProduct(item)} className="btn btn-error btn-xs">Remove</label>
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Customer Email</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>}
                <div>
                {
                    selectedProduct && <DeleteModal
                        handleRemoveFromCart={handleRemoveFromCart}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    ></DeleteModal>
                }
            </div>
        </div>
    );
};

export default Orders;