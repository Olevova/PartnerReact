import { FooterStyle } from "./Footer.styled";
import { useState } from "react";
import Logo from "../Logo/Logo";
import { FooterContainer } from "./Footer.styled";
import { FaEdit, FaViber, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  const [phone, setPhone] = useState("");
  const phoneSend = (e) => {
    setPhone(e.target.value);
  };

  return (
    <FooterStyle>
      <FooterContainer>
        <Logo />
        <div className="footer_info">
          <address className="address">
            <p>Наша Адреса:</p>
            <span>
              м. Хмельницький , <br />
              вул. Водопровідна, б. 10, <br />
            </span>
            <a href="mailto:mango@mail.pig">Наш Email - mango@mail.pig</a>
            <a href="tel:+1112223344">Наш телефон - (111) 222-33-44</a>
          </address>
          <nav className="sociale">
            <p>Ми у Соціальних Мережах </p>
            <li>
              <FaViber /> Viber
            </li>
            <li>
              <FaInstagram /> Instagram
            </li>
            <li>
              <FaFacebook /> Facebook
            </li>
          </nav>
          <div className="footer-form">
            <form action="">
              <label htmlFor="">
                <input
                  className="input-form"
                  type="text"
                  name="phone"
                  placeholder="Ваш Телефон"
                  value={phone}
                  onChange={phoneSend}
                />
              </label>
              <button type="submit">
                Підписатись
                <FaEdit />
              </button>
            </form>
          </div>
        </div>
      </FooterContainer>
    </FooterStyle>
  );
};
