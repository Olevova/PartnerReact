import styled from "styled-components";

export const PhotoContainer = styled.div`
  position: relative;
  border: 20px solid white;
  border-radius: 50%;
  width: 100%;
  height: 70%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
  margin-top: 100px;
  .photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
  }
  .about {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 20px;
    color: black;
    background-color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    align-items: center;
    display: flex;
    text-align: center;
    font-size: 20px;
    color: ${(props) => props.theme.colors.link};
  }
  &:hover {
    .photo {
      opacity: 0.2;
    }
    .about {
      opacity: 0.8;
    }
  }
`;

export const ShopsContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 700px; /* Змінено на 700px */
  grid-column-gap: 20px;
  grid-row-gap: 0px;

  .shop-title {
    background-color: white;
    color: ${(props) => props.theme.colors.link};
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.4s ease-in-out;
    transform: translateY(0%);
    opacity: 1;
    margin-bottom: 10px;
    bottom: 0;
    left: 25px;
    width: 90%;
    height: 20%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    p {
      padding: 20px;
    }
  }

  .shop-img {
    /* border-radius: 15px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%; /* Змінено max-width на width */
    height: 100%; /* Змінено max-height на height */
    object-fit: cover;
  }
  .title-link {
    display: flex;
    align-items: center;
    padding: 10px;
    h2 {
      margin-left: 10px;
    }
  }
  .shop-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
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
