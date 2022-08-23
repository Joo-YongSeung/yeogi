import { Navigate } from "react-router-dom";
import LoginForm from "../components/form/LoginForm";

function Login() {

    const loginStatus = !!localStorage.getItem('isLogin');

    if(loginStatus) {
        return <Navigate to="/" replace={ true }/>
    }

    return (
        <>
        
            <LoginForm/>
        </>
    );

}

export default Login;