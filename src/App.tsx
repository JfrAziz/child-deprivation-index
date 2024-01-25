import "mapbox-gl";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, MapProvider, Source } from "react-map-gl";

import { useLayerStyle } from "./stores/map";

import { Hero } from "./sections/hero";
import indonesiaProvince from "./data/indonesia.json";
import yogyakartaRegencies from "./data/yogyakarta_regencies.json";
import {
  IndonesiaOverview,
  JavaPovertyOverview,
} from "./sections/indoensia-overview";

const App = () => {
  const state = useLayerStyle((state) => state);

  return (
    <main className="">
      <MapProvider>
        <div className="z-0 fixed inset-0 h-svh w-svw">
          <Map
            id="map"
            mapStyle={"mapbox://styles/mapbox/streets-v12"}
            mapboxAccessToken="pk.eyJ1IjoiamZyYXppeiIsImEiOiJjbDY3ZXBwaDcza210M2JvMXhtejFmeG9tIn0.TEidGiCBZ2ZOJyu-Aqifiw"
          >
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
              id="yogyakarta-regenciesyogyakarta-regencies"
              data={yogyakartaRegencies as GeoJSON.FeatureCollection}
            >
              <Layer
                type="fill"
                id="yogyakarta-regencies"
                paint={state["yogyakarta-regencies"]}
              />
            </Source>
          </Map>
        </div>

        <div className="z-10 absolute w-full">
          <Hero />
          <IndonesiaOverview />
          <JavaPovertyOverview />
          {/* {chapters.map((chapter) => (
            <Chapter key={chapter.id} {...chapter} />
          ))} */}
        </div>
      </MapProvider>
    </main>
  );
};

export default App;
