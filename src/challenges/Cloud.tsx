import React from 'react';
import '../App.css';
import {WriteupWrapper} from "../Common";
import AwsCliIntro from "./AwsCliIntro";
import TrufflehogSearch from "./TrufflehogSearch";
import ExplorationViaAwsCli from "./ExplorationViaAwsCli";
import RingHeader from "../RingHeader";

function Cloud() {
  return (
    <WriteupWrapper>
      <RingHeader name={"Cloud Ring"} image={"images/cloud_ring.png"} backgroundImage={"images/cloud_background.png"}/>
      <AwsCliIntro/>
      <TrufflehogSearch/>
      <ExplorationViaAwsCli/>
    </WriteupWrapper>
  );
}

export default Cloud;
