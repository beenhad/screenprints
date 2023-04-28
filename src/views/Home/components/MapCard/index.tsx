/* eslint-disable @next/next/no-img-element */
import useIsHovered from "@/hooks/useIsHovered";
import { cx } from "@/utils";
import { motion } from "framer-motion";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVlbmhhZCIsImEiOiJjbGYxZjQ5eGwwN3NjM3hsaGkwOHlyZ2w4In0.Anz4we9n6FOKnF_iYNuOdw";

const MapComponent = ({ zoom }: { zoom: [number] }) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/beenhad/clf1fk7i4008w01nsvtwxvo6e",
      center: [33.812538, -84.358459].reverse() as any,
      zoom: zoom[0],
      fadeDuration: 100,
    });

    mapRef.current = map;

    let intervalId: any;

    intervalId = setInterval(() => {
      map.resize();
    }, 150);

    return () => {
      map.remove();
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mapRef.current?.zoomTo(zoom[0]);
  }, [zoom]);

  return (
    <>
      <div style={{ width: "100%", height: "100%" }} id="map"></div>
    </>
  );
};

const MapCard = () => {
  const [zoom, setZoom] = useState(9);
  const { isHovered, handlers } = useIsHovered();

  const minZoom = 3;
  const maxZoom = 9;
  const zoomValue = 3;

  return (
    <div className="relative p-0 __card group" {...handlers}>
      <div className="absolute inset-0 rounded-32px shadow-card-inset z-10 pointer-events-none"></div>

      <div className="scale-[0.987] w-full h-full rounded-[31px] relative overflow-hidden">
        <MapComponent zoom={[zoom]} />
      </div>

      <div className="absolute inset-0  flex items-end justify-between p-[14px]">
        <div className="absolute duration-300 delay-[150ms] group-hover:scale-110 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-24 aspect-square border-4 border-white/25 bg-[#30363D]/50 rounded-full flex items-center justify-center">
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
            <img
              src="/img/emoji.jpg"
              className="w-8 rounded-full overflow-hidden"
              alt=""
            />
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
