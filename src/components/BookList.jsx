import { Component } from "react";
import fantasyBooks from "../assets/books/fantasy.json";
import historyBooks from "../assets/books/history.json";
import horrorBooks from "../assets/books/horror.json";
import romanceBooks from "../assets/books/romance.json";
import scifiBooks from "../assets/books/scifi.json";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const currentBookArray = {
  fantasy: fantasyBooks,
  history: historyBooks,
  horror: horrorBooks,
  romance: romanceBooks,
  scifi: scifiBooks,
};

class BookList extends Component {
  state = {
    selectedBookList: fantasyBooks,
  };

  handleSelection = (e) => {
    this.setState({ selectedBookList: currentBookArray[e.target.value] });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12} className="mb-3">
            <h3>Seleziona il tuo genere</h3>
            <Form.Select aria-label="options for books" onChange={this.handleSelection}>
              <option value="fantasy">Fantasy</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="scifi">Scifi</option>
            </Form.Select>
          </Col>
          {this.state.selectedBookList.map((book) => (
            <Col key={book.asin} sm={12} md={4} lg={3} className="mb-3">
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
