// import { NavLink } from "react-router-dom";
import { ReactComponent as LogoHeader } from "../../images/partlog.svg";
import { LogoBig } from "./Logo.styled";
const Logo = () => {
  return (
    // <NavLink to="" className="header_icons">
    <LogoBig>
      <LogoHeader className="logo" />
    </LogoBig>
  );
};

export default Logo;
