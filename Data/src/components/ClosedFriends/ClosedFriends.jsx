import "./ClosedFriends.css"


export default function ClosedFriends({Friends}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
        <li className="sidebarFriend">   
                <img src={PF+Friends.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{Friends.username}</span>
        </li>
  );
}