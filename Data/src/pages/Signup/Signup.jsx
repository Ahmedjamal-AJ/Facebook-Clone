import axios from "axios";
import "./Signup.css"
import { useRef } from "react";
import { Link , useNavigate  } from "react-router-dom";

const api = axios.create({
    baseURL: "http://localhost:5500/api",
  });
  export { api };

export default function Signup() {
    
    const navigate  = useNavigate ();
    const FirstName = useRef();
    const LastName = useRef();
    const email = useRef();
    const password = useRef();
    const confirmpassword = useRef();
    const date = useRef();
    const Month = useRef();
    const Year = useRef();
    const GenderMale = useRef();
    const GenderFemale = useRef();
    const Custome = useRef();
    const DOB = useRef();
    const Gender = useRef();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
  
    const SignupHandler = async (e) => {
        e.preventDefault();
    if (confirmpassword.current.value !== password.current.value) {
        confirmpassword.current.setCustomeValidity("Passwords don't match!");
    } else {
        const user = {
        FirstName: FirstName.current.value,
        LastName: LastName.current.value,
        email: email.current.value,
        password: password.current.value,
       
        };
        try{
            const res = await api.post("/auth/Signup", user);
            console.log("user Signup successfully");
            navigate("/login");
        }catch(error){
            console.log(error);
        }
    }
};
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h6 className="FBtitle">Facebook</h6>
                    <h4 className="Create-account">Create a new account</h4><br/>
                    <h5 className="quick">It's quick and easy.</h5><br/>
                </div>

            <div className="SignupForm">
                <form className="main-form" onSubmit={SignupHandler}>
                    <input required ref={FirstName} type="text" name="FirstName" placeholder="First name" className="FirstName"/>
                    <input required ref={LastName} type="text" name="LastName" placeholder="Last name" className="LastName"/>

                    <input required ref={email} type="email" name="Email" placeholder="Mobile number or email address" className="Email"/>
         
                    <input required ref={password} minLength="6" type="password" name="Passport" placeholder="New password" className="Password"/>
                    <input required ref={confirmpassword} minLength="6" type="password" name="Confirm Passport" placeholder="Retype New password" className="ConfrimPassword"/>
            
                    <button className="Signup" type="submit">Sign Up</button>

                    <span className="logiForgot">Forgot Password?</span>
                        <button className="logiRegisterButton">
                            <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>Log in Account </Link>
                        </button>
        
            <p className="TC-para1">People who use our service may have uploaded your contact information to <br/>
                Facebook. <a href="">Learn more.</a></p>
            
            <p className="TC-para2">By clicking Sign Up, you agree to our <a href="">Terms, Privacy Policy</a> and <a href="">Cookies Policy.</a> <br/>
                You may receive SMS notifications from us and can opt out at any time.</p>
            </form>
    </div>
        </div>
            </div>

  );
}
