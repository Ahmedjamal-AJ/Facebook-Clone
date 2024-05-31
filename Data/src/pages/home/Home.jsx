import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feeds/Feed";
import "./home.css"


export default function Home() {
    return (
      <>
            <Topbar/>      
            <div className="homeContainer">
              <Sidebar/>
              <Feed/>
              <Rightbar/>
            </div>
      </>
    );
}

