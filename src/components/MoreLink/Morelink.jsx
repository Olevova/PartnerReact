import React, { useEffect, useRef, useState } from "react";
import { MoreLinkComponent } from "./Morelink.styled";
import { AiFillCaretRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Morelink({ content, right }) {
  return (
    <MoreLinkComponent right={right ? right : ""}>
      <div className="morelink">
        <NavLink className="link" to={`/${content}`}>
          <AiFillCaretRight />
        </NavLink>
      </div>
    </MoreLinkComponent>
  );
}
