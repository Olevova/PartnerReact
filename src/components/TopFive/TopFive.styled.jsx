import styled from "styled-components";
import { device } from "../Container/deviseType";

export const TopCard = styled.div`
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 10px;
  margin-top: 10px;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media ${device.desktop} {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 320px 320px 305px;
    grid-auto-columns: 320px;
    /* background-color: #4a5d4a; */
    color: #444;
  }
  .box {
    background-color: #fff;
    color: ${(props) => props.theme.colors.link};
    border-radius: 5px;
    /* padding: 20px; */
    font-size: 150%;
    position: relative;
  }

  .one {
    @media ${device.desktop} {
      grid-column: 1 / 3;
      /* background-color: #fff; */
      grid-row: 1;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      transition: transform 0.3s;
    }
    &:hover {
      transform: scale(1.03);
    }

    .product-image {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .discount {
        padding: 5px;
        background-color: red;
        color: #fff;
        z-index: 5;
        position: absolute;
        top: 5px;
        left: 10px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }

      .discont_biggest {
        position: absolute;
        padding: 5px;
        bottom: 5px;
        background-color: red;
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }
    }
    .product-description {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      padding: 10px;
      margin-top: 10px;
      /* border-block-start-color: revert; */
      border-bottom: 2px solid #ff513a;
      /* border: 1px solid red; */
    }
    .product-details {
      width: 70%;
      padding: 10px;
      align-items: center;
    }

    .price-section {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    .original-price {
      /* position: absolute; */
      font-size: 18px;
      text-decoration: line-through;
      color: #888;
      margin: 0;
      text-align: right;
      bottom: 35px;
      left: 5px;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
    }

    .sale-price {
      /* position: absolute; */
      font-size: 28px;
      font-weight: 800;
      line-height: 25px;
      background: #fff;
      color: red;
      margin: 0;
      bottom: 10px;
      left: 4px;
      text-align: right;
      /* text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
        1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
        3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
        5px 6px 1px #eee, 7px 6px 1px #ccc; */
    }
  }

  .two {
    grid-row: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.03);
    }

    .product-image {
      width: 50%;
      min-height: 450px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      /* overflow: hidden; */

      img {
        width: 100%;
        min-height: 350px;
        object-fit: cover;
      }

      .discount {
        padding: 5px;
        background-color: red;
        color: #fff;
        position: absolute;
        top: 5px;
        left: -50px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }

      .discont_biggest {
        position: absolute;
        padding: 5px;
        bottom: 5px;
        background-color: red;
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }
    }
    .product-description {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      padding: 10px;
      /* border-block-start-color: revert; */
      border-bottom: 2px solid #ff513a;
      /* border: 1px solid red; */
    }
    .product-details {
      width: 90%;
      padding: 10px;
      align-items: center;
    }

    .price-section {
      position: absolute;
      bottom: 15px;
      right: 15px;
    }
    .original-price {
      /* position: absolute; */
      font-size: 18px;
      text-decoration: line-through;
      color: #888;
      margin: 0;
      text-align: right;
      bottom: 35px;
      left: 5px;
    }

    .sale-price {
      /* position: absolute; */
      font-size: 28px;
      font-weight: 800;
      line-height: 25px;
      color: red;
      margin: 0;
      bottom: 10px;
      left: 4px;
      text-align: right;
    }
  }
  .two {
    grid-column: 3;
    grid-row: 1 / 3;
  }
  .three {
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.03);
    }

    .product-image {
      width: 50%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      /* overflow: hidden; */

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .discount {
        padding: 5px;
        background-color: red;
        color: #fff;
        z-index: 5;
        position: absolute;
        top: 5px;
        left: -65px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }

      .discont_biggest {
        position: absolute;
        padding: 5px;
        bottom: 5px;
        background-color: red;
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }
    }
    .product-description {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      padding: 10px;
      /* border-block-start-color: revert; */
      border-bottom: 2px solid #ff513a;
      /* border: 1px solid red; */
    }
    .product-details {
      width: 90%;
      padding: 10px;
      align-items: center;
    }

    .price-section {
      position: absolute;
      bottom: 15px;
      right: 15px;
    }
    .original-price {
      /* position: absolute; */
      font-size: 18px;
      text-decoration: line-through;
      color: #888;
      margin: 0;
      text-align: right;
      bottom: 35px;
      left: 5px;
    }

    .sale-price {
      /* position: absolute; */
      font-size: 28px;
      font-weight: 800;
      line-height: 25px;
      color: red;
      margin: 0;
      bottom: 10px;
      left: 4px;
      text-align: right;
    }
  }
  .four {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    border: 1px solid #ccc;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.03);
    }

    .product-image {
      width: 50%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      /* overflow: hidden; */

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .discount {
        padding: 5px;
        background-color: red;
        color: #fff;
        z-index: 5;
        position: absolute;
        top: 5px;
        left: -65px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }

      .discont_biggest {
        position: absolute;
        padding: 5px;
        bottom: 5px;
        background-color: red;
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }
    }
    .product-description {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      padding: 10px;
      /* border-block-start-color: revert; */
      border-bottom: 2px solid #ff513a;
      /* border: 1px solid red; */
    }
    .product-details {
      width: 90%;
      padding: 10px;
      align-items: center;
    }

    .price-section {
      position: absolute;
      bottom: 15px;
      right: 15px;
    }
    .original-price {
      /* position: absolute; */
      font-size: 18px;
      text-decoration: line-through;
      color: #888;
      margin: 0;
      text-align: right;
      bottom: 35px;
      left: 5px;
    }

    .sale-price {
      /* position: absolute; */
      font-size: 28px;
      font-weight: 800;
      line-height: 25px;
      color: red;
      margin: 0;
      bottom: 10px;
      left: 4px;
      text-align: right;
    }
  }

  .five {
    grid-column: 4 / 5;
    grid-row: 1 / 4;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.03);
    }

    .product-image {
      width: 50%;
      min-height: 450px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      /* overflow: hidden; */

      img {
        width: 100%;
        min-height: 350px;
        object-fit: cover;
      }

      .discount {
        padding: 5px;
        background-color: red;
        color: #fff;
        position: absolute;
        top: 5px;
        left: -50px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }

      .discont_biggest {
        position: absolute;
        padding: 5px;
        bottom: 5px;
        background-color: red;
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }
    }
    .product-description {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      padding: 10px;
      /* border-block-start-color: revert; */
      border-bottom: 2px solid #ff513a;
      /* border: 1px solid red; */
    }
    .product-details {
      width: 90%;
      padding: 10px;
      align-items: center;
    }

    .price-section {
      position: absolute;
      bottom: 15px;
      right: 15px;
    }
    .original-price {
      /* position: absolute; */
      font-size: 18px;
      text-decoration: line-through;
      color: #888;
      margin: 0;
      text-align: right;
      bottom: 35px;
      left: 5px;
    }

    .sale-price {
      /* position: absolute; */
      font-size: 28px;
      font-weight: 800;
      line-height: 25px;
      color: red;
      margin: 0;
      bottom: 10px;
      left: 4px;
      text-align: right;
    }
  }
`;
