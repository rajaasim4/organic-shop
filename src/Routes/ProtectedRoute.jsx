import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";

//Defining the Roles
const USER_TYPES = {
    NORMAL_USER: "Normal_User",
    ADMIN_USER: "Admin_User"
}
const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState("")

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUserStatus) => {
            setUser(currentUserStatus)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    console.log(user)

    //Check if Normal User Login
    if (!user) {
        return <Navigate to={'/Login'} />
    }

    // Check if the user is an Admin
    const isAdmin = user && user.role === USER_TYPES.ADMIN_USER;

    if (!isAdmin) {
        return <Navigate to="*" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
