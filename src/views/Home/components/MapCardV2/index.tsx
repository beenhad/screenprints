import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVlbmhhZCIsImEiOiJjbGYxZjQ5eGwwN3NjM3hsaGkwOHlyZ2w4In0.Anz4we9n6FOKnF_iYNuOdw";

const MapCardV2 = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [toggleWidth, setToggleWidth] = useState(300);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/beenhad/clf1fk7i4008w01nsvtwxvo6e",
      center: [33.812538, -84.358459].reverse() as any,
      zoom: 9,
    });
    mapRef.current = map;

    window.addEventListener("resize", () => {
      //   map.resize();
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <div
        style={{ width: toggleWidth }}
        className="aspect-video lg:aspect-square"
        id="map"
      ></div>

      <div className="bg-black mt-4">
        <button onClick={() => mapRef.current?.zoomTo(8)}>-</button>
        <br />
        <button onClick={() => mapRef.current?.zoomTo(10)}>+</button>

        <button
          onClick={() => {
            setToggleWidth((p) => (p === 300 ? 200 : 300));
          }}
        >
          Width
        </button>
      </div>
    </div>
  );
};

export default MapCardV2;
