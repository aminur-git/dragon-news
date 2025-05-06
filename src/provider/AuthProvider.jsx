import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
    });
    return()=>{
        unsubscribe()
    }
  },[])

    const signIn = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

  const logOut = ()=>{
    return signOut(auth)
  }

  const authInfo = {
    createUser,
    user,
    setUser,
    signIn,
    logOut,

  };
  console.log(user)

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
