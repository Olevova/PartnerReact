import { NewsCard } from "./NewsComponent.styled";
import * as React from "react";

// if you want to try this card - you can load it in some component(like WelcomePageComponent) and put in props item with name and image way

export const NewsComponent = ({ item }) => {
  // Card use in categories Soyummy, Categories, Search
  const { preview, title, about } = item;

  return (
    <NewsCard>
      <div className="overlay">
        <img
          className="card_img"
          src={preview}
          alt={title}
          width={350}
          height={350}
        />

        <h2 className="title">{title}</h2>
        <p>{about.slice(0, 50)}...</p>
      </div>
    </NewsCard>
  );
};
