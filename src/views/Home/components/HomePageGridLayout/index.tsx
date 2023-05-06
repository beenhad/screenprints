import useEnableGridLayoutTransition from "@/hooks/useEnableGridLayoutTransition";
import useHomeGridLayout from "@/hooks/useHomeGridLayout";
import useIsLayoutDraggable from "@/hooks/useIsLayoutDraggable";
import { cx } from "@/utils";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import BlankCatalog from "../BlankCatalog";
import LockedSwitchCard from "../LockedSwitchCard";
import ProjectCard from "../ProjectCard";
import TextCard from "../TextCard";
import TwitterCard from "../TwitterCard";

const MapCard = dynamic(() => import("../MapCard"), { ssr: false });

const ResponsiveGridLayout = WidthProvider(Responsive);

const cards = {
  a: (
    <TextCard
      button={{ text: "Our services", url: "/services" }}
      title="Merchandise and apparel printing"
      description="We simplify merchandise creation and deliver premium apparel items that resonate with clients."
    />
  ),
  b: <MapCard />,
  c: (
    <ProjectCard
      img={{
        src: "/img/t-shirt.png",
        width: 339,
        height: 697,
        alt: "tShirt",
      }}
      link={{
        text: "T-Shirt",
        url: "t-shirts",
      }}
    />
  ),
  d: <BlankCatalog />,
  e: <TwitterCard />,
  f: (
    <ProjectCard
      img={{
        src: "/img/hoodie.png",
        width: 280,
        height: 576,
        alt: "hoodie",
      }}
      link={{
        text: "Hoodie",
        url: "hoodies",
      }}
    />
  ),
  g: (
    <TextCard
      button={{ text: "Read more", url: "https://screenprints.xyz/faq" }}
      title="Have a question?"
      description="Check out answers to our most common questions, orders specifications and art requirements."
    />
  ),
  h: <LockedSwitchCard />,
  i: (
    <ProjectCard
      img={{
        src: "/img/hat.png",
        width: 539,
        height: 280,
        alt: "hat",
      }}
      link={{
        text: "Hat",
        url: "hats",
      }}
    />
  ),
  j: (
    <TextCard
      button={{
        text: "Get started",
        url: "https://screenprints.xyz/get-a-quote",
      }}
      title="Get a quote"
      description="Complete our order form and one of our account managers will reach out to you to confirm your total and gather remaining details."
    />
  ),
};

const HomePageGridLayout = () => {
  const { activeTab, rowHeight } = useHomeGridLayout();
  const ff = useRef<any>();

  useEffect(() => {
    // console.log(ff.current.updater.enqueueForceUpdate());
    console.log(ff.current);

    return () => {};
  }, []);

  useEnableGridLayoutTransition({
    wrapperClass: ".home_page_grid_layout",
  });

  const isDraggable = useIsLayoutDraggable();

  return (
    <div>
      <ResponsiveGridLayout
        ref={ff}
        className={cx(
          "container px-0 home_page_grid_layout disable_transition",
          !rowHeight && "opacity-0 pointer-events-none",
        )}
        layouts={activeTab.layout}
        breakpoints={{ lg: 1200, md: 799, xxs: 0 }}
        cols={{ lg: 4, md: 4, xxs: 2 }}
        isBounded
        rowHeight={rowHeight}
        margin={[16, 16]}
        isDraggable={isDraggable}
      >
        {["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].map((item) => (
          <div
            key={item}
            className={cx(
              "relative",
              activeTab.activeCards?.length > 0 &&
                !activeTab.activeCards?.includes(item) &&
                "opacity-25 pointer-events-none",
            )}
          >
            {/* <div className="absolute z-50 p-2 bg-red-500 top-4 left-4">
              {item}
            </div> */}
            {cards[item as never]}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default HomePageGridLayout;
