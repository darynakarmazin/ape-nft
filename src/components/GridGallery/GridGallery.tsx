import cardsData from '../../data/cardsData.json';
import { UpLeftArrow } from '../../img/icons/Icons';
import {
  Card,
  CardText,
  CardTitle,
  GridContainer,
  LinkCard,
} from './GridGallery.module';

function GridGallery() {
  return (
    <GridContainer>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <CardText>{card.text}</CardText>
          <CardTitle>{card.title}</CardTitle>
        </Card>
      ))}
      <LinkCard>
        <a
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
        </a>
      </LinkCard>
    </GridContainer>
  );
}

export default GridGallery;
