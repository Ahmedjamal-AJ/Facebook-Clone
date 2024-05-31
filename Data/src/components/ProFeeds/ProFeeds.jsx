import "./ProFeeds.css"
import Share from "../Share/Share"
import { Ppost } from "../dummydata/dummyData"
import ProPost from "../ProPost/ProPost"


export default function ProFeeds() {
  return (
    <div className="ProFeeds">
      <div className="ProFeedsWrapper">
      <Share/>
      {Ppost.map((p) => (
        <ProPost key={p.id} post={p}/>
      ))}
      
      </div>
    </div>
  );
}
