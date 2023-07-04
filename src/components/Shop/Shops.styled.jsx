import styled from "styled-components";

export const PhotoContainer = styled.div`
  border: 20px solid white;
  border-radius: 50%;
  width: 100%;
  height: 70%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
  .photo {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const ShopsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  .shop_one {
    position: relative;
  }
  .shop-title {
    display: flex;
    align-items: center;
    transition: all 0.4s ease-in-out;
    transform: translateY(0%);
    opacity: 1;
    margin-bottom: 10px;
  }
  .circle {
    position: absolute;
    right: 0;
    border: 2px solid white;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
      width: 100%;
      height: 50%;
    }
    .shop-img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  .shop-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    &:hover {
      .shop-title {
        transform: translateY(-50%);
        opacity: 0;
      }
    }
  }
  .shop-add {
    transition: all 0.4s ease-in-out;
    transform: translateY(0%);
    opacity: 1;
    margin-bottom: 10px;
  }
  .shop-card:hover .shop-add {
    transform: translateY(-50%);
    opacity: 0;
  }
`;
