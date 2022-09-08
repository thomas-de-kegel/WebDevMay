import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

function RecipeComponent({ recipeChoice, recipe }) {
  return (
    <Container className="recipe-container">
      <Row>
        <Col md={4} className="recipe-sidebar">
          <Image
            fluid
            className="recipe-image"
            src={recipeChoice.strMealThumb}
          />
          <ListGroup variant="flush">
            <ListGroup.Item>Ingredients:</ListGroup.Item> {/*TODO: try moving map function to recipe.js and work from there?*/}
            {recipe.map((ingredient, index)=> {
                if(index >= 9 && index <= 28){
                    {console.log(ingredient)}
                    <ListGroup.Item>{ingredient}</ListGroup.Item>
                }
            })}
          </ListGroup>
        </Col>
        <Col md={8} className="recipe-mainbody">
          <h1>{recipeChoice.strMeal}</h1>
          <p>{recipeChoice.strInstructions}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeComponent;
