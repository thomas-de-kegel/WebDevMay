import React from 'react'
import { Button, Card } from 'react-bootstrap'

function MealCard({mealChoice}) {
  return (
    <Card className="category-card" style={{ width: '16rem', margin: '0.5rem' }} key={mealChoice.idMeal}>
      <Card.Img variant="top" className="mt-3 category-card-image" src={mealChoice.strMealThumb}/>
      <Card.Body>
        <Card.Title className="text-center">{mealChoice.strMeal}</Card.Title>
        <Button className="card-button" variant="warning">Check the recipe&#62;&#62;</Button>
      </Card.Body>
    </Card>
  )
}

export default MealCard