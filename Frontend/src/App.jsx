import React from "react";
import Home from "./pages/Home";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Cart from "./pages/Cart";
import Myaccount from "./pages/Myaccount";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";



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
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/myaccount",
          element: <Myaccount />,
        },
      ],
    },
  ]);
  return (
    <div>
      {/* <Home /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;