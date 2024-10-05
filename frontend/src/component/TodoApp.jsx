import { BrowserRouter, Routes, Route, useNavigate, useParams, Link, Navigate } from 'react-router-dom'
import { LoginComponent } from "./LoginComponent"
import { HeaderComponent } from "./HeaderComponent"
import { WelcomeComponent } from "./WelcomeComponent"
import { ListTodosComponent } from "./ListTodosComponent"
import { LogoutComponent } from "./LogoutComponent"
import { ErrorComponent } from "./ErrorComponent"
import { FooterComponent } from "./FooterComponent"
import AuthProvider, { useAuth } from '../security/AuthContext'

function AuthenticateRoute({children}){
    const AuthContext = useAuth();
    if(AuthContext.isAuthenticated){
        return children;
    }

    return <Navigate to="/" />
}



export function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}/>
                        <Route path='/login' element={<LoginComponent/>}/>
                        <Route path='/welcome/:username' element={
                            <AuthenticateRoute>
                                <WelcomeComponent/>
                            </AuthenticateRoute>}
                        />

                        <Route path='/todos' element={
                            <AuthenticateRoute>
                                <ListTodosComponent/>
                            </AuthenticateRoute>}
                        />

                        <Route path='/logout' element={
                            <AuthenticateRoute>
                                <LogoutComponent/>
                            </AuthenticateRoute>}
                        />

                        <Route path='*' element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

