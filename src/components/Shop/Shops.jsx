import Container from "../Container/Container.styled";
import { PhotoContainer } from "./Shops.styled";
import { CategoryText, AnimatedLetter } from "../News/News.styled";
export const Shops = () => {
  const categoryText = `Наші`;
  const categoryTextSecond = `Магазини`;
  return (
    <Container>
      <CategoryText>
        {categoryText.split("").map((letter, index) => (
          <AnimatedLetter key={index} index={index}>
            {letter}
          </AnimatedLetter>
        ))}
      </CategoryText>
      <CategoryText style={{ marginLeft: "10px" }}>
        {categoryTextSecond.split("").map((letter, index) => (
          <AnimatedLetter key={index} index={index}>
            {letter}
          </AnimatedLetter>
        ))}
      </CategoryText>
      <PhotoContainer>
        <img className="photo" src="/img/shops.JPG" alt="title" />
      </PhotoContainer>
      <img src="/wave.svg" alt="svg_image" />
    </Container>
  );
};
