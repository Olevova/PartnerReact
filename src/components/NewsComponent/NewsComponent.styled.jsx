import styled from "styled-components";
import { device } from "../Container/deviseType";

export const NewsCard = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  margin: auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  color: ${(props) => props.theme.colors.link};
  @media ${device.desktop} {
    width: 320px;
    height: 320px;
  }

  .card_img {
    /* width: 50%; */
    /* height: 100%; */
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  :hover.card_img {
    transform: scale(1.1);
  }

  :hover .overlay {
    opacity: 1;
  }

  .title {
    margin-top: 10px;
    padding-left: 20px;
    color: ${(props) => props.theme.colors.link};
  }

  p {
    margin-bottom: 0;
    padding: 20px;
    color: ${(props) => props.theme.colors.link};
  }
  .overlay {
    background-color: white;
    top: 0;
    bottom: 0;
    position: absolute;
    color: ${(props) => props.theme.colors.link};
  }
`;
