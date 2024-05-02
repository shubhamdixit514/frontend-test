import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import { formateDate } from "../../utils/Utils";

const Carousel = ({ filteredImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log('filteredImages.starts_on', filteredImages)

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
    <div className="slider-container">
      <Slider {...settings} afterChange={(index) => setCurrentSlide(index)}>
        <Box className="image-container">
          <img
            src={filteredImages.banner_image}
            alt="slide-imgage"
            style={{
              width: "auto",
              height: "922px",
            }}
          />
        </Box>
        <Box className="image-container-second">
          <Avatar aria-label="recipe" src={filteredImages?.brand.logo} sx={{
            mt:4
          }}/>
          <Typography
            aria-label="settings"
            sx={{
              color: "black",
              fontWeight:900,
              fontSize:"20px",
              marginTop:"4px"
            }}
          >
           {filteredImages.feed_title}
          </Typography>
          <Typography
            aria-label="settings"
            sx={{
              p: 2,
              color: "black",
              fontSize:"14px",
              fontWeight:600
            }}
          >
           {formateDate(filteredImages.starts_on)}
          </Typography>
          <Typography
            aria-label="settings"
            sx={{
              p: 2,
              color: "black",
              fontWeight:500
            }}
          >
           {filteredImages.banner_text}
          </Typography>
          <img
            src={filteredImages.ad_1_image}
            alt="slide-imgage"
            style={{
              width: "auto",
              height: "400px",
              marginBottom:"10px"
            }}
          />
          <img
            src={filteredImages.ad_2_image}
            alt="slide-imgage"
            style={{
              width: "auto",
              height: "400px",
            }}
          />
        </Box>
      </Slider>
    </div>
  );
};

const CustomPrevArrow = ({ onClick, disabled }) => {
  return (
    <div
      className={`custom-arrow custom-prev ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      <ArrowCircleUpIcon
        sx={{
          borderRadius: "50%",
          fontSize: "35px",
          color: disabled ? "gray" : "blue",
        }}
      />
    </div>
  );
};

const CustomNextArrow = ({ onClick, disabled }) => {
  return (
    <div
      className={`custom-arrow custom-next ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      <ArrowCircleDownIcon
        sx={{
          borderRadius: "50%",
          fontSize: "35px",
          color: disabled ? "gray" : "blue",
        }}
      />
    </div>
  );
};

export default Carousel;
