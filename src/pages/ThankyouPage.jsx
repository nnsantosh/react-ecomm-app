import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ThankYouPage() {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const [orderId, setOrderId] = useState('');

    useEffect(() => {
        // Generate a random order ID
        const generateOrderId = () => {
            return 'ORD-' + Math.floor(100000 + Math.random() * 900000);
        };
        setOrderId(generateOrderId());
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#28A745' }}>Thank You for Your Order!</h1>
            <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>
                Your order has been placed successfully.
            </p>
            <p style={{ textAlign: 'center', fontSize: '16px', color: '#333', fontWeight: 'bold' }}>
                Order ID: {orderId}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
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
                <button
                    onClick={() => navigate('/')}
                    style={{
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginTop: '20px',
                    }}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default ThankYouPage;