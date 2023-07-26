import styled from "styled-components";
import { device } from "components/Container/deviseType";

export const MoreLinkComponent = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  border: 1px solid transparent;
  width: ${(props) => (props.open ? "auto" : "50px")};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.link};
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  transition: width 0.3s, background-color 0.3s;
  @media ${device.tablet} {
    right: ${(props) => (props.right ? props.right : "300px")};
  }

  .morelink {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: row;
    width: 100%;

    .link {
      margin-left: 5px;
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.3s, transform 0.3s;
      text-decoration: none;
      color: ${(props) =>
        props.theme.colors.link}; /* Використання кольору по замовчуванню */
      display: flex;
      align-items: center;
    }
  }

  &:hover .link::before {
    content: "Більше";
    color: ${(props) => props.theme.colors.link};
    font-weight: 700;
    margin-right: 5px;
  }

  &:hover {
    width: ${(props) => (props.open ? "auto" : "130px")};
    cursor: pointer;
  }
`;
