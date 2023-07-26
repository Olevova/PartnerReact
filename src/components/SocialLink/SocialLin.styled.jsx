import styled from "styled-components";
import { device } from "components/Container/deviseType";
export const SocialLinkStyle = styled.nav`
  display: flex;
  flex-direction: ${(props) => (props.news ? "row" : "column")};
  position: "absolute";
  align-items: center;
  top: ${(props) => (props.news ? "-100px" : "80px")};
  left: ${(props) => (props.news ? "10px" : "700px")};

  p {
    font-size: 14px;
    text-align: center;

    @media${device.tablet} {
      font-size: 20px;
    }
    color: ${(props) => props.theme.colors.link};
    margin-bottom: 20px;
  }
  .link-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
  .social-link {
    color: ${(props) => props.theme.colors.link};
    padding: 5px;
    width: 40px;
    height: 40px;
    background-color: whitesmoke;
    border-radius: 50%;
    transition: color 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
  }
  .social-link:hover {
    color: #3fed00;
    box-shadow: 0 0 24px 0 #3fed00;
  }
`;
