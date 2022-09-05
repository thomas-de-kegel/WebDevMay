import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import CarouselComponent from "../Components/CarouselComponent";

function Body() {
  return (
    <>
      <CarouselComponent />
      <Container fluid>
        <Row>
          <Col md={2}>
            <ListGroup className="p-2">
              <ListGroup.Item bsPrefix="sidebar-top-item">What's on the menu?</ListGroup.Item>
              <ListGroup.Item>Breakfast</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={10}>Cards for meals</Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;
