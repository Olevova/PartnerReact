import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkComp = styled(NavLink)`
  color: ${(props) => props.theme.colors.link};
  position: relative;
  display: inline-block;
  overflow: hidden;

  &.active {
    border-bottom: 1px solid ${(props) => props.theme.colors.link};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
  }

  &::before {
    background-color: ${(props) => props.theme.colors.link};
    height: 2px;
    bottom: 0;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  &::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    color: ${(props) => props.theme.colors.link};
  }

  &:hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }

  &:hover::after {
    transform: translate3d(0, 0, 0);
  }

  span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  &:hover span {
    transform: translate3d(-200%, 0, 0);
  }
`;

export const PageLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: red;
`;
