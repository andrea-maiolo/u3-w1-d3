import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {this.props.selectedBookList.map((book) => (
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
