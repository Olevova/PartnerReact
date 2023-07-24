
import { useState, useEffect, useContext, createContext } from "react";
import { createClient } from "contentful";


const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
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
    return (
        <NewsContext.Provider value={{news}}>
            {children}
        </NewsContext.Provider>
    )
}

export function useNewsContext() {
    return useContext(NewsContext)
}