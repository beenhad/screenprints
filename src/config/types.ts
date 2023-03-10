import { Dispatch, ReactNode, SetStateAction } from "react";
import ReactGridLayout from "react-grid-layout";

export type TabType = {
  tabKey: string;
  name: string;
  layout: ReactGridLayout.Layouts;
  activeCards: string[];
};
export type TabHeaderProps = {
  tabs: TabType[];
};

export type HomeGridLayoutContextType = {
  tabs: TabType[];
  activeTabIndex: number;
  setActiveTabIndex: Dispatch<SetStateAction<number>>;
  activeTab: TabType;
  rowHeight: number;
};

export type CollapsibleType = {
  title: string;
  body: ReactNode;
};

export type CollapsibleProps = {
  isActive: boolean;
  onToggle: () => void;
} & CollapsibleType;
