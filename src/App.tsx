import "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, MapProvider, Popup, Source } from "react-map-gl";
import "./globals.css";

import { useLayerStyle, usePopupStore } from "./stores/map";

import { useEffect, useState } from "react";
import dusunPharmacy from "@/data/dusun/pharmacy.json";
import dusunMarket from "@/data/dusun/market.json";
import dusunHealthCenter from "@/data/dusun/health-center.json";
import dusunElementarySchool from "@/data/dusun/elementary-school.json";
import dusunJuniorHighSchool from "@/data/dusun/junior-high-school.json";
import dusunHighSchool from "@/data/dusun/high-school.json";
import graticule from "@/data/graticule";
import indonesiaProvince from "@/data/indonesia.json";
import clusterPharmacy from "@/data/cluster/pharmacy.json";
import clusterBank from "@/data/cluster/bank.json";
import clusterMarket from "@/data/cluster/market.json";
import clusterHealthCenter from "@/data/cluster/health-center.json";
import clusterHospital from "@/data/cluster/hospital.json";
import clusterElementarySchool from "@/data/cluster/elementary-school.json";
import clusterJuniorHighSchool from "@/data/cluster/junior-high-school.json";
import clusterHighSchool from "@/data/cluster/high-school.json";
import clusterTourism from "@/data/cluster/tourism.json";
import yogyakartaRegencies from "@/data/yogyakarta_regencies.json";
import { BPSCommitment } from "./sections/bps-commitment";
import { ChildDeprivation } from "./sections/child-deprivation";
import { RemoteSensingLayers } from "./sections/remote-sensing-layers";
import { Cityscape } from "./sections/cityscape";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero";
import {
  IndonesiaOverview,
  JavaHDI,
  JavaPoverty,
  JavaPovertyOverview,
} from "./sections/indonesia-overview";
import { Quotes } from "./sections/quotes";
import {
  DusunEkonomi,
  DusunKesehatan,
  DusunSekolah,
  DusunSureng,
  KlasterEkonomi,
  KlasterKesehatan,
  KlasterSekolah,
  PondokJayaPermai,
  YogyakartaCDI,
  YogyakartaCDIHighlight,
  YogyakartaCDIHighlightHighest,
  YogyakartaRegencies,
} from "./sections/satellite";
import { ThemeButton } from "./sections/theme-button";
import { Remarks } from "./sections/remarks";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const state = useLayerStyle((state) => state);

  const popups = usePopupStore((state) => state.popups);
  const isPopupActive = usePopupStore((state) => state.active);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint as needed

    const handleMobileChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  return (
    <main className="font-urbanist">
      <MapProvider>
        <div className="z-0 fixed inset-0 h-svh w-svw">
          <Map
            id="map"
            styleDiffing
            fog={{ "star-intensity": 1 }}
            projection={{ name: "globe" }}
            mapStyle="mapbox://styles/jfraziz/clrt2i69500kf01qy7i2n5oin"
            mapboxAccessToken="pk.eyJ1IjoiamZyYXppeiIsImEiOiJjbDY3ZXBwaDcza210M2JvMXhtejFmeG9tIn0.TEidGiCBZ2ZOJyu-Aqifiw"
          >
            {isPopupActive &&
              popups.map((popup, index) => (
                <Popup
                  key={index}
                  latitude={popup.lat}
                  longitude={popup.lng}
                  anchor={popup.pinPosition}
                  className="font-urbanist"
                >
                  <div className="bg-background rounded-2xl py-4 px-6 min-w-64 text-card-foreground">
                    <div className="text-2xl text-pink-600 font-black text-left">
                      <h1>{popup.title}</h1>
                    </div>
                    {popup.subtitle ? (
                      <div className="text-sm text-left -mt-1 font-semibold text-purple-950  ">
                        {popup.subtitle}
                      </div>
                    ) : (
                      <div className="py-1"></div>
                    )}
                    {popup.value && (
                      <div
                        className={`text-5xl font-bold text-neutral-500 text-right  ${
                          String(popup.value).includes("%") && "relative"
                        }`}
                      >
                        {String(popup.value).replace("%", "")}
                        {String(popup.value).includes("%") && (
                          <span className="text-3xl ">%</span>
                        )}
                      </div>
                    )}
                    {popup.location && (
                      <div className="mt-1 flex items-start justify-end gap-x-[0.2em] text-right ">
                        <span>
                          <img
                            alt="tag"
                            className="h-[clamp(1rem,1.4vw,1.2rem)]"
                            src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                          />
                        </span>
                        <h1 className="text-base text-base-300 font-black">
                          {popup.location}
                        </h1>
                      </div>
                    )}
                  </div>
                </Popup>
              ))}

            <Source
              type="geojson"
              id="indonesia-province"
              data={indonesiaProvince as GeoJSON.FeatureCollection}
            >
              <Layer
                type="fill"
                id="indonesia-province"
                paint={state["indonesia-province"]}
              />
            </Source>
            <Source
              type="geojson"
              id="yogyakarta-regencies"
              data={yogyakartaRegencies as GeoJSON.FeatureCollection}
            >
              <Layer
                type="fill"
                id="yogyakarta-regencies"
                paint={state["yogyakarta-regencies"]}
              />
            </Source>
            <Source
              type="geojson"
              id="graticule"
              data={graticule as GeoJSON.FeatureCollection}
            >
              <Layer type="line" id="graticule" paint={state["graticule"]} />
            </Source>
            <Source
              type="geojson"
              id="cluster-sd"
              data={clusterElementarySchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer type="line" id="cluster-sd" paint={state["cluster-sd"]} />
            </Source>
            <Source
              type="geojson"
              id="route-cluster-sd"
              data={clusterElementarySchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-cluster-sd"
                paint={state["route-cluster-sd"]}
              />
            </Source>
            <Source
              type="geojson"
              id="cluster-smp"
              data={clusterJuniorHighSchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="cluster-smp"
                paint={state["cluster-smp"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-cluster-smp"
              data={clusterJuniorHighSchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-cluster-smp"
                paint={state["route-cluster-smp"]}
              />
            </Source>
            <Source
              type="geojson"
              id="cluster-sma"
              data={clusterHighSchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="cluster-sma"
                paint={state["cluster-sma"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-cluster-sma"
              data={clusterHighSchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-cluster-sma"
                paint={state["route-cluster-sma"]}
              />
            </Source>
            <Source
              type="geojson"
              id="cluster-pharmacy"
              data={clusterPharmacy as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="cluster-pharmacy"
                paint={state["cluster-pharmacy"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-cluster-pharmacy"
              data={clusterPharmacy as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-cluster-pharmacy"
                paint={state["route-cluster-pharmacy"]}
              />
            </Source>
            <Source
              type="geojson"
              id="cluster-health_center"
              data={clusterHealthCenter as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="cluster-health_center"
                paint={state["cluster-health_center"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-cluster-health_center"
              data={clusterHealthCenter as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-cluster-health_center"
                paint={state["route-cluster-health_center"]}
              />
            </Source>
            <Source
              type="geojson"
              id="cluster-rumah-sakit"
              data={clusterHospital as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="cluster-rumah-sakit"
                paint={state["cluster-rumah-sakit"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-cluster-rumah-sakit"
              data={clusterHospital as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-cluster-rumah-sakit"
                paint={state["route-cluster-rumah-sakit"]}
              />
            </Source>
            <Source
              type="geojson"
              id="cluster-tourism"
              data={clusterTourism as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="cluster-tourism"
                paint={state["cluster-tourism"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-cluster-tourism"
              data={clusterTourism as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-cluster-tourism"
                paint={state["route-cluster-tourism"]}
              />
            </Source>
            <Source
              type="geojson"
              id="cluster-bank"
              data={clusterBank as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="cluster-bank"
                paint={state["cluster-bank"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-cluster-bank"
              data={clusterBank as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-cluster-bank"
                paint={state["route-cluster-bank"]}
              />
            </Source>
            <Source
              type="geojson"
              id="cluster-market"
              data={clusterMarket as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="cluster-market"
                paint={state["cluster-market"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-cluster-market"
              data={clusterMarket as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-cluster-market"
                paint={state["route-cluster-market"]}
              />
            </Source>
            <Source
              type="geojson"
              id="dusun-sd"
              data={dusunElementarySchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer type="line" id="dusun-sd" paint={state["dusun-sd"]} />
            </Source>
            <Source
              type="geojson"
              id="route-dusun-sd"
              data={dusunElementarySchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-dusun-sd"
                paint={state["route-dusun-sd"]}
              />
            </Source>
            <Source
              type="geojson"
              id="dusun-smp"
              data={dusunJuniorHighSchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer type="line" id="dusun-smp" paint={state["dusun-smp"]} />
            </Source>
            <Source
              type="geojson"
              id="route-dusun-smp"
              data={dusunJuniorHighSchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-dusun-smp"
                paint={state["route-dusun-smp"]}
              />
            </Source>
            <Source
              type="geojson"
              id="dusun-sma"
              data={dusunHighSchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer type="line" id="dusun-sma" paint={state["dusun-sma"]} />
            </Source>
            <Source
              type="geojson"
              id="route-dusun-sma"
              data={dusunHighSchool as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-dusun-sma"
                paint={state["route-dusun-sma"]}
              />
            </Source>
            <Source
              type="geojson"
              id="dusun-pharmacy"
              data={dusunPharmacy as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="dusun-pharmacy"
                paint={state["dusun-pharmacy"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-dusun-pharmacy"
              data={dusunPharmacy as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-dusun-pharmacy"
                paint={state["route-dusun-pharmacy"]}
              />
            </Source>
            <Source
              type="geojson"
              id="dusun-health_center"
              data={dusunHealthCenter as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="dusun-health_center"
                paint={state["dusun-health_center"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-dusun-health_center"
              data={dusunHealthCenter as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-dusun-health_center"
                paint={state["route-dusun-health_center"]}
              />
            </Source>
            <Source
              type="geojson"
              id="dusun-market"
              data={dusunMarket as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="dusun-market"
                paint={state["dusun-market"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-dusun-market"
              data={dusunMarket as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-dusun-market"
                paint={state["route-dusun-market"]}
              />
            </Source>
          </Map>
        </div>

        <div className="z-10 absolute w-full">
          <ThemeButton />
          <Hero />
          <Cityscape isMobile={isMobile} />
          <ChildDeprivation />
          <BPSCommitment />
          <Quotes />
          <IndonesiaOverview />
          <JavaPovertyOverview />
          <JavaHDI />
          <JavaPoverty />
          <RemoteSensingLayers />
          <YogyakartaRegencies />
          <YogyakartaCDI />
          <YogyakartaCDIHighlight />
          <PondokJayaPermai />
          <KlasterSekolah
            clusterElementarySchool={clusterElementarySchool.features[0] as GeoJSON.Feature}
            clusterJuniorHighSchool={clusterJuniorHighSchool.features[0] as GeoJSON.Feature}
            clusterHighSchool={clusterHighSchool.features[0] as GeoJSON.Feature}
          />
          <KlasterKesehatan
            clusterPharmacy={clusterPharmacy.features[0] as GeoJSON.Feature}
            clusterHealthCenter={clusterHealthCenter.features[0] as GeoJSON.Feature}
            clusterHospital={clusterHospital.features[0] as GeoJSON.Feature}
          />
          <KlasterEkonomi
            clusterBank={clusterBank.features[0] as GeoJSON.Feature}
            clusterMarket={clusterMarket.features[0] as GeoJSON.Feature}
            clusterTourism={clusterTourism.features[0] as GeoJSON.Feature}
          />
          <YogyakartaCDIHighlightHighest />
          <DusunSureng />
          <DusunSekolah
            dusunElementarySchool={dusunElementarySchool.features[0] as GeoJSON.Feature}
            dusunJuniorHighSchool={dusunJuniorHighSchool.features[0] as GeoJSON.Feature}
            dusunHighSchool={dusunHighSchool.features[0] as GeoJSON.Feature}
          />
          <DusunKesehatan
            dusunPharmacy={dusunPharmacy.features[0] as GeoJSON.Feature}
            dusunHealthCenter={dusunHealthCenter.features[0] as GeoJSON.Feature}
          />
          <DusunEkonomi
            dusunMarket={dusunMarket.features[0] as GeoJSON.Feature}
          />
          <Remarks />
          <Footer />
        </div>
      </MapProvider>
    </main>
  );
};

export default App;
