import { CartProvider } from './context/CartContext.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ThankYouPage from './pages/ThankYouPage.jsx';

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/thank-you" element={<ThankYouPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;