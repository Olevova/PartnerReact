import Container from "../Container/Container.styled";
import { NewsStyled } from "./News.styled";
import { NewsComponent } from "../NewsComponent/NewsComponent";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "csxq12xuh6fu",
      accessToken: "tsSmymq8jtYGomyQoP6lpS9hdOhyM9Gq-dNbjF9ubRQ",
    });

    client
      .getEntries({
        content_type: "news",
      })
      .then((response) => {
        const fetchedImages = response.items.map((item) => ({
          title: item.fields.name,
          id: item.sys.id,
          item: item,
          preview: item.fields.somePhoto.fields.file.url,
          about: item.fields.textAboutNews.content[0].content[0].value,
        }));
        setNews(fetchedImages);
      })
      .catch(console.error);
  }, []);
  console.log(news, "client");
  const renderNews = news.slice(0, 4);
  return (
    <Container>
      <NewsStyled>
        <p>News</p>
        <div className="news_block">
          {renderNews.map((item) => (
            <NewsComponent key={item.id} item={item} />
          ))}
        </div>
      </NewsStyled>
    </Container>
  );
};
