import *as Yup from "yup"
export const InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
}


const CheckOutShippingSchema = Yup.object({
    firstName: Yup.string().min(5).max(18).required("First Name Required Can not be empty"),
    lastName: Yup.string().min(5).max(18).required("Last Name Required Can not be empty"),
    email: Yup.string().required('Email Required Can not be empty').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
    address: Yup.string().required("Adress Required Can not be empty"),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
        .required('Phone Number Required Can not be empty'),


})

export default CheckOutShippingSchema