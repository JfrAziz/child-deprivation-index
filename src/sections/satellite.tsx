import { SectionCard, SectionWrapper } from "@/components/section-card";
import highestCdi from "@/data/three_highest_cdi.json";
import lowestCdi from "@/data/three_lowerst_cdi.json";
import { markersStore, useLayerStyle, usePopupStore } from "@/stores/map";
import * as turf from "@turf/turf";
import { Marker } from "mapbox-gl";

export const YogyakartaRegencies = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center justify-end"
      onSectionEnter={(map) => {
        clearMarkers();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");

        usePopupStore.setState({ active: false });

        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.6,
            "fill-color": "#c03831",
            "fill-outline-color": "#7f0000",
          },
        }));

        map?.flyTo({
          center: [110.61413, -7.7754],
          zoom: 9.2,
          bearing: 0,
          pitch: 0,
          duration: 2000,
        });
        7;
      }}
    >
      <SectionCard>
        <p>
          The development of machine learning and the utilization of satellite
          image data make it possible to find child deprivation in the province
          of D.I. Yogyakarta and other regions in Java at the level of
          estimating 1 km².
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const YogyakartaCDI = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center"
      onSectionEnter={(map) => {
        clearMarkers();
        usePopupStore.setState({ active: false });
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
        }));
        map?.moveLayer("cdi");
        map?.getMap().setLayoutProperty("cdi", "visibility", "visible");

        map?.flyTo({
          center: [110.22413, -7.7754],
          zoom: 9.2,
          bearing: 0,
          pitch: 0,
          duration: 2000,
        });
      }}
    >
      <SectionCard
        title={
          (
            <>
              Yogyakarta Province
              <br />
              Child Deprivation Index (CDI)
            </>
          ) as unknown as JSX.Element
        }
      >
        <p>
          The 1 km² area displayed illustrates children who are prioritized from
          access to education, health and economic facilities. In the Sleman
          Regency there are 3 grids that have the lowest percentage of children
          with the lowest supply of all provinces of Yogyakarta.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const YogyakartaCDIHighlight = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center"
      onSectionEnter={(map) => {
        clearMarkers();
        resetRouteStyles();

        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.1,
          },
        }));

        map?.moveLayer("cdi");
        map?.getMap().setLayoutProperty("cdi", "visibility", "visible");
        const lowestCdiType = lowestCdi as GeoJSON.FeatureCollection;
        const center = turf.center(lowestCdiType);
        map?.flyTo({
          center: [
            center.geometry.coordinates[0] - 0.02,
            center.geometry.coordinates[1],
          ],
          zoom: 12.9,
          bearing: 0,
          pitch: 0,
          duration: 2000,
        });
        // @ts-expect-error ignore klasterSd types
        const centers = lowestCdi.features.map((feature: GeoJSON.Feature) => {
          // @ts-expect-error ignore klasterSd types
          return turf.center(feature);
        });
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "top",
              lng: centers[0].geometry.coordinates[0],
              lat: centers[0].geometry.coordinates[1],
              title: "3rd",
              subtitle: (
                <>
                  <span className="text-xl font-black">Lowest CDI</span>
                </>
              ) as unknown as JSX.Element,
              value:
                lowestCdi.features[0].properties.child_pov.toFixed(2) + "%",
            },
            {
              pinPosition: "bottom",
              lng: centers[1].geometry.coordinates[0],
              lat: centers[1].geometry.coordinates[1],
              title: "2nd",
              subtitle: (
                <>
                  <span className="text-xl font-black">Lowest CDI</span>
                </>
              ) as unknown as JSX.Element,
              value:
                lowestCdi.features[1].properties.child_pov.toFixed(2) + "%",
            },
            {
              pinPosition: "top",
              lng: centers[2].geometry.coordinates[0],
              lat: centers[2].geometry.coordinates[1],
              title: "1st",
              subtitle: (
                <>
                  <span className="text-xl font-black">Lowest CDI</span>
                </>
              ) as unknown as JSX.Element,
              value:
                lowestCdi.features[2].properties.child_pov.toFixed(2) + "%",
            },
          ],
        });
      }}
    >
      <SectionCard title="Three Lowest CDI Percentage">
        <p>
          The three grids with the lowest percentage of children have values of
          9.57%–9.58% in Sleman Regency, Yogyakarta Province. Meanwhile, in
          2020, Sleman Regency had a poverty rate of 8.12% in 2020.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const PondokJayaPermai = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center"
      onSectionEnter={(map) => {
        clearMarkers();
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.1,
          },
        }));
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "bottom",
              lng: 110.45347,
              lat: -7.69632,
              subtitle: (
                <div className="flex items-center justify-start gap-x-[0.9em] text-left ">
                  <span>
                    <img
                      alt="tag"
                      className="h-[clamp(1rem,3vw,2rem)]"
                      src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                    />
                  </span>
                  <h1 className="text-lg text-base-300 font-black leading-[1.1]">
                    Pondok Jaya <br /> Permai Cluster
                  </h1>
                </div>
              ) as unknown as JSX.Element,
              value: "",
            },
          ],
        });
        map?.moveLayer("cdi");
        map?.getMap().setLayoutProperty("cdi", "visibility", "visible");
        map?.flyTo({
          center: [110.4523693, -7.6965357],
          zoom: 16,
          bearing: -60,
          pitch: 0,
          duration: 2000,
        });
      }}
    >
      <SectionCard title="Pondok Jaya Permai Cluster">
        <p>
          Pondok Jaya Permai Cluster is the grid with the lowest percentage of
          deprived children in D.I Yogyakarta Province at 9.8 percent. As many
          as 9 to 10 out of 100 children aged 0-17 years in the grid experience
          deprivation of access to education, health and economic facilities.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const KlasterSekolah = ({
  klasterSd,
  klasterSmp,
  klasterSma,
}: {
  klasterSd: GeoJSON.Feature;
  klasterSmp: GeoJSON.Feature;
  klasterSma: GeoJSON.Feature;
}) => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center justify-end"
      onSectionEnter={async (map) => {
        clearMarkers();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "bottom",
              lng: 110.45347,
              lat: -7.69632,
              subtitle: (
                <div className="flex items-center justify-start gap-x-[0.9em] text-left ">
                  <span>
                    <img
                      alt="tag"
                      className="h-[clamp(1rem,3vw,2rem)]"
                      src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                    />
                  </span>
                  <h1 className="text-lg text-base-300 font-black leading-[1.1]">
                    Pondok Jaya <br /> Permai Cluster
                  </h1>
                </div>
              ) as unknown as JSX.Element,
              value: "",
            },
          ],
        });
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 1 },
          "route-klaster-sd": {
            ...state["route-klaster-sd"],
            "line-opacity": 1,
          },
          "klaster-smp": { ...state["klaster-smp"], "line-opacity": 1 },
          "route-klaster-smp": {
            ...state["route-klaster-smp"],
            "line-opacity": 1,
          },
          "klaster-sma": { ...state["klaster-sma"], "line-opacity": 1 },
          "route-klaster-sma": {
            ...state["route-klaster-sma"],
            "line-opacity": 1,
          },
        }));
        map?.flyTo({
          center: [110.4548634, -7.6981721],
          zoom: 15.6,
          bearing: -20,
          pitch: 60,
          duration: 3000,
        });

        let start = 0,
          index = 0;
        const animationDuration = 5000;
        const markers: Marker[] = [];
        const pathDistances: number[] = [];
        for (const klasterSekolah of [klasterSd, klasterSmp, klasterSma]) {
          // @ts-expect-error ignore klasterSd types
          const pinRoute = klasterSekolah.geometry.coordinates;
          // @ts-expect-error ignore klasterSd types
          pathDistances.push(turf.lineDistance(klasterSekolah));
          const markerIconElement = document.createElement("div");
          markerIconElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/student-elementary.png")'
              : index == 1
              ? 'url("/images/poverty/student-junior-high.png")'
              : 'url("/images/poverty/student-senior-high.png")';
          markerIconElement.style.backgroundSize = "cover";
          markerIconElement.style.width = "70px";
          markerIconElement.style.height = "70px";
          markerIconElement.style.cursor = "pointer";
          const markerIcon = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerIconElement,
          })
            .setLngLat(pinRoute[0])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerIcon);

          const markerTargetElement = document.createElement("div");
          markerTargetElement.style.backgroundSize = "cover";
          markerTargetElement.style.width = "70px";
          markerTargetElement.style.height = "70px";
          markerTargetElement.style.borderRadius = "50%";
          markerTargetElement.style.cursor = "pointer";
          markerTargetElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/elementary-school.png")'
              : index == 1
              ? 'url("/images/poverty/junior-high-school.png")'
              : 'url("/images/poverty/senior-high-school.png")';
          const markerTarget = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerTargetElement,
          })
            .setLngLat(pinRoute[pinRoute.length - 1])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerTarget);
          index++;
        }
        markersStore.setState({ markers });

        function frame(time: number) {
          if (!start) start = time;
          const animationPhase = (time - start) / animationDuration;
          if (animationPhase > 1) {
            return;
          }

          [klasterSd, klasterSmp, klasterSma].forEach(
            async (klaster, index) => {
              const alongPath = turf.along(
                // @ts-expect-error ignore klaster types
                klaster,
                pathDistances[index] * animationPhase
              ).geometry.coordinates;
              const lngLat = {
                lng: alongPath[0],
                lat: alongPath[1],
              };
              markers[index + 1 * index].setLngLat(lngLat);
              let paintProperty: string;
              switch (index) {
                case 1:
                  paintProperty = "route-klaster-smp";
                  break;
                case 2:
                  paintProperty = "route-klaster-sma";
                  break;
                default:
                  paintProperty = "route-klaster-sd";
                  break;
              }
              map
                ?.getMap()
                .setPaintProperty(paintProperty, "line-gradient", [
                  "step",
                  ["line-progress"],
                  "#fbbf24",
                  animationPhase,
                  "#fffbeb",
                ]);
            }
          );
          requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      }}
    >
      <SectionCard title="Access to Educational Facilities">
        <p>
          It takes 16 minutes to elementary school (Sd n Ngemplak 1), 18 minutes
          to junior high school and (SMP Negeri 1 Ngemplak) high school (SMA
          Negeri 1 Ngemplak) on foot or 7 minutes by car with a distance of 1.4
          - 3 km.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const KlasterKesehatan = ({
  klasterApotek,
  klasterPuskesmas,
  klasterRumahSakit,
}: {
  klasterApotek: GeoJSON.Feature;
  klasterPuskesmas: GeoJSON.Feature;
  klasterRumahSakit: GeoJSON.Feature;
}) => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center justify-end"
      onSectionEnter={async (map) => {
        clearMarkers();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "bottom",
              lng: 110.45347,
              lat: -7.69632,
              subtitle: (
                <div className="flex items-center justify-start gap-x-[0.9em] text-left ">
                  <span>
                    <img
                      alt="tag"
                      className="h-[clamp(1rem,3vw,2rem)]"
                      src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                    />
                  </span>
                  <h1 className="text-lg text-base-300 font-black leading-[1.1]">
                    Pondok Jaya <br /> Permai Cluster
                  </h1>
                </div>
              ) as unknown as JSX.Element,
              value: "",
            },
          ],
        });
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "klaster-apotek": {
            ...state["klaster-apotek"],
            "line-opacity": 1,
          },
          "route-klaster-apotek": {
            ...state["route-klaster-apotek"],
            "line-opacity": 1,
          },
          "klaster-puskesmas": {
            ...state["klaster-puskesmas"],
            "line-opacity": 1,
          },
          "route-klaster-puskesmas": {
            ...state["route-klaster-puskesmas"],
            "line-opacity": 1,
          },
          "klaster-rumah-sakit": {
            ...state["klaster-rumah-sakit"],
            "line-opacity": 1,
          },
          "route-klaster-rumah-sakit": {
            ...state["route-klaster-rumah-sakit"],
            "line-opacity": 1,
          },
        }));
        map?.flyTo({
          center: [110.4572711, -7.6997777],
          zoom: 14.5,
          bearing: -40,
          pitch: 60,
          duration: 3000,
        });

        let start = 0,
          index = 0;
        const animationDuration = 5000;
        const markers: Marker[] = [];
        const pathDistances: number[] = [];
        for (const klasterKesehatan of [
          klasterApotek,
          klasterPuskesmas,
          klasterRumahSakit,
        ]) {
          // @ts-expect-error ignore klasterSd types
          const pinRoute = klasterKesehatan.geometry.coordinates;
          // @ts-expect-error ignore klasterSd types
          pathDistances.push(turf.lineDistance(klasterKesehatan));
          const markerIconElement = document.createElement("div");
          markerIconElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/person-1.png")'
              : index == 1
              ? 'url("/images/poverty/person-2.png")'
              : 'url("/images/poverty/person-3.png")';
          markerIconElement.style.backgroundSize = "cover";
          markerIconElement.style.width = "50px";
          markerIconElement.style.height = "50px";
          markerIconElement.style.borderRadius = "50%";
          markerIconElement.style.cursor = "pointer";
          const markerIcon = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerIconElement,
          })
            .setLngLat(pinRoute[0])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerIcon);

          const markerTargetElement = document.createElement("div");
          markerTargetElement.style.backgroundSize = "cover";
          markerTargetElement.style.width = "100px";
          markerTargetElement.style.height = "100px";
          markerTargetElement.style.borderRadius = "50%";
          markerTargetElement.style.cursor = "pointer";
          markerTargetElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/pharmacy.png")'
              : index == 1
              ? 'url("/images/poverty/health-center.png")'
              : 'url("/images/poverty/hospital.png")';
          const markerTarget = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerTargetElement,
          })
            .setLngLat(pinRoute[pinRoute.length - 1])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerTarget);
          index++;
        }
        markersStore.setState({ markers });

        function frame(time: number) {
          if (!start) start = time;
          const animationPhase = (time - start) / animationDuration;
          if (animationPhase > 1) {
            return;
          }

          [klasterApotek, klasterPuskesmas, klasterRumahSakit].forEach(
            (klaster, index) => {
              const alongPath = turf.along(
                // @ts-expect-error ignore klaster types
                klaster,
                pathDistances[index] * animationPhase
              ).geometry.coordinates;
              const lngLat = {
                lng: alongPath[0],
                lat: alongPath[1],
              };
              markers[index + 1 * index].setLngLat(lngLat);
              map
                ?.getMap()
                .setPaintProperty(
                  index == 0
                    ? "route-klaster-apotek"
                    : index == 1
                    ? "route-klaster-puskesmas"
                    : "route-klaster-rumah-sakit",
                  "line-gradient",
                  [
                    "step",
                    ["line-progress"],
                    "#fbbf24",
                    animationPhase,
                    "#fffbeb",
                  ]
                );
            }
          );
          window.requestAnimationFrame(frame);
        }
        window.requestAnimationFrame(frame);
      }}
    >
      <SectionCard title="Access to Health Facilities">
        <p>
          It takes 15 minutes to the pharmacy (Apotik Widigdo 3), 22 minutes to
          the health center (Puskesmas Ngemplak 2), 35 minutes to the hospital
          (Mitra Medika Hospital) on foot or 3-7 minutes by car with a distance
          of 1.4 - 2.8 km.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const KlasterEkonomi = ({
  klasterPasar,
  klasterBank,
  klasterTourism,
}: {
  klasterPasar: GeoJSON.Feature;
  klasterBank: GeoJSON.Feature;
  klasterTourism: GeoJSON.Feature;
}) => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center justify-end"
      onSectionEnter={async (map) => {
        clearMarkers();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "top",
              lng: 110.45347,
              lat: -7.69632,
              subtitle: (
                <div className="flex items-center justify-start gap-x-[0.9em] text-left ">
                  <span>
                    <img
                      alt="tag"
                      className="h-[clamp(1rem,3vw,2rem)]"
                      src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                    />
                  </span>
                  <h1 className="text-lg text-base-300 font-black leading-[1.1]">
                    Pondok Jaya <br /> Permai Cluster
                  </h1>
                </div>
              ) as unknown as JSX.Element,
              value: "",
            },
          ],
        });
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "klaster-bank": { ...state["klaster-bank"], "line-opacity": 1 },
          "route-klaster-bank": {
            ...state["route-klaster-bank"],
            "line-opacity": 1,
          },
          "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 1 },
          "route-klaster-tourism": {
            ...state["route-klaster-tourism"],
            "line-opacity": 1,
          },
          "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 1 },
          "route-klaster-pasar": {
            ...state["route-klaster-pasar"],
            "line-opacity": 1,
          },
        }));
        map?.flyTo({
          center: [110.4533748, -7.6958745],
          zoom: 16.9,
          bearing: -30,
          pitch: 30,
          duration: 2000,
        });

        let start = 0,
          index = 0;
        const animationDuration = 5000;
        const markers: Marker[] = [];
        const pathDistances: number[] = [];
        for (const klasterEkonomi of [
          klasterPasar,
          klasterBank,
          klasterTourism,
        ]) {
          // @ts-expect-error ignore klasterSd types
          const pinRoute = klasterEkonomi.geometry.coordinates;
          // @ts-expect-error ignore klasterSd types
          pathDistances.push(turf.lineDistance(klasterEkonomi));
          const markerIconElement = document.createElement("div");
          markerIconElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/person-1.png")'
              : index == 1
              ? 'url("/images/poverty/person-2.png")'
              : 'url("/images/poverty/person-3.png")';
          markerIconElement.style.backgroundSize = "cover";
          markerIconElement.style.width = "50px";
          markerIconElement.style.height = "50px";
          markerIconElement.style.borderRadius = "50%";
          markerIconElement.style.cursor = "pointer";
          const markerIcon = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerIconElement,
          })
            .setLngLat(pinRoute[0])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerIcon);

          const markerTargetElement = document.createElement("div");
          markerTargetElement.style.backgroundSize = "cover";
          markerTargetElement.style.width = "100px";
          markerTargetElement.style.height = "100px";
          // markerTargetElement.style.borderRadius = "50%";
          markerTargetElement.style.cursor = "pointer";
          markerTargetElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/market.png")'
              : index == 1
              ? 'url("/images/poverty/bank.png")'
              : 'url("/images/poverty/tourism-site-2.png")';
          const markerTarget = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerTargetElement,
          })
            .setLngLat(pinRoute[pinRoute.length - 1])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerTarget);
          index++;
        }
        markersStore.setState({ markers });

        function frame(time: number) {
          if (!start) start = time;
          const animationPhase = (time - start) / animationDuration;
          if (animationPhase > 1) {
            return;
          }

          [klasterPasar, klasterBank, klasterTourism].forEach(
            (klaster, index) => {
              const alongPath = turf.along(
                // @ts-expect-error ignore klaster types
                klaster,
                pathDistances[index] * animationPhase
              ).geometry.coordinates;
              const lngLat = {
                lng: alongPath[0],
                lat: alongPath[1],
              };
              markers[index + 1 * index].setLngLat(lngLat);
              map
                ?.getMap()
                .setPaintProperty(
                  index == 0
                    ? "route-klaster-pasar"
                    : index == 1
                    ? "route-klaster-bank"
                    : "route-klaster-tourism",
                  "line-gradient",
                  [
                    "step",
                    ["line-progress"],
                    "#fbbf24",
                    animationPhase,
                    "#fffbeb",
                  ]
                );
            }
          );
          window.requestAnimationFrame(frame);
        }
        window.requestAnimationFrame(frame);
      }}
    >
      <SectionCard title="Access to Economic Facilities">
        <p>
          It takes 7 minutes to the market (Saparan Ki Ageng Wonolelo
          Traditional Festival Night Market (550m) 2 minutes), 1 minute to the
          financial counter (mandiri bank partner (Rpk Arum Sari) ), 3 minutes
          to entertainment facilities (Pondok Wonolelo Tourism Village) on foot
          or 1 minute by car with a distance of 280-550 m.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const YogyakartaCDIHighlightHighest = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center"
      onSectionEnter={(map) => {
        clearMarkers();
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.1,
          },
        }));

        map?.moveLayer("cdi");
        map?.getMap().setLayoutProperty("cdi", "visibility", "visible");
        const highestCdiType = highestCdi as GeoJSON.FeatureCollection;
        const center = turf.center(highestCdiType);
        map?.flyTo({
          center: [
            center.geometry.coordinates[0] - 0.09,
            center.geometry.coordinates[1],
          ],
          zoom: 11,
          bearing: 0,
          pitch: 0,
        });
        // @ts-expect-error ignore dusunSd types
        const centers = highestCdi.features.map((feature: GeoJSON.Feature) => {
          // @ts-expect-error ignore dusunSd types
          return turf.center(feature);
        });
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "top",
              lng: centers[0].geometry.coordinates[0],
              lat: centers[0].geometry.coordinates[1],
              title: "3rd",
              subtitle: (
                <>
                  <span className="text-xl font-black">Highest CDI</span>
                </>
              ) as unknown as JSX.Element,
              value:
                highestCdi.features[0].properties.child_pov.toFixed(2) + "%",
            },
            {
              pinPosition: "bottom",
              lng: centers[1].geometry.coordinates[0],
              lat: centers[1].geometry.coordinates[1],
              title: "2nd",
              subtitle: (
                <>
                  <span className="text-xl font-black">Highest CDI</span>
                </>
              ) as unknown as JSX.Element,
              value:
                highestCdi.features[1].properties.child_pov.toFixed(2) + "%",
            },
            {
              pinPosition: "top",
              lng: centers[2].geometry.coordinates[0],
              lat: centers[2].geometry.coordinates[1],
              title: "1st",
              subtitle: (
                <>
                  <span className="text-xl font-black">HIghest CDI</span>
                </>
              ) as unknown as JSX.Element,
              value:
                highestCdi.features[2].properties.child_pov.toFixed(2) + "%",
            },
          ],
        });
      }}
    >
      <SectionCard title="Three Highest CDI Percentage">
        <p>
          The three grids with the highest percentage of children with the
          highest leadership at 20.1 - 20.3% in Gunungkidul Regency, Yogyakarta
          Province. Meanwhile, in 2020, Gunungkidul Regency had a poverty rate
          of 17.07% in 2020.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const DusunSureng = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center"
      onSectionEnter={(map) => {
        clearMarkers();
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.1,
          },
        }));
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "top",
              lng: 110.66206,
              lat: -8.15249,
              subtitle: (
                <div className="flex items-center justify-start gap-x-[0.9em] text-left ">
                  <span>
                    <img
                      alt="tag"
                      className="h-[clamp(1rem,3vw,2rem)]"
                      src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                    />
                  </span>
                  <h1 className="text-lg text-base-300 font-black leading-[1.1]">
                    Dusun Sureng 2
                  </h1>
                </div>
              ) as unknown as JSX.Element,
              value: "",
            },
          ],
        });
        map?.moveLayer("cdi");
        map?.getMap().setLayoutProperty("cdi", "visibility", "visible");
        map?.flyTo({
          center: [110.66206, -8.15249],
          zoom: 16,
          bearing: 0,
          pitch: 0,
          duration: 2000,
        });
      }}
    >
      <SectionCard title="Dusun Sureng 2">
        <p>
          Dusun Sureng 2 is the grid with the highest percentage of deprived
          children in D.I Yogyakarta Province at 20.3 percent. As many as 20 out
          of 100 children aged 0-17 years experience deprivation of access to
          educational, health and economic facilities.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const DusunSekolah = ({
  dusunSd,
  dusunSmp,
  dusunSma,
}: {
  dusunSd: GeoJSON.Feature;
  dusunSmp: GeoJSON.Feature;
  dusunSma: GeoJSON.Feature;
}) => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center justify-start"
      onSectionEnter={async (map) => {
        clearMarkers();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "top",
              lng: 110.66206,
              lat: -8.15249,
              subtitle: (
                <div className="flex items-center justify-start gap-x-[0.9em] text-left ">
                  <span>
                    <img
                      alt="tag"
                      className="h-[clamp(1rem,3vw,2rem)]"
                      src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                    />
                  </span>
                  <h1 className="text-lg text-base-300 font-black leading-[1.1]">
                    Dusun Sureng 2
                  </h1>
                </div>
              ) as unknown as JSX.Element,
              value: "",
            },
          ],
        });
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "dusun-sd": { ...state["dusun-sd"], "line-opacity": 1 },
          "route-dusun-sd": {
            ...state["route-dusun-sd"],
            "line-opacity": 1,
          },
          "dusun-smp": { ...state["dusun-smp"], "line-opacity": 1 },
          "route-dusun-smp": {
            ...state["route-dusun-smp"],
            "line-opacity": 1,
          },
          "dusun-sma": { ...state["dusun-sma"], "line-opacity": 1 },
          "route-dusun-sma": {
            ...state["route-dusun-sma"],
            "line-opacity": 1,
          },
        }));
        map?.flyTo({
          center: [110.64806, -8.13049],
          zoom: 13.6,
          bearing: 30,
          pitch: 60,
          duration: 2000,
        });

        let start = 0,
          index = 0;
        const animationDuration = 5000;
        const markers: Marker[] = [];
        const pathDistances: number[] = [];
        for (const dusunSekolah of [dusunSd, dusunSmp, dusunSma]) {
          // @ts-expect-error ignore dusunSd types
          const pinRoute = dusunSekolah.geometry.coordinates;
          // @ts-expect-error ignore dusunSd types
          pathDistances.push(turf.lineDistance(dusunSekolah));
          const markerIconElement = document.createElement("div");
          markerIconElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/student-elementary.png")'
              : index == 1
              ? 'url("/images/poverty/student-junior-high.png")'
              : 'url("/images/poverty/student-senior-high.png")';
          markerIconElement.style.backgroundSize = "cover";
          markerIconElement.style.width = "70px";
          markerIconElement.style.height = "70px";
          markerIconElement.style.borderRadius = "50%";
          markerIconElement.style.cursor = "pointer";
          const markerIcon = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerIconElement,
          })
            .setLngLat(pinRoute[0])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerIcon);

          const markerTargetElement = document.createElement("div");
          markerTargetElement.style.backgroundSize = "cover";
          markerTargetElement.style.width = "100px";
          markerTargetElement.style.height = "100px";
          markerTargetElement.style.borderRadius = "50%";
          markerTargetElement.style.cursor = "pointer";
          markerTargetElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/elementary-school.png")'
              : index == 1
              ? 'url("/images/poverty/junior-high-school.png")'
              : 'url("/images/poverty/senior-high-school.png")';
          const markerTarget = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerTargetElement,
          })
            .setLngLat(pinRoute[pinRoute.length - 1])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerTarget);
          index++;
        }
        markersStore.setState({ markers });

        function frame(time: number) {
          if (!start) start = time;
          const animationPhase = (time - start) / animationDuration;
          if (animationPhase > 1) {
            return;
          }

          [dusunSd, dusunSmp, dusunSma].forEach(async (dusun, index) => {
            const alongPath = turf.along(
              // @ts-expect-error ignore dusun types
              dusun,
              pathDistances[index] * animationPhase
            ).geometry.coordinates;
            const lngLat = {
              lng: alongPath[0],
              lat: alongPath[1],
            };
            markers[index + 1 * index].setLngLat(lngLat);
            let paintProperty: string;
            switch (index) {
              case 1:
                paintProperty = "route-dusun-smp";
                break;
              case 2:
                paintProperty = "route-dusun-sma";
                break;
              default:
                paintProperty = "route-dusun-sd";
                break;
            }
            map
              ?.getMap()
              .setPaintProperty(paintProperty, "line-gradient", [
                "step",
                ["line-progress"],
                "#fbbf24",
                animationPhase,
                "#fffbeb",
              ]);
          });
          requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      }}
    >
      <SectionCard title="Access to Educational Facilities">
        <p>
          It takes 28-34 minutes to elementary school (sdn tepus - Sd
          muhammadiyah), 53 minutes to junior high school (SMP Sanjaya Tepus)
          and 176 minutes to high school (SMK Muhammadiyah) on foot or
          8-25minutes by car with a distance of 1.8 - 13.1 km.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const DusunKesehatan = ({
  dusunApotek,
  dusunPuskesmas,
}: {
  dusunApotek: GeoJSON.Feature;
  dusunPuskesmas: GeoJSON.Feature;
}) => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center justify-start"
      onSectionEnter={async (map) => {
        clearMarkers();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "bottom",
              lng: 110.66206,
              lat: -8.15249,
              subtitle: (
                <div className="flex items-center justify-start gap-x-[0.9em] text-left ">
                  <span>
                    <img
                      alt="tag"
                      className="h-[clamp(1rem,3vw,2rem)]"
                      src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                    />
                  </span>
                  <h1 className="text-lg text-base-300 font-black leading-[1.1]">
                    Dusun Sureng 2
                  </h1>
                </div>
              ) as unknown as JSX.Element,
              value: "",
            },
          ],
        });
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "dusun-apotek": {
            ...state["dusun-apotek"],
            "line-opacity": 1,
          },
          "route-dusun-apotek": {
            ...state["route-dusun-apotek"],
            "line-opacity": 1,
          },
          "dusun-puskesmas": {
            ...state["dusun-puskesmas"],
            "line-opacity": 1,
          },
          "route-dusun-puskesmas": {
            ...state["route-dusun-puskesmas"],
            "line-opacity": 1,
          },
        }));
        map?.flyTo({
          center: [110.64806, -8.14049],
          zoom: 13.7,
          bearing: -60,
          pitch: 65,
          duration: 2000,
        });

        let start = 0,
          index = 0;
        const animationDuration = 5000;
        const markers: Marker[] = [];
        const pathDistances: number[] = [];
        for (const dusunKesehatan of [dusunApotek, dusunPuskesmas]) {
          // @ts-expect-error ignore dusunSd types
          const pinRoute = dusunKesehatan.geometry.coordinates;
          // @ts-expect-error ignore dusunSd types
          pathDistances.push(turf.lineDistance(dusunKesehatan));
          const markerIconElement = document.createElement("div");
          markerIconElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/person-1.png")'
              : index == 1
              ? 'url("/images/poverty/person-2.png")'
              : 'url("/images/poverty/person-3.png")';
          markerIconElement.style.backgroundSize = "cover";
          markerIconElement.style.width = "50px";
          markerIconElement.style.height = "50px";
          markerIconElement.style.borderRadius = "50%";
          markerIconElement.style.cursor = "pointer";
          const markerIcon = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerIconElement,
          })
            .setLngLat(pinRoute[0])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerIcon);

          const markerTargetElement = document.createElement("div");
          markerTargetElement.style.backgroundSize = "cover";
          markerTargetElement.style.width = "120px";
          markerTargetElement.style.height = "120px";
          markerTargetElement.style.borderRadius = "50%";
          markerTargetElement.style.cursor = "pointer";
          markerTargetElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/pharmacy.png")'
              : index == 1
              ? 'url("/images/poverty/health-center.png")'
              : 'url("/images/poverty/hospital.png")';
          const markerTarget = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerTargetElement,
          })
            .setLngLat(pinRoute[pinRoute.length - 1])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerTarget);
          index++;
        }
        markersStore.setState({ markers });

        function frame(time: number) {
          if (!start) start = time;
          const animationPhase = (time - start) / animationDuration;
          if (animationPhase > 1) {
            return;
          }

          [dusunApotek, dusunPuskesmas].forEach((dusun, index) => {
            const alongPath = turf.along(
              // @ts-expect-error ignore dusun types
              dusun,
              pathDistances[index] * animationPhase
            ).geometry.coordinates;
            const lngLat = {
              lng: alongPath[0],
              lat: alongPath[1],
            };
            markers[index + 1 * index].setLngLat(lngLat);
            map
              ?.getMap()
              .setPaintProperty(
                index == 0 ? "route-dusun-apotek" : "route-dusun-puskesmas",
                "line-gradient",
                [
                  "step",
                  ["line-progress"],
                  "#fbbf24",
                  animationPhase,
                  "#fffbeb",
                ]
              );
          });
          window.requestAnimationFrame(frame);
        }
        window.requestAnimationFrame(frame);
      }}
    >
      <SectionCard title="Access to Health Facilities">
        <p>
          It takes 150 minutes to the pharmacy (Apotik Bintaos) and 95-151
          minutes to the health center (Puskesmas Pembantu Tepus-Puskesmas
          Pembantu Sumberwungu) on foot or 14 - 27 minutes by car with a
          distance of 6.8 - 11.3 km.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const DusunEkonomi = ({
  dusunPasar,
}: {
  dusunPasar: GeoJSON.Feature;
}) => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="flex flex-row items-center justify-start"
      onSectionEnter={async (map) => {
        clearMarkers();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "bottom",
              lng: 110.66206,
              lat: -8.15249,
              subtitle: (
                <div className="flex items-center justify-start gap-x-[0.9em] text-left ">
                  <span>
                    <img
                      alt="tag"
                      className="h-[clamp(1rem,3vw,2rem)]"
                      src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                    />
                  </span>
                  <h1 className="text-lg text-base-300 font-black leading-[1.1]">
                    Dusun Sureng 2
                  </h1>
                </div>
              ) as unknown as JSX.Element,
              value: "",
            },
          ],
        });
        resetRouteStyles();
        useLayerStyle.setState((state) => ({
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "dusun-pasar": { ...state["dusun-pasar"], "line-opacity": 1 },
          "route-dusun-pasar": {
            ...state["route-dusun-pasar"],
            "line-opacity": 1,
          },
        }));
        map?.flyTo({
          center: [110.66006, -8.14549],
          zoom: 14.5,
          bearing: -60,
          pitch: 60,
          duration: 1000,
        });

        let start = 0,
          index = 0;
        const animationDuration = 5000;
        const markers: Marker[] = [];
        const pathDistances: number[] = [];
        for (const dusunEkonomi of [dusunPasar]) {
          // @ts-expect-error ignore dusunSd types
          const pinRoute = dusunEkonomi.geometry.coordinates;
          // @ts-expect-error ignore dusunSd types
          pathDistances.push(turf.lineDistance(dusunEkonomi));
          const markerIconElement = document.createElement("div");
          markerIconElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/person-1.png")'
              : index == 1
              ? 'url("/images/poverty/person-2.png")'
              : 'url("/images/poverty/person-3.png")';
          markerIconElement.style.backgroundSize = "cover";
          markerIconElement.style.width = "50px";
          markerIconElement.style.height = "50px";
          markerIconElement.style.borderRadius = "50%";
          markerIconElement.style.cursor = "pointer";
          const markerIcon = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerIconElement,
          })
            .setLngLat(pinRoute[0])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerIcon);

          const markerTargetElement = document.createElement("div");
          markerTargetElement.style.backgroundSize = "cover";
          markerTargetElement.style.width = "120px";
          markerTargetElement.style.height = "120px";
          markerTargetElement.style.borderRadius = "50%";
          markerTargetElement.style.cursor = "pointer";
          markerTargetElement.style.backgroundImage =
            index == 0
              ? 'url("/images/poverty/market.png")'
              : index == 1
              ? 'url("/images/poverty/bank.png")'
              : 'url("/images/poverty/tourism-site-2.png")';
          const markerTarget = new Marker({
            color: "red",
            scale: 0.8,
            draggable: false,
            pitchAlignment: "auto",
            rotationAlignment: "auto",
            element: markerTargetElement,
          })
            .setLngLat(pinRoute[pinRoute.length - 1])
            // @ts-expect-error ignore map | undefined types
            .addTo(map?.getMap());
          markers.push(markerTarget);
          index++;
        }
        markersStore.setState({ markers });

        function frame(time: number) {
          if (!start) start = time;
          const animationPhase = (time - start) / animationDuration;
          if (animationPhase > 1) {
            return;
          }

          [dusunPasar].forEach((dusun, index) => {
            const alongPath = turf.along(
              // @ts-expect-error ignore dusun types
              dusun,
              pathDistances[index] * animationPhase
            ).geometry.coordinates;
            const lngLat = {
              lng: alongPath[0],
              lat: alongPath[1],
            };
            markers[index + 1 * index].setLngLat(lngLat);
            map
              ?.getMap()
              .setPaintProperty(
                index == 0
                  ? "route-dusun-pasar"
                  : index == 1
                  ? "route-dusun-bank"
                  : "route-dusun-tourism",
                "line-gradient",
                [
                  "step",
                  ["line-progress"],
                  "#fbbf24",
                  animationPhase,
                  "#fffbeb",
                ]
              );
          });
          window.requestAnimationFrame(frame);
        }
        window.requestAnimationFrame(frame);
      }}
    >
      <SectionCard title="Access to Economic Facilities">
        <p>
          It takes 81 minutes to the market (Pasar Tepus and Indomaret Tepus) on
          foot or 12 minutes by car with a distance of 5.6 km.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};
