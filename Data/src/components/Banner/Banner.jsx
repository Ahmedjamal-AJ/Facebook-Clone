import { useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./Banner.css"
import { Add, Remove } from "@mui/icons-material"
import { useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const api = axios.create({
    baseURL: "http://localhost:5500/api",
  });
  export { api };


export default function Banner({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser, dispatch} = useContext(AuthContext)
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id))


    useEffect(() => {
       setFollowed(currentUser.followings.includes(user?.id)) 
    },[currentUser, user.id]);

    const FollowHandler = async () => {
        try{
            if(followed) {
                await axios.put("/users/"+user._id+"/unfollow", {userId:currentUser._id,});
                dispatch({type:"UNFOLLOW", payload:user._id}); 
            }else{
                await axios.put("/users/"+user._id+"/follow", {userId:currentUser._id,});
                dispatch({type:"FOLLOW", payload:user._id});
        }
        setFollowed(!followed);
        
        } catch(err) {
        }
    };
    
    return (
    <div className="headercntainer">
        
         <div classNameName="BannerHeader">
            <div className="mainCover">
                <img src={user.coverPicture ? PF+user.coverPicture : PF+"person/nocover.jpg"} alt="" className="CoverImg"/>
            </div>
        </div>


        <div classNameName="Middiv">
            <div classNameName="MinWrapper">
                <div className="Profile">
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.jpg"} alt="" className="Profilepic" width="200px"/> 
                    <p className="Profilename">{user.username}</p>
                    {user.username !== currentUser.username && (
                        <button className="followButton" onClick={"FollowHandler"}>
                            { followed  ? "Unfollow" : "Follow" }
                            { followed  ? <Remove/> : <Add/> }
                            </button>
                    )}
                    <p className="Followers">1.5M Followers  &nbsp;</p>
                    <p className="Following">&nbsp;5.2K Following</p>

                    <button className="camera"><img src={`${PF}camera.png`} alt="" width="25px" className="Cameraimg"/></button>
                        <img src={`${PF}underline.png`} alt="" className="underline"/>

                    <div className="SideBtn">
                        <button className="Edit"><img src={`${PF}pencil.png`} alt="" width="20px" className="Editimg" />  &nbsp;     Edit</button>
                        <button className="Seedash"><img src={`${PF}stock-market.png`} alt="" width="20px" className="Seedashimg"/>  &nbsp;     See dashboard</button>
                        <button className="PP"><img src={`${PF}Promote.png`} alt="" width="20px" className="PPimg"/>  &nbsp;     Promote Profile</button>
                    </div>

                </div>  
            </div>

            <div className="mainbutton">
                <button className="Posts">Posts</button>
                <button className="About">About</button>
                <button className="Reels">Reels</button>
                <button className="Photos">Photos</button>
                <button className="Videos">Videos</button>
                <button className="Groups">Groups</button>
            </div>

            <div>
                <img src={`${PF}underline.png`} alt="" className="underline2"/>
            </div>
                 
        </div>
    </div>
  )
}
