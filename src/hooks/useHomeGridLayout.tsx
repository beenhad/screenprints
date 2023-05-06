import { HomeGridLayoutContextType, TabType } from "@/config/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useWindowSize } from "react-use";

const tabs: TabType[] = [
  {
    tabKey: "All",
    name: "all",
    layout: {
      lg: [
        { i: "a", x: 0, y: 0, w: 2, h: 1 },
        { i: "b", x: 2, y: 0, w: 1, h: 1 },
        { i: "c", x: 3, y: 0, w: 1, h: 2 },
        { i: "d", x: 0, y: 1, w: 1, h: 1 },
        { i: "e", x: 1, y: 1, w: 1, h: 1 },
        { i: "f", x: 2, y: 1, w: 1, h: 2 },
        { i: "g", x: 0, y: 2, w: 2, h: 1 },
        { i: "h", x: 3, y: 2, w: 1, h: 1 },
        { i: "i", x: 0, y: 3, w: 2, h: 1 },
        { i: "j", x: 2, y: 3, w: 2, h: 1 },
      ],
      md: [
        { i: "a", x: 0, y: 0, w: 2, h: 2 },
        { i: "b", x: 2, y: 0, w: 1, h: 1 },
        { i: "c", x: 3, y: 0, w: 1, h: 2 },
        { i: "d", x: 0, y: 1, w: 2, h: 1 },
        { i: "e", x: 1, y: 5, w: 1, h: 1 },
        { i: "f", x: 2, y: 1, w: 1, h: 2 },
        { i: "g", x: 0, y: 3, w: 2, h: 2 },
        { i: "h", x: 3, y: 2, w: 1, h: 1 },
        { i: "i", x: 2, y: 3, w: 2, h: 1 },
        { i: "j", x: 2, y: 4, w: 2, h: 2 },
      ],
      xxs: [
        { i: "a", x: 0, y: 0, w: 2, h: 2 },
        { i: "b", x: 0, y: 1, w: 2, h: 1 },
        { i: "c", x: 1, y: 3, w: 1, h: 2 },
        { i: "d", x: 0, y: 6, w: 2, h: 2 },
        { i: "e", x: 0, y: 3, w: 1, h: 1 },
        { i: "f", x: 0, y: 4, w: 1, h: 2 },
        { i: "g", x: 0, y: 8, w: 2, h: 2 },
        { i: "h", x: 1, y: 5, w: 1, h: 1 },
        { i: "i", x: 0, y: 11, w: 2, h: 1 },
        { i: "j", x: 0, y: 10, w: 2, h: 2 },
      ],
    },
    activeCards: [],
  },
  {
    tabKey: "About",
    name: "about",
    activeCards: ["a", "b", "e"],
    layout: {
      lg: [
        { i: "a", x: 0, y: 0, w: 2, h: 1 },
        { i: "b", x: 2, y: 0, w: 1, h: 1 },
        { i: "c", x: 3, y: 1, w: 1, h: 2 },
        { i: "d", x: 0, y: 1, w: 1, h: 1 },
        { i: "e", x: 3, y: 0, w: 1, h: 1 },
        { i: "f", x: 2, y: 1, w: 1, h: 2 },
        { i: "g", x: 0, y: 2, w: 2, h: 1 },
        { i: "h", x: 1, y: 1, w: 1, h: 1 },
        { i: "i", x: 0, y: 3, w: 2, h: 1 },
        { i: "j", x: 3, y: 3, w: 2, h: 1 },
      ],
      md: [
        { i: "a", x: 0, y: 0, w: 2, h: 2 },
        { i: "b", x: 2, y: 0, w: 1, h: 1 },
        { i: "c", x: 3, y: 2, w: 1, h: 2 },
        { i: "d", x: 0, y: 1, w: 2, h: 1 },
        { i: "e", x: 3, y: 1, w: 1, h: 1 },
        { i: "f", x: 2, y: 2, w: 1, h: 2 },
        { i: "g", x: 0, y: 2, w: 2, h: 2 },
        { i: "h", x: 1, y: 4, w: 1, h: 1 },
        { i: "i", x: 3, y: 2, w: 2, h: 1 },
        { i: "j", x: 3, y: 3, w: 2, h: 2 },
      ],
      xxs: [
        { i: "a", x: 0, y: 0, w: 2, h: 2 },
        { i: "b", x: 0, y: 1, w: 2, h: 1 },
        { i: "c", x: 1, y: 2, w: 1, h: 2 },
        { i: "d", x: 1, y: 6, w: 2, h: 2 },
        { i: "e", x: 0, y: 2, w: 1, h: 1 },
        { i: "f", x: 0, y: 3, w: 1, h: 2 },
        { i: "g", x: 0, y: 7, w: 2, h: 2 },
        { i: "h", x: 1, y: 4, w: 1, h: 1 },
        { i: "i", x: 0, y: 8, w: 2, h: 1 },
        { i: "j", x: 0, y: 9, w: 2, h: 2 },
      ],
    },
  },
  {
    tabKey: "Projects",
    name: "projects",
    layout: {
      lg: [
        { i: "a", x: 0, y: 1, w: 2, h: 1 },
        { i: "b", x: 2, y: 3, w: 1, h: 1 },
        { i: "c", x: 3, y: 1, w: 1, h: 2 },
        { i: "d", x: 0, y: 2, w: 1, h: 1 },
        { i: "e", x: 3, y: 3, w: 1, h: 1 },
        { i: "f", x: 2, y: 1, w: 1, h: 2 },
        { i: "g", x: 0, y: 4, w: 2, h: 1 },
        { i: "h", x: 1, y: 3, w: 1, h: 1 },
        { i: "i", x: 0, y: 0, w: 2, h: 1 },
        { i: "j", x: 2, y: 4, w: 2, h: 1 },
      ],
      md: [
        { i: "a", x: 0, y: 1, w: 2, h: 2 },
        { i: "b", x: 2, y: 3, w: 1, h: 1 },
        { i: "c", x: 3, y: 1, w: 1, h: 2 },
        { i: "d", x: 0, y: 2, w: 2, h: 1 },
        { i: "e", x: 3, y: 3, w: 1, h: 1 },
        { i: "f", x: 2, y: 1, w: 1, h: 2 },
        { i: "g", x: 0, y: 4, w: 2, h: 2 },
        { i: "h", x: 2, y: 8, w: 1, h: 1 },
        { i: "i", x: 0, y: 0, w: 2, h: 1 },
        { i: "j", x: 2, y: 4, w: 2, h: 2 },
      ],
      xxs: [
        { i: "a", x: 0, y: 5, w: 2, h: 2 },
        { i: "b", x: 0, y: 3, w: 2, h: 1 },
        { i: "c", x: 1, y: 0, w: 1, h: 2 },
        { i: "d", x: 0, y: 8, w: 2, h: 2 },
        { i: "e", x: 0, y: 7, w: 1, h: 1 },
        { i: "f", x: 0, y: 0, w: 1, h: 2 },
        { i: "g", x: 0, y: 10, w: 2, h: 2 },
        { i: "h", x: 1, y: 7, w: 1, h: 1 },
        { i: "i", x: 0, y: 2, w: 2, h: 1 },
        { i: "j", x: 0, y: 12, w: 2, h: 2 },
      ],
    },
    activeCards: ["c", "f", "i"],
  },
  {
    tabKey: "Order",
    name: "order",
    layout: {
      lg: [
        { i: "a", x: 0, y: 4, w: 2, h: 1 },
        { i: "b", x: 1, y: 2, w: 1, h: 1 },
        { i: "c", x: 3, y: 2, w: 1, h: 2 },
        { i: "d", x: 0, y: 2, w: 1, h: 1 },
        { i: "e", x: 3, y: 4, w: 1, h: 1 },
        { i: "f", x: 2, y: 2, w: 1, h: 2 },
        { i: "g", x: 0, y: 0, w: 2, h: 1 },
        { i: "h", x: 2, y: 4, w: 1, h: 1 },
        { i: "i", x: 0, y: 3, w: 2, h: 1 },
        { i: "j", x: 2, y: 0, w: 2, h: 1 },
      ],
      md: [
        { i: "a", x: 0, y: 3, w: 2, h: 2 },
        { i: "b", x: 2, y: 2, w: 1, h: 1 },
        { i: "c", x: 3, y: 2, w: 1, h: 2 },
        { i: "d", x: 0, y: 0, w: 2, h: 1 },
        { i: "e", x: 3, y: 4, w: 1, h: 1 },
        { i: "f", x: 2, y: 3, w: 1, h: 2 },
        { i: "g", x: 0, y: 1, w: 2, h: 2 },
        { i: "h", x: 2, y: 5, w: 1, h: 1 },
        { i: "i", x: 0, y: 5, w: 2, h: 1 },
        { i: "j", x: 2, y: 0, w: 2, h: 2 },
      ],
      xxs: [
        { i: "a", x: 0, y: 10, w: 2, h: 2 },
        { i: "b", x: 0, y: 9, w: 2, h: 1 },
        { i: "c", x: 1, y: 6, w: 1, h: 2 },
        { i: "d", x: 0, y: 0, w: 2, h: 2 },
        { i: "e", x: 0, y: 11, w: 1, h: 1 },
        { i: "f", x: 0, y: 6, w: 1, h: 2 },
        { i: "g", x: 0, y: 2, w: 2, h: 2 },
        { i: "h", x: 1, y: 11, w: 1, h: 1 },
        { i: "i", x: 0, y: 8, w: 2, h: 1 },
        { i: "j", x: 0, y: 4, w: 2, h: 2 },
      ],
    },
    activeCards: ["d", "g", "j"],
  },
];

const HomeGridLayoutContext = createContext<HomeGridLayoutContextType>(null!);

export const HomeGridLayoutProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { width } = useWindowSize();
  const [rowHeight, setRowHeight] = useState<number>(0);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    const d = document.querySelector(".home_page_grid_layout");

    if (!d) return;

    const cols = width > 800 ? 4 : 2;
    setRowHeight((d.clientWidth - (cols + 1) * 16) / cols);
  }, [width]);

  return (
    <HomeGridLayoutContext.Provider
      value={{
        tabs,
        activeTabIndex,
        setActiveTabIndex,
        activeTab: tabs[activeTabIndex],
        rowHeight,
      }}
    >
      {children}
    </HomeGridLayoutContext.Provider>
  );
};

const useHomeGridLayout = () => useContext(HomeGridLayoutContext);
export default useHomeGridLayout;
