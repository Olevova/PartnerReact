import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { PromotionSection } from "./Promotion.styled";
import Container from "../Container/Container.styled";
import { PromotCard } from "../PromotCard/PromotCard";
import ReactPaginate from "react-paginate";

export const Promotions = () => {
  const [promotion, setPromotion] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const client = createClient({
      space: "csxq12xuh6fu",
      accessToken: "tsSmymq8jtYGomyQoP6lpS9hdOhyM9Gq-dNbjF9ubRQ",
    });

    const fetchPromotionData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "promotion",
          limit: itemsPerPage,
          skip: (currentPage - 1) * itemsPerPage,
        });

        const totalItems = response.total;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(totalPages);

        const fetchedPromotion = response.items.map((item) => ({
          id: item.sys.id,
          about: item.fields.about,
          sale: item.fields.sale,
          photo: item.fields.photo.fields.file.url,
          newPrice: item.fields.newPrice,
          oldPrice: item.fields.oldPrice,
        }));
        setPromotion(fetchedPromotion);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPromotionData();
  }, [currentPage, itemsPerPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <Container>
      <PromotionSection>
        <div className="card_block">
          {promotion.map(({ id, about, sale, photo, newPrice, oldPrice }) => (
            <PromotCard
              key={id}
              id={id}
              about={about}
              sale={sale}
              photo={photo}
              newPrice={newPrice}
              oldPrice={oldPrice}
            />
          ))}
        </div>
        <ReactPaginate
          pageCount={totalPages}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
        />
      </PromotionSection>
    </Container>
  );
};
