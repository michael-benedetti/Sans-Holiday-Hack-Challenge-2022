import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, Pop} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";

function BlockchainDivination() {
  return (
    <Accordion>
      <ChallengeSummary title={"Blockchain Divination"} difficulty={4}/>
      <AccordionDetails>
        <ChallengeDetails>
          Use the Blockchain Explorer in the Burning Ring of Fire to investigate the contracts and transactions on the chain. At what address is the KringleCoin smart contract deployed? Find hints for this objective hidden throughout the tunnels.
        </ChallengeDetails>
        <Content>
          Heading towards the next challenge, we are greeted by <Pop>Slicmer</Pop> who has the following to say:
        </Content>
        <QuoteCard
          character={characters.slicmer}
          quote={0}
        />
        <Content>
          For this challenge, we will access the nearby Blockchain explorer to find the address for the KringleCoin
          smart
          contract. Loading up the terminal we can see that there are <Pop>26713</Pop> blocks to sift through:
        </Content>
        <ContentImage src={"images/blockchain_1.png"}/>
        <Content>
          Clicking next to inspect block 1... wait, what? We have our answer?
        </Content>
        <ContentImage src={"images/blockchain_2.png"}/>
        <Content>
          Ok then, on to the next one. Here's what <Pop>Slicmer</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.slicmer}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default BlockchainDivination
