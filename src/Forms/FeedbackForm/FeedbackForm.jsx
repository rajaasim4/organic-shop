//Formik
import { Field, Form, Formik, ErrorMessage } from "formik";

import {
    FeedbackInitialValues,
    FeedbackValidation,
} from "../../utils/Schema/FeedbackValidationSchema";


//Icons
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";


//Firebase funtions
import { database, auth } from "../../Config/FirebaseConfig"
import { addDoc, collection } from 'firebase/firestore'
import { useState } from "react";
import { toast } from "react-toastify";

const FeedbackForm = (props) => {

    //Calculating the max Words 
    const [words, setWords] = useState(0);

    const totalWordsEntered = (e) => {
        let str = e.target.value
        const words = str.split(" ").filter((words) => words != '');
        setWords(words.length)
    }

    const collectionRef = collection(database, "Feedback");

    //Handle Feedback Form Submit

    const handleSubmit = (values) => {

        const { name, email, feedbackMessage } = values;

        addDoc(collectionRef, {
            name: name,
            email: email,
            feedbackMessage: feedbackMessage,
        }).then((values) => {
            toast("Thank You For Your Valueable Feedback", {
                position: "top-right",
                autoClose: 2300,
            });
        })
            .catch((err) => {
                toast.error("An Error Ocuured", {
                    position: "top-right",
                    autoClose: 2300,
                });
            })

        props.closeModal()
    };

    return (
        <Formik
            initialValues={FeedbackInitialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackValidation}
        >
            {(formik) => {
                return (
                    <Form>
                        <div className="mt-2">
                            <div className="">

                                <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-6 flex items-center">
                                    <span className="text-2xl">
                                        <AiOutlineUser />
                                    </span>
                                    <Field
                                        name="name"
                                        type="text"
                                        className="h-full w-full outline-none pl-3 bg-transparent"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <ErrorMessage name="name">
                                    {(errMsg) => {
                                        return (
                                            <small className="text-red-400 font-semibold ">{errMsg}</small>
                                        );
                                    }}
                                </ErrorMessage>
                            </div>
                            <div className="">

                                <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-6 flex items-center">
                                    <span className="text-2xl">
                                        <IoMailOutline />
                                    </span>
                                    <Field
                                        name="email"
                                        type="text"
                                        className="h-full w-full outline-none pl-3 bg-transparent"
                                        placeholder="Enter Your Email"
                                    />
                                </div>
                                <ErrorMessage name="email">
                                    {(errMsg) => {
                                        return (
                                            <small className="text-red-400 font-semibold ">{errMsg}</small>
                                        );
                                    }}
                                </ErrorMessage>
                            </div>
                            <div className="">

                                <div className="shadow-md  px-3 pl-6 rounded-lg h-44 border border-gray-500  mt-6 flex pt-3 items-start">
                                    <span className="text-2xl">
                                        <BiMessageDetail />
                                    </span>
                                    <Field
                                        name="feedbackMessage"
                                        type="text"
                                        as="textarea"
                                        className="h-full resize-none  w-full outline-none pl-3 "
                                        placeholder="Enter Your Message"
                                        cols="30"
                                        rows="10"
                                        onChange={(e) => {
                                            formik.handleChange(e);
                                            totalWordsEntered(e);
                                        }}
                                    />
                                </div>
                                <div className="mt-2 text-sm pl-2">{words}/500</div>
                                <ErrorMessage name="feedbackMessage">
                                    {(errMsg) => {
                                        return (
                                            <small className="text-red-400 font-semibold ">{errMsg}</small>
                                        );
                                    }}
                                </ErrorMessage>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                                className={`rounded-xl text-white w-40 h-12 mt-4 mx-auto  bg-btn_bg cursor-pointer  hover:bg-slate-800 duration-300 flex justify-center items-center `}
                                type="submit"
                            // onClick={props.closeModal}
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FeedbackForm;
