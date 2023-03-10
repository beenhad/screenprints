import { useEffect, useState } from "react";

const useIsLayoutDraggable = () => {
  const [isDraggable, setIsDraggable] = useState(false);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) ||
      /iPad/i.test(navigator.userAgent)
    ) {
      setIsDraggable(false);
    } else {
      setIsDraggable(true);
    }
  }, []);

  return isDraggable;
};

export default useIsLayoutDraggable;
