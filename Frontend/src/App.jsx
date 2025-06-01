import React from "react";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Myaccount from "./pages/Myaccount";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
// import ProductList from "./pages/ProductList";
import Order from "./pages/Order";
// import Product from "./components/Product"; // ✅ ध्यान दें: casing सही होना चाहिए

function App() {
  const Layout = () => {
    return (
      <div>
        <Announcement />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
        { path: "/myaccount", element: <Myaccount /> },
        { path: "/login", element: <Login /> },
        { path: "/create-account", element: <Register /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
        // { path: "/products/:searchterm", element: <ProductList /> }, 
        { path: "/myorders", element: <Order /> },
        // { path: "/product/:id", element: <Product /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
