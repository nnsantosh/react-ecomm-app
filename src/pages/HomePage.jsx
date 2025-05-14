import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { products } from '../data/products';

function HomePage() {
    const navigate = useNavigate();
    const { cartItems, setCartItems } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        setQuantities((prev) => ({
            ...prev,
            [product.id]: (prev[product.id] || 0) + 1,
        }));
    };

    const increaseQuantity = (productId) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
        setQuantities((prev) => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1,
        }));
    };

    const decreaseQuantity = (productId) => {
        setCartItems((prevCartItems) => {
            const updatedCart = prevCartItems
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0);
            return updatedCart;
        });
        setQuantities((prev) => {
            const newQuantities = { ...prev };
            if (newQuantities[productId] > 1) {
                newQuantities[productId] -= 1;
            } else {
                delete newQuantities[productId];
            }
            return newQuantities;
        });
    };

    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333' }}>
                Trendy & Stylish Products for You!
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '10px',
                            width: '200px',
                            textAlign: 'center',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                        <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{product.name}</h3>
                        <p style={{ fontSize: '16px', color: '#555' }}>${product.price}</p>
                        {quantities[product.id] ? (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                <button
                                    onClick={() => decreaseQuantity(product.id)}
                                    style={{
                                        backgroundColor: '#dc3545',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    -
                                </button>
                                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{quantities[product.id]}</span>
                                <button
                                    onClick={() => increaseQuantity(product.id)}
                                    style={{
                                        backgroundColor: '#28A745',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => addToCart(product)}
                                style={{
                                    backgroundColor: '#007BFF',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '10px 15px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <button
                onClick={goToCart}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#28A745',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Go to Cart
            </button>
        </div>
    );
}

export default HomePage;