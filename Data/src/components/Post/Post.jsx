import {MoreVert, Verified, ThumbUpOffAlt, ChatBubbleOutline, ReplyAllOutlined} from "@mui/icons-material"
import "./Post.css"
import axios from "axios"
import { useState , useEffect, useContext } from "react"
import { format } from "timeago.js"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.lenght);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users?userId=${post.userId}`);
          setUser(res.data)
        };
    fetchUser();
      }, [post.userId])


const LikeHandler =() =>{
    try{
        axios.put("/posts/" + post._id + "/like", { userId: currentUser._id});
    } catch(err){

    }
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
}

    return (    
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                  <Link to={`profile/${user.username}`}><img src={user.profilePicture ? PF + user.profilePicture : PF+"person/noavatar.png"} alt="" className="postProfileImg" />
                    <span className="postUsername">{user.username}</span><p><Verified htmlColor="blue" className="verTik"/></p></Link>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                
                <div className="postTopRight">
                    <MoreVert/>
                    <span className="postLocation">{post.Location}</span>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={PF+post.img} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}Like.svg`} alt="" />
                    <img className="HeartIcon" src={`${PF}heart.svg`} alt=""/>
                    <img className="LolIcon" src={`${PF}lol.svg`} alt=""/>
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                    <span className="postShareCounter">{post.Share} shares</span>
                </div>

                <hr className="postbarHrbtn"/>
                <div className="postButtons">
                <button className="likes" onClick={LikeHandler} ><ThumbUpOffAlt/>Like</button>
                <button className="comments" onClick={"CommentHandler"}> <ChatBubbleOutline/>Comment</button>
                <button className="shares" onClick={"ShareHandler"}> <ReplyAllOutlined/>Share</button>
                </div>
                <hr className="postbarHrbtn"/>
            </div>
        </div>
    </div>
  )
}
