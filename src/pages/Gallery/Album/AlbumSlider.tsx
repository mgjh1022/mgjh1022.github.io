import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";

import { LikeButton } from "../LikeButton";
import { css } from "@emotion/react";

const test = ["/main.png", "/test169.jpeg", "/test916.png"];

export const AlbumSlider: React.FC<{ selected?: number }> = ({ selected }) => {
  const settings = {
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    easing: "ease-in-out",
  };

  const ref = useRef<Slider | null>(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (selected !== undefined) {
      ref.current?.slickGoTo(selected);
      setTimeout(() => setIsShow(true), 100);
    } else {
      setIsShow(false);
    }
  }, [selected]);

  return (
    <StyledSlider
      ref={(slider) => (ref.current = slider)}
      isShow={isShow}
      {...settings}
    >
      {Array.from({ length: 20 }, (x, i) => i).map((idx) => (
        <>
          <Img src={test[idx % 3]} alt="test image." />
          <ButtonWrap>
            <LikeButton />
            좋아요 {idx}개
          </ButtonWrap>
        </>
      ))}
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)<{ isShow: boolean }>`
  &.slick-slider {
    margin: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    overflow: hidden;
    ${({ isShow }) =>
      !isShow
        ? css`
            position: absolute;
            top: -9999px;
            left: -9999px;
          `
        : null};
  }

  .slick-slide {
    height: auto;
  }

  .slick-arrow {
    margin-top: -22px;
    &.slick-prev {
      left: 10px;
      z-index: 1;
    }
    &.slick-next {
      right: 10px;
      z-index: 1;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ButtonWrap = styled.div`
  position: relative;
  margin-top: 15px;
  padding-left: 35px;
  font-family: "SeoulHangangM";
  font-size: 1.1rem;
  line-height: 22px;
`;
