import '../App.css';
import {WriteupWrapper} from "../Common";
import WiresharkPractice from "./WiresharkPractice";
import WindowsEventLogs from "./WindowsEventLogs";
import SuricataRegatta from "./SuricataRegatta";
import RingHeader from "../RingHeader";

function Tolkien() {
  return (
    <WriteupWrapper>
      <RingHeader name={"Tolkien Ring"} image={"images/tolkien_ring.png"}
                  backgroundImage={"images/tolkien_background.png"}/>
      <WiresharkPractice/>
      <WindowsEventLogs/>
      <SuricataRegatta/>
    </WriteupWrapper>
  );
}

export default Tolkien;
