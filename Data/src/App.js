import Home from "./pages/home/Home";
import Signup from "./pages/Signup/Signup";
import Profile from './pages/Profile/Profile';
import  Login from "./pages/Login/LogIn"
import { useContext , useEffect , useState }  from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { LoginSuccess } from "./Context/AuthActions";



function App() {
 const { user, dispatch } = useContext(AuthContext);
  
 useEffect(() => {
  const saveUserDataToLocal = () => {
    const userData = localStorage.getItem("userData");
    if(userData) {
      const parsedUserData = JSON.parse(userData);
      dispatch(LoginSuccess(parsedUserData));
    } else {
      dispatch(LoginSuccess(null));
    }
  };
  saveUserDataToLocal();
 },[]);
 
 
 return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={localStorage.getItem ("userData") ? <Home /> : <Signup /> }/>
            <Route path="/Profile:username" element={<Profile/>}/>
            <Route path="/Login/*" element={user ? <Navigate to="/" /> : <Login/>}/>
            <Route path="/Signup/*" element={user ? <Navigate to="/" /> : <Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
 
}

export default App;
