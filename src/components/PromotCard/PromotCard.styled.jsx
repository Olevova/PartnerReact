import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
  width: 330px;
  height: 520px;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(62, 64, 62, 0.3);
  transition: box-shadow 0.3s;
  border-radius: 5px;

  &:hover {
    box-shadow: 6px 8px 8px rgba(75, 77, 75, 0.9);
    .product-image img {
      transform: translateY(-5px);
    }
    .discount {
      background-color: #ff0000cc;
    }
    .sale-price {
      color: #ff0000cc;
    }
  }

  .product-image {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
  }

  .product-image img {
    padding-top: 50px;
    width: 100%;
    height: 100%;
    transition: transform 0.3s;
    object-fit: contain;
  }

  .discount {
    position: absolute;
    top: 0;
    background-color: ${(props) => props.theme.colors.link};
    color: white;
    font-size: 14px;
    padding: 5px;
    margin: 10px;
    transition: background-color 0.3s;
  }

  .product-details {
    margin-top: 20px;
  }

  .product-title {
    font-size: 16px;
    color: ${(props) => props.theme.colors.link};
    margin: 0;
    text-align: right;
  }

  .product-description {
    font-size: 18px;
    margin: 5px 0;
    font-weight: 400;
    line-height: 22px;
    /* text-align: center; */
    padding: 5px;
  }

  .price-section {
    position: relative;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .original-price {
    position: absolute;
    font-size: 18px;
    text-decoration: line-through;
    color: #888;
    margin: 0;
    text-align: right;
    bottom: 35px;
    left: 5px;
  }

  .sale-price {
    position: absolute;
    font-size: 28px;
    font-weight: 800;
    line-height: 25px;
    color: ${(props) => props.theme.colors.link};
    margin: 0;
    bottom: 10px;
    left: 4px;
    text-align: right;
  }
`;
