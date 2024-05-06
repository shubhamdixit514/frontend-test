import { CardMedia } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  CustomAvatar,
  CustomDownArrow,
  CustomMediaBox,
  CustomMediaSecondBox,
  CustomSliderBox,
  CustomTypographyBannerText,
  CustomTypographyDate,
  CustomTypographyTitle,
  CustomUpArrow,
} from "./style";
import { formatDate } from "../../utils/functions";

const Carousel = ({ filteredImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: false,
    arrows: true,
    draggable: false,
    prevArrow: (
      <CustomPrevArrow
        onClick={() => goToPrev()}
        disabled={currentSlide === 0}
      />
    ),
    nextArrow: (
      <CustomNextArrow
        onClick={() => goToNext()}
        disabled={currentSlide === 2}
      />
    ),
  };

  const goToPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <CustomSliderBox>
      <Slider {...settings} afterChange={(index: number) => setCurrentSlide(index)}>
        <CustomMediaBox>
          <CardMedia
            component="img"
            height="922px"
            image={filteredImages.banner_image}
            alt="card-img"
            sx={{
              width: "auto",
              marginBottom: "10px",
            }}
          />
        </CustomMediaBox>
        <CustomMediaSecondBox>
          <CustomAvatar aria-label="recipe" src={filteredImages.brand.logo} />
          <CustomTypographyTitle>
            {filteredImages.feed_title}
          </CustomTypographyTitle>
          <CustomTypographyDate>
            {formatDate(filteredImages.starts_on)}
          </CustomTypographyDate>
          <CustomTypographyBannerText>
            {filteredImages.banner_text}
          </CustomTypographyBannerText>
          <CardMedia
            component="img"
            height="400"
            image={filteredImages.ad_1_image}
            alt="card-img"
            sx={{
              width: "auto",
              marginBottom: "10px",
            }}
          />
          <CardMedia
            component="img"
            height="400"
            image={filteredImages.ad_2_image}
            alt="card-img"
            sx={{
              width: "auto",
              marginBottom: "10px",
            }}
          />
        </CustomMediaSecondBox>
      </Slider>
    </CustomSliderBox>
  );
};

const CustomPrevArrow = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <CustomUpArrow
      className={disabled ? "disabled" : ""}
      disabled={disabled}
      onClick={onClick}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#126AE8" />
        <g clip-path="url(#clip0_3270_3546)">
          <path
            d="M29.4328 17.4021L20.8482 25.6273C20.6016 25.8699 20.3321 26.0092 20.0625 26.0092C19.793 26.0092 19.5248 25.9095 19.3173 25.7087L10.7327 17.4835C10.3017 17.0724 10.2877 16.3901 10.7004 15.9607C11.1103 15.5283 11.7956 15.5142 12.2237 15.9284L20.0625 23.3992L27.9418 15.8523C28.3686 15.4382 29.055 15.4522 29.4651 15.8846C29.8779 16.3105 29.8639 16.9933 29.4328 17.4021Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3270_3546">
            <rect
              width="20.125"
              height="23"
              fill="white"
              transform="translate(30.125 31) rotate(-180)"
            />
          </clipPath>
        </defs>
      </svg>
    </CustomUpArrow>
  );
};

const CustomNextArrow = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <CustomDownArrow
      className={disabled ? "disabled" : ""}
      disabled={disabled}
      onClick={onClick}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#126AE8" />
        <g clip-path="url(#clip0_3270_3546)">
          <path
            d="M29.4328 17.4021L20.8482 25.6273C20.6016 25.8699 20.3321 26.0092 20.0625 26.0092C19.793 26.0092 19.5248 25.9095 19.3173 25.7087L10.7327 17.4835C10.3017 17.0724 10.2877 16.3901 10.7004 15.9607C11.1103 15.5283 11.7956 15.5142 12.2237 15.9284L20.0625 23.3992L27.9418 15.8523C28.3686 15.4382 29.055 15.4522 29.4651 15.8846C29.8779 16.3105 29.8639 16.9933 29.4328 17.4021Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3270_3546">
            <rect
              width="20.125"
              height="23"
              fill="white"
              transform="translate(30.125 31) rotate(-180)"
            />
          </clipPath>
        </defs>
      </svg>
    </CustomDownArrow>
  );
};

export default Carousel;
