import Brands from "../../Layout/Brands/Brands";
import CartTotal from "./CartTotal";
import CartDetails from "./CartDetails";
import Helmet from "../../Components/Helmet/Helmet";
import { HiOutlineShoppingBag } from "react-icons/hi";
import PageTransition from "../../utils/Helpers/Animation/PageTransition";
const Cart = () => {
  return (
    <>
      <PageTransition>
        <Helmet>
          <div className="flex justify-center mb-20">
            <h1 className="text-5xl text-center  flex items-center gap-x-4">
              My Cart
              <span className="font-normal">
                <HiOutlineShoppingBag />
              </span>
            </h1>
          </div>

          <div className="flex mb-20 gap-x-6">
            <CartDetails />
            <CartTotal />
          </div>
        </Helmet>
      </PageTransition>
      <Brands />
    </>
  );
};

export default Cart;
