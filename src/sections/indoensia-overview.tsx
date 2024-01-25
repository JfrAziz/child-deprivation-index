import { useEffect } from "react";
import { useMap } from "react-map-gl";
import { useLayerStyle } from "@/stores/map";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const IndonesiaOverview = () => {
  const { map } = useMap();

  const [cardEl, entry] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      map?.flyTo({
        duration: 3000,
        center: [118, 0],
        zoom: 4,
        pitch: 0.0,
        bearing: 0.0,
      });

      useLayerStyle.setState((state) => ({
        "indonesia-province": {
          ...state["indonesia-province"],
          "fill-opacity": 0.9,
          "fill-color": "#FF0",
          "fill-outline-color": "#000",
        },
      }));
    }
  }, [entry, map]);

  return (
    <section className={`h-svh container m-auto flex items-center flex-row`}>
      <div ref={cardEl} className="bg-white w-96 border p-4">
        <div className="tetx-lg">
          Poverty data are generally presented at the district/city level and
          are not sensitive to the diversity of regions in 34 provinces.
        </div>
      </div>
    </section>
  );
};

export const JavaPovertyOverview = () => {
  const { map } = useMap();

  const [cardEl, entry] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      map?.flyTo({
        duration: 1000,
        center: [110, -6],
        zoom: 6,
        pitch: 0.0,
        bearing: 0.0,
      });

      useLayerStyle.setState((state) => ({
        "indonesia-province": {
          ...state["indonesia-province"],
          "fill-opacity": 1,
          "fill-color": [
            "case",
            ["==", ["get", "ADM1_PCODE"], "ID36"], // banten
            "#00F",
            ["==", ["get", "ADM1_PCODE"], "ID32"], // Jawa barat
            "#00E",
            ["==", ["get", "ADM1_PCODE"], "ID31"], // DKI
            "#00D",
            ["==", ["get", "ADM1_PCODE"], "ID33"], // Jawa Tengah
            "#00C",
            ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
            "#00B",
            ["==", ["get", "ADM1_PCODE"], "ID35"], // Jawa Timur
            "#00A",
            "#FFF",
          ],
        },
        "fill-color-transition": { duration: 2000 },
      }));
    }
  }, [entry, map]);

  return (
    <section className={`h-svh container m-auto flex items-center justify-end flex-row`}>
      <div ref={cardEl} className="bg-white w-96 border p-4">
        <div className="tetx-lg">
          Java Island as a place for 56.1 % of Indonesia's population has six
          provinces, one of which is D.I Yogyakarta Province.
        </div>
      </div>
    </section>
  );
};
