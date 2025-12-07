# 📄 InvoicePro - Invoice Management System

![InvoicePro Logo](screenshots/logo.png)

InvoicePro is a comprehensive, modern invoice management system designed to streamline your business operations. Manage clients, products, invoices, quotes, and track your business performance with an intuitive dashboard and powerful analytics.

## ✨ Features

### 🧾 Invoice Management
- Create, edit, and delete invoices
- Track invoice status (Paid, Pending, Cancelled)
- Generate PDF invoices
- Search and filter invoices
- Detailed invoice view with all information

### 💼 Client Management
- Complete client database
- Client details and contact information
- Client-specific invoice history
- Easy client search and management

### 📦 Product Management
- Product catalog management
- Product details and pricing
- Inventory tracking
- Product categorization

### 📋 Quote Management (Devis)
- Create and manage quotes
- Convert quotes to invoices
- Track quote status
- Quote details and history

### 👥 User Management
- User authentication and authorization
- Role-based access control (Admin/User)
- User profile management
- Secure login system

### 📊 Dashboard & Analytics
- Real-time business statistics
- Visual charts and graphs
- Revenue tracking
- Status overview (Paid, Pending, Cancelled)
- Performance metrics

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Material-UI (MUI)** - Beautiful component library
- **Ant Design** - Additional UI components
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **jsPDF** - PDF generation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Nodemailer** - Email functionality

## 📸 Screenshots

### Dashboard Overview
![Dashboard](screenshots/dashboard.png)
*Comprehensive dashboard with statistics and charts*

### Invoice Management
![Invoices](screenshots/invoices.png)
*Manage all your invoices in one place*

### Invoice Details
![Invoice Detail](screenshots/invoice-detail.png)
*Detailed invoice view with all information*

### Client Management
![Clients](screenshots/clients.png)
*Complete client database management*

### Product Catalog
![Products](screenshots/products.png)
*Manage your product inventory*

### Quote Management
![Quotes](screenshots/quotes.png)
*Create and manage quotes*

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/declared-as-ala/InvoicePro.git
   cd InvoicePro
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:5000`

6. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
InvoicePro/
├── backend/
│   ├── controllers/        # Request handlers
│   │   ├── client.controller.js
│   │   ├── devis.controller.js
│   │   ├── facture.controller.js
│   │   ├── produit.controller.js
│   │   └── user.controller.js
│   ├── middlewares/        # Custom middlewares
│   │   └── auth.js
│   ├── models/             # Database models
│   │   ├── client.model.js
│   │   ├── devis.model.js
│   │   ├── facture.model.js
│   │   ├── produit.model.js
│   │   └── user.model.js
│   ├── routes/             # API routes
│   │   ├── client.routes.js
│   │   ├── devis.routes.js
│   │   ├── facture.routes.js
│   │   ├── produit.routes.js
│   │   └── user.routes.js
│   ├── index.js            # Server entry point
│   └── package.json
│
├── frontend/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── BarChart.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Piechart.jsx
│   │   │   └── ...
│   │   ├── Layout/         # Layout components
│   │   │   ├── Dashbord/
│   │   │   ├── navbar.jsx
│   │   │   └── sidebar.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── Clients/
│   │   │   ├── Devis/
│   │   │   ├── Factures/
│   │   │   ├── Products/
│   │   │   └── Users/
│   │   ├── store/          # Redux store
│   │   │   ├── authSlice.js
│   │   │   ├── store.js
│   │   │   └── userApiSlice.js
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── theme.js        # Theme configuration
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/            # Project screenshots
└── README.md
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Users must:
1. Register an account
2. Login with credentials
3. Access protected routes with valid tokens

## 📊 API Endpoints

### Clients
- `GET /api/clients` - Get all clients
- `POST /api/clients` - Create a new client
- `GET /api/clients/:id` - Get client by ID
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Products
- `GET /api/produits` - Get all products
- `POST /api/produits` - Create a new product
- `GET /api/produits/:id` - Get product by ID
- `PUT /api/produits/:id` - Update product
- `DELETE /api/produits/:id` - Delete product

### Invoices (Factures)
- `GET /api/factures` - Get all invoices
- `POST /api/factures` - Create a new invoice
- `GET /api/factures/:id` - Get invoice by ID
- `PUT /api/factures/:id` - Update invoice
- `DELETE /api/factures/:id` - Delete invoice

### Quotes (Devis)
- `GET /api/devis` - Get all quotes
- `POST /api/devis` - Create a new quote
- `GET /api/devis/:id` - Get quote by ID
- `PUT /api/devis/:id` - Update quote
- `DELETE /api/devis/:id` - Delete quote

### Users
- `GET /api/users` - Get all users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🎨 Features in Detail

### Dashboard
- Real-time statistics for invoices, quotes, clients, products, and users
- Visual charts showing revenue trends
- Status breakdown (Paid, Pending, Cancelled)
- Quick access to all major sections

### Invoice System
- Create invoices with multiple products
- Automatic total calculation
- Status tracking
- PDF export functionality
- Search and filter capabilities

### Client Management
- Store complete client information
- View client invoice history
- Easy client lookup
- Contact information management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Ala**
- GitHub: [@declared-as-ala](https://github.com/declared-as-ala)

## 🙏 Acknowledgments

- Material-UI for the amazing component library
- React team for the excellent framework
- All contributors and users of this project

---

⭐ If you like this project, please give it a star on GitHub!

