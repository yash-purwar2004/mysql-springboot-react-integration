import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHello } from "../api/HelloApi";

export function WelcomeComponent() {
    const { username } = useParams();
    const [apiResponse, setApiResponse] = useState('');

    function callHelloWorld(){
        retrieveHello()
        .then((response)=>successfulResponse(response))
        .catch((error)=>errorResponse(error))
        .finally(()=> console.log('cleanup'));
    }

    function successfulResponse(response){
        setApiResponse(response.data.message);
    }

    function errorResponse(error){
        setApiResponse("");
    }




    return (
        <div className="Welcome flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome, {username}!</h1>
            <div className="text-lg text-gray-700">
                Manage your todos - 
                <Link to="/todos" className="text-blue-600 hover:text-blue-500 font-semibold transition duration-300 ml-1">
                    Go here
                </Link>
            </div>

        <button onClick={callHelloWorld} className="mt-10 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300">
          Call Hello World Rest API
        </button>

        {apiResponse && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md">
               {JSON.stringify(apiResponse)}
            </div>
        )}


        
        </div>
    );
}
