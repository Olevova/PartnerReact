import { useNewsContext } from "context/NewsContext";
import React from "react";
// import { useParams } from "react-router-dom";

export default function OneNewsPage() {
  // const { id } = useParams();
  const { news } = useNewsContext();
  console.log(news);

  return <div></div>;
}
