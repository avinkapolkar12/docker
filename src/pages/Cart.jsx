import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import './Cart.css';

const Cart = ({ cart, updateQuantity, removeFromCart, clearCart, user }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, parseInt(newQuantity));
  };

  const handleCheckout = async () => {
    if (!user) {
      alert('Please login to place an order');
      navigate('/login');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const orderData = {
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: totalAmount
      };

      await api.post('/api/orders', orderData);

      clearCart();
      alert('Order placed successfully!');
      navigate('/orders');
    } catch (error) {
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>
        
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price}</p>
              </div>
              <div className="item-quantity">
                <label>Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                />
              </div>
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="total">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
          </div>
          <div className="cart-actions">
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
