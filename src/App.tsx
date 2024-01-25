import "mapbox-gl";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, MapProvider, Popup, Source } from "react-map-gl";

import { useLayerStyle, usePopupStore } from "./stores/map";

import { Hero } from "./sections/hero";
import indonesiaProvince from "./data/indonesia.json";
import yogyakartaRegencies from "./data/yogyakarta_regencies.json";
import {
  IndonesiaOverview,
  JavaHDI,
  JavaPoverty,
  JavaPovertyOverview,
} from "./sections/indoensia-overview";
import graticule from "./data/graticule";
import { HDIExplanation } from "./sections/hdi";

const App = () => {
  const state = useLayerStyle((state) => state);

  const popups = usePopupStore((state) => state.numberPopups);
  const isPopupActive = usePopupStore((state) => state.active);

  return (
    <main className="">
      <MapProvider>
        <div className="z-0 fixed inset-0 h-svh w-svw">
          <Map
            id="map"
            mapStyle={"mapbox://styles/mapbox/streets-v12"}
            mapboxAccessToken="pk.eyJ1IjoiamZyYXppeiIsImEiOiJjbDY3ZXBwaDcza210M2JvMXhtejFmeG9tIn0.TEidGiCBZ2ZOJyu-Aqifiw"
          >
            {isPopupActive &&
              popups.map((popup, index) => (
                <Popup
                  key={index}
                  latitude={popup.lat}
                  longitude={popup.lng}
                  anchor={popup.position}
                  className="!opacity-60"
                >
                  <div className="bg-foreground text-background p-2 border-border rounded-sm">
                    <div className="text-lg font-bold">{popup.title}</div>
                    <div className="text-muted text-sm">{popup.subtitle}</div>
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
              <Layer
                type="line"
                id="graticule"
                paint={{ "line-color": "#000" }}
              />
            </Source>
          </Map>
        </div>

        <div className="z-10 absolute w-full">
          <Hero />
          <IndonesiaOverview />
          <JavaPovertyOverview />
          <JavaHDI />
          <JavaPoverty />
          <HDIExplanation />
        </div>
      </MapProvider>
    </main>
  );
};

export default App;
