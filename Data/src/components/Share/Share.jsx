import { PermMedia, Label, Room, EmojiEmotions, OndemandVideo, Cancel } from "@mui/icons-material"
import "./share.css"
import { useContext, useState } from "react";
import { AuthContext } from './../../Context/AuthContext';
import { useRef } from "react";
import axios from "axios";

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user } = useContext(AuthContext)
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
    
    const newPost = {
        userId: user._id,
        desc: desc.current.value
    };
    if (file) { 
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("file", file);
        data.append("name", fileName);
        newPost.img = fileName;
        try{
            await axios.post("/upload", data);
        }catch(err){}
    }

    try{
        await axios.post("/posts",newPost)
        window.location.reload()
    }catch(err){}
}       
    return (
    <div className="share"> 
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={user.profilePicture ? PF+user.profilePicture : PF + "person/noavatar.png"} alt="" className="shareProfileImg" />
                <input placeholder={"What's in your mind" + user.username + "?"} className="shareInput" ref={desc}/>
            </div>
            <hr className="shareHr"/>
            {file && (
                <div className="shareImgContainer">
                    <img src={URL.createObjectURL(file)} alt="" className="shareImg"/>
                    <Cancel className="shareCancelling" onClick={()=>setFile(null)}/>
                </div>
            )}
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo/Video</span>
                    <input style={{display:"none"}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e)=>setFile(e.target.files[0])} />
                    </label>

                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tags</span>
                    </div>

                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Locations</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                    </div>

                    <div className="shareOption">
                        <OndemandVideo htmlColor="red" className="shareIcon"/>
                    <span className="shareOptionText">Reels</span>
                    </div>
                </div>
                <button className="shareButton" type="submit">Share</button>
            </form>
        </div>
    </div>

  );
}
