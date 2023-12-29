import { Form, Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { FaFileImage } from "react-icons/fa6";

import { IoIosArrowDown } from "react-icons/io";
const AddProductForm = () => {
  //Handle Select Image

  const [selectedImg, setSelectedImg] = useState("");
  const [showCategory, setSelectCategory] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Please Select Category");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectCategory = (e) => {
    setSelectedValue(e.target.value);
    setSelectCategory(false);
    console.log(selectedValue);
  };

  return (
    <Formik>
      {(formik) => {
        return (
          <Form>
            <AddProductFeild
              name="ProductName"
              type="text"
              icon={<BiFoodMenu />}
              placeholder="Enter Product Name"
            />
            <AddProductFeild
              name="Price"
              type="text"
              placeholder="Enter Product Price"
              icon={<BiFoodMenu />}
            />
            <div
              className={`w-1/2  pt-3 mb-4 shadow-md pr-6  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4  relative `}
            >
              <div
                className={`flex items-start gap-y-2 text-xl flex-col absolute top-0 left-0 w-full overflow-hidden ${
                  showCategory ? "h-max" : "h-0"
                }`}
                onClick={() => setSelectCategory(!showCategory)}
              >
                <div className="flex items-start justify-between w-full cursor-pointer h-9">
                  <button className="text-lg">{selectedValue}</button>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>

                <button
                  className=""
                  value={"Vegetables"}
                  onClick={handleSelectCategory}
                >
                  Vegetables
                </button>
                <button
                  className=""
                  value={"Fruits"}
                  onClick={handleSelectCategory}
                >
                  Fruits
                </button>
                <button
                  className=""
                  value={"Meat"}
                  onClick={handleSelectCategory}
                >
                  Meat
                </button>
                <button
                  className=""
                  value={"Canned Organic"}
                  onClick={handleSelectCategory}
                >
                  Canned Organic
                </button>
                <button
                  className=""
                  value={"Organic"}
                  onClick={handleSelectCategory}
                >
                  Organic
                </button>
                <button
                  className=""
                  value={"Mushrooms"}
                  onClick={handleSelectCategory}
                >
                  Mushrooms
                </button>
                <button
                  value={"Oatmeal"}
                  className=""
                  onClick={handleSelectCategory}
                >
                  Oatmeal
                </button>
              </div>
            </div>

            {/* <AddProductFeild
              name="Category"
              type="text"
              icon={<BiFoodMenu />}
              placeholder="Enter Product Category"
            /> */}
            <div className=" mb-4 shadow-md w-max pr-6  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4 flex items-center">
              <div className=" w-full  flex items-center">
                <label
                  htmlFor="image"
                  className="cursor-pointer"
                  title="Please Select Image for the Product"
                >
                  <span className="text-2xl">
                    <FaFileImage />
                  </span>
                </label>
                <Field
                  id="image"
                  onChange={handleImageChange}
                  name="Img"
                  type="file"
                  className="h-full w-full outline-none pl-3 bg-transparent mt-4 cursor-pointer hidden"
                  placeholder="Please Select the Image"
                />
              </div>
              <ErrorMessage name="Img">
                {(errMsg) => {
                  return (
                    <small className="text-red-400 font-semibold ">
                      {errMsg}
                    </small>
                  );
                }}
              </ErrorMessage>
            </div>
            {selectedImg && (
              <img
                src={selectedImg}
                className="w-60 h-60 rounded-xl object-cover"
                alt=""
              />
            )}
            {/* <AddProductFeild name="Img" type="file" icon={<BiFoodMenu />} /> */}

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
      <div className="shadow-md w-1/2  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4 flex items-center">
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
