import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, IC, Pop} from "../Common";

function _404FTW() {
  return (
    <Accordion>
      <ChallengeSummary title={"404 FTW"} difficulty={1}/>
      <AccordionDetails>
        <ChallengeDetails>
          The next attack is forced browsing where the naughty one is guessing URLs. What's the first successful URL path in this attack?
        </ChallengeDetails>
        <Content>
          Looking back at our HTTP request statistics, we see that there are thousands of requests that were only made
          once.
        </Content>
        <ContentImage src={"images/wireshark_stats_3.png"}/>
        <Content>
          We can set our filter to be <IC>(ip.dst == 18.222.86.32 && ( http.response.code == 200)) || ip.src ==
          18.222.86.32 && http.request.method == "GET"</IC> and
          we can see the bruteforce directory discovery attempts. We simply need to look for the first one with
          a <Pop>200</Pop> response
          code and we have our answer of <Pop>/proc</Pop>:
        </Content>
        <ContentImage src={"images/wireshark_stats_4.png"}/>
      </AccordionDetails>
    </Accordion>
  )
}

export default _404FTW
