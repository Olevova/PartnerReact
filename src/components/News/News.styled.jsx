import styled, { keyframes } from "styled-components";
import { device } from "../Container/deviseType";

export const NewsStyled = styled.section`
  width: auto;
  height: auto;
  margin-bottom: 100px;
  margin-top: 100px;

  .news_block {
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
export const CategoryText = styled.span`
  font-style: normal;
  text-align: center;
  font-weight: 900;
  line-height: 48px;
  margin-bottom: 50px;
  margin-bottom: 40px;
  color: white;
  letter-spacing: -0.02em;
  font-feature-settings: "liga";
  font-family: "Poppins";
  font-size: 48px;
  position: relative;
  display: inline-block;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 900;
    line-height: 44px;
  }
`;

const animate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const AnimatedLetter = styled.span`
  display: inline-block;
  animation: ${animate} 1.5s ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;

  animation-delay: ${({ index }) => `${0.1 * index}s`};
`;
