import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, IC, Pop, StyledSyntaxHighligher, TerminalPrompt} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";

function SuricataRegatta() {
  return (
    <Accordion>
      <ChallengeSummary title={"Suricata Regatta"} difficulty={3}/>
      <AccordionDetails>
        <ChallengeDetails>
          Help detect this kind of malicious activity in the future by writing some Suricata rules. Work with Dusty Giftwrap in the Tolkien Ring to get some hints.
        </ChallengeDetails>
        <Content>
          Continuing down the <Pop>Tolkien Ring</Pop>, we arrive at <Pop>Fitzy Shortstack</Pop> who is standing near
          another terminal, and a giant creature:
        </Content>
        <ContentImage src={"images/snowrog.png"}/>
        <Content>
          Here's what <Pop>Fitzy Shortstack</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.fitzy_shortstack}
          quote={0}
        />
        <Content>
          Loading up the terminal we are prompted to implement a series of Suricata rules:
        </Content>
        <TerminalPrompt>
          Please create a Suricata rule to catch DNS lookups for adv.epostoday.uk.
          <br/>
          Whenever there's a match, the alert message (msg) should read Known bad DNS lookup, possible Dridex infection.
        </TerminalPrompt>
        <Content>
          Here's a rule that satisfies the requirement:
        </Content>
        <StyledSyntaxHighligher>
          {`alert dns any any -> any any (msg:"Known bad DNS lookup, possible Dridex infection."; dns_query; content:"adv.epostoday.uk";sid:1; rev:1;)`}
        </StyledSyntaxHighligher>
        <Content>
          Running <IC>./rule_checker</IC> yields a good result and prompts us for the next rule:
        </Content>
        <TerminalPrompt>
          First rule looks good!
          <br/><br/>
          STINC thanks you for your work with that DNS record! In this PCAP, it points to 192.185.57.242.
          <br/>
          Develop a Suricata rule that alerts whenever the infected IP address 192.185.57.242 communicates with internal
          systems over HTTP.
          <br/>
          When there's a match, the message (msg) should read Investigate suspicious connections, possible Dridex
          infection
        </TerminalPrompt>
        <Content>
          For this next rule, we simply need to alert on any http traffic to our from the target ip. We can accomplish
          this with
          two rules:
        </Content>
        <StyledSyntaxHighligher>
          {`alert http 192.185.57.242 any -> any any (msg:"Investigate suspicious connections, possible Dridex infection";sid:2;)
alert http any any -> 192.185.57.242 any (msg:"Investigate suspicious connections, possible Dridex infection";sid:3;)`}
        </StyledSyntaxHighligher>
        <Content>
          Running <IC>./rule_checker</IC>, we get our success message again and our next prompt:
        </Content>
        <TerminalPrompt>
          Second rule looks good!
          <br/><br/>
          We heard that some naughty actors are using TLS certificates with a specific CN.
          <br/>
          Develop a Suricata rule to match and alert on an SSL certificate for heardbellith.Icanwepeh.nagoya.
          <br/>
          When your rule matches, the message (msg) should read Investigate bad certificates, possible Dridex infection
        </TerminalPrompt>
        <Content>
          The following rule results in a good alert:
        </Content>
        <StyledSyntaxHighligher>
          {`alert ip any any -> any any (msg:"Investigate bad certificates, possible Dridex infection";tls_cert_subject; content:"CN=heardbellith.Icanwepeh.nagoya"; sid:4;)`}
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          Third rule looks good!
          <br/><br/>
          OK, one more to rule them all and in the darkness find them.
          <br/>
          Let's watch for one line from the JavaScript: let byteCharacters = atob
          <br/>
          Oh, and that string might be GZip compressed - I hope that's OK!
          <br/>
          Just in case they try this again, please alert on that HTTP data with message Suspicious JavaScript function,
          possible Dridex infection
        </TerminalPrompt>
        <Content>
          For this final rule, we can leverage a standard http alert with the <IC>file_data</IC> keyword, which will
          enable content
          matching on gzip compressed data:
        </Content>
        <StyledSyntaxHighligher>
          {`alert http any any -> any any (msg:"Suspicious JavaScript function, possible Dridex infection";file_data; content:"let byteCharacters = atob";sid:5;)`}
        </StyledSyntaxHighligher>
        <Content>
          This succeeds, and we pass the challenge! Here's what <Pop>Fitzy Shortstack</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.fitzy_shortstack}
          quote={1}
        />
        <Content>
          Completing this challenge grants us the <Pop>Tolkien ring</Pop>, and we are now greeted by <Pop>Grinchum</Pop>:
        </Content>
        <QuoteCard
          character={characters.grinchum}
          quote={0}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default SuricataRegatta
