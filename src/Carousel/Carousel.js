import React, { useState, useEffect } from "react";
import axios from "../axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../config/config";
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();
const API_KEY = "9414cd5bdeaee15e8cf8908c46f2ab06";

const Carousel = ({ id }) => {
  const [credits, setCredits] = useState();

  const items = credits?.map((credit) => (
    <div className="carouselItem">
      <img
        src={
          credit.profile_path
            ? `https://image.tmdb.org/t/p/w300/${credit.profile_path}`
            : noPicture
        }
        alt={credit?.name}
        onDragStart={handleDragStart}
        className="carouselItem_img"
      />
      <b className="carousel_txt">{credit?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const requestResponse = await axios.get(
        `/movie/${id}/credits?api_key=${API_KEY}`
      );
      const { data } = requestResponse;
      setCredits(data.cast);
    }
    fetchData();
  }, []);

  console.log(credits, "corousel");
  return (
    <AliceCarousel
      infinite
      responsive={responsive}
      mouseTracking
      disableDotsControls
      disableButtonsControls
      items={items}
      autoPlay
    />
  );
};

export default Carousel;
