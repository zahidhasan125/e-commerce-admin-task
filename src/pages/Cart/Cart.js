import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const { data: cartItems = [], isLoading, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8082/cart?email=${user?.email}`)
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <progress className="progress w-full mx-auto"></progress>;
    }
    console.log(cartItems);

    const handleRemoveFromCart = item => {
        fetch(`http://localhost:8082/cart?id=${item._id}`, {
            method: "DELETE"
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
            {cartItems.length > 0
                ?
                <h2 className='text-center text-4xl font-bold my-6'>Items Added on Cart</h2>
                :
                <h2 className='text-center text-4xl font-bold my-6'>No Items Found. Please Add Products to Cart.</h2>
            }
            {
                cartItems.length>0 && <div className="overflow-x-auto w-full">
                    <table className="table w-full text-black">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((item, idx) => <tr key={item._id}>
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
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <th>
                                        <button className="btn btn-success btn-xs mr-2">Checkout</button>
                                        <button onClick={() => handleRemoveFromCart(item)} className="btn btn-error btn-xs">Remove</button>
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>}
        </div>
    );
};

export default Cart;