import React from "react";
import CarouselComponent from "../Components/CarouselComponent";
import { Col, Container, Figure, Image, Row } from "react-bootstrap";

function Recipe() {
  return (
    <>
      <CarouselComponent />
      <Container fluid className="main-body-container">
        <Container className="recipe-container">
          <Row>
            <Col md={4} className="recipe-sidebar">
              <Image
                fluid
                src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
              />
            </Col>
            <Col md={8} className="recipe-mainbody">2 of 2</Col>
          </Row>
        </Container>
      </Container>
      <Row className="mb-5"></Row>
    </>
  );
}

export default Recipe;
