import { SectionCard, SectionWrapper } from "@/components/section-card";
import lowestCdi from "@/data/three_lowerst_cdi.json";
import { markersStore, useLayerStyle, usePopupStore } from "@/stores/map";
import * as turf from "@turf/turf";
import { Marker } from "mapbox-gl";

// const markers: Marker[] = [];

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
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "indonesia-province": {
            ...state["indonesia-province"],
            "fill-opacity": 0,
          },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
          "route-klaster-sd": {
            ...state["route-klaster-sd"],
            "line-opacity": 0,
          },
          "klaster-smp": { ...state["klaster-smp"], "line-opacity": 0 },
          "route-klaster-smp": {
            ...state["route-klaster-smp"],
            "line-opacity": 0,
          },
          "klaster-sma": { ...state["klaster-sma"], "line-opacity": 0 },
          "route-klaster-sma": {
            ...state["route-klaster-sma"],
            "line-opacity": 0,
          },
          "klaster-apotek": {
            ...state["klaster-apotek"],
            "line-opacity": 0,
          },
          "route-klaster-apotek": {
            ...state["route-klaster-apotek"],
            "line-opacity": 0,
          },
          "klaster-puskesmas": {
            ...state["klaster-puskesmas"],
            "line-opacity": 0,
          },
          "route-klaster-puskesmas": {
            ...state["route-klaster-puskesmas"],
            "line-opacity": 0,
          },
          "klaster-rumah-sakit": {
            ...state["klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "route-klaster-rumah-sakit": {
            ...state["route-klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "klaster-bank": { ...state["klaster-bank"], "line-opacity": 0 },
          "route-klaster-bank": {
            ...state["route-klaster-bank"],
            "line-opacity": 0,
          },
          "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 0 },
          "route-klaster-tourism": {
            ...state["route-klaster-tourism"],
            "line-opacity": 0,
          },
          "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 0 },
          "route-klaster-pasar": {
            ...state["route-klaster-pasar"],
            "line-opacity": 0,
          },
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
        <div className="container m-auto max-w-full px-[clamp(1.4rem,16vw,15rem)] prose text-justify">
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
          "route-klaster-sd": {
            ...state["route-klaster-sd"],
            "line-opacity": 0,
          },
          "klaster-smp": { ...state["klaster-smp"], "line-opacity": 0 },
          "route-klaster-smp": {
            ...state["route-klaster-smp"],
            "line-opacity": 0,
          },
          "klaster-sma": { ...state["klaster-sma"], "line-opacity": 0 },
          "route-klaster-sma": {
            ...state["route-klaster-sma"],
            "line-opacity": 0,
          },
          "klaster-apotek": {
            ...state["klaster-apotek"],
            "line-opacity": 0,
          },
          "route-klaster-apotek": {
            ...state["route-klaster-apotek"],
            "line-opacity": 0,
          },
          "klaster-puskesmas": {
            ...state["klaster-puskesmas"],
            "line-opacity": 0,
          },
          "route-klaster-puskesmas": {
            ...state["route-klaster-puskesmas"],
            "line-opacity": 0,
          },
          "klaster-rumah-sakit": {
            ...state["klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "route-klaster-rumah-sakit": {
            ...state["route-klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "klaster-bank": { ...state["klaster-bank"], "line-opacity": 0 },
          "route-klaster-bank": {
            ...state["route-klaster-bank"],
            "line-opacity": 0,
          },
          "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 0 },
          "route-klaster-tourism": {
            ...state["route-klaster-tourism"],
            "line-opacity": 0,
          },
          "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 0 },
          "route-klaster-pasar": {
            ...state["route-klaster-pasar"],
            "line-opacity": 0,
          },
        }));

        map?.flyTo({
          center: [110.61413, -7.7754],
          zoom: 9.2,
          bearing: 0,
          pitch: 0,
        });7
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
        usePopupStore.setState({ active: false });
        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
          "route-klaster-sd": {
            ...state["route-klaster-sd"],
            "line-opacity": 0,
          },
          "klaster-smp": { ...state["klaster-smp"], "line-opacity": 0 },
          "route-klaster-smp": {
            ...state["route-klaster-smp"],
            "line-opacity": 0,
          },
          "klaster-sma": { ...state["klaster-sma"], "line-opacity": 0 },
          "route-klaster-sma": {
            ...state["route-klaster-sma"],
            "line-opacity": 0,
          },
          "klaster-apotek": {
            ...state["klaster-apotek"],
            "line-opacity": 0,
          },
          "route-klaster-apotek": {
            ...state["route-klaster-apotek"],
            "line-opacity": 0,
          },
          "klaster-puskesmas": {
            ...state["klaster-puskesmas"],
            "line-opacity": 0,
          },
          "route-klaster-puskesmas": {
            ...state["route-klaster-puskesmas"],
            "line-opacity": 0,
          },
          "klaster-rumah-sakit": {
            ...state["klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "route-klaster-rumah-sakit": {
            ...state["route-klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "klaster-bank": { ...state["klaster-bank"], "line-opacity": 0 },
          "route-klaster-bank": {
            ...state["route-klaster-bank"],
            "line-opacity": 0,
          },
          "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 0 },
          "route-klaster-tourism": {
            ...state["route-klaster-tourism"],
            "line-opacity": 0,
          },
          "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 0 },
          "route-klaster-pasar": {
            ...state["route-klaster-pasar"],
            "line-opacity": 0,
          },
        }));
        map?.moveLayer("cdi");
        map?.getMap().setLayoutProperty("cdi", "visibility", "visible");

        map?.flyTo({
          center: [110.22413, -7.7754],
          zoom: 9.2,
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
export const YogyakartaCDIHighlight = () => {
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
            "fill-opacity": 0.1,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
          "route-klaster-sd": {
            ...state["route-klaster-sd"],
            "line-opacity": 0,
          },
          "klaster-smp": { ...state["klaster-smp"], "line-opacity": 0 },
          "route-klaster-smp": {
            ...state["route-klaster-smp"],
            "line-opacity": 0,
          },
          "klaster-sma": { ...state["klaster-sma"], "line-opacity": 0 },
          "route-klaster-sma": {
            ...state["route-klaster-sma"],
            "line-opacity": 0,
          },
          "klaster-apotek": {
            ...state["klaster-apotek"],
            "line-opacity": 0,
          },
          "route-klaster-apotek": {
            ...state["route-klaster-apotek"],
            "line-opacity": 0,
          },
          "klaster-puskesmas": {
            ...state["klaster-puskesmas"],
            "line-opacity": 0,
          },
          "route-klaster-puskesmas": {
            ...state["route-klaster-puskesmas"],
            "line-opacity": 0,
          },
          "klaster-rumah-sakit": {
            ...state["klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "route-klaster-rumah-sakit": {
            ...state["route-klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "klaster-bank": { ...state["klaster-bank"], "line-opacity": 0 },
          "route-klaster-bank": {
            ...state["route-klaster-bank"],
            "line-opacity": 0,
          },
          "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 0 },
          "route-klaster-tourism": {
            ...state["route-klaster-tourism"],
            "line-opacity": 0,
          },
          "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 0 },
          "route-klaster-pasar": {
            ...state["route-klaster-pasar"],
            "line-opacity": 0,
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
          zoom: 12.5,
          bearing: 0,
          pitch: 0,
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
              title: "Third Lowest CDI",
              subtitle: "",
              value: lowestCdi.features[0].properties.child_pov,
            },
            {
              pinPosition: "bottom",
              lng: centers[1].geometry.coordinates[0],
              lat: centers[1].geometry.coordinates[1],
              title: "Second Lowest CDI",
              subtitle: "",
              value: lowestCdi.features[1].properties.child_pov,
            },
            {
              pinPosition: "bottom",
              lng: centers[2].geometry.coordinates[0],
              lat: centers[2].geometry.coordinates[1],
              title: "First Lowest CDI",
              subtitle: "",
              value: lowestCdi.features[2].properties.child_pov,
            },
          ],
        });
      }}
    >
      <SectionCard title="D.I Yogyakarta CDI Highlight">
        <p>
          Three grids with the lowest percentage of children listed are at a
          value of 9.57-9.58 percent in D.I Yogyakarta Province in Sleman
          Regency with a percentage of monetary poverty of 8.12 percent in 2020.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};
export const PondokJayaPermai = () => {
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
            "fill-opacity": 0.1,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
          "route-klaster-sd": {
            ...state["route-klaster-sd"],
            "line-opacity": 0,
          },
          "klaster-smp": { ...state["klaster-smp"], "line-opacity": 0 },
          "route-klaster-smp": {
            ...state["route-klaster-smp"],
            "line-opacity": 0,
          },
          "klaster-sma": { ...state["klaster-sma"], "line-opacity": 0 },
          "route-klaster-sma": {
            ...state["route-klaster-sma"],
            "line-opacity": 0,
          },
          "klaster-apotek": {
            ...state["klaster-apotek"],
            "line-opacity": 0,
          },
          "route-klaster-apotek": {
            ...state["route-klaster-apotek"],
            "line-opacity": 0,
          },
          "klaster-puskesmas": {
            ...state["klaster-puskesmas"],
            "line-opacity": 0,
          },
          "route-klaster-puskesmas": {
            ...state["route-klaster-puskesmas"],
            "line-opacity": 0,
          },
          "klaster-rumah-sakit": {
            ...state["klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "route-klaster-rumah-sakit": {
            ...state["route-klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "klaster-bank": { ...state["klaster-bank"], "line-opacity": 0 },
          "route-klaster-bank": {
            ...state["route-klaster-bank"],
            "line-opacity": 0,
          },
          "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 0 },
          "route-klaster-tourism": {
            ...state["route-klaster-tourism"],
            "line-opacity": 0,
          },
          "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 0 },
          "route-klaster-pasar": {
            ...state["route-klaster-pasar"],
            "line-opacity": 0,
          },
        }));
        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "bottom",
              lng: 110.45347,
              lat: -7.69632,
              title: "Pondok Jaya Permai Cluster",
              subtitle: "",
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
              title: "Pondok Jaya Permai Cluster",
              subtitle: "",
              value: "",
            },
          ],
        });
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
          "klaster-apotek": {
            ...state["klaster-apotek"],
            "line-opacity": 0,
          },
          "route-klaster-apotek": {
            ...state["route-klaster-apotek"],
            "line-opacity": 0,
          },
          "klaster-puskesmas": {
            ...state["klaster-puskesmas"],
            "line-opacity": 0,
          },
          "route-klaster-puskesmas": {
            ...state["route-klaster-puskesmas"],
            "line-opacity": 0,
          },
          "klaster-rumah-sakit": {
            ...state["klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "route-klaster-rumah-sakit": {
            ...state["route-klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "klaster-bank": { ...state["klaster-bank"], "line-opacity": 0 },
          "route-klaster-bank": {
            ...state["route-klaster-bank"],
            "line-opacity": 0,
          },
          "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 0 },
          "route-klaster-tourism": {
            ...state["route-klaster-tourism"],
            "line-opacity": 0,
          },
          "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 0 },
          "route-klaster-pasar": {
            ...state["route-klaster-pasar"],
            "line-opacity": 0,
          },
        }));
        map?.flyTo({
          center: [110.4518634, -7.6951721],
          zoom: 15,
          bearing: -90,
          pitch: 60,
          duration: 1000,
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
            'url("/images/person-walking.png")';
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
          markerTargetElement.style.width = "50px";
          markerTargetElement.style.height = "50px";
          markerTargetElement.style.borderRadius = "50%";
          markerTargetElement.style.cursor = "pointer";
          markerTargetElement.style.backgroundImage =
            index == 0
              ? 'url("/images/topi-sd.png")'
              : index == 1
              ? 'url("/images/topi-smp.png")'
              : 'url("/images/topi-sma.png")';
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
                  "red",
                  animationPhase,
                  "rgba(255, 0, 0, 0)",
                ]);
            }
          );
          requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      }}
    >
      <SectionCard title="Cluster - Educational Facilities">
        <p>
          As many as 9 to 10 out of 100 children aged 0-17 years in the grid can
          get 16 minutes to elementary school (Sd n Ngemplak 1), 18 minutes to
          junior high school and (SMP Negeri 1 Ngemplak) high school (SMA Negeri
          1 Ngemplak) on foot or 7 minutes by car with a distance of 1.4 - 3 km.
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
              title: "Pondok Jaya Permai Cluster",
              subtitle: "",
              value: "",
            },
          ],
        });
        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
          "route-klaster-sd": {
            ...state["route-klaster-sd"],
            "line-opacity": 0,
          },
          "klaster-smp": { ...state["klaster-smp"], "line-opacity": 0 },
          "route-klaster-smp": {
            ...state["route-klaster-smp"],
            "line-opacity": 0,
          },
          "klaster-sma": { ...state["klaster-sma"], "line-opacity": 0 },
          "route-klaster-sma": {
            ...state["route-klaster-sma"],
            "line-opacity": 0,
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
          "klaster-bank": { ...state["klaster-bank"], "line-opacity": 0 },
          "route-klaster-bank": {
            ...state["route-klaster-bank"],
            "line-opacity": 0,
          },
          "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 0 },
          "route-klaster-tourism": {
            ...state["route-klaster-tourism"],
            "line-opacity": 0,
          },
          "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 0 },
          "route-klaster-pasar": {
            ...state["route-klaster-pasar"],
            "line-opacity": 0,
          },
        }));
        map?.flyTo({
          center: [110.4472711, -7.6967777],
          zoom: 15,
          bearing: -120,
          pitch: 60,
          duration: 1000,
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
            'url("/images/person-walking.png")';
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
          markerTargetElement.style.width = "50px";
          markerTargetElement.style.height = "50px";
          markerTargetElement.style.borderRadius = "50%";
          markerTargetElement.style.cursor = "pointer";
          markerTargetElement.style.backgroundImage =
            index == 0
              ? 'url("/images/apotek.png")'
              : index == 1
              ? 'url("/images/puskesmas.png")'
              : 'url("/images/rumah-sakit.png")';
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
                    "red",
                    animationPhase,
                    "rgba(255, 0, 0, 0)",
                  ]
                );
            }
          );
          window.requestAnimationFrame(frame);
        }
        window.requestAnimationFrame(frame);
      }}
    >
      <SectionCard title="Cluster - Health Facilities">
        <p>
          As many as 9 to 10 out of 100 children aged 0-17 years in the grid can
          get 15 minutes to the pharmacy (Apotik Widigdo 3), 22 minutes to the
          health center (Puskesmas Ngemplak 2), 35 minutes to the hospital
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
              title: "Pondok Jaya Permai Cluster",
              subtitle: "",
              value: "",
            },
          ],
        });
        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.2,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
          "route-klaster-sd": {
            ...state["route-klaster-sd"],
            "line-opacity": 0,
          },
          "klaster-smp": { ...state["klaster-smp"], "line-opacity": 0 },
          "route-klaster-smp": {
            ...state["route-klaster-smp"],
            "line-opacity": 0,
          },
          "klaster-sma": { ...state["klaster-sma"], "line-opacity": 0 },
          "route-klaster-sma": {
            ...state["route-klaster-sma"],
            "line-opacity": 0,
          },
          "klaster-apotek": {
            ...state["klaster-apotek"],
            "line-opacity": 0,
          },
          "route-klaster-apotek": {
            ...state["route-klaster-apotek"],
            "line-opacity": 0,
          },
          "klaster-puskesmas": {
            ...state["klaster-puskesmas"],
            "line-opacity": 0,
          },
          "route-klaster-puskesmas": {
            ...state["route-klaster-puskesmas"],
            "line-opacity": 0,
          },
          "klaster-rumah-sakit": {
            ...state["klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "route-klaster-rumah-sakit": {
            ...state["route-klaster-rumah-sakit"],
            "line-opacity": 0,
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
          center: [110.4514748, -7.6947745],
          zoom: 16.5,
          bearing: -90,
          pitch: 30,
          duration: 1000,
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
            'url("/images/person-walking.png")';
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
          markerTargetElement.style.width = "50px";
          markerTargetElement.style.height = "50px";
          markerTargetElement.style.borderRadius = "50%";
          markerTargetElement.style.cursor = "pointer";
          markerTargetElement.style.backgroundImage =
            index == 0
              ? 'url("/images/market.png")'
              : index == 1
              ? 'url("/images/bank.png")'
              : 'url("/images/tourism.png")';
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
                    "red",
                    animationPhase,
                    "rgba(255, 0, 0, 0)",
                  ]
                );
            }
          );
          window.requestAnimationFrame(frame);
        }
        window.requestAnimationFrame(frame);
      }}
    >
      <SectionCard title="Cluster - Economic Facilities">
        <p>
          As many as 9 to 10 out of 100 children aged 0-17 years in the grid can
          get 7 minutes to the market (Saparan Ki Ageng Wonolelo Traditional
          Festival Night Market (550m) 2 minutes), 1 minute to the financial
          counter (mandiri bank partner (Rpk Arum Sari) ), 3 minutes to
          entertainment facilities (Pondok Wonolelo Tourism Village) on foot or
          1 minute by car with a distance of 280-550 m.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};
