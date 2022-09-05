import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  CardGroup,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import Card from "../Components/Card";
import CarouselComponent from "../Components/CarouselComponent";

function Body() {
  return (
    <>
      <CarouselComponent />
      <Container fluid className="main-body-container">
        <Row>
          <Col md={2}>
            <ListGroup className="m-2 category-list">
              <ListGroup.Item bsPrefix="sidebar-top-item">
                What's on the menu?
              </ListGroup.Item>
              <ListGroup.Item>Breakfast</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-2"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>

          <Col md={10}>
            <Row xs={1} md={2} className="mt-2 p-2 cards-container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className="mb-5"></Row>
    </>
  );
}

export default Body;
