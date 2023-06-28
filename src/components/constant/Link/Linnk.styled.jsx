import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkComp = styled(NavLink)`
  color: ${(props) => props.theme.colors.link};
  &.active {
    color: ${(props) => props.theme.colors.hoverLink};
  }
  &:hover {
    color: ${(props) => props.theme.colors.hoverLink};
  }
`;
export default NavLinkComp;
