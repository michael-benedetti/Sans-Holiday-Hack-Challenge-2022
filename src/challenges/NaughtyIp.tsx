import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, IC, Pop} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import React from "react";

function NaughtyIp() {
  return (
    <Accordion>
      <ChallengeSummary title={"Naughty IP"} difficulty={1}/>
      <AccordionDetails>
        <ChallengeDetails>
          Use the artifacts from Alabaster Snowball to analyze this attack on the Boria mines. Most of the traffic to this site is nice, but one IP address is being naughty! Which is it? Visit Sparkle Redberry in the Tolkien Ring for hints.
        </ChallengeDetails>
        <Content>
          After entering the Web Ring, we are greeted by <Pop>Alabaster Snowball</Pop> who has this to say:
        </Content>
        <QuoteCard
          character={characters.alabaster_snowball}
          quote={0}
        />
        <Content>
          After loading up the <Pop>.pcap</Pop> in Wireshark, we can leverage the statistics functionality to find data
          that looks
          suspicious. Selecting <Pop>{"Statistics -> Conversations"}</Pop>, and selecting the <Pop>IPv4</Pop> shows a
          summary of all conversations in
          the packet capture. Sorting by number of packets in the conversation yields a clear outlier:
        </Content>
        <ContentImage src={"images/wireshark_stats.png"}/>
        <Content>
          Our answer is <IC>18.222.86.32</IC>
        </Content>
      </AccordionDetails>
    </Accordion>
  )
}

export default NaughtyIp
