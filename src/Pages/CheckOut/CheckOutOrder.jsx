import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
const CheckOutOrder = () => {
  // const data = useSelector((state) => state.cart.cart);

  // const total = data
  //     .map((item) => {
  //         return item.subtotal;
  //     })
  //     .reduce((total, currentitem) => total + currentitem, 0)
  //     .toFixed(2);

  // let Subtotal = total;
  // let Total = parseInt(Math.ceil(Subtotal)) + 15;


  //Checking for the Details is Filled or not
  const { isCheckOutShippingDetialsFilled, isCheckOutPymentSelected } = useSelector((state) => state.CheckDetails)
  const CheckOutPayment = () => {
    if (!isCheckOutShippingDetialsFilled) {
      toast.error("Please Fill the Shipping Details", {
        position: "top-right",
        autoClose: 2300,
      })
      return;
    }
    if (!isCheckOutPymentSelected) {
      toast.error("PLease Select the Payment Method from Billing Details", {
        position: "top-right",
        autoClose: 2300,
      })
      return;
    }
    toast("Your Order has been Placed", {
      position: "top-right",
      autoClose: 2300,
    })
  };

  const SHIPPING_PRICE = 15;

  //Subtotal Price
  const SubTotal = useSelector((state) => state.CartSlice.SubTotal);

  //DiscountPrice
  const totalPriceAfterdiscount = useSelector((state) => state.CartSlice.priceAfterDiscount);

  const Tax = SubTotal ? 15 : 0

  //Actual Discount Price we give to customer 
  let totalDiscount = totalPriceAfterdiscount === 0 ? totalPriceAfterdiscount : (SubTotal - totalPriceAfterdiscount).toFixed(2)


  console.log(`Total price is ${SubTotal} and then after 20% Discount we get ${totalPriceAfterdiscount} and hence now total is ${totalDiscount}`);

  let totalPrice = totalPriceAfterdiscount === 0 ? SubTotal + Tax + SHIPPING_PRICE : SubTotal + Tax + SHIPPING_PRICE - totalDiscount
  return (
    <>
      {/* // <div className="w-11/12 mx-auto shadow-lg border-gray-300 px-5 py-7 md:px-3 md:w-full ">
    //   <h4 className="text-2xl font-semibold mb-4">Your Order</h4> */}
      {/* <div className=" flex justify-between flex-col my-2 ">
        <div className=" flex justify-between">
          <span className="text-md font-bold mt-6 block ">Product</span>
          <span className="text-lg font-extrabold mt-6 block ">SubTotal</span>
        </div>
        <hr className=" h-[2px]  bg-gray-300 " />

        <div className="overflow-y-scroll h-56">
          {data.map((Val) => {
                        return (
                            <React.Fragment key={Val.id}>
                                <div className=" flex justify-between my-2 py-3">
                                    <span className="text-md  block ">{Val.name}</span>
                                    <span className="text-lg  block ">
                                        {Val.quantity} x ${Val.price}
                                    </span>
                                </div>
                                <hr className="h-[1px]  bg-gray-300" />
                            </React.Fragment>
                        );
                    })}
                    </div>
      </div> */}



      < div className=" rounded-lg p-6 shadow-lg border-2 h-max pb-14  border-gray-400 " >
        <div className="">

          <h1 className="font-semibold text-3xl  border-gray-400 pb-4  text-center">Total</h1>
        </div>
        <div className="flex justify-between items-center">

          <h2 className=" text-lg  border-gray-400 pb-2 pt-3">SubTotal</h2>
          <h2 className=" text-lg  border-gray-400 pb-2 pt-3">${SubTotal.toFixed(2)}</h2>
        </div>
        <div className="flex justify-between items-center">

          <h2 className=" text-lg  border-gray-400 pb-2 pt-3">Tax</h2>
          <h2 className=" text-lg  border-gray-400 pb-2 pt-3">${Tax}</h2>
        </div> <div className="flex justify-between items-center">

          <h2 className=" text-lg  border-gray-400 pb-2 pt-3">Discount</h2>
          <h2 className=" text-lg  border-gray-400 pb-2 pt-3">${totalDiscount}</h2>
        </div>
        <div className="flex justify-between items-center">

          <h2 className=" text-lg  border-gray-400 pb-2 pt-3">Shipping Cost</h2>
          <h2 className=" text-lg  border-gray-400 pb-2 pt-3">$15</h2>
        </div>


        <div className="w-full">
          <div className="flex items-center justify-between">

            <h1 className="font-semibold text-3xl  pb-4 pt-8">Total</h1>
            <h2 className=" text-lg  border-gray-400 pb-2 pt-3">${totalPrice.toFixed(2)}</h2>
          </div>
          <Link to={"/CheckOut"} className="bg-btn_bg w-9/12 mx-auto flex justify-center items-center mt-7 text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">Place Order And Pay</Link>
        </div>

      </div >

    </>
  );
};

export default CheckOutOrder;
