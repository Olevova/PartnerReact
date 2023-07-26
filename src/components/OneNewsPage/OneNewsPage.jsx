import { useNewsContext } from "context/NewsContext";
import React, { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import SocialLink from "components/SocialLink/SocialLink";
import Container from "components/Container/Container.styled";
import { OneNewsStyle } from "./OneNewsPage.styled";

export default function OneNewsPage() {
  const { id } = useParams();
  const { news } = useNewsContext();
  const [one, setOne] = useState([]);

  const oneNewsHave = useCallback(() => {
    const oneNews = news.filter((i) => i.id === id);
    setOne(oneNews);
  }, [id, news]);

  console.log(one, news);
  useEffect(() => {
    oneNewsHave();
  }, [oneNewsHave]);

  return (
    <Container style={{ marginTop: "auto" }}>
      {one.length > 0 ? (
        <>
          <OneNewsStyle>
            <img className="one-img" src={one[0].preview} alt={one[0].title} />
            <div className="one-review">
              <h2>{one[0].title}</h2>
              <p>{one[0].about}</p>
            </div>
            <div className="one-link">
              <SocialLink news={true} />
            </div>
          </OneNewsStyle>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
