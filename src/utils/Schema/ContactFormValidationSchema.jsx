import *as Yup from "yup"
import { auth } from "../../Config/FirebaseConfig"

//Contact Initial Values
const ContactFormInitialValues = {
    name: auth?.currentUser?.displayName,
    email: auth?.currentUser?.email,
    Message: ""
}
//Yup Validation For Sign Up

//Checking the 500 words Limit

const wordCount = (str) => {
    const words = str.split(" ").filter((word) => word != '')
    // console.log('total elngth of words is', words.length)
    return words.length;
}

const ContactFormValidation = Yup.object({
    name: Yup.string().min(5).max(18).required("Name Required Can not be empty"),
    email: Yup.string().required('Email Required Can not be empty').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
    Message: Yup.string().test('Message must be less than 500 words', (value) => wordCount(value) <= 500).required("Please Enter Some Message")

})


export { ContactFormInitialValues, ContactFormValidation };