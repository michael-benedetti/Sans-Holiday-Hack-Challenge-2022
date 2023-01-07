import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, IC, Pop, StyledSyntaxHighligher, TerminalPrompt} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import React from "react";

function CloneWithADifference() {
  return (
    <Accordion>
      <ChallengeSummary title={"Clone with a Difference"} difficulty={1}/>
      <AccordionDetails>
        <ChallengeDetails>
          Clone a code repository. Get hints for this challenge from Bow Ninecandle in the Elfen Ring.
        </ChallengeDetails>
        <Content>
          First up in Elfen Ring is <Pop>Bow Ninecandle</Pop> with a terminal challenge. Here's what he has to say:
        </Content>
        <QuoteCard
          character={characters.bow_ninecandle}
          quote={0}
        />
        <Content>
          We get the following prompt from the terminal:
        </Content>
        <TerminalPrompt>
          We just need you to clone one repo: git clone git@haugfactory.com:asnowball/aws_scripts.git
          <br/>
          This should be easy, right?
          <br/>
          <br/>
          Thing is: it doesn't seem to be working for me. This is a public repository though. I'm so confused!
          <br/><br/>
          Please clone the repo and cat the README.md file.
          <br/>
          Then runtoanswer and tell us the last word of the README.md file!
        </TerminalPrompt>
        <Content>
          Attempting to run <IC>git clone</IC> against the repo fails with the following:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `bow@65b52af52d55:~$ git clone git@haugfactory.com:asnowball/aws_scripts.git
Cloning into 'aws_scripts'...
The authenticity of host 'haugfactory.com (34.171.230.38)' can't be established.
ECDSA key fingerprint is SHA256:Fl5+9aQdPLDQ/CZsSc8Y+fLim4ePgIvxWIbXRwxAu6w.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'haugfactory.com,34.171.230.38' (ECDSA) to the list of known hosts.
git@haugfactory.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.`
          }
        </StyledSyntaxHighligher>
        <Content>
          It looks like the provided uri is targeting an <Pop>ssh</Pop> clone. We can simply modify this to
          utilize <Pop>https</Pop> instead:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `bow@65b52af52d55:~$ git clone https://haugfactory.com/asnowball/aws_scripts.git
Cloning into 'aws_scripts'...
remote: Enumerating objects: 64, done.
remote: Total 64 (delta 0), reused 0 (delta 0), pack-reused 64
Unpacking objects: 100% (64/64), 23.83 KiB | 1.49 MiB/s, done.`
          }
        </StyledSyntaxHighligher>
        <Content>
          If we <IC>cat</IC> out <IC>README.md</IC>, we get the answer to this challenge: <Pop>maintainers</Pop>.
        </Content>
        <Content>
          Here's what <Pop>Bow Ninecandle</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.bow_ninecandle}
          quote={1}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default CloneWithADifference
