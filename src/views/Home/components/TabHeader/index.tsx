import useHomeGridLayout from "@/hooks/useHomeGridLayout";
import { MouseEvent, useCallback, useEffect, useRef } from "react";

const TabHeader = () => {
  const tabWrapperRef = useRef<HTMLDivElement>(null!);
  const highlightRef = useRef<HTMLDivElement>(null!);
  const { tabs, setActiveTabIndex, activeTabIndex } = useHomeGridLayout();

  const onClickHandler = useCallback(
    (
      e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | undefined,
      index: number | undefined,
      rect?: DOMRect,
    ) => {
      typeof index === "number" && setActiveTabIndex(index);

      const highlightElm = highlightRef.current;
      const tabWrapperRect = tabWrapperRef.current.getBoundingClientRect();
      const btnRect = rect || (e && (e.target as any).getBoundingClientRect());

      highlightElm.style.left = btnRect.x - tabWrapperRect.x + "px";
      highlightElm.style.top = btnRect.y - tabWrapperRect.y + "px";
      highlightElm.style.width = btnRect.width + "px";
      highlightElm.style.height = btnRect.height + "px";
    },
    [setActiveTabIndex],
  );

  useEffect(() => {
    let timeoutId: any;
    if (highlightRef.current && tabWrapperRef.current) {
      timeoutId = setTimeout(() => {
        onClickHandler(
          undefined,
          undefined,
          document
            .getElementById(`tab_${tabs[activeTabIndex].tabKey}`)
            ?.getBoundingClientRect(),
        );
      }, 100);
    }

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClickHandler, tabs]);

  return (
    <div
      ref={tabWrapperRef}
      className="rounded-full shadow-card-inset flex items-center p-[7px] relative"
    >
      <div
        ref={highlightRef}
        style={{
          width: "48.1094px",
          left: "7px",
          height: "32px",
          top: "7px",
        }}
        className="rounded-full duration-[400ms] bg-dark-700 h-[calc(100%-14px)] absolute"
      ></div>
      {tabs.map((tab, i) => {
        return (
          <button
            id={`tab_${tab.tabKey}`}
            onClick={(e) => onClickHandler(e, i)}
            className="h-8 px-4 __text_sm rounded-full outline-none focus-visible:bg-dark-700/60 tracking-normal relative z-[2] hover:opacity-50 duration-[0.25s]"
            key={tab.tabKey}
          >
            {tab.tabKey}
          </button>
        );
      })}
    </div>
  );
};

export default TabHeader;
