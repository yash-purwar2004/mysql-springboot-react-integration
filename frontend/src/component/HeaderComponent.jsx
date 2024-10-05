import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthContext";


export function HeaderComponent() {
    const authContext = useAuth();
    const authenticated = authContext.isAuthenticated;

    function logout(){
      authContext.logout();
    }

    return (
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Header</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                {authenticated && <Link to="/welcome/yashpurwar2004" className="hover:text-blue-300 transition duration-300">Home</Link>}
                
              </li>
              <li>
                {authenticated && <Link to="/todos"className="hover:text-blue-300 transition duration-300">Todos</Link>}
              </li>
              <li>
                {!authenticated && <Link to="/login" className="hover:text-blue-300 transition duration-300">Login</Link>}
              </li>
              <li>
                {authenticated && <Link to="/logout" onClick={logout} className="hover:text-blue-300 transition duration-300">Logout</Link>}
              </li>
            </ul>
          </nav>
        </div>
        <hr className="border-gray-300" />
      </div>
    );
  }
  