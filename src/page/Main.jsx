import { Hero } from "../components/Hero/Hero";
import { News } from "../components/News/News";
import { Topfive } from "../components/TopFive/TopFive";
import { Shops } from "../components/Shop/Shops";
export const Main = () => {
  return (
    <>
      <Hero />
      <News />
      <Topfive />
      <Shops />
    </>
  );
};