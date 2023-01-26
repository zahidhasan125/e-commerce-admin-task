import React from 'react';

const DeleteModal = ({handleRemoveFromCart, selectedProduct, setSelectedProduct}) => {
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative bg-slate-900 text-white">
                    <label htmlFor="delete-confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure to Delete this item?</h3>
                    <p className="py-4">Product Name: { selectedProduct?.title }</p>
                    <div className="modal-action">
                        <label onClick={() => handleRemoveFromCart(selectedProduct)} htmlFor="delete-confirm-modal" className="btn btn-error">Delete</label>
                        <label onClick={()=>setSelectedProduct(null)} className="btn">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteModal;