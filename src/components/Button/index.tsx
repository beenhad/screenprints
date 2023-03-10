import { useState } from "react";

const Button = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    // <motion.button
    //   style={{
    //     // width: 36,
    //     height: 36,
    //   }}
    //   initial={{ width: 36 }}
    //   animate={{ width: 120 }}
    //   transition={{ type: "keyframes" }}
    //   onMouseOver={() => setIsHover(true)}
    //   onMouseOut={() => setIsHover(false)}
    // >
    //   <div className="rounded-full h-full flex px-4 whitespace-nowrap hover:shadow-card-hover overflow-hidden items-center justify-center gap-1.5 shadow-card-inset">
    //     <DD />
    //     {/* <p className="__text_sm"> Read more</p> */}
    //   </div>
    // </motion.button>

    <button
      style={{
        transition: "0.5s",
        transitionTimingFunction: "cubic-bezier(.22,.38,.96,.7)",
      }}
      className="rounded-full h-9 w-9 hover:w-[110px] flex px-4 whitespace-nowrap overflow-hidden items-center justify-center gap-1.5 shadow-card-inset"
    ></button>
  );
};

export default Button;

const DD = () => (
  <svg
    id="Arrow.7"
    xmlns="http://www.w3.org/2000/svg"
    width="18.256"
    height="18.256"
    viewBox="0 0 18.256 18.256"
    style={{ transition: ".3s" }}
  >
    <g id="Group_7" data-name="Group 7" transform="translate(5.363 5.325)">
      <path
        id="Path_10"
        data-name="Path 10"
        d="M14.581,7.05,7.05,14.581"
        transform="translate(-7.05 -7.012)"
        fill="none"
        stroke="#F0F2F8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        id="Path_11"
        data-name="Path 11"
        d="M10,7l5.287.037.038,5.287"
        transform="translate(-7.756 -7)"
        fill="none"
        stroke="#F0F2F8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </g>
    <path
      id="Path_12"
      data-name="Path 12"
      d="M0,0H18.256V18.256H0Z"
      fill="none"
    />
  </svg>
);
