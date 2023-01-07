import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, ContentImage, IC, Pop, StyledSyntaxHighligher} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";
import React from "react";

function OpenBoriaMineDoor() {
  return (
    <Accordion>
      <ChallengeSummary title={"Open Boria Mine Door"} difficulty={2}/>
      <AccordionDetails>
        <ChallengeDetails>
          Open the door to the Boria Mines. Help Alabaster Snowball in the Web Ring to get some hints for this challenge.
        </ChallengeDetails>
        <Content>
          Heading over to <Pop>Hal Tandybuck</Pop>, our next challenge is to unlock a door to <Pop>Boria Mine</Pop>:
        </Content>
        <QuoteCard
          character={characters.hal_tandybuck}
          quote={0}
        />
        <Content>
          Loading up the nearby terminal gives the following prompt:
        </Content>
        <ContentImage src={"images/boria_1.png"}/>
        <Content>
          Seems simple enough - draw a line from one side to the other. Ok, so here's the actual puzzle:
        </Content>
        <ContentImage src={"images/boria_2.png"}/>
        <Content>
          Ok, maybe not as simple as it first seemed - looks like we'll be dealing with different angles, different
          colors,
          and even different web content protection measures.
        </Content>
        <Content>
          Pulling up the network tab, we can see that each lock is its own html page. Inspecting the contents
          of <Pop>pin1</Pop> shows
          an interesting comment:
        </Content>
        <StyledSyntaxHighligher language={"html"}>
          {
            `<form method='post' action='pin1'>
  <!-- @&@&&W&&W&&&& -->
  <input className='inputTxt' name='inputTxt' type='text' value='' autoComplete='off'/>
  <button>GO</button>
</form>`
          }
        </StyledSyntaxHighligher>
        <Content>
          And entering <IC>@&@&&W&&W&&&&</IC> into the first log results in success:
        </Content>
        <ContentImage src={"images/boria_3.png"}/>
        <Content>
          For the second pin, we can see a comment indicating that we may be able to insert our own html. We can try
          adding a
          custom svg that fills the entire pin:
        </Content>
        <StyledSyntaxHighligher language={"html"}>
          {
            `<svg width="400" height="200">
  <rect width="600" height="600" style="fill:rgb(255,255,255);" />
</svg>`
          }
        </StyledSyntaxHighligher>
        <Content>
          This works:
        </Content>
        <ContentImage src={"images/boria_4.png"}/>
        <Content>
          For the third pin, we see another comment talking about restricting the use of javascript. We can craft the
          following
          payload:
        </Content>
        <StyledSyntaxHighligher language={"html"}>
          {
            `<script>document.body.style.background = "blue";</script>`
          }
        </StyledSyntaxHighligher>
        <Content>
          This works and we successfully unlock the door:
        </Content>
        <ContentImage src={"images/boria_5.png"}/>
        <Content>
          After solving three pins, here's what <Pop>Hal Tandybuck</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.hal_tandybuck}
          quote={1}
        />
        <Content>
          We can continue on to solve the rest. For pin 4, we can see that there is a sanitize function that removes
          several
          characters that would be used to craft html or svg payloads. This function executes on blur from the input
          textbox, and
          we can avoid it by pressing enter instead of clicking <Pop>GO</Pop>.
        </Content>
        <StyledSyntaxHighligher language={"html"}>
          {
            `<div id="1" style="display:block;overflow:auto;height:100px"></div>
<div id="2" style="display:block;overflow:auto;height:100px"></div>
<script>document.getElementById("1").style.background = "white";</script>
<script>document.getElementById("2").style.background = "blue";</script>`
          }
        </StyledSyntaxHighligher>
        <Content>
          For pin 5, we once again need to bypass the santizer in the same way. We also have to contend with
          a <Pop>CSP</Pop>. We can craft a <Pop>base64</Pop> encoded png to get around these protections.  To do this,
          simply use your favorite paint program to draw the patterns you need, and use a site like <a href={"https://www.base64-image.de/"}>this one</a> to
          quickly <Pop>base64</Pop> encode your image.
        </Content>
        <StyledSyntaxHighligher language={"html"}>
          {
            `<img src="data:image/png;base64,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">`
          }
        </StyledSyntaxHighligher>
        <Content>
          For pin 6, the same bypass mechanism works:
        </Content>
        <StyledSyntaxHighligher language={"html"}>
          {
            `<img src="data:image/png;base64,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">`
          }
        </StyledSyntaxHighligher>
        <ContentImage src={"images/boria_6.png"}/>
        <Content>
          With all the pins solved, <Pop>Hal Tandybuck</Pop> has some additional advice for us:
        </Content>
        <QuoteCard
          character={characters.hal_tandybuck}
          quote={2}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default OpenBoriaMineDoor
