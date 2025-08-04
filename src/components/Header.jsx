import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ user, setUser, cartCount }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>E-Shop</h1>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart ({cartCount})
          </Link>
          
          {user ? (
            <div className="user-menu">
              <span className="user-name">Hello, {user.name}</span>
              <Link to="/orders" className="nav-link">Orders</Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
