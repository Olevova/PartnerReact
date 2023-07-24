import styled from "styled-components";

export const NewsSections = styled.section`
  width: auto;
  height: auto;
  margin-bottom: 20px;
  margin-top: 20px;

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
  }

  .pagination a {
    display: flex;
    color: ${(props) => props.theme.colors.link};
    border-radius: 4px;
    background-color: white;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    margin: 2px;
  }

  .active {
    background-color: white;
    border-radius: 4px;
    a {
      color: white;
      background-color: ${(props) => props.theme.colors.link};
    }

    /* box-shadow: 0px 0px 0px rgba(0, 0, 0, 0); */
  }

  .pagination a:hover:not(.active) {
    scale: 1.07;
  }
`;

export const Projcard = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 10px;
  font-size: 18px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  /* Оновлення: рожевий фон для left, синій фон для right */
  background-image: ${(props) =>
    props.isLeft
      ? "linear-gradient(to right, rgba(174, 226, 171, 0.5), rgba(153, 242, 200, 0.8))"
      : "linear-gradient(to right, rgba(142, 158, 171, 0.5), rgba(238, 242, 243, 0.8))"};

  &:hover {
    box-shadow: 0 34px 32px -33px rgba(0, 0, 0, 0.18);
    transform: translate(0px, -3px);
  }

  .projcard-innerbox {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .projcard-img {
    position: absolute;
    height: 300px;
    width: 400px;
    top: 0;
    left: ${(props) => (props.isLeft ? "0" : "initial")};
    right: ${(props) => (props.isLeft ? "initial" : "0")};
    transition: transform 0.2s ease;
  }

  .projcard-img:hover {
    transform: scale(1.05) rotate(1deg);
  }

  .projcard-textbox {
    position: absolute;
    top: 7%;
    bottom: 7%;
    left: ${(props) => (props.isLeft ? "430px" : "initial")};
    right: ${(props) => (props.isLeft ? "initial" : "430px")};
    width: calc(100% - 470px);
    font-size: 17px;
  }

  .projcard-title {
    font-family: "Voces", "Open Sans", Arial, sans-serif;
    font-size: 24px;
  }

  .projcard-description {
    z-index: 10;
    font-size: 15px;
    color: #424242;
    height: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
