import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { TopCard } from "./TopFive.styled";
import Container from "../Container/Container.styled";
import { CategoryText, AnimatedLetter } from "../News/News.styled";
import Morelink from "components/MoreLink/Morelink";

export const Topfive = () => {
  const [promotion, setPromotion] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "csxq12xuh6fu",
      accessToken: "tsSmymq8jtYGomyQoP6lpS9hdOhyM9Gq-dNbjF9ubRQ",
    });

    const fetchPromotionData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "promotion",
        });

        const fetchedPromotion = response.items.map((item) => ({
          id: item.sys.id,
          about: item.fields.about,
          sale: item.fields.sale,
          photo: item.fields.photo.fields.file.url,
          newPrice: item.fields.newPrice,
          oldPrice: item.fields.oldPrice,
        }));
        setPromotion(fetchedPromotion);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPromotionData();
  }, []);
  console.log(promotion, "promotion");
  const categoryText = `Найбільша`;
  const categoryTextSecond = `${"   "}Знижка`;
  return (
    <section style={{ marginBottom: "100px", position: "relative" }}>
      <img src="./Moon1.svg" alt="moon1" style={{ position: "absolute" }} />
      <Container>
        <CategoryText>
          {categoryText.split("").map((letter, index) => (
            <AnimatedLetter key={index} index={index}>
              {letter}
            </AnimatedLetter>
          ))}
        </CategoryText>
        <Morelink content={"promotions"} />
        <CategoryText style={{ marginLeft: "10px" }}>
          {categoryTextSecond.split("").map((letter, index) => (
            <AnimatedLetter key={index} index={index}>
              {letter}
            </AnimatedLetter>
          ))}
        </CategoryText>
        <TopCard>
          <div className="box one">
            {promotion.length > 0 && (
              <>
                <div className="product-image">
                  <img
                    src={promotion[0].photo}
                    alt={promotion[0].id}
                    width={220}
                    height={220}
                  />
                  <span className="discount">{promotion[0].sale}%</span>
                  <span className="discont_biggest">Найбільша знижка</span>
                </div>
                <div className="product-details">
                  <p className="product-description">{promotion[0].about}</p>
                </div>
                <div className="price-section">
                  <p className="original-price">
                    {promotion[0].oldPrice} грн/шт
                  </p>
                  <p className="sale-price">
                    Нова ціна {promotion[0].newPrice} грн/шт
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="box two">
            {promotion.length > 0 && (
              <>
                <div className="product-image">
                  <img
                    src={promotion[1].photo}
                    alt={promotion[1].id}
                    width={220}
                    height={220}
                  />
                  <span className="discount">{promotion[1].sale}%</span>
                </div>
                <div className="product-details">
                  <p className="product-description">{promotion[1].about}</p>
                </div>
                <div className="price-section">
                  <p className="original-price">
                    {promotion[1].oldPrice} грн/шт
                  </p>
                  <p className="sale-price">{promotion[1].newPrice} грн/шт</p>
                </div>
              </>
            )}
          </div>
          <div className="box three">
            {promotion.length > 0 && (
              <>
                <div className="product-image">
                  <img
                    src={promotion[2].photo}
                    alt={promotion[2].id}
                    width={220}
                    height={220}
                  />
                  <span className="discount">{promotion[2].sale}%</span>
                </div>
                <div className="product-details">
                  <p className="product-description">{promotion[2].about}</p>
                </div>
                <div className="price-section">
                  <p className="original-price">
                    {promotion[2].oldPrice} грн/шт
                  </p>
                  <p className="sale-price">{promotion[2].newPrice} грн/шт</p>
                </div>
              </>
            )}
          </div>
          <div className="box four">
            {promotion.length > 0 && (
              <>
                <div className="product-image">
                  <img
                    src={promotion[3].photo}
                    alt={promotion[3].id}
                    width={220}
                    height={220}
                  />
                  <span className="discount">{promotion[3].sale}%</span>
                </div>
                <div className="product-details">
                  <p className="product-description">{promotion[3].about}</p>
                </div>
                <div className="price-section">
                  <p className="original-price">
                    {promotion[3].oldPrice} грн/шт
                  </p>
                  <p className="sale-price">{promotion[3].newPrice} грн/шт</p>
                </div>
              </>
            )}
          </div>
          <div className="box five">
            {promotion.length > 0 && (
              <>
                <div className="product-image">
                  <img
                    src={promotion[4].photo}
                    alt={promotion[4].id}
                    width={220}
                    height={220}
                  />
                  <span className="discount">{promotion[4].sale}%</span>
                </div>
                <div className="product-details">
                  <p className="product-description">{promotion[4].about}</p>
                </div>
                <div className="price-section">
                  <p className="original-price">
                    {promotion[4].oldPrice} грн/шт
                  </p>
                  <p className="sale-price">{promotion[4].newPrice} грн/шт</p>
                </div>
              </>
            )}
          </div>
        </TopCard>
      </Container>
    </section>
  );
};
