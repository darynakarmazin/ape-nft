import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import cardsData from '../../data/cardsData.json';
import {
  Card,
  CardText,
  CardTitle,
  LinkCard,
} from '../GridGallery/GridGallery.module';
import { UpLeftArrow } from '../../img/icons/Icons';
import { ControllersWrapper, SwiperArea, SwiperBtn } from './MindSlider.styled';

function MindSlider() {
  let slidesPerView = 1;

  return (
    <SwiperArea>
      <Swiper
        style={{ borderRadius: '12px' }}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        loop={false}
        navigation={{
          nextEl: '.custom_next',
          prevEl: '.custom_prev',
        }}
        modules={[Navigation]}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardText>{card.text}</CardText>
              <CardTitle>{card.title}</CardTitle>
            </Card>
          </SwiperSlide>
        ))}
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
      <ControllersWrapper>
        <SwiperBtn
          type="button"
          className="custom_prev"
          aria-label="Previous slide"
        >
          Prev
        </SwiperBtn>
        <SwiperBtn
          type="button"
          className="custom_next"
          aria-label="Next slide"
        >
          Next
        </SwiperBtn>
      </ControllersWrapper>
    </SwiperArea>
  );
}

export default MindSlider;
