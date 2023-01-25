import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => setData(res.data.products))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='text-white'>
            Your Product will show here {data.length}
        </div>
    );
};

export default Products;