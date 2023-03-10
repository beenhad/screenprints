import { useState } from "react";

type UseIsHoveredReturnType = {
  isHovered: boolean;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
};
const useIsHovered = (): UseIsHoveredReturnType => {
  const [isHovered, setIsHovered] = useState(false);

  return {
    isHovered,
    handlers: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => {
        setIsHovered(false);
      },
    },
  };
};

export default useIsHovered;
