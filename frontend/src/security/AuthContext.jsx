import {createContext, useContext, useState} from "react";
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext);

// share the created context with other components
export default function AuthProvider({children}){
    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password){
        if(username === 'yashpurwar2004' && password === 'dummy'){
            setAuthenticated(true)
            return true
        }

        else{
            setAuthenticated(false)
            return false;
        }
    }

    function logout(){
        setAuthenticated(false);
    }

    return ( // we share the object
        <AuthContext.Provider value = {{isAuthenticated, login, logout}}> 
            {children}
        </AuthContext.Provider>
    )
}