import {styled} from "@mui/system";
import SyntaxHighlighter from "react-syntax-highlighter";
import LazyLoad from "react-lazy-load";
import {HTMLProps} from "react";


export const WriteupWrapper = styled('div')(
  () => `
  display: block;
  max-width: 80vw;
  margin: 20px auto;
  `
)


export const Content = styled('div')(
  () => `
  display: block;
  margin: 20px;
  text-align: left;
  `
)

export const HeaderImage = styled('img')(
  () => `
  display: block;
  margin: 20px auto;
  border-radius: 10px;
  `
)

export const Pop = styled('span')(
  () => `
  color: #aa0000;
  display: inline;
  font-weight: bold;
  `
)

export const IC = styled('div')(
  () => `
  color: #00aa00;
  display: inline;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  `
)

export const _ContentImage = styled('img')(
  () => `
  margin: 20px auto;
  display: block;
  max-width: 90%;
  box-shadow: 0 0 0 5px red;
  outline: dashed 5px green;
  `
)

export const ContentImage = function (props: HTMLProps<HTMLImageElement>) {
  return (
    <LazyLoad offset={100}>
      <_ContentImage src={props.src}/>
    </LazyLoad>
  )
}

export const ChallengeDetails = styled('div')(
  () => ({
    padding: "10px",
    color: "#a00",
    fontStyle: "italic",
    textAlign: "left",
    borderLeft: "4px solid #a00",
    fontWeight: "bold",
    margin: "20px auto",
  })
)


export const TerminalPrompt = styled('div')(
  () => `
  background: #444;
  color: white;
  font-family: "Courier New";
  max-width: 90%;
  margin: 20px auto;
  text-align: left;
  padding: 10px;
  `
)

export const StyledSyntaxHighligher = styled(SyntaxHighlighter)(
  () => `
  text-align: left;
  max-width: 90%;
  margin: 20px auto;
  `
)

export const LcdWrapper = styled('div')(
  () => ({
    background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
    zIndex: "1000",
    borderRadius: "20px"
  })
)
