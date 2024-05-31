import {RssFeed, HelpOutline, School, WorkOutline, PlayCircleFilledOutlined, Group, Bookmark, Chat, Event, Campaign, AdminPanelSettingsOutlined, ConnectWithoutContactOutlined,
   SensorOccupiedOutlined, MarkEmailReadOutlined} from "@mui/icons-material"
import "./sidebar.css"
import { Friends } from "../dummydata/dummyData";
import ClosedFriends from "../ClosedFriends/ClosedFriends";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="profileNameside">
        <Link to={"/Profile/:username"}> <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noavatar.png"} alt="" className="profilePicture" /></Link>
          <span className="ProfileNameside">Ahmed Jamal</span>
          </div>
        <ul className="sidebarList">
          <li className="sidebarItem">
            <RssFeed htmlColor="blue" className="sidebarIcon"/>
            <span className="sidebarListItentext">Feeds</span>
          </li>

          <li className="sidebarItem">
            <Chat htmlColor="blue" className="sidebarIcon"/>
            <span className="sidebarListItentext">Chats</span>
          </li>

          <li className="sidebarItem">
            <PlayCircleFilledOutlined htmlColor="blue" className="sidebarIcon"/>
            <span className="sidebarListItentext">Videos</span>
          </li>

          <li className="sidebarItem">
            <Group htmlColor="blue" className="sidebarIcon"/>
            <span className="sidebarListItentext">Groups</span>
          </li>

          <li className="sidebarItem">
            <Bookmark htmlColor="blue" className="sidebarIcon"/>
            <span className="sidebarListItentext">Bookmarks</span>
          </li>

          <li className="sidebarItem">
            <HelpOutline htmlColor="blue" className="sidebarIcon"/>
            <span className="sidebarListItentext">Questions</span>
          </li>

          <li className="sidebarItem">
            <WorkOutline htmlColor="blue" className="sidebarIcon"/>
            <span className="sidebarListItentext">Jobs</span>
          </li>

          <li className="sidebarItem">
            <Event htmlColor="blue" className="sidebarIcon"/>
            <span className="sidebarListItentext">Events</span>
          </li>

          <li className="sidebarItem">
            <School htmlColor="blue" className="sidebarIcon"/>
            <span className="sidebarListItentext">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
        {Friends.map(u => (
          <ClosedFriends key={u.id} Friends={u}/>
        ))}
      </ul>

      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <div className="pagesdetails">
        <ul className="pagesWrapper">
          <span className="pagesTitle"> Your Pages & profiles.</span>
          <li className="pageside">
            <img src={`${PF}beauty saloon.jpg`} alt="" className="pagesImage" />
            <span className="pagesName">The House of Beauty by NJ</span>
          </li>

          <li className="pageside">
            <img src={`${PF}Nanoo.jpg`} alt="" className="pagesImage" />
            <span className="pagesName">Nanoo.pk</span>
          </li>

          <li className="pageside">
            <img src={`${PF}burgerobeast.jpg`} alt="" className="pagesImage" />
            <span className="pagesName">Burger-O-Beast</span>
          </li>

          <li className="pageside">
            <img src={`${PF}gym.jpg`} alt="" className="pagesImage" />
            <span className="pagesName">Body Fitness by AJ</span>
          </li>

          <li className="pageside">
            <img src={`${PF}foundation.jpg`} alt="" className="pagesImage" />
            <span className="pagesName">Akhtari Begum Foundation</span>
          </li>

          <li className="pageside">
            <img src={`${PF}dawat ekhas.jpg`} alt="" className="pagesImage" />
            <span className="pagesName">Dawat-e-Khass Traditional Foods</span>
          </li>
        </ul>
          <div className="MoreOption">
            <div className="allmoreItems">
              <div className="moreOptions">
                <MarkEmailReadOutlined/>
                <span className="msgText">6 messages</span>
              </div>

              <div className="moreOptions">
                <Campaign/>
                <span className="msgText">Promotions</span>
              </div>

              <div className="moreOptions">
                <AdminPanelSettingsOutlined/>
                <span className="msgText"> Page Notification</span>
              </div>

              <div className="moreOptions">
                <ConnectWithoutContactOutlined/>
                <span className="msgText">Switch to Page</span>
              </div>

              <div className="moreOptions">
                <SensorOccupiedOutlined/>
                <span className="msgText">Admin Panal</span>
              </div>
          </div>
          </div>
      </div>
      </div>
    </div>
    
  );
}

