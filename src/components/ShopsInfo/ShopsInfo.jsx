import React, { useContext, useState } from "react";
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
// import hand from "../../../public/hand.svg";
// import dotenv from "dotenv";
// dotenv.config();

export const ShopsInfo = (props) => {
  // KEY = process.env.MAP_API_KEY;
  console.log(process.env.REACT_APP_MAP_API_KEY);
  const { shops } = useShopContext();
  const theme = useContext(ThemeContext);
  const categoryText = `Список`;
  const categoryTextSecond = "Магазини";
  console.log(props, "props", shops);
  const [activeShop, setActiveShop] = useState(null);
  const [center, setCenter] = useState({
    lat: 49.41,
    lng: 26.97,
  });

  const handleMarkerClick = (id, location) => {
    const { lat, lon } = location;
    setActiveShop(id);
    setCenter({ lat, lng: lon });
    console.log(center, "center");
  };

  const iconAtribute = (iconcolor) => {
    return {
      path: "M20.125 10.109c0.578 0 1.156 0.109 1.672 0.359 1.5 0.672 2.203 1.906 2.203 3.531v2.766c0 0.984-0.125 1.969-0.359 2.906l-1.328 5.297c-0.438 1.781-2.031 3.031-3.875 3.031h-10.437c-2.203 0-4-1.797-4-4v-6.266l-3.734-9.812c-0.172-0.453-0.266-0.938-0.266-1.422 0-2.203 1.797-4 4-4 1.656 0 3.156 1.031 3.734 2.578l0.266 0.688v-1.766c0-2.203 1.797-4 4-4s4 1.797 4 4v4.078c0.25-0.047 0.5-0.078 0.75-0.078 1.437 0 2.75 0.828 3.375 2.109zM16.75 10c-0.688 0-1.313 0.406-1.594 1.031l-1.156 2.547-1.109 2.422h0.859c1.047 0 1.969 0.734 2.188 1.75l2.406-5.281c0.109-0.219 0.156-0.469 0.156-0.719 0-0.969-0.781-1.75-1.75-1.75zM20.203 12.109c-1.188 0-1.563 0.953-1.984 1.891l-2.063 4.531c-0.109 0.219-0.156 0.469-0.156 0.719 0 0.969 0.781 1.75 1.75 1.75 0.688 0 1.313-0.406 1.594-1.031l2.5-5.5c0.078-0.156 0.141-0.406 0.141-0.594 0-1.047-0.75-1.766-1.781-1.766zM2 6.5c0 0.25 0.047 0.484 0.125 0.719l3.875 10.156v1.078l1.594-1.734c0.422-0.453 1.031-0.719 1.656-0.719h3.094l1.656-3.641v-8.359c0-1.109-0.891-2-2-2s-2 0.891-2 2v10h-1l-3.125-8.219c-0.297-0.766-1.047-1.281-1.875-1.281-1.109 0-2 0.906-2 2zM18.438 26c0.922 0 1.719-0.625 1.937-1.516l1.328-5.297c0.203-0.781 0.297-1.609 0.297-2.422v-1.422l-2.203 4.844c-0.359 0.797-1.172 1.313-2.047 1.313-1.094 0-2.047-0.797-2.219-1.891-0.422 0.547-1.078 0.891-1.781 0.891h-3.25v-0.5h3.25c0.953 0 1.813-0.781 1.813-1.75 0-0.953-0.719-1.75-1.687-1.75h-4.625c-0.484 0-0.953 0.203-1.281 0.562l-1.969 2.125v4.813c0 1.109 0.891 2 2 2h10.437z",
      fillColor: iconcolor,
      fillOpacity: 1,
      strokeColor: iconcolor,
      strokeWeight: 1,
      scale: 1,
    };
  };

  const mapStyles = {
    width: "auto",
    height: "400px",
  };

  // const center = {
  //   lat: 49.41,
  //   lng: 26.97,
  // };
  return (
    <ShopsInf>
      <img src="./Moon.svg" alt="moon" style={{ position: "absolute" }} />
      <Container style={{ position: "relative" }}>
        <img className="map" src="./map.svg" width="200px" alt="map" />
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
                <div
                  key={item.id}
                  className={`item ${activeShop === item.id ? "active" : ""}`}
                  onClick={() => handleMarkerClick(item.id, item.location)}
                >
                  <div className="icon">
                    <AiOutlineShopping className="one" />
                    <AiOutlineDoubleRight className="two" />
                  </div>
                  <p className="text">
                    <span className="item_style">Магазин:</span> {item.title}
                  </p>
                  <p className="text">
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
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}>
          <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={center}>
            {shops.map((item) => (
              <Marker
                key={item.id}
                position={{
                  lat: Number(item.location.lat),
                  lng: Number(item.location.lon),
                }}
                icon={iconAtribute(activeShop === item.id ? "red" : "green")}
              />
            ))}
            <AiFillEnvironment />
          </GoogleMap>
        </LoadScript>
      </div>
    </ShopsInf>
  );
};
