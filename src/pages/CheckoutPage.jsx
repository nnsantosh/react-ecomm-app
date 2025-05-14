import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
    const { cartItems, setCartItems } = useContext(CartContext); // Include setCartItems
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        address: '',
        cardNumber: '',
    });
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order placed:', { userDetails, cartItems });
        setCartItems([]); // Reset the cart to empty
        navigate('/thank-you'); // Navigate to ThankYouPage
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Checkout</h1>
            {cartItems.length > 0 ? (
                <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                        {cartItems.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    width: '150px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                        width: '100%',
                                        height: '100px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{item.name}</h3>
                                <p style={{ fontSize: '14px', color: '#555' }}>${item.price}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <h2>Total: ${calculateTotal()}</h2>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            maxWidth: '400px',
                            margin: '20px auto',
                            padding: '20px',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>User Details</h3>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleInputChange}
                                required
                                style={{
                                    width: '90%',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={userDetails.email}
                                onChange={handleInputChange}
                                required
                                style={{
                                    width: '90%',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Address</label>
                            <textarea
                                name="address"
                                value={userDetails.address}
                                onChange={handleInputChange}
                                required
                                style={{
                                    width: '90%',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    resize: 'none',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Card Number</label>
                            <textarea
                                name="cardNumber"
                                value={userDetails.cardNumber}
                                onChange={handleInputChange}
                                required
                                style={{
                                    width: '90%',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    resize: 'none',
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#28A745',
                                color: '#fff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                width: '100%',
                            }}
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            ) : (
                <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CheckoutPage;