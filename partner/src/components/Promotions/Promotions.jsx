import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { PromotionSection } from "./Promotion.styled";
import Container from "../Container/Container.styled";
import { PromotCard } from "../PromotCard/PromotCard";

export const Promotions = () => {
  const [promotion, setPromotion] = useState([]);
  useEffect(() => {
    const client = createClient({
      space: "csxq12xuh6fu",
      accessToken: "tsSmymq8jtYGomyQoP6lpS9hdOhyM9Gq-dNbjF9ubRQ",
    });

    client
      .getEntries({
        content_type: "promotion",
      })
      .then((response) => {
        const fetchePromotion = response.items.map((item) => ({
          id: item.sys.id,
          about: item.fields.about,
          sale: item.fields.sale,
          photo: item.fields.photo.fields.file.url,
          newPrice: item.fields.newPrice,
          oldPrice: item.fields.oldPrice,
        }));
        setPromotion(fetchePromotion);
      })
      .catch(console.error);
  }, []);
  console.log(promotion, "fff");
  return (
    <Container>
      <PromotionSection>
        <div className="card_block">
          {promotion.map(({ id, about, sale, photo, newPrice, oldPrice }) => (
            <PromotCard
              key={id}
              id={id}
              about={about}
              sale={sale}
              photo={photo}
              newPrice={newPrice}
              oldPrice={oldPrice}
            />
          ))}
        </div>
      </PromotionSection>
    </Container>
  );
};
