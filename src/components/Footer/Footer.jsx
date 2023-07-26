import { FooterStyle } from "./Footer.styled";
import { useState } from "react";
import Logo from "../Logo/Logo";
import { FooterContainer } from "./Footer.styled";
import { FaEdit } from "react-icons/fa";
import SocialLink from "components/SocialLink/SocialLink";

export const Footer = () => {
  const [phone, setPhone] = useState("");
  const phoneSend = (e) => {
    setPhone(e.target.value);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       "http://localhost:8888/.netlify/functions/sendEmail",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ phone }),
  //       }
  //     );
  //     // console.log(body, response);
  //     if (response.ok) {
  //       // Якщо лист успішно надіслано
  //       console.log("Email sent successfully");
  //     } else {
  //       // Якщо сталася помилка при надсиланні листа
  //       console.error("Failed to send email");
  //       console.log(process.env.REACT_APP_SENDGRID_API_KEY);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value);
  // };

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
          <SocialLink />
          <div className="footer-form">
            <form
              name="emailform"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="emailform" />
              <label htmlFor="phone">
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
