import styled from "styled-components";
import { device } from "../Container/deviseType";
export const HeroStyle = styled.section`
  .sectionHero {
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    width: auto;
    height: 80px;
    background-color: ${(props) => props.theme.colors.sectionbg};
    align-items: center;
    @media ${device.tablet} {
      height: 300px;
    }
    @media ${device.desktop} {
      height: 450px;
    }
  }
  .swiper {
    max-height: 380px;
  }

  .hero_link {
    font-size: large;
    width: 95%;
    height: auto;
    border: 1px solid green;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%);
    color: #8baa36;
    text-align: center;
    &:hover {
      color: #fafafa;
      background-color: #8baa36;
    }
  }
`;
