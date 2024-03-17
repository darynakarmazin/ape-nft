import {
  Card,
  CardText,
  CardTitle,
  GridContainer,
  LinkCard,
} from './GridGallery.module';
import cardsData from '../../data/cardsData.json';
import { UpLeftArrow } from '../../img/icons/Icons';

function GridGallery() {
  return (
    <GridContainer>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <CardText>{card.text}</CardText>
          <CardTitle>{card.title}</CardTitle>
        </Card>
      ))}
      <LinkCard
        href="https://internship.softryzen.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <UpLeftArrow />
        <CardTitle>
          Learn <br />
          more <br />
          in mind map
        </CardTitle>
      </LinkCard>
    </GridContainer>
  );
}

export default GridGallery;
