import { cx } from "@/utils";
import TabHeader from "@/views/Home/components/TabHeader";
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
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className={cx(
        "animate_fade_up pb-2 md:pb-12 pt-12 px-[3.5vw] flex flex-col md:flex-row md:justify-between gap-y-5 items-center relative",
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

      <Link className="__text_sm hidden md:block" href={"https://cal.com/screenprints/schedule-a-meeting?duration=15"}>
        Contact
      </Link>
    </div>
  );
};

export default Header;
