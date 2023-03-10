import { motion } from "framer-motion";
import { ReactNode } from "react";

const InAnimation = ({
  children,
  pageKey,
}: {
  children: ReactNode;
  pageKey: string;
}) => {
  return (
    <>
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default InAnimation;
