import './App.css';
import {styled} from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';

const PageHeaderWrapper = styled('div')(
  () => ({
    background: "radial-gradient(rgba(100,0,0,0.2), black), url(images/north_pole.png)",
    backgroundSize: "100%",
    backgroundPosition: "20% 80%",
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "100%",
    textAlign: "center",
    paddingTop: "8vh",
  })
)

const Title = styled('div')(
  () => ({
    color: "white",
    fontSize: "5vw",
    fontFamily: "'Tangerine', serif",
    textShadow: "0px 0px 3px black, 0px 0px 4px black, 0px 0px 5px black, 0px 0px 6px black"
  })
)

const Details = styled('div')(
  () => ({
    color: "white",
    fontFamily: "'Tangerine', serif",
    fontSize: "3vw",
    textShadow: "0px 0px 1px black, 0px 0px 2px black, 0px 0px 3px black, 0px 0px 4px black",
  })
)
const Links = styled('div')(
  () => ({
    display: "flex",
    justifyContent: "end",
    marginRight: "20px",
    marginLeft: "10px",
  })
)

const StyledExternalLink = styled('a')(
  () => ({
    color: "black",
    '&:visited': {
      color: "black",
    },
    '&:link': {
      color: "black",
    }
  })
)

function PageHeader() {
  return (
    <>
      <Links>
        <StyledExternalLink href={"https://www.github.com/michael-benedetti"} target="_blank">
          <GitHubIcon sx={{fontSize: "30px"}}/>
        </StyledExternalLink>
      </Links>
      <PageHeaderWrapper>
        <Title>
          Sans Holiday Hack Challenge 2022
        </Title>
        <Details>
          Writeup by Michael Benedetti
        </Details>
      </PageHeaderWrapper>
    </>
  );
}

export default PageHeader;
