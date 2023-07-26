import styled from "styled-components";
import { device } from "../Container/deviseType";
export const OneNewsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: auto;
  margin-top: 100px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.desktop} {
    grid-template-columns: 1fr 2fr;
  }
  .one-review {
    position: relative;
    padding: 15px;
  }
  .one-img {
    width: 100%;
    max-width: 600px;
  }
  .one-link {
    position: absolute;
    bottom: 5px;
    left: 10px;
  }
  /* .news-content {
    display: grid;
    grid-template-rows: 3fr 1fr;
    gap: 20px;

    h2,
    p {
      margin: 0;
    }
  } */
`;
