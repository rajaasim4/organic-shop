import DashboardHelmet from "../../Components/DashboardHelmet/DashboardHelmet";

//firebase Functions
import { collection, onSnapshot } from "firebase/firestore";
import { database, auth } from "../../Config/FirebaseConfig";
import { useEffect, useState } from "react";
import { OvalLoader } from "../../utils/Helpers/Loaders/Loaders";

const Users = () => {


    const [data, setData] = useState([]);

    //Getting User Data
    const collectionRef = collection(database, "users");

    const getUser = () => {
        onSnapshot(collectionRef, (data) => {
            setData(
                data.docs.map((item) => {
                    // return item.data()
                    return { ...item.data(), id: item.id };
                })
            );
        });
    }

    //Calling the Review Function 
    useEffect(() => {
        setTimeout(() => {
            getUser();
        }, 1000);
    }, []);


    return <DashboardHelmet>
        <div className="w-full">

            <div className=" w-full">
                <table className="items-center bg-transparent w-full ">
                    <thead>
                        <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Sr. No
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Name
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Email
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Phone Number
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Password
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.length > 0 ?
                            data.map((item, Index) => {
                                return (
                                    <tr key={Index}>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg  whitespace-nowrap p-4  text-blueGray-700">
                                            {Index + 1}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg  whitespace-nowrap p-4  text-blueGray-700">
                                            {item.name}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg  whitespace-nowrap p-4">
                                            {item.email}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg  whitespace-nowrap p-4">
                                            {item.phoneNumber}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg  whitespace-nowrap p-4">
                                            <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                                            {item.password}
                                        </td>
                                    </tr>
                                )
                            }) :
                            <tr className="w-screen h-screen flex items-center justify-center">

                                <td className="">

                                    <OvalLoader />
                                </td>
                            </tr>
                        }


                    </tbody>

                </table>
            </div>
            {/* </div>
    </div> */}
        </div >
    </DashboardHelmet >;
};

export default Users;
