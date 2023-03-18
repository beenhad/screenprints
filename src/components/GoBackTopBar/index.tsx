import { cx } from "@/utils";
import { useRouter } from "next/router";
import { ReactNode, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useWindowSize } from "react-use";
const GoBackTopBar = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const { width = 0 } = useWindowSize();
  const [isHovered, setIsHovered] = useState(false);

  const goBackHandler = () => {
    wrapperRef.current.style.transform = "translateY(40px)";
    wrapperRef.current.style.opacity = "0";
    setTimeout(() => {
      router.back();
    }, 450);
  };
  return (
    <>
      <div ref={wrapperRef} className="duration-[650ms]">
        <div className="flex px-8 lg:justify-center py-[37px]">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={goBackHandler}
            className="__btn_rounded w-[46px] h-[46px]  hover:shadow-card bg-dark-100 duration-300 hover:scale-110 ease-out hover:bg-[rgb(33,38,45)]"
          >
            <IoClose size={20} />
          </button>
        </div>
        <div
          className={cx(
            isHovered && width > 1201 && "translate-y-6",
            "duration-[650ms] ease-out",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default GoBackTopBar;
