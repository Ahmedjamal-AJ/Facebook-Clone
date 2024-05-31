import "./LogIn.css"
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from '../../Context/AuthContext';
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginSuccess } from "../../Context/AuthActions";

export default function LogIn() {
    const email = useRef();
    const password = useRef();
    const {user, isFeatching, error, dispatch} = useContext(AuthContext);
    
    
    const loginHandler = async (e) => {
        e.preventDefault();
        const callApi = await loginCall(   
        {email: email.current.value, password: password.current.value},dispatch
    );
    console.log(isFeatching);

    if(callApi && callApi.data) {
        localStorage.setItem("userData", JSON.stringify(callApi.data));
        dispatch(LoginSuccess(callApi.data));
    }
};

    return (

    <div className="main-header">
        <div> 
            <div className="header">
                <h6 className="FBTitle">Facebook</h6>
                <p className="Login-header">Facebook helps you connect and share <br/> with the people in your life.</p>
            </div>
    
        <div className="logIndiv">
            <form className="sub-header" onSubmit={loginHandler}>
                <input required type="email" name="Email address or Mobile number" placeholder="Email address or Mobile number" id="LoginEmail" ref={email}/>
                <input required minLength="6" type="password" name="Password" placeholder="Password" id="LoginPassword" ref={password}/>
            
                <button className="Login" type="submit  disabled={isFetching}">{isFeatching ? <CircularProgress color="white" size={"20px"}/> : "Log in"} </button> 

                <span className="LogFor">Forgot Password?</span>
                <button className="logRegisterButton">
                <Link to="/Signup" style={{ textDecoration: "none", color: "inherit" }}>Create a New Account</Link>
                </button>
        </form>
            </div>
        </div>
    </div>
        );
    }