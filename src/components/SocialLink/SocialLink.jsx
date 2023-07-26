import React from "react";
import { FaViber, FaInstagram, FaFacebook } from "react-icons/fa";
import { SocialLinkStyle } from "./SocialLin.styled";
import { NavLink } from "react-router-dom";
export default function SocialLink({ news }) {
  return (
    <div>
      <SocialLinkStyle news={news}>
        {news ? "" : <p>Ми у Соціальних Мережах </p>}
        <div className="link-block">
          <NavLink
            className="social-link"
            to="https://invite.viber.com/?g2=AQBD%2FqG%2FO5612U2Xp6Z1lZFg5C4wOsoBMg%2FGmIo5oxkBuo%2BPFmC52cNv8TVQIt%2B4&lang=ru"
          >
            <FaViber />
          </NavLink>
          <NavLink className="social-link">
            <FaInstagram />
          </NavLink>{" "}
          <NavLink
            className="social-link"
            to="https://m.facebook.com/groups/2940898199465099/?ref=share"
          >
            <FaFacebook />
          </NavLink>
        </div>
      </SocialLinkStyle>
    </div>
  );
}
