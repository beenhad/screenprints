import useEnableGridLayoutTransition from "@/hooks/useEnableGridLayoutTransition";
import useIsLayoutDraggable from "@/hooks/useIsLayoutDraggable";
import { cx } from "@/utils";
import { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useWindowSize } from "react-use";

const ResponsiveGridLayout = WidthProvider(Responsive);

const cards = {
  a: "",
  b: "",
  c: "",
  d: "",
  e: "",
  f: "",
  g: "",
  h: "",
  i: "",
};

const layout = {
  md: [
    { i: "a", x: 0, y: 0, w: 2, h: 1 },
    { i: "b", x: 2, y: 0, w: 1, h: 1 },
    { i: "c", x: 3, y: 0, w: 1, h: 1 },
    { i: "d", x: 0, y: 1, w: 1, h: 1 },
    { i: "e", x: 1, y: 1, w: 1, h: 1 },
    { i: "f", x: 2, y: 1, w: 1, h: 2 },
    { i: "g", x: 3, y: 1, w: 1, h: 2 },
    { i: "h", x: 0, y: 2, w: 1, h: 1 },
    { i: "i", x: 1, y: 2, w: 1, h: 1 },
  ],
  xxs: [
    { i: "a", x: 0, y: 0, w: 2, h: 1 },
    { i: "b", x: 0, y: 1, w: 1, h: 1 },
    { i: "c", x: 1, y: 1, w: 1, h: 1 },
    { i: "d", x: 0, y: 2, w: 1, h: 1 },
    { i: "e", x: 1, y: 2, w: 1, h: 1 },
    { i: "f", x: 0, y: 4, w: 1, h: 2 },
    { i: "g", x: 1, y: 4, w: 1, h: 2 },
    { i: "h", x: 0, y: 3, w: 1, h: 1 },
    { i: "i", x: 1, y: 3, w: 1, h: 1 },
  ],
};

const ProjectGridLayout = () => {
  const { width } = useWindowSize();
  const isDraggable = useIsLayoutDraggable();

  const [rowHeight, setRowHeight] = useState<number>(0);

  useEffect(() => {
    const d = document.querySelector(".project_page_grid_layout");

    if (!d) return;

    const cols = width > 800 ? 4 : 2;
    setRowHeight((d.clientWidth - (cols + 1) * 16) / cols);
  }, [width]);

  useEnableGridLayoutTransition({
    wrapperClass: ".project_page_grid_layout",
  });

  return (
    <div>
      <ResponsiveGridLayout
        className={cx(
          "container px-0 project_page_grid_layout disable_transition",
          !rowHeight && "opacity-0 pointer-events-none",
        )}
        isDraggable={isDraggable}
        layouts={layout}
        breakpoints={{ md: 799, xxs: 0 }}
        cols={{ md: 4, xxs: 2 }}
        isBounded
        rowHeight={rowHeight}
        margin={[16, 16]}
      >
        {["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((item) => (
          <div key={item} className="__card">
            {/* <div className="absolute z-50 p-2 bg-red-500 top-4 left-4">
              {item}
            </div> */}
            {cards[item as never]}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default ProjectGridLayout;
