import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { AiOutlineUser, AiOutlineTablet } from "react-icons/ai";

//Formik Imports
import { Form, ErrorMessage, Field, Formik } from "formik";
import {
  signupInitialValues,
  signUpValidation,
} from "../../utils/Schema/SignupValidationSchema";
import { toast } from "react-toastify";
import { useState } from "react";

//Firebase Components
import { app, database, auth } from "../../Config/FirebaseConfig";
import { storage } from "../../Config/FirebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { OvalLoader } from "../../utils/Helpers/Loaders/Loaders";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  // Initializing Firebase Functions

  let collectionRef = collection(database, "users");

  let handleSubmitForm = async (values, onSubmitProps) => {
    setIsDisabled(true);
    setIsLoading(true);

    //Destructing the the Form Values
    const { name, email, phoneNumber, password } = values;

    //Creating User with and Storing in the firebase

    fetchSignInMethodsForEmail(auth, email).then((data) => {
      if (data.length > 0) {
        toast.error("Email Already in Use.Use Different Email", {
          position: "top-right",
          autoClose: 2300,
        });
        return;
      }
    });
    try {
      //Create User with Email and Password
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      //Adding Data into Firebase
      addDoc(collectionRef, {
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      });

      signInWithEmailAndPassword(auth, email, password);

      toast("You have Signed In Successfully", {
        position: "top-right",
        autoClose: 2300,
      });

      //Clearing the Form Values After Submitting and Disabling Button for 3 Seconds
      setTimeout(() => {
        setIsDisabled(false);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();

        navigate("/Home");
      }, 3000);
    } catch (error) {
      //Handling Errors
      setIsLoading(true);
      setIsDisabled(false);
      onSubmitProps.resetForm();

      const email = error.code;
      if (email === "auth/email-already-in-use") {
        toast.error("Email Already In Use Please Use Different email", {
          position: "top-right",
          autoClose: 2300,
        });
      } else {
        toast.error("An Error Occured While Sing In", {
          position: "top-right",
          autoClose: 2300,
        });
      }
      console.log("An Error Occured While Sing In", error);
    }
  };

  return (
    <Formik
      initialValues={signupInitialValues}
      onSubmit={handleSubmitForm}
      validationSchema={signUpValidation}
    >
      {(formik) => {
        return (
          <Form>
            <SignUpFeild
              name="name"
              type="text"
              icon={<AiOutlineUser />}
              placeholder="Enter Your Name e.g John Smith"
            />
            <SignUpFeild
              name="email"
              type="email"
              icon={<IoMailOutline />}
              placeholder="Enter  Email"
            />
            <SignUpFeild
              name="phoneNumber"
              type="tel"
              icon={<AiOutlineTablet />}
              placeholder="Enter Your Phone Number"
            />
            <SignUpFeild
              name="password"
              type="password"
              icon={<IoLockClosedOutline />}
              placeholder="Enter Password"
            />
            <SignUpFeild
              name="confirmPassword"
              type="password"
              icon={<IoLockClosedOutline />}
              placeholder="Confirm Your Password"
            />

            <div className="mt-7 flex justify-between ">
              <div className="flex justify-center items-center gap-x-2">
                <input
                  type="checkbox"
                  name=""
                  id="remmeber"
                  className="h-5 w-5"
                />
                <label htmlFor="remmeber" className="text-sm">
                  Remember Me
                </label>
              </div>
              <Link className="hover:text-primary_dark_green duration-150">
                Forgot Password?
              </Link>
            </div>

            <button
              className={`rounded-xl text-white w-32 h-12 mt-4 mx-auto block bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300 ${
                isDisabled
                  ? "bg-[#f7855c] hover:bg-[#f7855c] cursor-not-allowed "
                  : ""
              }`}
              disabled={formik.onSubmitProps}
              type="submit"
            >
              {isLoading ? <OvalLoader width={30} height={30} /> : "Sign Up"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const SignUpFeild = (props) => {
  return (
    <>
      <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4 flex items-center">
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

export default SignUpForm;
