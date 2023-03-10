import { CollapsibleProps } from "@/config/types";
import { AnimatePresence, motion } from "framer-motion";
import { HiMinus, HiPlus } from "react-icons/hi";

const Collapsible = ({ title, body, isActive, onToggle }: CollapsibleProps) => {
  return (
    <div className="mb-[30px]">
      <button
        onClick={onToggle}
        className="__text_sm text-left inline-flex items-center gap-3 px-[18px] pt-2.5 pb-[11px] rounded-full shadow-card bg-dark-100 outline-none focus-visible:shadow-card-hover duration-200 hover:bg-white/5"
      >
        {title}

        <AnimatePresence>
          {!isActive ? <HiPlus size={14} /> : <HiMinus size={14} />}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            animate={{ height: "auto" }}
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <p className="__text_base mt-9  mb-[74px]">{body}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Collapsible;
