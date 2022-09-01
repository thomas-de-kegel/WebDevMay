import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import CarouselComponent from "../Components/CarouselComponent";
import {GiKnifeFork} from 'react-icons/gi'

function Body() {
  return (
    <>
      <CarouselComponent />
      <Container fluid>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item bsPrefix="sidebar-top-item"><GiKnifeFork/> What's on the menu? <GiKnifeFork/></ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col>test</Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;
