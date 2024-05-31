import {MoreVert, Verified, ThumbUpOffAlt, ChatBubbleOutline, ReplyAllOutlined} from "@mui/icons-material"
import "./ProPost.css"
import {myImg} from "../dummydata/dummyData"
import { useState } from "react"

export default function ProPost({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const LikeHandler =() =>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
}


    return (    
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={myImg.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{myImg.filter((u) => u.id === post?.userId)[0].username}</span><p><Verified htmlColor="blue" className="verTik"/></p>
                    <span className="postDate">{post.date}</span>
                </div>
                
                <div className="postTopRight">
                    <MoreVert/>
                    <span className="PpostLocation">{post.Location}</span>
                </div>
            </div>
            <div className="postCenter">
                <span className="PpostText">{post.desc}</span>
                <img src={PF+post.photo} alt="" className="postImg" />
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
