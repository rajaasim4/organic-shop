import { useState } from 'react'

//Icons

import { MdKeyboardArrowDown } from "react-icons/md";
//Formik
import CheckOutBillingShippingForm from '../../../Forms/CheckOutBillingShippingForm/CheckOutBillingShippingForm';
const CheckOutBillingShipping = () => {

    const [showShipping, setShowShipping] = useState(false);


    return (
        <div
            className={`w-full shadow-lg py-8 px-4 rounded-lg border border-gray-300 ${showShipping ? "min-h-[410px]" : "h-28"
                }   duration-150 overflow-hidden`}
        >
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setShowShipping(!showShipping)}
            >
                <h4 className="text-2xl font-semibold mb-3">Shipping Address</h4>
                <span className="text-2xl cursor-pointer">
                    <MdKeyboardArrowDown />
                </span>
            </div>
            <div className="w-full mt-9 ">

                <CheckOutBillingShippingForm />
            </div>
        </div>
    )
}

export default CheckOutBillingShipping