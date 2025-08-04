# E-Commerce Application with Docker

A full-stack e-commerce application built with React frontend, Node.js backend, and MongoDB database, fully containerized with Docker.

## 🚀 Features

### Frontend (React + Vite)
- 🛍️ Product catalog with search and filtering
- 🛒 Shopping cart functionality with quantity management
- 👤 User authentication (login/register)
- 📱 Responsive design for mobile and desktop
- 📦 Order history and management
- 🎨 Modern UI with CSS

### Backend (Node.js + Express)
- 🔐 JWT-based authentication
- 📊 RESTful API endpoints
- 🛡️ Password hashing with bcrypt
- 🌐 CORS enabled
- 🗄️ MongoDB integration with Mongoose ODM
- � Data validation and error handling

### Database (MongoDB)
- �💾 Persistent data storage
- 👥 User management
- 📦 Product catalog
- 🛒 Order tracking
- 🔍 Indexing for performance

## 🐳 Docker Setup

### Prerequisites
- Docker and Docker Compose installed
- Git for version control

### Quick Start with Docker

1. **Clone the repository:**
   ```bash
   git clone https://github.com/avinkapolkar12/docker.git
   cd docker
   ```

2. **Start the application:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

### Docker Services

- **Frontend**: React app served with nginx
- **Backend**: Node.js API server
- **Database**: MongoDB with persistent volumes

## 🛠️ Local Development

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (or use Docker for database only)

### Installation

1. **Install frontend dependencies:**
   ```bash
   npm install
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

### Running Locally

1. **Start MongoDB** (if not using Docker):
   ```bash
   mongod
   ```

2. **Start the backend:**
   ```bash
   cd backend
   npm start
   ```

3. **Start the frontend:**
   ```bash
   npm run dev
   ```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products (with optional search/filter)
- `GET /api/products/:id` - Get single product
- `GET /api/categories` - Get all categories

### Orders
- `POST /api/orders` - Create new order (authenticated)
- `GET /api/orders` - Get user orders (authenticated)

### Health Check
- `GET /api/health` - API health status

## 📁 Project Structure

```
├── src/                          # Frontend React application
│   ├── components/              # Reusable components
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   ├── pages/                   # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Orders.jsx
│   ├── utils/                   # Utility functions
│   │   └── api.js              # API configuration
│   ├── App.jsx
│   └── main.jsx
├── backend/                     # Backend Node.js application
│   ├── models/                  # MongoDB models
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── config/                  # Configuration files
│   │   └── database.js
│   ├── seeds/                   # Database seeding
│   │   └── seedProducts.js
│   ├── server.js               # Main server file
│   └── package.json
├── docker-compose.yml          # Docker services configuration
├── Dockerfile                  # Frontend container
├── backend/Dockerfile          # Backend container
└── README.md
```

## 🛠️ Technologies Used

### Frontend
- React 18
- React Router DOM
- Axios for HTTP requests
- Vite for build tooling
- CSS3 for styling

### Backend
- Node.js & Express.js
- MongoDB with Mongoose ODM
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- CORS middleware
- dotenv for environment variables

### DevOps
- Docker & Docker Compose
- MongoDB for data persistence
- Nginx for serving frontend

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
JWT_SECRET=your-secret-key
MONGODB_URI=mongodb://mongo:27017/ecommerce
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Production Deployment

1. **Build and deploy with Docker:**
   ```bash
   docker-compose up --build -d
   ```

2. **Scale services if needed:**
   ```bash
   docker-compose up --scale backend=3
   ```

## 🧪 Development Guidelines

- Use functional components with React hooks
- Follow REST API conventions
- Implement proper error handling
- Use CSS modules or styled components
- Ensure responsive design
- Follow security best practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email avinkapolkar12@gmail.com or create an issue in the repository.
