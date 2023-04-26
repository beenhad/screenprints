import useHomeGridLayout from "@/hooks/useHomeGridLayout";
import { motion } from "framer-motion";
import { useCallback, useRef } from "react";

const TabHeader = () => {
  const tabWrapperRef = useRef<HTMLDivElement>(null!);
  const { tabs, setActiveTabIndex, activeTabIndex } = useHomeGridLayout();

  const onClickHandler = useCallback(
    (index: number | undefined) => {
      typeof index === "number" && setActiveTabIndex(index);
    },
    [setActiveTabIndex],
  );

  return (
    <div
      ref={tabWrapperRef}
      className="rounded-full shadow-card-inset flex items-center p-[7px] relative"
    >
      {tabs.map((tab, i) => {
        return (
          <button
            id={`tab_${tab.tabKey}`}
            onClick={(e) => onClickHandler(i)}
            className="h-8 px-4 __text_sm rounded-full outline-none focus-visible:bg-dark-700/60 tracking-normal relative group"
            key={tab.tabKey}
          >
            {activeTabIndex === i && (
              <motion.div
                layoutId="activeBg"
                className="bg-dark-700 inset-0 absolute"
                style={{ borderRadius: 999 }}
              />
            )}
            <p className="relative z-10 duration-[0.25s] group-hover:opacity-50">
              {tab.tabKey}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default TabHeader;
