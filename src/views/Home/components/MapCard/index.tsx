import SmileIcon from "@/components/Icons/SmileIcon";
import useIsHovered from "@/hooks/useIsHovered";
import { cx } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import ReactMapboxGl from "react-mapbox-gl";
import { useFirstMountState, useWindowSize } from "react-use";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYmVlbmhhZCIsImEiOiJjbGYxZjQ5eGwwN3NjM3hsaGkwOHlyZ2w4In0.Anz4we9n6FOKnF_iYNuOdw",
});

const MapCard = () => {
  const [state, setState] = useState(1);
  const [zoom, setZoom] = useState(8);
  const { width } = useWindowSize();
  const isFirstMount = useFirstMountState();
  const { isHovered, handlers } = useIsHovered();

  const minZoom = 2;
  const maxZoom = 8;
  const zoomValue = 3;

  useEffect(() => {
    console.log("first");
    if (isFirstMount) return;

    let timeout: any;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      setState((prev) => prev + 1);
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <div className="relative p-0 __card group" {...handlers}>
      <AnimatePresence>
        <motion.div
          key={state}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 0.5 }}
          className="scale-[0.987] w-full h-full rounded-[31px] overflow-hidden"
        >
          <Map
            style="mapbox://styles/beenhad/clf1fk7i4008w01nsvtwxvo6e"
            containerStyle={{
              width: "100%",
              height: "100%",
            }}
            zoom={[zoom]}
            center={[33.812538, -84.358459].reverse() as [number, number]}
          >
            {/* <Layer>
              <Feature
                coordinates={[33.812538, -84.358459].reverse()}
              />
            </Layer> */}
          </Map>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0  flex items-end justify-between p-[14px]">
        <div className="absolute duration-300 delay-[150ms] group-hover:scale-110 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-24 aspect-square border-4 border-white/25 bg-[#30363D]/50 rounded-full mix-blend-luminosity flex items-center justify-center">
          <motion.div
            animate={{
              rotate: isHovered ? [0, 25, 0, -25, 0] : 0,
              scale: isHovered ? [1, 1.3, 1, 1.3, 1] : 1,
              transition: {
                ease: "easeInOut",
                duration: isHovered ? 1.9 : 0.5,
                repeat: isHovered ? Infinity : 0,
              },
            }}
          >
            <SmileIcon />
          </motion.div>
        </div>
        <button
          className={cx(
            "__btn_rounded",
            zoom === minZoom && "opacity-0 scale-50 delay-[1100ms]",
          )}
          disabled={zoom === minZoom}
          onClick={() => setZoom(zoom - zoomValue)}
        >
          <HiMinus size={14} />
        </button>
        <button
          className={cx(
            "__btn_rounded",
            zoom === maxZoom && "opacity-0 scale-50 delay-[1100ms]",
          )}
          disabled={zoom === maxZoom}
          onClick={() => setZoom(zoom + zoomValue)}
        >
          <HiPlus size={14} />
        </button>
      </div>
    </div>
  );
};

export default MapCard;

// 61.909627026473245, 24.665232598069526
