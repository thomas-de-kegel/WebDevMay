import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import CarouselComponent from "../Components/CarouselComponent";
import CategoryCard from "../Components/CategoryCard";

function Home() {
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
  }, []);

  return (
    <>
     <CarouselComponent/>
      <Container fluid className="main-body-container">
        <Row>
          <Col>
            <Row xs={1} md={2} className="mt-2 p-2 cards-container">
              {categories !== undefined
                ? categories.map((mealCategory) => (
                    <CategoryCard
                      mealCategory={mealCategory}
                      key={mealCategory.idCategory}
                    />
                  ))
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

export default Home;
