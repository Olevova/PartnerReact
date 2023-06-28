import React, { useState, useRef, useEffect } from "react";
import { HeaderPrimary, HeaderContainer } from "./Header.styled";
import Logo from "../Logo/Logo";
import NavLinkComp from "../constant/Link/Linnk.styled";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";

const Header = ({ themeChange, value }) => {
  const [toggle, setToggle] = useState(true);
  const [modalToggle, setModalToggle] = useState(false);
  const toggleBlock = useRef();
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleModal = (event) => {
    if (
      event.target.className === "modal" ||
      event.target.className === "header_button"
    ) {
      setModalToggle(!modalToggle);
    }
    return;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length === 0) {
      inputRef.current.classList.add("invalid");
    } else {
      // Ваша логіка для відправки форми
      setModalToggle(false);
    }
  };

  useEffect(() => {
    console.log(toggleBlock, "nav");
  }, []);

  useEffect(() => {
    if (modalToggle) {
      document.body.style.overflow = "hidden"; // Заборонити прокрутку
    } else {
      document.body.style.overflow = "auto"; // Розблокувати прокрутку
    }
  }, [modalToggle]);

  return (
    <>
      <HeaderPrimary>
        <HeaderContainer>
          <>
            <Logo className="" />
            <div className={!toggle ? "mobile_menu active" : "mobile_menu"}>
              <div className="icons">
                <button className="btn_change" onClick={themeChange}>
                  <SunIcon className={value ? "icon_sun" : "icon_sun active"} />
                </button>
                <button className="btn_change" onClick={themeChange}>
                  <MoonIcon
                    className={!value ? "icon_sun" : "icon_sun active"}
                  />
                </button>
              </div>

              <nav className="">
                <ul className="header_nav">
                  <li className="header_nav_link active">
                    <NavLinkComp to="/">Головна</NavLinkComp>
                  </li>
                  <li className="header_nav_link">
                    <NavLinkComp href="#">Акції</NavLinkComp>
                  </li>
                  <li className="header_nav_link">
                    <NavLinkComp href="#">Новини</NavLinkComp>
                  </li>
                  <li className="header_nav_link">
                    <NavLinkComp href="#">Контакти</NavLinkComp>
                  </li>
                  <li className="header_nav_link">
                    <NavLinkComp href="#">Робота</NavLinkComp>
                  </li>
                </ul>
              </nav>

              <nav>
                <ul className="right_nav_menu">
                  <li>
                    <button
                      className="header_button"
                      onClick={handleToggleModal}
                    >
                      Написати Нам
                    </button>
                  </li>
                </ul>
              </nav>

              {modalToggle && (
                <div
                  className="modal"
                  ref={toggleBlock}
                  onClick={handleToggleModal}
                >
                  <div className="modal_content">
                    <form className="modal_form" onSubmit={handleSubmit}>
                      <label>
                        Ваше Ім'я
                        <input
                          type="text"
                          name="username"
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ваше ім'я"
                          ref={inputRef}
                          value={name}
                        />
                      </label>
                      <label>
                        Текс Звернення
                        <textarea
                          className="textAreaInput"
                          name="text"
                          // rows="15"
                          onChange={(e) => setText(e.target.value)}
                          value={text}
                          placeholder="Напишіть Ваше повідомлення ось тут..."
                        ></textarea>
                      </label>
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div>
              {toggle ? (
                <button onClick={handleToggle} className="button_menu">
                  <BarsArrowDownIcon className="icon_close" />
                </button>
              ) : (
                <button onClick={handleToggle} className="button_menu">
                  <BarsArrowUpIcon className="icon_open" />
                </button>
              )}
            </div>
          </>
        </HeaderContainer>
      </HeaderPrimary>
    </>
  );
};

export default Header;
