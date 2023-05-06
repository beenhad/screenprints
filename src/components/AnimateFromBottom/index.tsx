import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

const AnimateFromBottom = ({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <motion.div
      initial={{ y: 35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateFromBottom;
