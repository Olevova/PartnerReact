import styled from "styled-components";

export const PhotoContainer = styled.div`
  border: 20px solid white;
  border-radius: 50%;
  width: 500px; /* Задайте власну ширину */
  height: 500px; /* Задайте власну висоту */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .photo {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
