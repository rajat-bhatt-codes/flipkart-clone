import React from "react";

import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  carousel: {
    marginTop: 10,
  },
});

const Banner = () => {
  const classes = useStyle();

  return (
    <Carousel
      autoPlay={true}
      animation='slide'
      indicators={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          background: "#ffffff",
          color: "#494949",
          borderRadius: 0,
          margin: 0,
        },
      }}
      className={classes.carousel}
    >
      {bannerData.map((image, idx) => (
        <img src={image} alt={`image_${idx}`} className={classes.image} />
      ))}
    </Carousel>
  );
};

export default Banner;
