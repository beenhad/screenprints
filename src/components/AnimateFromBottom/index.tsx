import { CSSProperties, ReactNode } from "react";

const AnimateFromBottom = ({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div style={style} className="animate_slide_up">
      {children}
    </div>
  );
};

export default AnimateFromBottom;
