import *as Yup from "yup"


//Signup Initial Values
const signupInitialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
}

//Yup Validation For Sign Up

const signUpValidation = Yup.object({
    name: Yup.string().min(5).max(18).required("Name Required Can not be empty"),
    email: Yup.string().required('Email Required Can not be empty').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
        .required('Phone Number Required Can not be empty'),

    password: Yup.string().min(8, "Password must be atleat 8 Characters")
        .max(30, "Password can not be more than 25 Characters").required("Password Required Can not be empty").matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
        ),
    confirmPassword: Yup.string()
        .min(8, "Password must be atleat 8 Characters")
        .max(30, "Password can not be more than 25 Characters")
        .required("Confirm Password Cannot be Empty")
        .oneOf([Yup.ref("password"), null], "Password did not match"),
})


export { signupInitialValues, signUpValidation };