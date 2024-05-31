import "./Profile.css"
import Topbar from "../../components/Topbar/Topbar";
import ProSider from "../../components/ProSider/ProSider";
import Banner from './../../components/Banner/Banner';
import ProFeeds from './../../components/ProFeeds/ProFeeds';
export default function Profile() {

  return (
    <>
    <Topbar/>      
    <div className="profile">
      <Banner/>
      
      <div className="profileRight">
        <div className="profileRightTop"></div>
        <div className="profileRightBottom">
        <ProSider />
        <ProFeeds />
        </div>
      </div>
    </div>
</>
  )
}
