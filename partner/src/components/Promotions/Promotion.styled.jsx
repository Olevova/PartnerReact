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
`;
