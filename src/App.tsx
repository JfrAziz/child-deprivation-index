import "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, MapProvider, Popup, Source } from "react-map-gl";
import "./globals.css";

import { useLayerStyle, usePopupStore } from "./stores/map";

import { useEffect, useState } from "react";
import graticule from "./data/graticule";
import indonesiaProvince from "./data/indonesia.json";
import klasterSd from "./data/klaster/sd.json";
import klasterSmp from "./data/klaster/smp.json";
import klasterSma from "./data/klaster/sma.json";
import klasterApotek from "./data/klaster/apotek.json";
import klasterPuskesmas from "./data/klaster/puskesmas.json";
import klasterRumahSakit from "./data/klaster/rumah_sakit.json";
import klasterPasar from "./data/klaster/market.json";
import klasterBank from "./data/klaster/bank.json";
import klasterTourism from "./data/klaster/tourism.json";
import yogyakartaRegencies from "./data/yogyakarta_regencies.json";
import { BPSCommitment } from "./sections/bps-commitment";
import { ChildDeprivation } from "./sections/child-deprivation";
import { Cityscape } from "./sections/cityscape";
import { Hero } from "./sections/hero";
import {
  IndonesiaOverview,
  JavaHDI,
  JavaPoverty,
  JavaPovertyOverview,
} from "./sections/indonesia-overview";
import { Quotes } from "./sections/quotes";
import {
  KlasterEkonomi,
  KlasterKesehatan,
  KlasterSekolah,
  MethodExplanation,
  PondokJayaPermai,
  RemoteSensingLayers,
  YogyakartaCDI,
  YogyakartaCDIHighlight,
  YogyakartaRegencies,
} from "./sections/satellite";
import { ThemeButton } from "./sections/theme-button";
import { Footer } from "./sections/footer";

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
              id="klaster-sd"
              data={klasterSd as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer type="line" id="klaster-sd" paint={state["klaster-sd"]} />
            </Source>
            <Source
              type="geojson"
              id="route-klaster-sd"
              data={klasterSd as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-klaster-sd"
                paint={state["route-klaster-sd"]}
              />
            </Source>
            <Source
              type="geojson"
              id="klaster-smp"
              data={klasterSmp as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="klaster-smp"
                paint={state["klaster-smp"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-klaster-smp"
              data={klasterSmp as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-klaster-smp"
                paint={state["route-klaster-smp"]}
              />
            </Source>
            <Source
              type="geojson"
              id="klaster-sma"
              data={klasterSma as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="klaster-sma"
                paint={state["klaster-sma"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-klaster-sma"
              data={klasterSma as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-klaster-sma"
                paint={state["route-klaster-sma"]}
              />
            </Source>
            <Source
              type="geojson"
              id="klaster-apotek"
              data={klasterApotek as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="klaster-apotek"
                paint={state["klaster-apotek"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-klaster-apotek"
              data={klasterApotek as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-klaster-apotek"
                paint={state["route-klaster-apotek"]}
              />
            </Source>
            <Source
              type="geojson"
              id="klaster-puskesmas"
              data={klasterPuskesmas as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="klaster-puskesmas"
                paint={state["klaster-puskesmas"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-klaster-puskesmas"
              data={klasterPuskesmas as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-klaster-puskesmas"
                paint={state["route-klaster-puskesmas"]}
              />
            </Source>
            <Source
              type="geojson"
              id="klaster-rumah-sakit"
              data={klasterRumahSakit as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="klaster-rumah-sakit"
                paint={state["klaster-rumah-sakit"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-klaster-rumah-sakit"
              data={klasterRumahSakit as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-klaster-rumah-sakit"
                paint={state["route-klaster-rumah-sakit"]}
              />
            </Source>
            <Source
              type="geojson"
              id="klaster-tourism"
              data={klasterTourism as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="klaster-tourism"
                paint={state["klaster-tourism"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-klaster-tourism"
              data={klasterTourism as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-klaster-tourism"
                paint={state["route-klaster-tourism"]}
              />
            </Source>
            <Source
              type="geojson"
              id="klaster-bank"
              data={klasterBank as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="klaster-bank"
                paint={state["klaster-bank"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-klaster-bank"
              data={klasterBank as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-klaster-bank"
                paint={state["route-klaster-bank"]}
              />
            </Source>
            <Source
              type="geojson"
              id="klaster-pasar"
              data={klasterPasar as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="klaster-pasar"
                paint={state["klaster-pasar"]}
              />
            </Source>
            <Source
              type="geojson"
              id="route-klaster-pasar"
              data={klasterPasar as GeoJSON.FeatureCollection}
              lineMetrics
            >
              <Layer
                type="line"
                id="route-klaster-pasar"
                paint={state["route-klaster-pasar"]}
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
          {/* <MethodExplanation /> */}
          <RemoteSensingLayers />
          <YogyakartaRegencies />
          <YogyakartaCDI />
          <YogyakartaCDIHighlight />
          <PondokJayaPermai />
          <KlasterSekolah
            klasterSd={klasterSd.features[0] as GeoJSON.Feature}
            klasterSmp={klasterSmp.features[0] as GeoJSON.Feature}
            klasterSma={klasterSma.features[0] as GeoJSON.Feature}
          />
          <KlasterKesehatan
            klasterApotek={klasterApotek.features[0] as GeoJSON.Feature}
            klasterPuskesmas={klasterPuskesmas.features[0] as GeoJSON.Feature}
            klasterRumahSakit={klasterRumahSakit.features[0] as GeoJSON.Feature}
          />
          <KlasterEkonomi
            klasterBank={klasterBank.features[0] as GeoJSON.Feature}
            klasterPasar={klasterPasar.features[0] as GeoJSON.Feature}
            klasterTourism={klasterTourism.features[0] as GeoJSON.Feature}
          />
          <Footer />
        </div>
      </MapProvider>
    </main>
  );
};

export default App;
