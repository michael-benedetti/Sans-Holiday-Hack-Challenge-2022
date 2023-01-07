import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, IC, Pop} from "../Common";
import React from "react";

function CredentialMining() {
  return (
    <Accordion>
      <ChallengeSummary title={"Credential Mining"} difficulty={1}/>
      <AccordionDetails>
        <ChallengeDetails>
          The first attack is a brute force login. What's the first username tried?
        </ChallengeDetails>
        <Content>
          Selecting <Pop>{"Statistics -> HTTP -> Requests"}</Pop>, we can see that several requests were made to
          the <IC>/login.html</IC> endpoint:
        </Content>
        <ContentImage src={"images/wireshark_stats_2.png"}/>
        <Content>
          Setting our filter to be <IC>http.request.method == "POST"</IC> shows all of the bruteforce attempts, and
          selecting the first
          result yields the answer of <Pop>alice</Pop>.
        </Content>
      </AccordionDetails>
    </Accordion>
  )
}

export default CredentialMining
