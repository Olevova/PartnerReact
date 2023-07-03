import styled from "styled-components";
import Container from "components/Container/Container.styled";
export const FooterStyle = styled.section`
  margin-top: 20px;
  width: 100%;
  height: 320px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
`;
export const FooterContainer = styled(Container)`
  display: flex;
  position: relative;
  min-width: 360px;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0px 16px;
  background-color: ${(props) => props.theme.colors.headerBg};
  border-radius: 6px;
  border: 1px solid black;
  flex-grow: 1;
  font-size: 18px;
  font-weight: 700;

  .footer_info {
    display: flex;
  }
  .address {
    position: absolute;
    display: flex;
    padding: 100px;
    flex-direction: column;
    top: -30px;
    left: 250px;
    margin-bottom: 5px;

    color: ${(props) => props.theme.colors.link};
    span {
      margin-top: 10px;
      margin-bottom: 20px;
    }
    a,
    p {
      padding-top: 5px;
      color: ${(props) => props.theme.colors.link};
    }
    a:hover {
      background-color: ${(props) => props.theme.colors.link};
      color: ${(props) => props.theme.colors.headerBg};
    }
  }
  .sociale {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 700px;
    p {
      color: ${(props) => props.theme.colors.link};
      margin-bottom: 20px;
    }
    li {
      list-style: none;
      color: ${(props) => props.theme.colors.link};
    }
  }
  .footer_form {
    display: flex;
    position: absolute;
    left: 900px;
  }
  .input-form {
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    height: 40px;
    margin-right: 20px;
  }

  .input-form:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.link};
  }

  .input-form:invalid {
    border-color: red;
  }

  /* Стилізація кнопки */
  button[type="submit"] {
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.link};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
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
  }
`;
