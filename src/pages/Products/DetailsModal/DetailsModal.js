import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const DetailsModal = ({ setSelectedProduct, selectedProduct }) => {
    const { id, title, price, images, description, brand, discountPercentage } = selectedProduct;
    const handleAddToCart = () => {
        console.log(selectedProduct);
    }
    return (
        <div className=' overflow-y-none'>
            <input type="checkbox" id="products-detail-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-slate-900 overflow-y-none">
                    <label onClick={() => setSelectedProduct(null)} htmlFor="products-detail-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <Carousel>
                        {
                            images.map(image =>
                                <figure className="px-5 pt-5">
                                    <img src={image} alt="Shoes" className="rounded-xl max-w-md" />
                                </figure>
                            )
                        }
                    </Carousel>

                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{description}</p>
                    <div className="modal-action">
                        <label onClick={handleAddToCart} className="btn btn-sm btn-accent">Add to cart</label>
                        <label htmlFor="products-detail-modal" onClick={()=>setSelectedProduct(null)} className="btn-sm btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;