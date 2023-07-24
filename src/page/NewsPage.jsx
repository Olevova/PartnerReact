import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { useNewsContext } from "context/NewsContext";
import NewsPageComponent from "../components/NewsComponent/NewsPageComponent";
import { NewsSections } from "../components/NewsComponent/NewsPageComponent.styled";
import Container from "components/Container/Container.styled";
import ReactPaginate from "react-paginate";

export default function NewsPage() {
  const itemsPerPage = 2;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { news } = useNewsContext();
  const [totalItems, setTotalItems] = useState(0);

  const pagePagination = useCallback(() => {
    setTotalItems(news.length);
    console.log(totalItems);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPages);
  }, [news.length, totalItems, itemsPerPage]);

  useEffect(() => pagePagination(), [pagePagination]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleNews = news.slice(startIndex, endIndex);
  return (
    <Container>
      <NewsSections>
        {visibleNews.map(({ preview, title, about, id }, index) => (
          <NewsPageComponent
            preview={preview}
            title={title}
            about={about}
            index={index}
            key={id}
            id={id}
          />
        ))}
        <ReactPaginate
          pageCount={totalPages}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
        />
      </NewsSections>
    </Container>
  );
}
