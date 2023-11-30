import DashboardSideBar from "../../Components/DashboardSideBar/DashboardSideBar";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";

//firebase Functions
import { collection, onSnapshot } from "firebase/firestore";
import { database, auth } from "../../Config/FirebaseConfig";
import { useEffect, useState } from "react";
const Review = () => {
    const [data, setData] = useState([]);

    const collectionRef = collection(database, "Feedback");
    const getReview = async () => {
        onSnapshot(collectionRef, (data) => {
            setData(
                data.docs.map((item) => {
                    // return item.data()
                    return { ...item.data(), id: item.id };
                })
            );
        });
        console.log(data);
    };

    useEffect(() => {
        setTimeout(() => {
            getReview();
        }, 1000);
    }, []);

    return (
        <>
            <div className="flex">
                <DashboardSideBar />

                <div className=" w-10/12 py-10 px-10 mx-auto">
                    <div className="flex flex-wrap gap-3">
                        {data?.length > 0
                            ? data.map((item) => {
                                return <ReviewCard {...item} />;
                            })
                            : ""}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;
