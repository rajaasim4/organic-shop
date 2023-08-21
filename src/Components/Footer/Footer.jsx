import logo from "../../assets/Images/footer-logo.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
const Footer = () => {
  return (
    <>
      <footer className="py-0  bg-primary_dark_green pt-20">
        <div className="w-95 mx-auto">
          <h3 className="text-center text-2xl text-white">GET DISCOUNT</h3>
          <h1 className="text-center text-4xl text-white font-semibold my-4">Subscribe to our Newsletter</h1>
          <div className="bg-primary_green h-14 rounded-md flex w-6/12 mt-5 mx-auto">
            <input type="text" className="w-full h-full pl-3 bg-transparent outline-none text-white placeholder:text-white" placeholder="Please Insert Your email Address" />
            <button className="bg-btn_bg w-32 text-xl h-14 text-white rounded-r-md hover:bg-black duration-300">Subscribe</button>
          </div>
          <div className="py-20 grid grid-cols-4 ">
            <div className="col-span-2">
              <img src={logo} alt="" />
              <p className="text-white w-9/12 mt-4">wonderful serenity has taken possession of entire soul, like these sweet mornings of spring which I enjoy with my whole heart. wonderful serenity has takenwonderful serenity has taken possession of entire soul.</p>
              <div className="mt-5 flex gap-4">
                <button className="bg-btn_bg w-12 h-12 rounded-md text-white hover:bg-slate-800 duration-300 flex justify-center items-center text-xl">
                  <FaFacebookF />
                </button>
                <button className="bg-btn_bg w-12 h-12 rounded-md text-white hover:bg-slate-800 duration-300 flex justify-center items-center text-xl">
                  <FaTwitter />
                </button>
                <button className="bg-btn_bg w-12 h-12 rounded-md text-white hover:bg-slate-800 duration-300 flex justify-center items-center text-xl">
                  <FaInstagram />
                </button>
                <button className="bg-btn_bg w-12 h-12 rounded-md text-white hover:bg-slate-800 duration-300 flex justify-center items-center text-xl">
                  <FaYoutube />
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className="text-white text-2xl">Category</h3>
              <ul className="flex flex-col gap-y-2 text-lg text-white mt-8 ">
                <li>
                  <a href="" className="hover:text-[#fb7645] duration-300 font-medium"> Vegetables</a>
                </li>
                <li>
                  <a href="" className="hover:text-[#fb7645] duration-300 font-medium">   Fruits</a>
                </li>
                <li>
                  <a href="" className="hover:text-[#fb7645] duration-300 font-medium"> Meat</a>
                </li>
                <li>
                  <a href="" className="hover:text-[#fb7645] duration-300 font-medium"> Canned Organic</a>
                </li>
                <li>
                  <a href="" className="hover:text-[#fb7645] duration-300 font-medium"> Organic</a>
                </li>
                <li>
                  <a href="" className="hover:text-[#fb7645] duration-300 font-medium">Mushrooms</a>
                </li>
                <li>
                  <a href="" className="hover:text-[#fb7645] duration-300 font-medium">Organic Juice</a>
                </li>
                <li>
                  <a href="" className="hover:text-[#fb7645] duration-300 font-medium">  Oatmeal</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1"> <h3 className="text-white text-2xl">Contact</h3>
              <address className="text-white font-normal font-sans mt-8 flex flex-col gap-y-3">
                <span>

                  +123 4567 890
                </span>

                <span>

                  Patricia C. Amedee 41 Waldeck Grapevine Nashville, TX 76
                </span>

                <span>

                  info@yourdomain.com
                </span>
              </address>
            </div>
          </div>
          <div className="py-2 ">
            <p className="text-center text-white text-lg"> &copy; Copyright {new Date().getFullYear()}.All rights are reserved by Organic Shop</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
