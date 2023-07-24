import React from "react";
import { Projcard } from "./NewsPageComponent.styled";
import { PageLink } from "../constant/Link/Linnk.styled";

export default function NewsPageComponent({
  preview,
  title,
  about,
  index,
  id,
}) {
  const isLeft = index % 2 === 0;
  return (
    <Projcard isLeft={isLeft}>
      <PageLink to={id}>
        <div className="projcard-innerbox">
          <img
            className={`projcard-img projcard-img`}
            src={preview}
            alt="Preview"
          />
          <div className={`projcard-textbox projcard-textbox`}>
            <div className="projcard-title">{title}</div>
            <div className="projcard-description">{about}</div>

            {/* Додавання деталізації */}
            <p>Дата публікації: 20 липня 2023</p>
            <p>Автор: John Doe</p>
          </div>
        </div>
      </PageLink>
    </Projcard>
  );
}
