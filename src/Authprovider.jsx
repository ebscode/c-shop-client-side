import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./Firebase";

export const AuthContext=createContext(null)
const Authprovider = ({children}) => {

const [user,setuser]=useState(null)
const [loading,setloading]=useState(true)



const createuser=(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const login=(email,password)=>{
    setloading(true)
   return signInWithEmailAndPassword(auth,email,password)
}


    const info={
        user,
        createuser,
        loading,
        login,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;