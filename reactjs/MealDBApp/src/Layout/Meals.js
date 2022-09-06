import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CarouselComponent from "../Components/CarouselComponent";
import MealCard from "../Components/MealCard";

function Meals() {
  //https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian`
      );
      let data = await response.json();
      setMeals(data.meals);
    };
    fetchMeals();
  }, []);
  return (
    <>
      <CarouselComponent />
      <Container fluid className="main-body-container">
        <Row xs={1} md={2} className="mt-2 p-2 cards-container">
          {meals !== undefined
            ? meals.map((mealChoice) => (
                <MealCard mealChoice={mealChoice} key={mealChoice.idMeal} />
              ))
            : ""}
            {console.log(meals)}
        </Row>
      </Container>
      <Row className="mb-5"></Row>
    </>
  );
}

export default Meals;
