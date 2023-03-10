import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import CardTwitterIcon from "@/components/Icons/CardTwitterIcon";

const TwitterCard = () => {
  return (
    <div className="__card flex flex-col relative justify-center items-center p-[14px] gap-1 text-center">
      <CardTwitterIcon />

      <button className="__btn_rounded absolute bottom-[14px] left-[14px]">
        <ArrowTopRight />
      </button>
    </div>
  );
};

export default TwitterCard;
