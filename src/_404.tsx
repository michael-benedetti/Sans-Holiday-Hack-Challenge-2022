import './App.css';
import {styled} from "@mui/system";

const _404Wrapper = styled('div')(
  () => ({
    margin: "20px",
    fontSize: "90px",
    fontFamily: "Uruk",
    display: "block",
  })
)

const Bsrs = styled('img')(
  () => ({
    borderWidth: "10px",
    borderStyle: "solid",
    borderImage: "linear-gradient(45deg, rgba(150,100,100,1), rgba(0,0,0,0.9)) 1",
  })
)

function _404() {
  return (
    <>
      <_404Wrapper>
        You seem to be lost, and without a hat! BEGONE!
      </_404Wrapper>
      <Bsrs src={"images/bsrs.png"}/>
    </>
  );
}

export default _404;
