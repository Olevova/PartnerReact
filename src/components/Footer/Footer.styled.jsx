import styled from "styled-components";
import Container from "components/Container/Container.styled";
export const FooterStyle = styled.section`
  margin-top: 20px;
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
`;
export const FooterContainer = styled(Container)`
  display: flex;
  position: relative;
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
    left: 800px;
    p {
      color: ${(props) => props.theme.colors.link};
      margin-bottom: 20px;
    }
    li {
      style: none;
      color: ${(props) => props.theme.colors.link};
    }
  }
`;
