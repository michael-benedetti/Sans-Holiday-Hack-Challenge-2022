import './App.css';
import {styled} from "@mui/system";

const RingHeaderWrapper = styled('div')(
  () => ({
    height: "80px",
    maxWidth: "80vw",
    padding: "20px",
    color: "white",
  })
)

const NameWrapper = styled('div')(
  () => ({
    display: "flex",
    paddingLeft: "20px",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "80px",
    fontFamily: "'Tangerine', serif",
    textShadow: "0px 0px 1px black, 0px 0px 2px black, 0px 0px 3px black, 0px 0px 4px black, 0px 0px 5px black"
  })
)

const StyledImage = styled('img')(
  () => ({
    maxHeight: "100%",
    margin: "auto",
    float: "left",
  })
)

export interface QuoteCardProps {
  name: string;
  image: string;
  backgroundImage: string;
}

function RingHeader(props: QuoteCardProps) {
  return (
    <RingHeaderWrapper
      sx={{background: `radial-gradient(transparent, rgba(0,0,0,0.8)), url(${props.backgroundImage})`}}>
      <StyledImage src={props.image}/>
      <NameWrapper>{props.name}</NameWrapper>
    </RingHeaderWrapper>
  );
}

export default RingHeader;
