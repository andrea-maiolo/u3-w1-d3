import { Component } from "react";
import fantasyBooks from "../assets/books/fantasy.json";
import historyBooks from "../assets/books/history.json";
import horrorBooks from "../assets/books/horror.json";
import romanceBooks from "../assets/books/romance.json";
import scifiBooks from "../assets/books/scifi.json";
import { Badge, Card, Col, Container, Form, Row } from "react-bootstrap";

const currentBookArray = {
  fantasy: fantasyBooks,
  history: historyBooks,
  horror: horrorBooks,
  romance: romanceBooks,
  scifi: scifiBooks,
};

class AllTheBooks extends Component {
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
            <Form.Select aria-label="options for books" onChange={this.handleSelection}>
              <option disabled>Seleziona il tuo genere</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="scifi">Scifi</option>
            </Form.Select>
          </Col>
          {this.state.selectedBookList.map((book) => (
            <Col key={book.asin} sm={12} md={4} lg={3} className="mb-3">
              <Card className="h-100">
                <Card.Img variant="top" src={book.img} alt={book.title} className="img-fluid h-75" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>
                    Price <Badge bg="secondary">{book.price}</Badge>
                  </Card.Text>
                  <Card.Text className="fs-6">
                    Category <Badge bg="success">{book.category}</Badge>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
