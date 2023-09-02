import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
const Router = () => {
  return (
    <>
      <div className="bg-[#FBFBFB]">

        <NavBar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Router;
