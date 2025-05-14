import React from 'react';

export default function Cart({ cart, onRemove }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <div className="p-4 border rounded bg-white mt-6">
            <h2 className="text-xl font-bold">Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="flex justify-between mt-2">
                            <span>{item.name}</span>
                            <button className="text-red-500 hover:underline" onClick={() => onRemove(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <p className="mt-2 font-semibold">Total: ${total}</p>
                </div>
            )}
        </div>
    );
}
