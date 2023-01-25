import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => setProducts(res.data.products))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default Products;