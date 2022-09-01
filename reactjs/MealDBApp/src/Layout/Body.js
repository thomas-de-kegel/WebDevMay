import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "../Components/CarouselComponent";

function Body() {
  return (
    <>
      <CarouselComponent />
      <Container fluid>
        <Row>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;
