import React, { useState, useEffect, useCallback } from "react";
import { HeroStyle } from "./Hero.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { createClient } from "contentful";
import { Link } from "react-router-dom";
// import dotenv from "dotenv";
// dotenv.config();

export const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSale, setImageSale] = useState([]);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const client = createClient({
      space: "csxq12xuh6fu",
      accessToken: "tsSmymq8jtYGomyQoP6lpS9hdOhyM9Gq-dNbjF9ubRQ",
    });
    console.log(client, "client");

    client
      .getEntries({
        content_type: "sales",
      })
      .then((response) => {
        const fetchedImages = response.items.map((item) => ({
          id: item.sys.id,
          url: item.fields.sale.fields.file.url,
        }));
        setImageSale(fetchedImages);
      })
      .catch(console.error);
  }, []);

  console.log(imageSale);

  return (
    <HeroStyle>
      <div className="sectionHero">
        {windowWidth > 765 && (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {imageSale.map((i) => (
              <SwiperSlide key={i.id}>
                <img src={i.url} alt={i.id} />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        )}
        <Link to="./promotions" className="hero_link">
          Наші акції
        </Link>
      </div>
    </HeroStyle>
  );
};
