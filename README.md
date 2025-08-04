# E-Commerce Website

A full-stack e-commerce application built with React frontend and Node.js backend.

## Features

### Frontend (React)

- 🛍️ Product catalog with search and filtering
- 🛒 Shopping cart functionality
- 👤 User authentication (login/register)
- 📱 Responsive design
- 📦 Order history
- 🎨 Modern UI with CSS

### Backend (Node.js/Express)

- 🔐 JWT-based authentication
- 📊 RESTful API endpoints
- 🛡️ Password hashing with bcrypt
- 🌐 CORS enabled
- 💾 In-memory data storage

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

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

### Running the Application

1. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

   The backend will run on http://localhost:5000

2. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on http://localhost:5173

### API Endpoints

#### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

#### Products

- `GET /api/products` - Get all products (with optional search/filter)
- `GET /api/products/:id` - Get single product
- `GET /api/categories` - Get all categories

#### Orders

- `POST /api/orders` - Create new order (authenticated)
- `GET /api/orders` - Get user orders (authenticated)

### Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Orders.jsx
│   ├── App.jsx
│   └── main.jsx
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

### Technologies Used

#### Frontend

- React 18
- React Router DOM
- Axios
- Vite
- CSS3

#### Backend

- Node.js
- Express.js
- JSON Web Tokens (JWT)
- bcryptjs
- CORS
- dotenv

### Development

1. Make sure both frontend and backend servers are running
2. The frontend will proxy API requests to the backend
3. Hot reload is enabled for development

### Production Deployment

1. Build the frontend:

   ```bash
   npm run build
   ```

2. Deploy the built files and backend to your hosting service

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
JWT_SECRET=your-secret-key
NODE_ENV=development
```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

### License

This project is licensed under the MIT License.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
