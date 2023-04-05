import GoBackTopBar from "@/components/GoBackTopBar";
import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import ProjectGridLayout from "./components/ProjectGridLayout";

const Hat = () => {
  return (
    <GoBackTopBar>
      <div className="pt-[50px] lg:pt-[60px]">
        <div className="container lg:px-[60px] mb-[55px] lg:mb-[64px]">
          <h1 className="__title_xl">Hat</h1>
          <p className="text-lg leading-[24px] lg:text-[26px] lg:leading-[40px] tracking-[0.25px] mt-2.5 mb-5 max-w-[494px]">
            This is where the project text will go. There should be two-three
            lines total for this section
          </p>

          <div className="flex flex-wrap gap-3.5">
            <button className="__btn md:px-[18px]">
              Screen printing <ArrowTopRight />
            </button>
            <button className="__btn md:px-[18px]">
              Direct to Garment <ArrowTopRight />
            </button>
          </div>
        </div>

        <ProjectGridLayout />
      </div>
    </GoBackTopBar>
  );
};

export default Hat;
