import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../../Config/FirebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../store/Reducers/User/UserDetails";

const Auth = () => {
  const dispatch = useDispatch();

  //Checking the User Exist or Not
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        dispatch(
          getData({
            userName: data.displayName,
            userEmail: data.email,
            userID: data.uid,
            userPorfileImg: data.photoURL,
            isLogedIn: true,
          })
        );
      } else {
        dispatch(
          getData({
            userName: null,
            userEmail: null,
            userID: null,
            userPorfileImg: null,
            isLogedIn: false,
          })
        );
      }
    });
  }, []);
  return <></>;
  // return { authInfo };
};

export default Auth;
