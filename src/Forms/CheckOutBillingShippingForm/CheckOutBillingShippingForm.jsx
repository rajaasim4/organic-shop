//Icons

import { AiOutlineUser, AiOutlineTablet } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import CheckOutBillingField from "../../Components/CheckOutBillingField/CheckOutBillingField"

//Formik
import { Formik, Form } from "formik";
import CheckOutShippingSchema, { InitialValues } from '../../utils/Schema/CheckOutShippingSchema';
import { useDispatch } from 'react-redux';
import { getShippingValues } from '../../store/Reducers/CheckOutShippingSlice';
import { getCheckOutShippingDetails } from '../../store/Reducers/CheckDetailsSlice';
const CheckOutBillingShippingForm = () => {


    const dispatch = useDispatch();

    //Handle submit

    const handleSubmitForm = (values) => {

        //Checking Form filled or not
        dispatch(getCheckOutShippingDetails(true));


        //Event Deipatch for Getting Review and Details Values
        dispatch(getShippingValues(values))
    }
    return (

        <Formik
            initialValues={InitialValues}
            onSubmit={handleSubmitForm}
            validationSchema={CheckOutShippingSchema}
        >
            {(formik) => {
                return (
                    <Form>
                        <div className="flex gap-x-5 w-full  sm:flex-col">
                            <CheckOutBillingField
                                name="firstName"
                                type="text"
                                icon={<AiOutlineUser />}
                                placeholder="Enter Your First Name e.g John"
                            />
                            <CheckOutBillingField
                                name="lastName"
                                type="text"
                                icon={<AiOutlineUser />}
                                placeholder="Enter Your Last Name e.g  Smith"
                            />
                        </div>

                        <CheckOutBillingField
                            name="email"
                            type="email"
                            icon={<IoMailOutline />}
                            placeholder="Enter Tour Email"
                        />
                        <CheckOutBillingField
                            name="phoneNumber"
                            type="tel"
                            icon={<AiOutlineTablet />}
                            placeholder="Enter Your Phone Number"
                        />

                        <CheckOutBillingField
                            name="address"
                            type="text"
                            placeholder="Enter Your Address"
                            icon={<FaAddressCard />}
                        />

                        <button type='Submit' className="bg-btn_bg w-40  flex justify-center items-center mt-7 text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">Submit</button>
                    </Form>

                );
            }}
        </Formik>

    )
}

export default CheckOutBillingShippingForm