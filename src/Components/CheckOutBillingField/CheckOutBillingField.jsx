
import { Field, ErrorMessage, } from "formik";
const CheckOutBillingField = (props) => {
    return (
        <>
            <div className="shadow-md w-full  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4 flex items-center">
                <span className="text-2xl">{props.icon}</span>
                <Field
                    name={props.name}
                    type={props.type}
                    className="h-full w-full outline-none pl-3 bg-transparent"
                    placeholder={props.placeholder}
                />
            </div>
            <ErrorMessage name={props.name}>
                {(errMsg) => {
                    return (
                        <small className="text-red-400 font-semibold ">{errMsg}</small>
                    );
                }}
            </ErrorMessage>
        </>
    );
};


export default CheckOutBillingField