import Slider from "react-slick";

import { PageCalendar } from "./Calendar";
import { PageGallery } from "./Gallery";
import { PageInfo } from "./Info";
import { PageMain } from "./Main";
import { PageMap } from "./Map";

export const Layout: React.FC = () => {
  const settings = {
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    easing: "ease-in-out",
  };

  return (
    <Slider {...settings}>
      <PageMain />
      <PageCalendar />
      <PageGallery />
      <PageMap />
      <PageInfo />
    </Slider>
  );
};
