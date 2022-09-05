import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MealCard() {
  return (
    <Card className="meal-card" style={{ width: '16rem', margin: '0.5rem' }}>
      <Card.Img variant="top" className="mt-3 meal-card-image" style={{height: "auto"}} src="https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          ...
        </Card.Text>
        <Button className="card-button" variant="warning">Check the recipe&#62;&#62;</Button>
      </Card.Body>
    </Card>
  );
}

export default MealCard;