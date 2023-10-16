import * as Yup from "yup"


//Initial Values for the Login
const loginInitialValues = {
    email: "",
    password: ""
}

//Yup Validation for the Login
const LoginValidation = Yup.object({


    email: Yup.string().required('Email Can not be empty').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
    password: Yup.string().required("Password Cannot be Empty")
})

export { loginInitialValues, LoginValidation };