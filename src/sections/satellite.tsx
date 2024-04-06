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
              Child Deprivation Rate (CDR)
            </>
          ) as unknown as JSX.Element
        }
      >
        <p>
          The 1 km² area depicted represents children who suffer from a lack of
          access to education, health, and economic facilities. In the Sleman
          Regency, there are three grids with the lowest percentage of deprived
          children in the Yogyakarta Province.
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
        // @ts-expect-error ignore clusterElementarySchool types
        const centers = lowestCdi.features.map((feature: GeoJSON.Feature) => {
          // @ts-expect-error ignore clusterElementarySchool types
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
                  <span className="text-xl font-black">Lowest CDR</span>
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
                  <span className="text-xl font-black">Lowest CDR</span>
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
                  <span className="text-xl font-black">Lowest CDR</span>
                </>
              ) as unknown as JSX.Element,
              value:
                lowestCdi.features[2].properties.child_pov.toFixed(2) + "%",
            },
          ],
        });
      }}
    >
      <SectionCard title="Three Grids with the Lowest CDR">
        <p>
          The three grids with the lowest percentage of the Child Deprivation
          Rate (CDR) scores between 9.57% and 9.58% in in Sleman Regency,
          Yogyakarta Province. Meanwhile, in 2020, Sleman Regency had a poverty
          rate of 8.12% in 2020.
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
          Pondok Jaya Permai Cluster, situated in the grid with the lowest CDR
          percentage in Yogyakarta, records a score of 9.8%. This means that 9
          to 10 out of 100 children aged 0-17 years in this area experience
          deprivation of access to education, health, and economic facilities.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const KlasterSekolah = ({
  clusterElementarySchool,
  clusterJuniorHighSchool,
  clusterHighSchool,
}: {
  clusterElementarySchool: GeoJSON.Feature;
  clusterJuniorHighSchool: GeoJSON.Feature;
  clusterHighSchool: GeoJSON.Feature;
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
          "cluster-sd": { ...state["cluster-sd"], "line-opacity": 1 },
          "route-cluster-sd": {
            ...state["route-cluster-sd"],
            "line-opacity": 1,
          },
          "cluster-smp": { ...state["cluster-smp"], "line-opacity": 1 },
          "route-cluster-smp": {
            ...state["route-cluster-smp"],
            "line-opacity": 1,
          },
          "cluster-sma": { ...state["cluster-sma"], "line-opacity": 1 },
          "route-cluster-sma": {
            ...state["route-cluster-sma"],
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
        for (const clusterSekolah of [clusterElementarySchool, clusterJuniorHighSchool, clusterHighSchool]) {
          // @ts-expect-error ignore clusterElementarySchool types
          const pinRoute = clusterSekolah.geometry.coordinates;
          // @ts-expect-error ignore clusterElementarySchool types
          pathDistances.push(turf.lineDistance(clusterSekolah));
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

          [clusterElementarySchool, clusterJuniorHighSchool, clusterHighSchool].forEach(
            async (cluster, index) => {
              const alongPath = turf.along(
                // @ts-expect-error ignore cluster types
                cluster,
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
                  paintProperty = "route-cluster-smp";
                  break;
                case 2:
                  paintProperty = "route-cluster-sma";
                  break;
                default:
                  paintProperty = "route-cluster-sd";
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
  clusterPharmacy,
  clusterHealthCenter,
  clusterHospital,
}: {
  clusterPharmacy: GeoJSON.Feature;
  clusterHealthCenter: GeoJSON.Feature;
  clusterHospital: GeoJSON.Feature;
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
          "cluster-pharmacy": {
            ...state["cluster-pharmacy"],
            "line-opacity": 1,
          },
          "route-cluster-pharmacy": {
            ...state["route-cluster-pharmacy"],
            "line-opacity": 1,
          },
          "cluster-health_center": {
            ...state["cluster-health_center"],
            "line-opacity": 1,
          },
          "route-cluster-health_center": {
            ...state["route-cluster-health_center"],
            "line-opacity": 1,
          },
          "cluster-rumah-sakit": {
            ...state["cluster-rumah-sakit"],
            "line-opacity": 1,
          },
          "route-cluster-rumah-sakit": {
            ...state["route-cluster-rumah-sakit"],
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
        for (const clusterKesehatan of [
          clusterPharmacy,
          clusterHealthCenter,
          clusterHospital,
        ]) {
          // @ts-expect-error ignore clusterElementarySchool types
          const pinRoute = clusterKesehatan.geometry.coordinates;
          // @ts-expect-error ignore clusterElementarySchool types
          pathDistances.push(turf.lineDistance(clusterKesehatan));
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

          [clusterPharmacy, clusterHealthCenter, clusterHospital].forEach(
            (cluster, index) => {
              const alongPath = turf.along(
                // @ts-expect-error ignore cluster types
                cluster,
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
                    ? "route-cluster-pharmacy"
                    : index == 1
                    ? "route-cluster-health_center"
                    : "route-cluster-rumah-sakit",
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
          the health center (PuskesmasNgemplak 2), 35 minutes to the hospital
          (Mitra Medika Hospital) on foot or 3-7 minutes by car with a distance
          of 1.4 - 2.8 km.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const KlasterEkonomi = ({
  clusterMarket,
  clusterBank,
  clusterTourism,
}: {
  clusterMarket: GeoJSON.Feature;
  clusterBank: GeoJSON.Feature;
  clusterTourism: GeoJSON.Feature;
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
          "cluster-bank": { ...state["cluster-bank"], "line-opacity": 1 },
          "route-cluster-bank": {
            ...state["route-cluster-bank"],
            "line-opacity": 1,
          },
          "cluster-tourism": { ...state["cluster-tourism"], "line-opacity": 1 },
          "route-cluster-tourism": {
            ...state["route-cluster-tourism"],
            "line-opacity": 1,
          },
          "cluster-market": { ...state["cluster-market"], "line-opacity": 1 },
          "route-cluster-market": {
            ...state["route-cluster-market"],
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
        for (const clusterEkonomi of [
          clusterMarket,
          clusterBank,
          clusterTourism,
        ]) {
          // @ts-expect-error ignore clusterElementarySchool types
          const pinRoute = clusterEkonomi.geometry.coordinates;
          // @ts-expect-error ignore clusterElementarySchool types
          pathDistances.push(turf.lineDistance(clusterEkonomi));
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

          [clusterMarket, clusterBank, clusterTourism].forEach(
            (cluster, index) => {
              const alongPath = turf.along(
                // @ts-expect-error ignore cluster types
                cluster,
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
                    ? "route-cluster-market"
                    : index == 1
                    ? "route-cluster-bank"
                    : "route-cluster-tourism",
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
        // @ts-expect-error ignore dusunElementarySchool types
        const centers = highestCdi.features.map((feature: GeoJSON.Feature) => {
          // @ts-expect-error ignore dusunElementarySchool types
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
                  <span className="text-xl font-black">Highest CDR</span>
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
                  <span className="text-xl font-black">Highest CDR</span>
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
                  <span className="text-xl font-black">HIghest CDR</span>
                </>
              ) as unknown as JSX.Element,
              value:
                highestCdi.features[2].properties.child_pov.toFixed(2) + "%",
            },
          ],
        });
      }}
    >
      <SectionCard title="Three Grids with the Highest CDR">
        <p>
          The three grids with the highest percentage of the Child Deprivation
          Rate (CDR) scores between 20.1% and 20.3% in Gunungkidul Regency,
          Yogyakarta Province. Meanwhile, by 2020, Gunungkidul Regency has a
          poverty rate of 17,07% by 2020.
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
          Dusun Sureng 2, situated in the grid with the highest CDR percentage
          in Yogyakarta, records a score of 20.3%. This means that 20 out of 100
          children aged 0-17 years in this area experience deprivation of access
          to education, health, and economic facilities.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const DusunSekolah = ({
  dusunElementarySchool,
  dusunJuniorHighSchool,
  dusunHighSchool,
}: {
  dusunElementarySchool: GeoJSON.Feature;
  dusunJuniorHighSchool: GeoJSON.Feature;
  dusunHighSchool: GeoJSON.Feature;
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
        for (const dusunSekolah of [dusunElementarySchool, dusunJuniorHighSchool, dusunHighSchool]) {
          // @ts-expect-error ignore dusunElementarySchool types
          const pinRoute = dusunSekolah.geometry.coordinates;
          // @ts-expect-error ignore dusunElementarySchool types
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

          [dusunElementarySchool, dusunJuniorHighSchool, dusunHighSchool].forEach(async (dusun, index) => {
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
  dusunPharmacy,
  dusunHealthCenter,
}: {
  dusunPharmacy: GeoJSON.Feature;
  dusunHealthCenter: GeoJSON.Feature;
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
          "dusun-pharmacy": {
            ...state["dusun-pharmacy"],
            "line-opacity": 1,
          },
          "route-dusun-pharmacy": {
            ...state["route-dusun-pharmacy"],
            "line-opacity": 1,
          },
          "dusun-health_center": {
            ...state["dusun-health_center"],
            "line-opacity": 1,
          },
          "route-dusun-health_center": {
            ...state["route-dusun-health_center"],
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
        for (const dusunKesehatan of [dusunPharmacy, dusunHealthCenter]) {
          // @ts-expect-error ignore dusunElementarySchool types
          const pinRoute = dusunKesehatan.geometry.coordinates;
          // @ts-expect-error ignore dusunElementarySchool types
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

          [dusunPharmacy, dusunHealthCenter].forEach((dusun, index) => {
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
                index == 0 ? "route-dusun-pharmacy" : "route-dusun-health_center",
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
          minutes to the health center (PuskesmasPembantu Tepus-HealthCenter
          Pembantu Sumberwungu) on foot or 14 - 27 minutes by car with a
          distance of 6.8 - 11.3 km.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const DusunEkonomi = ({
  dusunMarket,
}: {
  dusunMarket: GeoJSON.Feature;
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
          "dusun-market": { ...state["dusun-market"], "line-opacity": 1 },
          "route-dusun-market": {
            ...state["route-dusun-market"],
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
        for (const dusunEkonomi of [dusunMarket]) {
          // @ts-expect-error ignore dusunElementarySchool types
          const pinRoute = dusunEkonomi.geometry.coordinates;
          // @ts-expect-error ignore dusunElementarySchool types
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

          [dusunMarket].forEach((dusun, index) => {
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
                  ? "route-dusun-market"
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
          It takes 81 minutes to the market (Market Tepus and Indomaret Tepus) on
          foot or 12 minutes by car with a distance of 5.6 km.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};
