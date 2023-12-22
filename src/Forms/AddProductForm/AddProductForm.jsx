import { Form, Formik, Field, ErrorMessage } from "formik";
import { BiFoodMenu } from "react-icons/bi";
const AddProductForm = () => {
  return (
    <Formik>
      {(formik) => {
        return (
          <Form>
            <div className="flex justify-center gap-x-2 w-full ">
              <AddProductFeild
                name="ProductName"
                type="text"
                icon={<BiFoodMenu />}
                placeholder="Enter Product Name"
              />
              <AddProductFeild name="Price" type="text" icon={<BiFoodMenu />} />
            </div>
            <div className="flex justify-center gap-x-2 w-full ">
              <AddProductFeild
                name="Category"
                type="text"
                icon={<BiFoodMenu />}
                placeholder="Enter Product Name"
              />
              <AddProductFeild name="Img" type="file" icon={<BiFoodMenu />} />
            </div>

            <button
              type="Submit"
              className="bg-btn_bg w-40  flex justify-center items-center mt-7 text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 "
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const AddProductFeild = (props) => {
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

export default AddProductForm;
