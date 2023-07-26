import styled from "styled-components";
import Container from "components/Container/Container.styled";
import { device } from "components/Container/deviseType";

export const FooterStyle = styled.section`
  margin-top: 20px;
  width: 100%;
  height: 320px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
`;
export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 360px;
  align-items: center;
  /* justify-content: space-between; */
  margin-left: 10px;
  margin-right: 10px;
  padding: 0px 16px;
  background-color: ${(props) => props.theme.colors.headerBg};
  border-radius: 6px;
  border: 1px solid black;
  flex-grow: 1;
  font-size: 18px;

  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    position: relative;
    min-width: 360px;
    align-items: center;
    /* justify-content: space-between; */
    margin-left: 10px;
    margin-right: 10px;
    padding: 0px 16px;
    background-color: ${(props) => props.theme.colors.headerBg};
    border-radius: 6px;
    border: 1px solid black;
    flex-grow: 1;
    font-size: 18px;
    font-weight: 700;
  }

  .footer_info {
    display: flex;
    padding: 20px;
    @media ${device.desktop} {
      padding-left: 100px;
    }
  }
  .address {
    display: none;
    @media ${device.desktop} {
      display: flex;
      flex-direction: column;
    }
    @media ${device.desktop} {
      display: flex;
      padding-right: 100px;
      flex-direction: column;
      margin-bottom: 5px;
      padding: 10px;
    }
    /* margin-right: 350px; */

    color: ${(props) => props.theme.colors.link};
    span {
      margin-top: 10px;
      margin-bottom: 20px;
    }
    a,
    p {
      color: ${(props) => props.theme.colors.link};
      border-radius: 15px;
      transition: all 300ms ease-in-out;
      @media ${device.desktop} {
        padding: 5px;
      }
    }
    a:hover {
      color: #2a7e10;
      box-shadow: 0 0 24px 0 #1f6805;
    }
  }

  .footer-form {
    display: flex;
    flex-direction: column;

    @media ${device.desktop} {
      padding-left: 150px;
      padding-top: 40px;
      flex-direction: row;
      margin-left: 0px;
      margin-left: 10px;
    }

    /* position: absolute; */
    /* left: 900px; */
  }
  .input-form {
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    height: 40px;
    margin-right: 20px;
    color: ${(props) => props.theme.colors.link};
  }

  .input-form:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.link};
  }

  .input-form:invalid {
    border-color: red;
  }

  button[type="submit"] {
    display: flex;
    height: 40px;
    width: 200px;
    margin-top: 10px;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.link};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    @media ${device.desktop} {
      width: auto;
      margin-top: 0px;
    }
  }

  button[type="submit"]:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.link};
  }

  /* Розміщення SVG у кнопці */
  button[type="submit"] svg {
    vertical-align: middle;
    margin-left: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
    @media ${device.desktop} {
      flex-direction: row;
    }
  }
`;
