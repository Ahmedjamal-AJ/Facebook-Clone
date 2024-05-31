import "./rightbar.css"
import {AddCircleOutlineOutlined, SmsOutlined, Search, MoreHoriz} from "@mui/icons-material"
import {Live} from "../dummydata/dummyData"
import Online from "../Online/Online"


export default function rightbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="rightBar">
      <div className="rihtWrapper">
          <p className="sidedivTitle">Sponsored <MoreHoriz className="OptionBarOne"/></p>
          <div className="sponcerside">
            <img src={`${PF}Sponserimg.png`} alt="" className="sponserImg" />
            <span className="sponTitle">Stay connected to home</span>
            <span className="sponserURL">studyperth.com.au</span>
          </div>

          <div className="sponcerside">
            <img src={`${PF}auza.jpg`} alt="" className="sponserImg" />
            <span className="sponTitle">Introducing Aura Lifestyle</span>
            <span className="sponserURL">zerolifestyle.co</span>
          </div>

             <hr className="hrforRightside"/>
        <div className="birthdayContainer">
          <p className="sidedivTitle">Birthday</p>
          <img src={`${PF}birthdaylogo.png`} alt="" className="birthdayImg" />
          <span className="birthdayText">Abdullah Zahid & 3 other friends have a <br /> birthday today.
          </span>
        </div>
              <hr className="hrforRightside"/>
        <div className="GroupContainer">
          <p className="sidedivTitle">Group conversations <MoreHoriz className="OptionBartwo"/></p>
          <div className="RightsideAddIcon">
            <AddCircleOutlineOutlined/>
          </div>
          <span className="groupText">Create new group
          </span>
        </div>
              <hr className="hrforRightside"/>
        <p className="sidedivTitle">Your community chats <MoreHoriz className="OptionBarThree" /></p>

        <div className="GroupContainer">  
          <div className="RightsideAddIcon">
            <SmsOutlined/>
          </div>
          <span className="groupTitles">Fiverr</span>
          <span className="groupTitlesdetails">Developer Group</span>
        </div>

        <div className="GroupContainer">  
          <div className="RightsideAddIcon">
            <SmsOutlined/>
          </div>
          <span className="groupTitles">Saylani Mass IT Training</span>
          <span className="groupTitlesdetails">SMIT Batch 10</span>
        </div>

        <div className="GroupContainer">  
          <div className="RightsideAddIcon">
            <SmsOutlined/>
          </div>
          <span className="groupTitles">HN Public Seconday School</span>
          <span className="groupTitlesdetails">HN School Community</span>
        </div>

        <div className="GroupContainer">  
          <div className="RightsideAddIcon">
            <SmsOutlined/>
          </div>
          <span className="groupTitles">Digiskills</span>
          <span className="groupTitlesdetails">Batch 4 Questions</span>
        </div>

        <hr className="hrforRightside"/>
        <p className="onlineFriendTitle">Online Friends <Search className="searchIcon"/> <MoreHoriz className="OptionBarFour"/> </p>
          <ul className="onlinefriends">
              {Live.map(u => (
                <Online key={u.id} Live={u}/>
              ))}
          
          </ul>
        
      </div>
    </div>
  );
}
