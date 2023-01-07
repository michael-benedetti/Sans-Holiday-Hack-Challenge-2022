import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, Pop, StyledSyntaxHighligher} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import React from "react";

function Abbreviations() {
  return (
    <Accordion>
      <ChallengeSummary title={"IMDS, XXE, and Other Abbreviations"} difficulty={2}/>
      <AccordionDetails>
        <ChallengeDetails>
          The last step in this attack was to use XXE to get secret keys from the IMDS service. What URL did the attacker force the server to fetch?
        </ChallengeDetails>
        <Content>
          We can add the following filter to identify any traffic that used the <Pop>xml</Pop> content type:
        </Content>
        <StyledSyntaxHighligher>
          http.content_type contains "xml"
        </StyledSyntaxHighligher>
        <Content>
          This leaves us with just a few results, and inspecting them reveals the following:
        </Content>
        <ContentImage src={"images/wireshark_stats_5.png"}/>
        <Content>
          This completes the challenges that <Pop>Alabaster Snowball</Pop> had for us, and here's what he has to say:
        </Content>
        <QuoteCard
          character={characters.alabaster_snowball}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default Abbreviations
