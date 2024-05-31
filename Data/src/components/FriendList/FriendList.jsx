import "./FriendList.css"

export default function FriendList({FrndList}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
        <div className="frndWrapper">
            <img src={PF+FrndList.profilePicture} alt=""  className="frndImg" />
            <span className="frndName">{FrndList.username}</span>
        </div>
  );
}
