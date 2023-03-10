import { cx } from "@/utils";
import TabHeader from "@/views/Home/components/TabHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SiteLogo from "../SiteLogo";

const Header = () => {
  const router = useRouter();
  const [showHeader, setShowHeader] = useState(router.pathname === "/");

  useEffect(() => {
    let timeout1: any;
    if (router.pathname !== "/") {
      timeout1 = setTimeout(() => {
        setShowHeader(false);
      }, 700);
      return;
    }

    const timeout = setTimeout(() => {
      setShowHeader(true);
    }, 700);

    return () => {
      clearInterval(timeout);
      clearInterval(timeout1);
    };
  }, [router.pathname]);

  if (!showHeader) return null;
  return (
    <motion.header
      exit={{ opacity: 1, y: -20 }}
      transition={{ duration: 0.6 }}
      className={cx(
        "pb-2 md:pb-12 pt-12 px-[3.5vw] flex flex-col md:flex-row md:justify-between gap-y-5 items-center relative",
      )}
    >
      {/** Logo --Start-- */}
      <div className="max-w-[208px]">
        <SiteLogo />
      </div>
      {/** Logo --End-- */}

      <div className="md:absolute top-1/2 md:-translate-y-1/2 left-1/2 md:-translate-x-1/2">
        <TabHeader />
      </div>

      <Link
        className="__text_sm hover:underline"
        // hidden md:block
        href={"/get-a-quote"}
      >
        Contact
      </Link>
    </motion.header>
  );
};

export default Header;
