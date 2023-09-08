import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLoggedIn(true); // Set isLoggedIn to true when the user is logged in
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className="btn">
        <Link exact to="/connect">
          <button onClick={signInWithGoogle}>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
