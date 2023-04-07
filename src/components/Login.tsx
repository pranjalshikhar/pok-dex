import { useAppDispatch } from "../app/hooks";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { firebaseAuth, firebaseDB, usersRef } from "../utils/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { setUserStatus } from "../app/slices/AppSlice";
function Login() {
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, uid },
    } = await signInWithPopup(firebaseAuth, provider);

    if (email) {
      const firestoreQuery = query(usersRef, where("uid", "==", uid));
      const fetchedUser = await getDocs(firestoreQuery);
      if (fetchedUser.docs.length === 0) {
        await addDoc(usersRef, { uid, email });
      }
      dispatch(setUserStatus({ email }));
    }
  };

  return (
    <div className="login">
      <button onClick={handleLogin} className="login-btn">
        <FcGoogle /> Login with Google
      </button>
    </div>
  );
}

export default Login;
