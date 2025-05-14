import "./App.css";
import { Component } from "react";
import Mynav from "./components/Mynav";
import { Container } from "react-bootstrap";
import Myfooter from "./components/Myfooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

class App extends Component {
  render() {
    return (
      <Container>
        <Mynav />
        <Welcome />
        <AllTheBooks />
        <Myfooter />
      </Container>
    );
  }
}

export default App;
