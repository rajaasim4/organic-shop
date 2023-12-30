import { Route, Routes, useLocation } from "react-router-dom";

//Components For User
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
import Cart from "../Pages/Cart/Cart";
import CheckOut from "../Pages/CheckOut/CheckOut";
import EnterEmail from "../Pages/ForgotPassword/EnterEmail";
import ForgotEmailConfirmation from "../Pages/ForgotPassword/ForgotEmailConfirmation";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ScrollTopButton from "../Components/ScrollTopButton/ScrollTopButton";
import ScrollTop from "../Hooks/ScrollTop";

//Components for the Admin
import Dashboard from "../Pages/Dashboard/Dashboard";

//Toast Notificaion
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Protected Route
import ProtectedRoute from "./ProtectedRoute";
import Review from "../Pages/Review/Review";
import DashboardNavbar from "../Components/DashboardNavbar/DashboardNavbar";
import Users from "../Pages/Users/Users";
import Auth from "../utils/Constants/Auth/Auth";
import ViewItem from "../Pages/ViewItem/ViewItem";
import AddProducts from "../Pages/AddProducts/AddProducts";
import { AnimatePresence } from "framer-motion";
const Router = () => {
  // ========Showing Footer for the Specific Page=========
  const location = useLocation();

  const hideFooterOnPaths = ["/Login", "/SignUp", "/Forgot", "/Dashboard"];
  const showFooter = !hideFooterOnPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="bg-[#FBFBFB]">
          <ToastContainer limit={1} />
          <ScrollTopButton />
          <ScrollTop />
          <Auth />

          <Routes location={location} key={location.pathname}>
            <Route element={<NavBar />}>
              {/* Simple Routes For User */}

              <Route exact path="/" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/Shop" element={<Shop />} />
              <Route
                exact
                path="/Shop/:productname"
                element={<SingleProduct />}
              />
              <Route exact path="/Cart" element={<Cart />} />
              <Route exact path="/CheckOut" element={<CheckOut />} />
            </Route>

            {/* Routes for the Admin */}

            {/* <Route element={<DashboardNavbar />}>
            <Route index path="/Dashboard" element={<Dashboard />} />
            {/* <Route path="/Dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } /> *
            <Route exact path="/Review" element={<Review />} />

          </Route> */}
            <Route
              path="/Dashboard/*"
              element={
                <>
                  <DashboardNavbar />
                  <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="/Review" element={<Review />} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="/ViewItem" element={<ViewItem />} />
                    <Route path="/AddProducts" element={<AddProducts />} />
                  </Routes>
                </>
              }
            />

            {/* Authentication Routes */}
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/SignUp" element={<SignUp />} />

            {/* Forgot Password Routes */}
            <Route exact path="/Forgot/EnterEmail" element={<EnterEmail />} />
            <Route
              exact
              path="/Forgot/EmailConfimationSent"
              element={<ForgotEmailConfirmation />}
            />
            <Route exact path="/Forgot/Password" element={<ForgotPassword />} />

            {/* 404 Error Page */}
            <Route exact path="*" element={<Error />} />
          </Routes>

          {/* Show footer only on specific pages */}
          {showFooter && <Footer />}
        </div>
      </AnimatePresence>
    </>
  );
};

export default Router;
