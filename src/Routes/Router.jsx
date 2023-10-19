import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//Routes
import Home from "../Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";

//Toast Notificaion
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "../Pages/Cart/Cart";
import CheckOut from "../Pages/CheckOut/CheckOut";
const Router = () => {

  // ========Showing Footer for the Specific Page=========
  const location = useLocation();
  const showFooter = ['/About', '/Contact', '/Shop', '/Shop/:productname', '/Home', '/Cart', '/', '/CheckOut'].includes(location.pathname);

  return (
    <>
      <div className="bg-[#FBFBFB]">

        <ToastContainer />

        <Routes >
          <Route element={<NavBar />}>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Shop" element={<Shop />} />
            <Route exact path="/Shop/:productname" element={<SingleProduct />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/CheckOut" element={<CheckOut />} />


          </Route>

          {/* Authentication Routes */}
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="*" element={<Error />} />

        </Routes>

        {/* Show footer only on specific pages */}
        {showFooter && <Footer />}

        {/* <Footer /> */}

      </div>
    </>
  );
};

export default Router;
