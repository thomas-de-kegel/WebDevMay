import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import CarouselComponent from "../Components/CarouselComponent";
import CategoryCard from "../Components/CategoryCard";

function Body() {
  //https://www.themealdb.com/api/json/v1/1/categories.php
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      let data = await response.json();
      setCategories(data.categories);
    };
    fetchCategories();
  },[]);

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
              {categories !== undefined
                ? (
                  categories.map((mealCategory, index) => (
                    <CategoryCard
                    mealCategory={mealCategory}
                    key={mealCategory.idCategory}
                  />
                    ))
                )
                : ""}
                {console.log(categories)}
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className="mb-5"></Row>
    </>
  );
}

export default Body;
