import { Form, Formik } from "formik";
import DashboardHelmet from "../../Components/DashboardHelmet/DashboardHelmet";
import AddProductForm from "../../Forms/AddProductForm/AddProductForm";
const AddProducts = () => {
  return (
    <DashboardHelmet>
      <div className="w-full">
        <h2 className="text-center text-2xl">Add Product</h2>
        <div className="mt-3">
          <AddProductForm />
        </div>
      </div>
    </DashboardHelmet>
  );
};

export default AddProducts;
