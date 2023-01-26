import React, { useState } from 'react';
import DetailsModal from '../DetailsModal/DetailsModal';

const ProductCard = ({ product }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { title, price, thumbnail, brand, discountPercentage } = product;
    return (
        <div className="card bg-opacity-10 hover:bg-opacity-25 bg-slate-400 shadow-xl">
            <figure className="px-5 pt-5 min-h-[268px]">
                <img src={thumbnail} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start p-5">
                <h2 className="card-title">{title}</h2>
                <h3 className='font-bold'>Price: ${price}</h3>
                <p>Brand: {brand}</p>
                <p>Discount: {discountPercentage}%</p>
                <div className="card-actions">
                    <label onClick={() => setSelectedProduct(product)} htmlFor="products-detail-modal" className="btn btn-accent btn-sm text-white">View Details</label>
                </div>
            </div>
            {
                selectedProduct && <DetailsModal
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                ></DetailsModal>
            }
        </div>
    );
};

export default ProductCard;