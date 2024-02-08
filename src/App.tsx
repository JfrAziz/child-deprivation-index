import "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, MapProvider, Popup, Source } from "react-map-gl";
import "./globals.css";

import { useLayerStyle, usePopupStore } from "./stores/map";

import { useEffect, useState } from "react";
import graticule from "./data/graticule"; 
import { ThemeButton } from "./sections/theme-button";
import { Hero } from "./sections/hero";
import { Cityscape } from "./sections/cityscape";
import { Quotes } from "./sections/quotes";
import {
  IndonesiaOverview,
  JavaHDI,
  JavaPoverty,
  JavaPovertyOverview,
} from "./sections/indonesia-overview";
import { ChildDeprivation } from "./sections/child-deprivation";
import { BPSCommitment } from "./sections/bps-commitment";
import {
  KlasterSd,
  MethodExplanation,
  YogyakartaCDI,
  YogyakartaRegencies,
} from "./sections/satellite";
import indonesiaProvince from "./data/indonesia.json";
import klasterSd from "./data/klaster/sd.json";
import klasterSmp from "./data/klaster/smp.json";
import yogyakartaRegencies from "./data/yogyakarta_regencies.json";


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
                >
                  <div className="bg-background p-4 border-border rounded-lg min-w-40 text-foreground">
                    <div className="text-lg font-mono uppercase">
                      {popup.title}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {popup.subtitle}
                    </div>
                    <div className="text-3xl font-bold">{popup.value}</div>
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
          <MethodExplanation />
          <YogyakartaRegencies />
          <YogyakartaCDI />
          <KlasterSd klasterSd={klasterSd.features[0] as GeoJSON.Feature} />
        </div>
      </MapProvider>
    </main>
  );
};

export default App;
