import banners from '../../data/banners.json';
import { AddSharp } from '../../img/icons/Icons';
import {
  BannerContainer,
  MovingLine,
  MovingLineContainer,
} from './MovingBaner.styled';

function MovingBaner() {
  return (
    <BannerContainer>
      <MovingLineContainer>
        <MovingLine>
          {banners.map((banner, index) => (
            <li key={index}>
              <p>{banner.text}</p>
              <AddSharp />
            </li>
          ))}
        </MovingLine>
      </MovingLineContainer>
      <MovingLineContainer>
        <MovingLine aria-hidden="true">
          {banners.map((banner, index) => (
            <li key={index}>
              <p>{banner.text}</p>
              <AddSharp />
            </li>
          ))}
        </MovingLine>
      </MovingLineContainer>
    </BannerContainer>
  );
}

export default MovingBaner;
