import { useEffect } from "react";

type UseEnableGridLayoutTransition = {
  wrapperClass: string;
};
const useEnableGridLayoutTransition = ({
  wrapperClass,
}: UseEnableGridLayoutTransition) => {
  useEffect(() => {
    const gridItem: any = document.querySelector(wrapperClass);

    if (!gridItem) return;
    setTimeout(() => {
      gridItem.classList.remove("disable_transition");
      gridItem.classList.add("enable_transition");
    }, 300);
  }, [wrapperClass]);

  return undefined;
};

export default useEnableGridLayoutTransition;
