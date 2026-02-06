import { createContext, useContext, useState } from "react";

const AuthContext=createContext();

export default function AuthProvider({children}){
    const[user,setUser]=useState(null);

    const login=(token, role)=>{
        localStorage.setItem("token",token);
        setUser({role});
    };

    const logout=()=>{
        localStorage.removeItem("token");
        setUser(null);
    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext);