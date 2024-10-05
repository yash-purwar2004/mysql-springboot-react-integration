import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../security/AuthContext";

export function LoginComponent(){
    const [username, setUsername] = useState("")
    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    const [password, setPassword] = useState("")
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();
    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated


    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }

        else{
            setShowErrorMessage(true);
        }
    }

    return(
        <div className="Login">
            {showErrorMessage && <div className="errorMessage">Authentication Failed, Please chck your credentials</div>}
            
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                       Username
                    </label>
                    
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    />
                  </div>


                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>

                    <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={password}
                    onChange={handlePasswordChange}
                    />

                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                  </div>


                  <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                      Sign In
                    </button>

                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </form>
                
                <p className="text-center text-gray-500 text-xs">
                  &copy;2020 Acme Corp. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        )
}