import "./ProSider.css"
import {AdminPanelSettingsOutlined, SchoolOutlined,AddLocationOutlined, CalendarMonth, BusinessCenterOutlined} from "@mui/icons-material"
import {Friends, FrndList} from "../dummydata/dummyData"
import FriendList from "../FriendList/FriendList";
import { Link } from "react-router-dom";


export default function ProSider({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
    <div className="mainbiomenu">
            <div className="introdiv">
                <h3 className="intro">Intro</h3>
                <p className="intropara">{user.desc}</p>
                <button className="Editbio">Edit bio</button>
             <div className="ProfileDetails"><AdminPanelSettingsOutlined/><p className="ppp">Profile - </p><p className="DC">Digital creator</p></div> 
              <div className="Studies"><SchoolOutlined/>  <p className="UOK">Studied at University of Karachi</p></div>
              <div className="JO"><BusinessCenterOutlined/> <p className="BOJ">Branch Operations at </p> <p className="HMBJO">HABIBMETRO Bank</p></div>
               <div className="LiveLoca"><AddLocationOutlined/></div> <p className="City">From </p><p className="City2">{user.city}</p>
               <div className="DOJCA"><CalendarMonth/></div> <p className="DOJ">Join September 2017</p>
                <button className="Editbtn">Edit details</button>
                <button className="AF">Add featured</button>
            </div>


            <div classNameName="BottomDiv">
        <div className="Photodiv">
            <h3 className="Photo">Photos</h3>
            <button className="SAP">See all photos</button>
            <div className="PDiv">
            <img src={`${PF}photoarry.jpg`} alt="" className="PA1"/>
            <img src={`${PF}photoarry6.jpg`} alt="" className="PA2"/>
            <img src={`${PF}photoarry3.jpg`} alt="" className="PA3"/>
            </div>

            <div className="PDiv1">
            <img src={`${PF}photoarry1.jpg`} alt="" className="PA4"/>
            <img src={`${PF}photoarry2.jpg`} alt="" className="PA5"/>
            <img src={`${PF}photoarry4.jpg`} alt="" className="PA6"/>
            </div>
            
            <div className="PDiv2">
            <img src={`${PF}photoarry5.jpg`} alt="" className="PA7"/>
            <img src={`${PF}photoarry7.jpg`} alt="" className="PA8"/>
            <img src={`${PF}photoarry8.jpg`} alt="" className="PA9"/>
            </div>
        </div>

        <div className="Frienddiv">
            <div className="divfrdde">
                <h3 className="Friend">Friends</h3>
                <button className="SAF">See all friends</button>
                <p className="fQ">1700 friends</p>
            </div>
            <Link to={"/Profile"+FriendList.username}>   
                <div className="FrndName">
                {FrndList.map(u => (
                    <FriendList key={u.id} FrndList={u}/>
                ))}
                </div>
            </Link>
        </div>

        <div className="LEdiv">
            <p className="LE">Life event</p>
            <button className="SAB">See all</button>

            <div className="divLife1">
                <img src={`${PF}Saylani.png`} alt="" width="100px" className="SMITimg"/>
                <div className="detailsLifediv">
                    <p className="LEP1">Mern Stack Developer</p>
                    <p className="LEP2">From SMIT</p>
                    <p className="LEP3">June 18, 2023</p>
                </div>
            </div>

            <div className="divLife2">
                <img src={`${PF}Digiskills.png`} alt="" width="100px" className="DGskill"/>
                <div className="detailsLifediv">
                    <p className="LEP4">WordPress Developer</p>
                    <p className="LEP5">From DigiSkills</p>
                    <p className="LEP6">October 01, 2023</p>
                </div>
            </div>
        </div>
        
        <p className="morelinks">Privacy . Terms . Advertising . Ad Choice <img src={`${PF}playbutton.jpg`} alt="" className="Playbtnbootm"/> . Cookier . More . Meta <br/>@ 2043</p>    
        </div>
    </div>
  )
}
