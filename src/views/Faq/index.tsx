import GoBackTopBar from "@/components/GoBackTopBar";
import FaqSection from "./components/FaqSection";

const Faq = () => {
  return (
    <>
      <GoBackTopBar>
        <div className="container_md">
          <FaqSection />
        </div>
      </GoBackTopBar>
    </>
  );
};

export default Faq;
