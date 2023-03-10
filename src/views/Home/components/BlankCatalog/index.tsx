import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import React from "react";

const BlankCatalog = () => {
  return (
    <div className="__card flex flex-col relative justify-center items-center p-[14px] gap-1 text-center">
      <h2 className="__title_lg">Blank Catalog</h2>
      <p className="__text_sm">Updated for 2023</p>

      <button className="__btn_rounded absolute bottom-[14px] left-[14px]">
        <ArrowTopRight />
      </button>
    </div>
  );
};

export default BlankCatalog;
