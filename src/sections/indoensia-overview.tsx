import { useEffect } from "react";
import { useMap } from "react-map-gl";
import { useLayerStyle, usePopupStore } from "@/stores/map";
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
          "fill-color-transition": { duration: 2000 },
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
          "fill-outline-color": [
            "case",
            ["==", ["get", "ADM1_PCODE"], "ID36"], // banten
            "#F00",
            ["==", ["get", "ADM1_PCODE"], "ID32"], // Jawa barat
            "#F00",
            ["==", ["get", "ADM1_PCODE"], "ID31"], // DKI
            "#F00",
            ["==", ["get", "ADM1_PCODE"], "ID33"], // Jawa Tengah
            "#F00",
            ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
            "#F00",
            ["==", ["get", "ADM1_PCODE"], "ID35"], // Jawa Timur
            "#F00",
            "#FFF",
          ],
        },
      }));

      usePopupStore.setState({
        active: false,
      });
    }
  }, [entry, map]);

  return (
    <section
      className={`h-svh container m-auto flex items-center justify-end flex-row`}
    >
      <div ref={cardEl} className="bg-white w-96 border p-4">
        <div className="tetx-lg">
          Java Island as a place for 56.1 % of Indonesia's population has six
          provinces, one of which is D.I Yogyakarta Province.
        </div>
      </div>
    </section>
  );
};

export const JavaHDI = () => {
  const { map } = useMap();

  const [cardEl, entry] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      map?.flyTo({
        duration: 1000,
        center: [108.7713, -7.04617],
        zoom: 6.99,
        pitch: 45.53,
        bearing: 35.98,
      });

      useLayerStyle.setState((state) => ({
        "indonesia-province": {
          ...state["indonesia-province"],
          "fill-color-transition": { duration: 2000 },
          "fill-opacity": 1,
          "fill-outline-color": "#000",
          "fill-color": [
            "case",
            ["==", ["get", "ADM1_PCODE"], "ID31"], // DKI
            "#00D",
            ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
            "#00A",
            "#FFF",
          ],
        },
      }));

      usePopupStore.setState({
        active: true,
        numberPopups: [
          {
            position: "bottom",
            lng: 106.80903,
            lat: -6.21004,
            title: "DKI Jakarta",
            subtitle: "Human Development Index",
            value: 83.55,
          },
          {
            position: "top",
            lng: 110.3861,
            lat: -7.88402,
            title: "DI Yogyakarta",
            subtitle: "Human Development Index",
            value: 88.61,
          },
        ],
      });
    }
  }, [entry, map]);

  return (
    <section className={`h-svh container m-auto flex items-center flex-row`}>
      <div ref={cardEl} className="bg-white w-96 border p-4">
        <div className="tetx-lg">
          Province D.I Yogyakarta has the second highest human development index
          after the capital city of DKI Jakarta
        </div>
      </div>
    </section>
  );
};

export const JavaPoverty = () => {
  const { map } = useMap();

  const [cardEl, entry] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      map?.flyTo({
        duration: 1000,
        center: [108.87454, -6.8634],
        zoom: 7.13,
        pitch: 42.03,
        bearing: -19.22,
      });

      useLayerStyle.setState((state) => ({
        "indonesia-province": {
          ...state["indonesia-province"],
          "fill-opacity": 1,
          "fill-outline-color": "#000",
          "fill-color": [
            "case",
            ["==", ["get", "ADM1_PCODE"], "ID32"], // Jawa Barat
            "#00A",
            ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
            "#00B",
            "#FFF",
          ],
        },
      }));

      usePopupStore.setState({
        active: true,
        numberPopups: [
          {
            position: "bottom",
            lng: 107.5539,
            lat: -6.92971,
            title: "West Java",
            subtitle: "Poverty Rate",
            value: "7.26 %",
          },
          {
            position: "bottom",
            lng: 110.3861,
            lat: -7.88402,
            title: "DI Yogyakarta",
            subtitle: "Poverty Rate",
            value: "11.23 %",
          },
        ],
      });
    }
  }, [entry, map]);

  return (
    <section
      className={`h-svh container m-auto flex items-center justify-end flex-row`}
    >
      <div ref={cardEl} className="bg-white w-96 border p-4">
        <div className="tetx-lg">
          but, Yogyakarta has the third highest poverty level after West Java
          Province on Java. In addition, as many as 47 percent of children
          experience deprivation in two dimensions of non-income poverty or more
          in 2015.
        </div>
      </div>
    </section>
  );
};
