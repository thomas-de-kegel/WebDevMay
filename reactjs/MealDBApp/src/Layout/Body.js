import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
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
              <ListGroup.Item bsPrefix="sidebar-top-item">What's on the menu?</ListGroup.Item>
              <ListGroup.Item>Breakfast</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={10} >
          <Container fluid className="mt-2  cards-container">
            <Card/>
            <Card/>
            <Card/>
          </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;
