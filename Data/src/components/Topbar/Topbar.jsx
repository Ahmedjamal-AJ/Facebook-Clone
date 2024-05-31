import { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";


export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
<div className="topbarContainer">
  <div className="FBlogoDiv">
    <Link to={"/"}>
    <img src={`${PF}FBlogo.jpg`} alt="" className="FblogoTopbar" width="40px"/>
    </Link>
  </div> 
        
  <div className="topbarLeft">
      <div className="searchbar">
        <img src={`${PF}search.png`} alt=""  width="18px" className="SearchIcon"/> 
        <input type="input" placeholder="Search Facebook" className="searchInput"/>
      </div>
  </div>
          
      <div className="TopCenterBtn">
        <div>
        <Link to={"/"}><button className="Home" ><img src={`${PF}home.png`} alt=""  width="25px"/></button></Link>
          <button className="Playvideo"><img src={`${PF}5340279_play_video_youtube_youtuber_icon.png`} alt=""  width="25px"/></button>
          <button className="Store"><img src={`${PF}store.png`} alt=""  width="25px"/></button>
          <button className="Group"><img src={`${PF}group.png`} alt=""  width="25px"/></button>
          <button className="Playgame"><img src={`${PF}joystick.png`} alt=""  width="25px"/></button>
        </div>
      </div>

     
      
      <div className="topbarRight">
          <div className="topbarIcons">
            <div className="topbariconsitem">
            <img src={`${PF}menu.png`} alt=""  width="25px"/>
              <span className="topbariconbadge">20</span>              
            </div>

            <div className="topbariconsitem">
            <img src={`${PF}messenger.png`} alt=""  width="25px"/>
              <span className="topbariconbadge">59</span>              
            </div>

            <div className="topbariconsitem">
            <img src={`${PF}bell.png`} alt="" width="25px"/>
              <span className="topbariconbadge">99</span>              
            </div>
          </div>
          {/* <Link to={`/Profile/${user.username}`}>
          <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noavatar.png"} alt="" className="topbarimg" />
          </Link> */}
      </div>
    </div>
  )
}
