import React from 'react';
import '../App.css';
import {WriteupWrapper} from "../Common";
import BuyAHat from "./BuyAHat";
import BlockchainDivination from "./BlockchainDivination";
import ExploitASmartContract from "./ExploitASmartContract";
import RingHeader from "../RingHeader";

function Brof() {
  return (
    <WriteupWrapper>
      <RingHeader name={"Burning Ring of Fire"} image={"images/brof.png"}
                  backgroundImage={"images/brof_background.png"}/>
      <BuyAHat/>
      <BlockchainDivination/>
      <ExploitASmartContract/>
    </WriteupWrapper>
  );
}

export default Brof;
