import React from 'react';

export default function ProductCard({ product, onAdd }) {
    return (
        <div className="border p-4 rounded shadow-md bg-white product-card">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded"/>
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-sm text-gray-600">${product.price}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 button"
                    onClick={() => onAdd(product)}>
                Add to Cart
            </button>
        </div>
    );
}