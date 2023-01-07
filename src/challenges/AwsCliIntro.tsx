import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, Pop, StyledSyntaxHighligher, TerminalPrompt} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import React from "react";

function AwsCliIntro() {
  return (
    <Accordion>
      <ChallengeSummary title={"AWS CLI Intro"} difficulty={1}/>
      <AccordionDetails>
        <ChallengeDetails>
          Try out some basic AWS command line skills in this terminal. Talk to Jill Underpole in the Cloud Ring for hints.
        </ChallengeDetails>
        <Content>
          Upon entering Cloud Ring, we first meet up with <Pop>Jill Underpole</Pop> who has this to say:
        </Content>
        <QuoteCard
          character={characters.jill_underpole}
          quote={0}
        />
        <Content>
          Accessing the nearby terminal lands us in a playground to test out to <Pop>AWS CLI</Pop>. We simply need to
          walk through it and
          accomplish each task. The first one just has us access the help prompt, then asks us to configure the client:
        </Content>
        <TerminalPrompt>
          You may not know this, but AWS CLI help messages are very easy to access. First, try typing:
          <br/>
          $ aws help
          <br/><br/>
          Great! When you're done, you can quit with q.
          <br/>
          Next, please configure the default aws cli credentials with the access key AKQAAYRKO7A5Q5XUY2IY, the secret
          key qzTscgNdcdwIo/soPKPoJn9sBrl5eMQQL19iO5uf and the region us-east-1 .
          <br/>
          https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config
        </TerminalPrompt>
        <StyledSyntaxHighligher langauge={"sh"}>
          {
            `elf@780bf3762c3d:~$ aws configure
AWS Access Key ID [None]: AKQAAYRKO7A5Q5XUY2IY
AWS Secret Access Key [None]: qzTscgNdcdwIo/soPKPoJn9sBrl5eMQQL19iO5uf
Default region name [None]: us-east-1
Default output format [None]:`
          }
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          Excellent! To finish, please get your caller identity using the AWS command line. For more details please
          reference:
          <br/>
          $ aws sts help
          <br/>
          or reference:
          <br/>
          https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/index.html
        </TerminalPrompt>
        <StyledSyntaxHighligher langauge={"sh"}>
          {
            `elf@780bf3762c3d:~$ aws sts get-caller-identity
{
    "UserId": "AKQAAYRKO7A5Q5XUY2IY",
    "Account": "602143214321",
    "Arn": "arn:aws:iam::602143214321:user/elf_helpdesk"
}`
          }
        </StyledSyntaxHighligher>
        <Content>
          This completes the challenge, to which <Pop>Jill Underpole</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.jill_underpole}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default AwsCliIntro
