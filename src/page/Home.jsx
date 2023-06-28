import Header from "../components/Header/Header";
// import { Hero } from "../components/Hero/Hero";
import { Footer } from "../components/Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Home = ({ themeChange, value }) => {
  return (
    <>
      <Header themeChange={themeChange} value={value} />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
export default Home;
