import './App.css';
import {styled} from "@mui/system";
import {Character} from "./characters";
import LazyLoad from "react-lazy-load";


const QuoteCardWrapper = styled('div')(
  () => `
  display: flex;
  border: 2px solid black;
  max-width: 90%;
  border-radius: 20px;
  margin: 20px auto;
  background: #fee;
  `
)

const PortraitWrapper = styled('div')(
  () => `
  grid-area: image;
  border-right: 2px solid black;
  background: #aa0000;
  border-radius: 18px 0px 0px 18px;
  `
)

const Portrait = styled('img')(
  () => `
  height: 150px;
  width: 150px;
  border-radius: 18px 0px 0px 0px;
  vertical-align: middle;
  `
)

const Name = styled('div')(
  () => `
  border-top: 2px solid black;
  font-weight: bold;
  color: white;
  background: #aa0000;
  border-radius: 0px 0px 0px 16px;
  font-size: 12px;
  `
)

const QuoteWrapper = styled('div')(
  () => `
  display: inline-block;
  grid-area: quote;
  text-align: left;
  margin: auto;
  padding: 10px;
  `
)

export interface QuoteCardProps {
  character: Character;
  quote: number;
}

function QuoteCard(props: QuoteCardProps) {
  return (
    <QuoteCardWrapper>
      <PortraitWrapper>
        <LazyLoad offset={100}>
          <Portrait src={props.character.portrait}/>
        </LazyLoad>
        <Name>{props.character.name}</Name>
      </PortraitWrapper>
      <QuoteWrapper>
        {props.character.quotes[props.quote]}
      </QuoteWrapper>
    </QuoteCardWrapper>
  );
}

export default QuoteCard;
