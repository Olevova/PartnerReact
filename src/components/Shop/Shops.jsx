import Container from "../Container/Container.styled";
import { PhotoContainer, ShopsContainer } from "./Shops.styled";
import { CategoryText, AnimatedLetter } from "../News/News.styled";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Morelink from "components/MoreLink/Morelink";

export const Shops = () => {
  const categoryText = `Наші`;
  const categoryTextSecond = `Магазини`;
  const [shops, setShops] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add window resize event listener
    window.addEventListener("resize", handleWindowResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const client = createClient({
      space: "csxq12xuh6fu",
      accessToken: "tsSmymq8jtYGomyQoP6lpS9hdOhyM9Gq-dNbjF9ubRQ",
    });

    client
      .getEntries({
        content_type: "shops",
      })
      .then((response) => {
        const fetchedImages = response.items.map((item) => ({
          title: item.fields.shopTitle,
          id: item.sys.id,
          address: item.fields.address.content[0].content[0].value,
          preview: item.fields.photo.fields.file.url,
          about: item.fields.about.content[0].content[0].value,
          location: {
            lat: item.fields.location.lat,
            lon: item.fields.location.lon,
          },
        }));
        setShops(fetchedImages);
      })
      .catch(console.error);
  }, []);
  console.log(shops);
  return (
    <section style={{ position: "relative" }}>
      <img src="/Moon2.svg" alt="moon2" style={{ position: "absolute" }} />
      <Container style={{ position: "relative" }}>
        <CategoryText>
          {categoryText.split("").map((letter, index) => (
            <AnimatedLetter key={index} index={index}>
              {letter}
            </AnimatedLetter>
          ))}
        </CategoryText>
        <CategoryText style={{ marginLeft: "10px" }}>
          {categoryTextSecond.split("").map((letter, index) => (
            <AnimatedLetter key={index} index={index}>
              {letter}
            </AnimatedLetter>
          ))}
        </CategoryText>
        <Morelink content="shops" right="50px" />
        <ShopsContainer>
          <PhotoContainer>
            <img
              className="photo"
              src="/img/shops.JPG"
              alt="title"
              style={{ zIndex: "8" }}
            />
            <p className="about">
              Наша мережа налічує 13 магазинів, які розташовані у найбільших
              містах Хмельницької області. Наша мережа це і супермаркети і
              магазини біля дому...
            </p>
          </PhotoContainer>
          {shops.length > 0 && (
            <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {shops.map(({ id, title, address, preview }) => (
                <SwiperSlide
                  key={id}
                  style={{
                    position: "relative",
                    width: windowWidth > 765 ? "600px" : "300px",
                    height: windowWidth > 765 ? "600px" : "300px",
                    borderRadius: "15px",
                    border: "20px solid white",
                  }}
                >
                  {/* <div className="shop-one"> */}
                  <img className="shop-img" src={preview} alt={title} />
                  <NavLink to={"/shops"}>
                    <div className="shop-title">
                      <div className=" title-link">
                        <FaShoppingBasket />
                        <h2 className="">{title}</h2>
                      </div>
                      {windowWidth > 765 && (
                        <p className="shop-add">{address}</p>
                      )}
                    </div>
                  </NavLink>
                  {/* </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </ShopsContainer>
      </Container>
    </section>
  );
};
