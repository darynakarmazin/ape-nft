import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useMediaQuery } from 'react-responsive';
import {
  ControllersWrapper,
  SwiperArea,
  SwiperBtn,
  SwiperImg,
} from './CollectionSlider.styled';
import { galleryData } from '../../data/galleryData';

type GalleryItem = {
  image: string;
};

function CollectionSlider() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTab = useMediaQuery({ maxWidth: 1279 });

  let slidesPerView = 4;

  if (isMobile) {
    slidesPerView = 1;
  } else if (isTab) {
    slidesPerView = 2;
  }

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
        {galleryData.map((item: GalleryItem, index: number) => (
          <SwiperSlide key={index}>
            <SwiperImg src={item.image} alt="Monkey view" />
          </SwiperSlide>
        ))}
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

export default CollectionSlider;
