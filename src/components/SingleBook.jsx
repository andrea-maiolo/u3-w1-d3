import { Component } from "react";
import { Col, Card, Badge } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Card className="h-100">
        <Card.Img variant="top" src={this.props.book.img} alt={this.props.book.title} className="img-fluid h-75" />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
          <Card.Text>
            Price <Badge bg="secondary">{this.props.book.price}</Badge>
          </Card.Text>
          <Card.Text className="fs-6">
            Category <Badge bg="success">{this.props.book.category}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
