import React from 'react';

export default function Checkout() {
    return (
        <div className="p-4 border rounded bg-white mt-6">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <form className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <input type="text" placeholder="Name" className="p-2 border rounded" />
                <input type="text" placeholder="Address" className="p-2 border rounded" />
                <button className="sm:col-span-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Place Order
                </button>
            </form>
        </div>
    );
}