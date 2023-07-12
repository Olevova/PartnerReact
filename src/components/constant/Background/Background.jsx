import styled from "styled-components";

const Background = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;
export default Background;
/* rgba(6, 200, 217, 0.5); */
