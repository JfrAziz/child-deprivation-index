import { SectionCard, SectionWrapper } from "@/components/section-card";
import { markersStore, useLayerStyle, usePopupStore } from "@/stores/map";
import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";

// const markers: Marker[] = [];
const el = document.createElement("div");
el.className = "marker";

export const MethodExplanation = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  return (
    <SectionWrapper
      className="!max-w-full m-auto p-0 relative"
      onSectionEnter={(map) => {
        clearMarkers();
        /**
         * reset any mapbox style layer
         */
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");

        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");

        usePopupStore.setState({ active: false });

        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 1 },
          "indonesia-province": {
            ...state["indonesia-province"],
            "fill-opacity": 0,
          },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
        }));

        map?.flyTo({
          center: [114.61831, -5.84445],
          zoom: 1,
          bearing: 0,
          pitch: 0,
        });
      }}
    >
      <div className="bg-gradient-to-b from-transparent to-foreground/90 h-96" />
      <div className="bg-foreground/90 text-background py-20 min-h-svh">
        <div className="container m-auto max-w-2xl prose">
          <h3 className="uppercase font-mono text-xl mb-2">Satelite Imagery</h3>
          <p>
            The Copernicus earth observation program launched by the European
            Space Agency (ESA) on March 22 2014 can be applied to analyze the
            earth's surface. Earth's surface image data is collected from the
            sensors of several Sentinel satellites. The Sentinel-2 sensor
            collects image data of the earth's surface to analyze vegetation,
            land use and hydrology. The approach to identifying the presence of
            vegetation, land use, hydrology from the Sentinel-2 satellites and
            night light intensity from the VIIRS satellite can identify economic
            activities in an area measuring 1 km square. The results of this
            approach were carried out to overcome the problem of data that could
            not be produced from survey data collection with a limited sample.
          </p>
          <p>
            Analysis of the presence of vegetation from sentinel-2 data is
            produced from measuring satellite spectral waves into an index and
            is known as the Normalized Difference Vegetation Index (NDVI). NDVI
            can be used to monitor land uses, such as residential, industrial
            and agricultural. This data can be used to monitor land use changes,
            such as urban expansion and agricultural development. Based on NDVI
            analysis, we can find out the location of children within 1 square
            km of agricultural locations.
          </p>
          <p>
            Apart from that, from sentinel-2, the NDBI (Normalized Difference
            Build Index) index can also be obtained which can be used to map
            urban areas and monitor changes in land use. Based on the NDBI
            index, it can be seen from the location of 1 square km of children's
            access to public facilities to meet their basic needs. Not only
            that, from Sentinel-2, the NDWI index (Normalized Difference Water
            Index) is also obtained which can be used to detect water and the
            quality of clean water needed for children's development.
          </p>
          <p>
            Good air conditions are measured by air quality which has low levels
            of carbon monoxide and sulphur dioxide as elements that cause air
            pollution from fossil fuels. Carbon monoxide and sulfur dioxide
            contents were obtained from the Sentinel 5P Satellite. Geothermal
            heat from the Modis satellite is also used to identify good
            environmental conditions for child development. The advantage of
            satellite image data which can produce index values up to a grid
            size of 1 square km means that satellite data can be more targeted
            at showing the location of deprived children. Identification of the
            location of deprived children can be further explained by
            integrating satellite image data with data on children's access to
            education, health and economic facilities. This new data source
            innovation with the support of machine learning modeling can
            estimate the percentage of deprived children on a grid size of 1
            square km which cannot be done with limited census or survey data.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-t from-transparent to-foreground/90 h-96" />
    </SectionWrapper>
  );
};

export const YogyakartaRegencies = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  return (
    <SectionWrapper
      className="flex flex-row items-center justify-end"
      onSectionEnter={(map) => {
        clearMarkers();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");

        usePopupStore.setState({ active: false });

        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.6,
            "fill-color": "#c03831",
            "fill-outline-color": "#7f0000",
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
        }));

        map?.flyTo({
          center: [110.39413, -7.7754],
          zoom: 9.5,
          bearing: 0,
          pitch: 0,
        });
      }}
    >
      <SectionCard title="D.I Yogyakarta">
        <p>
          The development of Machine Learning and Utilization of Satellite Image
          Data Makes it possible to find child deprivation in the Province of
          D.I Yogyakarta and other regions in Java at the level of estimating
          the one-kilometer square.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const YogyakartaCDI = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  return (
    <SectionWrapper
      className="flex flex-row items-center"
      onSectionEnter={(map) => {
        clearMarkers();
        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
        }));

        map?.moveLayer("cdi");
        map?.getMap().setLayoutProperty("cdi", "visibility", "visible");

        map?.flyTo({
          center: [110.39413, -7.7754],
          zoom: 9.5,
          bearing: 0,
          pitch: 0,
        });
      }}
    >
      <SectionCard title="D.I Yogyakarta CDI">
        <p>
          The one square kilometer area displayed illustrates children who are
          prioritized from access to education, health and economic facilities.
          In the Sleman Regency there are 3 grids that have the lowest
          percentage of children with the lowest supply of all provinces of D.I
          Yogyakarta.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};
export const KlasterSd = ({ klasterSd }: { klasterSd: GeoJSON.Feature }) => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  return (
    <SectionWrapper
      className="flex flex-row items-center"
      onSectionEnter={async (map) => {
        clearMarkers();
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
        }));

        if (map?.getMap().getSource("route-klaster-sd")) {
          map?.getMap().removeLayer("route-klaster-sd");
          map?.getMap().removeSource("route-klaster-sd");
        }
        map?.flyTo({
          center: [110.45173, -7.70078],
          zoom: 14,
          bearing: 0,
          pitch: 0,
        });
        // @ts-expect-error ignore klasterSd types
        const pinRoute = klasterSd.geometry.coordinates;
        // @ts-expect-error ignore klasterSd types
        const pathDistance = turf.lineDistance(klasterSd);

        let start = 0;
        const animationDuration = 5000;
        const marker = new mapboxgl.Marker({
          color: "red",
          scale: 0.8,
          draggable: false,
          pitchAlignment: "auto",
          rotationAlignment: "auto",
          element: el,
        })
          .setLngLat(pinRoute[0])
          // @ts-expect-error ignore map | undefined types
          .addTo(map?.getMap());
        markersStore.setState({ markers: [marker] });

        function frame(time: number) {
          if (!start) start = time;
          const animationPhase = (time - start) / animationDuration;
          if (animationPhase > 1) {
            return;
          }
          // @ts-expect-error ignore klasterSd types
          const alongPath = turf.along(klasterSd, pathDistance * animationPhase)
            .geometry.coordinates;
          const lngLat = {
            lng: alongPath[0],
            lat: alongPath[1],
          };
          marker.setLngLat(lngLat);
          map
            ?.getMap()
            .setPaintProperty("route-klaster-sd", "line-gradient", [
              "step",
              ["line-progress"],
              "red",
              animationPhase,
              "rgba(255, 0, 0, 0)",
            ]);
          map?.getMap().setCenter(lngLat).setZoom(14);
          window.requestAnimationFrame(frame);
        }
        window.requestAnimationFrame(frame);
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("klaster-sd", "visibility", "visible");
      }}
    >
      <SectionCard title="Klaster - Sd">
        <p>
          The one square kilometer area displayed illustrates children who are
          prioritized from access to education, health and economic facilities.
          In the Sleman Regency there are 3 grids that have the lowest
          percentage of children with the lowest supply of all provinces of D.I
          Yogyakarta.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};
