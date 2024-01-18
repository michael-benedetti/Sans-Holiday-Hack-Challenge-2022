import '../App.css';
import {WriteupWrapper} from "../Common";
import NaughtyIp from "./NaughtyIp";
import CredentialMining from "./CredentialMining";
import _404FTW from "./404FTW";
import Abbreviations from "./Abbreviations";
import OpenBoriaMineDoor from "./OpenBoriaMineDoor";
import GlamTarielsFountain from "./GlamtarielsFountain";
import RingHeader from "../RingHeader";

function Web() {
  return (
    <WriteupWrapper>
      <RingHeader name={"Web Ring"} image={"images/web_ring.png"} backgroundImage={"images/web_background.png"}/>
      <NaughtyIp/>
      <CredentialMining/>
      <_404FTW/>
      <Abbreviations/>
      <OpenBoriaMineDoor/>
      <GlamTarielsFountain/>
    </WriteupWrapper>
  );
}

export default Web;
