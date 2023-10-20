import React from "react";
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

  const CheckOutPayment = () => { };
  return (
    <div className="w-11/12 mx-auto shadow-lg border-gray-300 px-5 py-7 md:px-3 md:w-full ">
      <h4 className="text-2xl font-semibold mb-4">Your Order</h4>
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

      <div className=" flex justify-between my-2 ">
        <span className="text-md font-bold mt-6 block ">Subtotal</span>
        <span className="text-lg font-extrabold mt-6 block ">
          {/* ${Subtotal} */}
        </span>
      </div>
      <hr className=" h-[2px]  bg-gray-300" />
      <div className=" flex justify-between mt-1 py-3 items-center">
        <span className="text-md font-bold  block ">Shipping Cost</span>
        <span className="text-lg font-extrabold mt-6 block ">${15}</span>
      </div>
      <hr className=" h-[2px]  bg-gray-300" />
      <div className=" flex justify-between my-3 items-center">
        <span className="text-xl font-bold  block ">Total</span>
        <span className="text-3xl text-[#ffc900] font-extrabold mt-6 block ">
          {/* ${Total} */}
        </span>
      </div>
      <button
        className={`rounded-xl text-white w-10/12 min-w-[180px]  h-12 mt-4 mx-auto block bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300 `}
        onClick={CheckOutPayment}
      >
        Place Order And Pay
      </button>
    </div>
  );
};

export default CheckOutOrder;
