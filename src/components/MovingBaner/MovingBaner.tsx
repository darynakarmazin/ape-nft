import banners from '../../data/banners.json';
import { AddSharp } from '../../img/icons/Icons';
import {
  BannerContainer,
  MovingLine,
  MovingLineContainer,
} from './MovingBaner.styled';

function MovingBaner() {
  const renderBanners = () => {
    return banners.map((banner, index) => (
      <li key={index}>
        <p>{banner.text}</p>
        <AddSharp />
      </li>
    ));
  };

  const renderMovingLineContainers = (count: number) => {
    const movingLineContainers = [];
    for (let i = 0; i < count; i++) {
      movingLineContainers.push(
        <MovingLineContainer key={i}>
          <MovingLine aria-hidden={i > 0}>{renderBanners()}</MovingLine>
        </MovingLineContainer>
      );
    }
    return movingLineContainers;
  };

  return <BannerContainer>{renderMovingLineContainers(3)}</BannerContainer>;
}

export default MovingBaner;
