import ArrowTopRight from "@/components/Icons/ArrowTopRight";

const BlankCatalog = () => {
  return (
    <div className="__card flex flex-col relative justify-center items-center p-[14px] gap-1 text-center">
      <h2 className="__title_lg">Blank Catalog</h2>
      <p className="__text_sm">Updated for 2023</p>

      <a
        href="#"
        target="_blank"
        className="__btn_rounded absolute bottom-[14px] left-[14px]"
      >
        <ArrowTopRight />
      </a>
    </div>
  );
};

export default BlankCatalog;
