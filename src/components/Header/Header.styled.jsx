import Container from "../Container/Container.styled";
import { device } from "../Container/deviseType";
// import { device } from "components/constants/deviceType/deviceType";
import styled from "styled-components";

export const HeaderPrimary = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  min-width: 360px;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0px 16px;
  background-color: ${(props) => props.theme.colors.headerBg};
  border-radius: 6px;
  border: 1px solid black;
  flex-grow: 1;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }

  .logo_style {
    fill: ${(props) => props.theme.colors.link};
  }

  .header_nav_link {
    --b: 0.1em;
    --c: ${(props) => props.theme.colors.link};

    padding: var(--b);
    background: linear-gradient(var(--c) 50%, #000 0) 0%
        calc(100% - var(--_p, 0%)) / 100% 200%,
      linear-gradient(var(--c) 0 0) 0% var(--_p, 0%) / var(--_p, 0%) var(--b)
        no-repeat;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    transition: 0.3s var(--_s, 0s) linear,
      background-size 0.3s calc(0.3s - var(--_s, 0s));
  }

  .header_nav_link:hover {
    --_p: 100%;
    --_s: 0.3s;
  }
  .header_nav_link.active {
    position: relative;
    --b: 0.1em; /* толщина линии */
    --c: ${(props) => props.theme.colors.link}; /* цвет */

    padding-bottom: var(--b);
  }

  .header_nav_link.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: var(--b);
    background-color: var(--c);
    transition: width 0.3s;
  }

  .header_nav_link.active:hover::after {
    width: 0;
  }

  .header_nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & li {
      padding: 10px;
    }
    @media ${device.tablet} {
      flex-direction: row;
    }
  }
  .icons {
    position: absolute;
    left: 20px;
    top: 20px;
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.link};
    border-radius: 10px;
    padding: 5px;
    @media ${device.tablet} {
    }
  }

  .icon_sun {
    fill: ${(props) => props.theme.colors.link};
    width: 20px;
    height: 20px;
  }
  .icon_sun.active {
    fill: #ff513a;
  }
  .icon_close {
    fill: ${(props) => props.theme.colors.link};
    width: 20px;
    height: 20px;
    .active {
      fill: #dcf19e;
    }
  }

  .icon_open {
    fill: ${(props) => props.theme.colors.link};
    width: 20px;
    height: 20px;
    .active {
      fill: #dcf19e;
    }
  }

  .button_menu {
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: transparent;
    border: none;
    z-index: 500;
    @media ${device.tablet} {
      display: none;
    }
  }

  .mobile_menu {
    position: absolute;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;
    left: -100%;
    background-color: ${(props) => props.theme.colors.headerBg};
    top: 0;

    @media ${device.tablet} {
      position: relative;
      /* width: auto; */
      height: auto;
      background-color: inherit;
      flex-direction: row;
      align-items: normal;
      left: 0;
    }

    &.active {
      left: 0;
      z-index: 500;
    }
  }
  .right_nav_menu {
    position: absolute;
    bottom: 5px;
    right: 15px;
    margin-top: 30px;
    @media ${device.tablet} {
      margin-top: none;
      right: 10px;
    }
  }

  .btn_change {
    background-color: inherit;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0;
  }

  .header_button {
    background-color: inherit;
    border: 1px solid ${(props) => props.theme.colors.link};
    color: ${(props) => props.theme.colors.link};
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      color: #fafafa;
      background-color: #8baa36;
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 555;
  }

  .modal_content {
    background-color: white;
    padding: 10px;
    width: 80%;
    height: 80%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    overflow: auto; /* Додайте цей рядок */
  }

  .modal_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .modal_form label {
    margin-bottom: 20px;
    width: 100%;
    font-size: small;
  }

  .modal_form input[type="text"],
  .modal_form textarea {
    margin-bottom: 5px;
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .modal_form textarea {
    margin-top: 20px;
  }

  .modal_form button[type="submit"] {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colors.link};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .modal_form input[type="text"]:focus,
  .modal_form textarea:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.link};
    box-shadow: 0 0 5px ${(props) => props.theme.colors.link};
  }

  .modal_form input[type="text"].invalid,
  .modal_form textarea.invalid {
    border-color: red;
  }
  .textAreaInput {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 200px;

    /* Стилі для розміру mobil і tab */
    /* @media ${device.mobil}, ${device.tab} {
      height: 350px;
    } */

    /* Стилі для розміру desktop */
    @media ${device.desktop} {
      height: 400px;
    }
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
