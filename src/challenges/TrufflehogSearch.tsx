import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, Pop, StyledSyntaxHighligher} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";

function TrufflehogSearch() {
  return (
    <Accordion>
      <ChallengeSummary title={"Trufflehog Search"} difficulty={2}/>
      <AccordionDetails>
        <ChallengeDetails>
          Use Trufflehog to find secrets in a Git repo. Work with Jill Underpole in the Cloud Ring for hints. What's the name of the file that has AWS credentials?
        </ChallengeDetails>
        <Content>
          Continuing up the Cloud Ring, we run into <Pop>Gerty Snowburrow</Pop> who relays the following:
        </Content>
        <QuoteCard
          character={characters.gerty_snowburrow}
          quote={0}
        />
        <Content>
          Checking out <a href='https://github.com/trufflesecurity/trufflehog'>Trufflehog</a>, it seems as though we can
          leverage <Pop>docker</Pop> for
          a quick win:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ docker run -it -v "$PWD:/pwd" trufflesecurity/trufflehog:latest git https://haugfactory.com/orcadmin/aws_scripts
🐷🔑🐷  TruffleHog. Unearth your secrets. 🐷🔑🐷

Found unverified result 🐷🔑❓
Detector Type: AWS
Decoder Type: PLAIN
Raw result: AKIAAIDAYRANYAHGQOHD
File: put_policy.py
Email: asnowball <alabaster@northpolechristmastown.local>
Repository: https://haugfactory.com/orcadmin/aws_scripts
Timestamp: 2022-09-07 07:53:12 -0700 -0700
Line: 6
Commit: 106d33e1ffd53eea753c1365eafc6588398279b5`
          }
        </StyledSyntaxHighligher>
        <Content>
          In the first result, we see that an AWS key was committed in the file <Pop>put_policy.py</Pop> which is our
          answer.
        </Content>
        <Content>
          Here's what <Pop>Gerty Snowburrow</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.gerty_snowburrow}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default TrufflehogSearch
