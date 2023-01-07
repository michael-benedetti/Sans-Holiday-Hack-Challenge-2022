import React from 'react';
import './App.css';
import {styled} from "@mui/system";

const Parchment = styled('div')(
  ({theme}) => ({
    height: "480px",
    zIndex: "1000",
    position: "absolute",
    marginTop: "60px",
    width: "600px",
    padding: "30px",
    fontSize: "35px",
    boxShadow: "2px 3px 20px black, 0 0 125px #8f5922 inset",
    background: "#fffef0",
    transform: "rotate(6deg) translate(-50%,0)",
    left: "30%",
    // transform: "rotate(6deg) translate(-100%, 20%)",
    textAlign: "center",
    backgroundImage: "url(data:image/png;base64,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)",
    '&:hover': {
      '.tan': {
        opacity: "0%",
        filter: "blur(8px)",
      },
      '.eng': {
        opacity: "100%",
        filter: "none",
      }
    }
  })
)

const ParchmentText = styled('div')(
  ({theme}) => ({
    '.tan': {
      fontFamily: "'Tengwar', cursive",
      filter: "none",
      fontSize: "35px",
      transition: "all 4s ease",
      lineHeight: "51px",
      position: "absolute",
      opacity: "100%",
      paddingTop: "5px",
    },
    '.eng': {
      lineHeight: "50px",
      fontFamily: "'Tangerine'",
      opacity: "0%",
      fontSize: "30px",
      filter: "blur(8px)",
      transition: "all 4s ease",
    }
  })
)

function StoryParchment() {
  return (
    <>
      <Parchment>
        <ParchmentText>
            <span className={'tan'}>
                Five Rings for the Christmas king immersed in cold
                <br/>
                Each Ring now missing from its zone
                <br/>
                The first with bread kindly given, not sold
                <br/>
                Another to find 'ere pipelines get owned
                <br/>
                One beneath a fountain where water flowed
                <br/>
                Into clouds Grinchum had the fourth thrown
                <br/>
                The fifth on blockchains where shadows be bold
                <br/>
                One hunt to seek them all, five quests to find them
                <br/>
                One player to bring them all, and Santa Claus to bind them
                <br/>
            </span>
          <span className={'eng'}>
                Five Rings for the Christmas king immersed in cold
                <br/>
                Each Ring now missing from its zone
                <br/>
                The first with bread kindly given, not sold
                <br/>
                Another to find 'ere pipelines get owned
                <br/>
                One beneath a fountain where water flowed
                <br/>
                Into clouds Grinchum had the fourth thrown
                <br/>
                The fifth on blockchains where shadows be bold
                <br/>
                One hunt to seek them all, five quests to find them
                <br/>
                One player to bring them all, and Santa Claus to bind them
                <br/>
            </span>
        </ParchmentText>
      </Parchment>
    </>
  );
}

export default StoryParchment;
