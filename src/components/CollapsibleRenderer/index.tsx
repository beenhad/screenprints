import { CollapsibleType } from "@/config/types";
import { useState } from "react";
import Collapsible from "../Collapsible";

type CollapsibleRendererProps = {
  collapsibles: CollapsibleType[];
  defaultActiveIndex?: number;
};
const CollapsibleRenderer = ({
  collapsibles,
  defaultActiveIndex,
}: CollapsibleRendererProps) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(
    defaultActiveIndex ?? null,
  );

  return (
    <>
      {collapsibles.map((collapsible, i) => (
        <Collapsible
          {...collapsible}
          isActive={i === activeIndex}
          onToggle={() => {
            setActiveIndex((prev) => (prev === i ? null : i));
          }}
          key={i}
        />
      ))}
    </>
  );
};

export default CollapsibleRenderer;
