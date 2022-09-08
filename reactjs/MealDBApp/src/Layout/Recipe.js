import React, { useEffect, useState } from "react";
import CarouselComponent from "../Components/CarouselComponent";
import { Col, Container, Image, Row } from "react-bootstrap";
import RecipeComponent from "../Components/RecipeComponent";

function Recipe() {
  //https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
  const [recipe,setRecipe] = useState([]);
  useEffect(() => {
    const fetchRecipe = async () => {
      let response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772");
      let data = await response.json();
      setRecipe(data.meals)
    };
    fetchRecipe();
  }, []);

  return (
    <>
      <CarouselComponent/>
      <Container fluid className="main-body-container pt-2">
      {recipe !== undefined
            ? recipe.map((recipeChoice) => (
                <RecipeComponent recipeChoice={recipeChoice} key={recipeChoice.idMeal} recipe={recipe} />
              ))
            : ""}
            {console.log(recipe)}
      </Container>
      <Row className="mb-5"></Row>
    </>
  );
}

export default Recipe;
