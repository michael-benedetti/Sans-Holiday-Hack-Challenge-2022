import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, Pop} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";

function BuyAHat() {
  return (
    <Accordion>
      <ChallengeSummary title={"Buy a Hat"} difficulty={2}/>
      <AccordionDetails>
        <ChallengeDetails>
          Travel to the Burning Ring of Fire and purchase a hat from the vending machine with KringleCoin. Find hints for this objective hidden throughout the tunnels.
        </ChallengeDetails>
        <Content>
          As we enter the Burning Ring of Fire, we are greeted by <Pop>Wombley Cube</Pop> who has this to say:
        </Content>
        <QuoteCard
          character={characters.wombley_cube}
          quote={0}
        />
        <Content>
          The hat vending machine is parked nearby. Upon accessing the machine, we can choose from a wide variety of
          hats. To
          purchase one, we need to transfer 10KC to the corresponding wallet address.
        </Content>
        <Content>
          Let's keep it classic and classy:
        </Content>
        <ContentImage src={"images/hat.png"}/>
        <Content>
          We can use the nearby KTM terminal to make the purchase. We simply need to pass in the wallet information
          provided by
          the kiosk, the amount to send, and our wallet key we received at the beginning of the event.
        </Content>
        <Content>
          Once complete, here's what <Pop>Wombley Cube</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.wombley_cube}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default BuyAHat
