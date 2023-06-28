import { Card } from "./PromotCard.styled";

export const PromotCard = ({ id, about, sale, photo, newPrice, oldPrice }) => {
  return (
    <>
      <Card>
        <div className="product-image">
          <img src={photo} alt={id} width={220} height={220} />
          <span className="discount">{sale}%</span>
        </div>
        <div className="product-details">
          <p className="product-description">{about}</p>
        </div>
        <div className="price-section">
          <p className="original-price">{oldPrice} грн/шт</p>
          <p className="sale-price">{newPrice} грн/шт</p>
          {/* <span className="product-title">Акція «Партнер»</span> */}
        </div>
      </Card>
    </>
  );
};
