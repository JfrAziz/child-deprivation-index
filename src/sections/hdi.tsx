import { usePopupStore } from "@/stores/map";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useMap } from "react-map-gl";

export const HDIExplanation = () => {
  const { map } = useMap();

  const [cardEl, entry] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      usePopupStore.setState({ active: false });

      map?.flyTo({
        center: [114.61831, -5.84445],
        zoom: 1,
        bearing: 0,
        pitch: 0,
      });
    }
  }, [entry, map]);

  return (
    <section className="w-full min-h-svh flex flex-row items-center container m-auto">
      <div
        ref={cardEl}
        className="bg-background rounded-sm border border-border max-w-96 p-4"
      >
        <p>
          The development of Machine Learning and Utilization of Satellite Image
          Data Makes it possible to find child deprivation in the Province of
          D.I Yogyakarta and other regions in Java at the level of estimating
          the one-kilometer square.
        </p>
      </div>
    </section>
  );
};
