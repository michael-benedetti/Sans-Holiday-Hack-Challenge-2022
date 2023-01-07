import React from 'react';
import '../App.css';
import {WriteupWrapper} from "../Common";
import CloneWithADifference from "./CloneWithADifference";
import PrisonEscape from "./PrisonEscape";
import JollyCICD from "./JollyCICD";
import RingHeader from "../RingHeader";

function Elfen() {
  return (
    <WriteupWrapper>
      <RingHeader name={"Elfen Ring"} image={"images/elfen_ring.png"} backgroundImage={"images/elfen_background.png"}/>
      <CloneWithADifference/>
      <PrisonEscape/>
      <JollyCICD/>
    </WriteupWrapper>
  );
}

export default Elfen;
