import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import css from "../src/App.css"


import Home from "./components/home/home"
import Contact from "./components/contact/contact";
import About from "./components/about/about"
import Projects from "./components/projects/projects"
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, Navbar, Container, Nav, NavDropdown, Card, CardColumns } from 'react-bootstrap';




function App() {


  let history = useHistory();

  return (
    <>
      {/* <nav>
        <ul>
          <Button onClick={() => {
            history.push("/");
          }}>
            Home
          </Button>
          <li>
            <Button onClick={() => {
              history.push("/weather");
            }}>
              Weather
            </Button>
          </li>
          <li>
            <Button onClick={() => {
              history.push("/about");
            }}>
              About
            </Button>
          </li>
          <li>
            <Button onClick={() => {
              history.goBack()
            }}>
              Go back
            </Button>
          </li>
        </ul>
      </nav> */}


      <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="https://sharjeel125.github.io/">Muhammad Sharjeel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" me-auto mx-auto  "  >
              <Nav.Link onClick={()=>{history.push("/")}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{history.push("/about")}}>About</Nav.Link>
              <Nav.Link onClick={()=>{history.push("/contact")}}>Contact</Nav.Link>
              <Nav.Link onClick={()=>{history.push("/projects")}}>Projects</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>

      <Route path="/projects">
          <Projects />
        </Route>


        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
     
      
      <div className="footer">
        <p>copyright 2022 | Muhammad Sharjeel</p>
      </div>

    </>
  );
}

export default App;
