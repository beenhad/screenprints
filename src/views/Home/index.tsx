import AnimateFromBottom from "@/components/AnimateFromBottom";
import Header from "@/components/Header";
import { HomeGridLayoutProvider } from "@/hooks/useHomeGridLayout";
import HomePageGridLayout from "./components/HomePageGridLayout";

const Home = () => {
  return (
    <>
      <HomeGridLayoutProvider>
        <Header />
        <AnimateFromBottom>
          <HomePageGridLayout />
        </AnimateFromBottom>
      </HomeGridLayoutProvider>
    </>
  );
};

export default Home;
