import Container from "../Container/Container.styled";
import { CategoryText, NewsStyled, AnimatedLetter } from "./News.styled";
import { NewsComponent } from "../NewsComponent/NewsComponent";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { PageLink } from "components/constant/Link/Linnk.styled";
import Morelink from "components/MoreLink/Morelink";

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

  const categoryText = "Новини";
  console.log(news, "client");
  const renderNews = news.slice(0, 4);
  return (
    <div style={{ position: "relative" }}>
      <img src="./Moon.svg" alt="moon" style={{ position: "absolute" }} />
      <Container>
        <NewsStyled>
          <CategoryText>
            {categoryText.split("").map((letter, index) => (
              <AnimatedLetter key={index} index={index}>
                {letter}
              </AnimatedLetter>
            ))}
          </CategoryText>
          <Morelink content={"news"} />
          <div className="news_block">
            {renderNews.map((item) => (
              <PageLink to={`/news/${item.id}`} key={item.id}>
                <NewsComponent item={item} />
              </PageLink>
            ))}
          </div>
        </NewsStyled>
      </Container>
    </div>
  );
};
