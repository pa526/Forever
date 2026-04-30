# Forever: A Full-Stack MERN E-Commerce Platform

## Overview

Forever is a robust and feature-rich e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This platform provides a seamless online shopping experience with a comprehensive set of functionalities for both users and administrators.

## Features

*   **User Authentication**: Secure user registration, login, and profile management.
*   **Product Catalog**: Browse and search through a wide range of products with detailed descriptions and images.
*   **Product Filtering & Sorting**: Easily find products by category, price, and other attributes.
*   **Shopping Cart**: Add, update, and remove items from the shopping cart.
*   **Order Management**: Track order status, view order history, and manage shipping details.
*   **Payment Integration**: Secure payment processing (placeholder for integration details).
*   **Admin Panel**: Manage products, orders, users, and categories.
*   **Responsive Design**: Optimized for various devices, ensuring a consistent user experience across desktops, tablets, and mobile phones.

## Technologies Used

*   **Frontend**: React.js, Redux, HTML5, CSS3, JavaScript
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB
*   **Other**: Mongoose, JSON Web Tokens (JWT) for authentication

## Getting Started

### Prerequisites

Ensure you have the following installed:

*   Node.js (LTS version recommended)
*   MongoDB
*   Git

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pa526/Forever.git
    cd Forever
    ```

2.  **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

### Configuration

Create a `.env` file in the `backend` directory and add your environment variables (e.g., MongoDB URI, JWT Secret).

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Application

1.  **Start the backend server:**
    ```bash
    cd backend
    npm start
    ```

2.  **Start the frontend development server:**
    ```bash
    cd ../frontend
    npm start
    ```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to fork the repository, create a new branch, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (if applicable) details.
