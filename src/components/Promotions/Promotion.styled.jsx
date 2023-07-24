import styled from "styled-components";
import { device } from "../Container/deviseType";

export const PromotionSection = styled.section`
  width: auto;
  height: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  .card_block {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
    @media ${device.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.desktop} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

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
