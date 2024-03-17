import { Card, CardText, CardTitle, GridContainer } from './GridGallery.module';
import cardsData from '../../data/cardsData.json';

function GridGallery() {
  return (
    <GridContainer>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <CardText>{card.text}</CardText>
          <CardTitle>{card.title}</CardTitle>
        </Card>
      ))}
    </GridContainer>
  );
}

export default GridGallery;
