import ReviewCard from "../../Components/ReviewCard/ReviewCard";

//firebase Functions
import { collection, onSnapshot } from "firebase/firestore";
import { database, auth } from "../../Config/FirebaseConfig";
import { useEffect, useState } from "react";
import DashboardHelmet from "../../Components/DashboardHelmet/DashboardHelmet";
const Review = () => {
    const [data, setData] = useState([]);

    const collectionRef = collection(database, "Feedback");

    //Getting Review form the Firebase
    const getReview = async () => {
        onSnapshot(collectionRef, (data) => {
            setData(
                data.docs.map((item) => {
                    // return item.data()
                    return { ...item.data(), id: item.id };
                })
            );
        });
    };
    //Calling the Review Function 
    useEffect(() => {
        setTimeout(() => {
            getReview();
        }, 1000);
    }, []);

    return (
        <>

            <DashboardHelmet>

                <div className="mb-2">
                    <h1>Total Reviews: {data.length}</h1>
                </div>
                <div className="flex flex-wrap gap-3">
                    {data?.length > 0
                        ? data.map((item) => {
                            return <ReviewCard {...item} />;
                        })
                        : ""}
                </div>
            </DashboardHelmet>

        </>
    );
};

export default Review;
