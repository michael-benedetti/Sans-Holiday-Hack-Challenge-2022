import React from 'react';
import './App.css';
import StoryParchment from "./StoryParchment";
import {Pop} from "./Common";
import {styled} from "@mui/system";

const IntroWrapper = styled('div')(
  ({theme}) => ({
    width: "60vw",
    margin: "20px auto",
    display: "block",
    textAlign: "left",
  })
)

const VisualContainer = styled('div')(
  ({theme}) => ({
    margin: "20px auto",
    display: "block",
    position: "relative",
  })
)

const SnowrogSnapshot = styled('img')(
  ({theme}) => ({
    objectFit: "none",
    objectPosition: "-580px -40px",
    height: "450px",
    width: "450px",
  })
)

const SnowrogWrapper = styled('div')(
  ({theme}) => ({
    height: "450px",
    position: "absolute",
    width: "450px",
    // transform: "rotate(-9deg) translate(-20%, 28%)",
    transform: "rotate(-9deg) translate(50%, 23%)",
    boxShadow: "2px 3px 20px black",
    zIndex: "20",
    left: "30%",
    padding: "10px",
  })
)

function Intro() {
  return (
    <IntroWrapper>
      Season's greetings! Another year means another <Pop sx={{color: "green"}}>KringleCon</Pop>, and this year did not
      disappoint.
      The theme was inspired by <Pop>J.R.R. Tolkien's Lord of the Rings</Pop> series, complete with <Pop
      sx={{color: "green"}}>Flobbits</Pop>, <Pop>Sporcs</Pop>, and
      even the wretched <Pop sx={{color: "green"}}>Grinchum</Pop>. Our goal was to help recover the <Pop
      sx={{color: "gold", textShadow: "0px 0px 2px black, 0px 0px 3px black, 0px 0px 4px black"}}>Five Golden
      Rings</Pop> that have
      gone missing since the <Pop sx={{color: "green"}}>Elves</Pop> of the <Pop>North Pole</Pop> began digging down into
      the ground, uncovering
      a whole civilization of <Pop sx={{color: "green"}}>Middle Earth</Pop> dwellers beneath.
      <VisualContainer>
        <StoryParchment/>
        <SnowrogWrapper>
          <SnowrogSnapshot src={"images/snowrog.png"}/>
        </SnowrogWrapper>
      </VisualContainer>
    </IntroWrapper>
  );
}

export default Intro;
