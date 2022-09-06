import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CategoryCard({mealCategory}) {
  return (
    <Card className="category-card" style={{ width: '16rem', margin: '0.5rem' }} key={mealCategory.idCategory}>
      <Card.Img variant="top" className="mt-3 category-card-image" style={{height: "auto"}} src={mealCategory.strCategoryThumb} />
      <Card.Body>
        <Card.Title className="text-center">{mealCategory.strCategory}</Card.Title>
        <Button className="card-button" variant="warning">{mealCategory.strCategory} meals</Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;