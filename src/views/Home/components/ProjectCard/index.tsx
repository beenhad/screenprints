/* eslint-disable jsx-a11y/alt-text */
import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import useIsHovered from "@/hooks/useIsHovered";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

type ProjectProps = {
  img: ImageProps;
  link: {
    text: string;
    url: string;
  };
};
const Project = ({ img, link }: ProjectProps) => {
  const { isHovered, handlers } = useIsHovered();
  return (
    <div {...handlers} className="__card p-[2px] relative group">
      <div className="rounded-[30.5px] h-full overflow-hidden flex items-center justify-end">
        <Image {...img} className="mix-blend-luminosity" />
      </div>

      <motion.div
        animate={{
          width: isHovered ? "auto" : 36,
        }}
        className="absolute bottom-[14px] left-[14px] z-10"
        // style={{display: 'inb'}}
        transition={{ duration: 0.35 }}
      >
        <Link
          href={link.url}
          className="flex items-center w-full overflow-hidden __btn"
        >
          <motion.p
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -15 }}
            transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
            className="whitespace-nowrap mr-[22px]"
          >
            {link.text}
          </motion.p>
          <div className="absolute right-0 flex items-center justify-center w-9 h-9 shrink-0">
            <ArrowTopRight />
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Project;
