import "./Online.css"


export default function Online({Live}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
        <li className="onlineFriendList">   
              <div className="onlineFriendContainer"> 
                <img src={PF+Live.profilePicture} alt="" className="onlineprofileImg" />
                <span className="onlinebar"></span>
              </div>
                <span className="onlineFriendsName">{Live.username}</span>
        </li>
  );
}
