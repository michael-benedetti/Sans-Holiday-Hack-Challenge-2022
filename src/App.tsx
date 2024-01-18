import './App.css';
import Tolkien from "./challenges/Tolkien";
import Elfen from "./challenges/Elfen";
import Web from "./challenges/Web";
import Cloud from "./challenges/Cloud";
import Brof from "./challenges/Brof";
import {Outlet, Route, Routes} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import {styled} from "@mui/system";
import PageHeader from "./PageHeader";
import Intro from "./Intro";
import HomeIcon from '@mui/icons-material/Home';
import _404 from "./_404";

const NavBar = styled('div')(
  () => ({
    display: "flex",
    width: "100%",
    height: "60px",
    background: "#ddd",
    textAlign: "center",
    margin: "auto",
    justifyContent: "center",
  })
)

const NavLink = styled(Link)(
  () => ({
    paddingRight: "20px",
    lineHeight: "60px",
    color: "#a00",
    fontWeight: "bold",
    fontSize: "15px",
    textDecoration: "none",
    '&:hover': {
      textShadow: "0px 0px 2px #aaa",
    }
  })
)

const MainWrapper = styled('div')(
  () => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: "100%",
    justifyContent: "center"
  })
)

const MainContent = styled('div')(
  () => ({
    display: "block",
    margin: "auto",
  })
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route path={"/"} element={<Intro/>}/>
          <Route path="Tolkien" element={<Tolkien/>}/>
          <Route path="Elfen" element={<Elfen/>}/>
          <Route path="Web" element={<Web/>}/>
          <Route path="Cloud" element={<Cloud/>}/>
          <Route path="Brof" element={<Brof/>}/>
          <Route path="*" element={<_404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <PageHeader/>
      <MainWrapper>
        <NavBar>
          <NavLink to={"/"}>
            <HomeIcon sx={{paddingTop: "13px", fontSize: "30px"}}/>
          </NavLink>
          <NavLink to="/Tolkien">
            Tolkien Ring
          </NavLink>
          <NavLink to="/Elfen">
            Elfen Ring
          </NavLink>
          <NavLink to="/Web">
            Web Ring
          </NavLink>
          <NavLink to="/Cloud">
            Cloud Ring
          </NavLink>
          <NavLink to="/Brof">
            Burning Ring of Fire
          </NavLink>
        </NavBar>
        <MainContent>
          <Outlet/>
        </MainContent>
      </MainWrapper>
    </>
  );
}

export default App;
