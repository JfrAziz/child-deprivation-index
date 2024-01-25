import { useEffect } from "react";
import { useMap } from "react-map-gl";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const Hero = () => {
  const { map } = useMap();

  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
    root: null,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      map?.flyTo({
        duration: 3000,
        center: [96, 30],
        zoom: 3,
        pitch: 0.0,
        bearing: 0.0,
      });
    }
  }, [entry, map]);

  return (
    <section className="w-full">
      <div className="h-svh bg-white">hero 1</div>
      <div className="h-svh bg-orange-400">hero 2</div>
      <div className="h-svh bg-sky-300">hero 3</div>
      <div className="h-svh bg-transparent flex items-center justify-center">
        <div ref={ref} className="bg-black text-white w-96 h-48">
          Just example hero
        </div>
      </div>
    </section>
  );
};
