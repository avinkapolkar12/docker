import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to E-Shop</h1>
          <p>Discover amazing products at great prices</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Why Choose E-Shop?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🚚 Fast Delivery</h3>
              <p>Get your orders delivered quickly and safely</p>
            </div>
            <div className="feature">
              <h3>💳 Secure Payment</h3>
              <p>Your payment information is safe and secure</p>
            </div>
            <div className="feature">
              <h3>🔄 Easy Returns</h3>
              <p>Not satisfied? Return within 30 days</p>
            </div>
            <div className="feature">
              <h3>📞 24/7 Support</h3>
              <p>We're here to help whenever you need us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
