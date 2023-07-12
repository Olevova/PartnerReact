import { Hero } from "../components/Hero/Hero";
import { News } from "../components/News/News";
import { Topfive } from "../components/TopFive/TopFive";
import { Shops } from "../components/Shop/Shops";
import MainStyle from "../components/constant/Main/Main.styled";
export const Main = () => {
  return (
    <MainStyle>
      <Hero />
      <News />
      <Topfive />
      <Shops />
    </MainStyle>
  );
};
