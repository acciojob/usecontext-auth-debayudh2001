import React, { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    function handleChange(e){
        //console.log(e.target.value)
        setIsAuthenticated(true)
    }
    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            handleChange
        }}>
            {children}
        </AuthContext.Provider>
    )
}