import "./App.css";
import { Component } from "react";
import Mynav from "./components/Mynav";
import { Container } from "react-bootstrap";
import Myfooter from "./components/Myfooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

class App extends Component {
  render() {
    return (
      <Container>
        <Mynav />
        <Welcome />
        <BookList />
        <Myfooter />
      </Container>
    );
  }
}

export default App;
