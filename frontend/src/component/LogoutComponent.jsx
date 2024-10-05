import { useNavigate } from "react-router-dom";

export function LogoutComponent() {
  const navigate = useNavigate();
  function logout(){
    navigate(`/login`);
  }

  return (
    <div className="LogoutComponent flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">You are logged out!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Thank you for using our App. Come back soon!
        </p>
        <button onClick={logout} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300">
          Log back in
        </button>
      </div>
    </div>
  );
}
