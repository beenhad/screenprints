import Header from "@/components/Header";
import { HomeGridLayoutProvider } from "@/hooks/useHomeGridLayout";
import HomePageGridLayout from "./components/HomePageGridLayout";

const Home = () => {
  return (
    <>
      <HomeGridLayoutProvider>
        <Header />
        <HomePageGridLayout />
      </HomeGridLayoutProvider>
    </>
  );
};

export default Home;
