import React, { useContext } from "react";
import { useShopContext } from "../../context/ShopContext";
import ShopsInf from "./ShopsInf.styled";
import Container from "../Container/Container.styled";
import {
  AiOutlineShopping,
  AiOutlineDoubleRight,
  AiFillEnvironment,
} from "react-icons/ai";
import { CategoryText, AnimatedLetter } from "../News/News.styled";
import { ThemeContext } from "styled-components";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

export const ShopsInfo = (props) => {
  const { shops } = useShopContext();
  const theme = useContext(ThemeContext);
  const categoryText = `Список`;
  const categoryTextSecond = "Магазини";
  console.log(props, "props", shops);

  const mapStyles = {
    width: "auto",
    height: "400px",
  };

  const center = {
    lat: 49.405538060744696,
    lng: 27.010243411646226,
  };
  return (
    <ShopsInf>
      <img src="./Moon.svg" alt="moon" style={{ position: "absolute" }} />
      <Container style={{ position: "relative" }}>
        <div className="shopsInfo_block">
          <div className="shopsInfo_text">
            <CategoryText
              style={{
                color: theme.colors.logo,
              }}
            >
              {categoryText.split("").map((letter, index) => (
                <AnimatedLetter key={index} index={index}>
                  {letter}
                </AnimatedLetter>
              ))}
            </CategoryText>
            <CategoryText
              style={{
                marginLeft: "10px",
                color: theme.colors.logo,
              }}
            >
              {categoryTextSecond.split("").map((letter, index) => (
                <AnimatedLetter key={index} index={index}>
                  {letter}
                </AnimatedLetter>
              ))}
            </CategoryText>
          </div>
          <div className="shopsInfo_info">
            <p className="shopsInfo_about">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              assumenda deleniti sunt voluptatum repudiandae dolorem dolore
              corporis impedit at nobis quo ex, exercitationem nostrum sequi
              dicta dolores repellendus sint laudantium odit voluptates. Eveniet
              omnis dolores, in delectus suscipit aperiam quo.
            </p>
            <div className="shop_item">
              {shops.map((item) => (
                <div key={item.id} className="item">
                  <div className="icon">
                    <AiOutlineShopping className="one" />
                    <AiOutlineDoubleRight className="two" />
                  </div>
                  <p>
                    <span className="item_style">Магазин:</span> {item.title}
                  </p>
                  <p>
                    <span className="item_style" style={{ marginLeft: "10px" }}>
                      Адреса:
                    </span>{" "}
                    {item.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="shopinfo_map">
        <LoadScript googleMapsApiKey="AIzaSyDdLuXQk7BLepjbS6DU5HDkxJERUnemMr4">
          <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={center}>
            {shops.map((item) => (
              <Marker
                key={item.id}
                position={{
                  lat: Number(item.location.lat),
                  lng: Number(item.location.lon),
                }}
                icon={<AiFillEnvironment />}
              />
            ))}
            <AiFillEnvironment />
          </GoogleMap>
        </LoadScript>
      </div>
    </ShopsInf>
  );
};
