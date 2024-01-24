import "mapbox-gl";
import "./globals.css";
import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { MapProvider, useMap } from "react-map-gl";
import { useIntersectionObserver } from "@uidotdev/usehooks";

interface Chapters {
  id: string;
  title: string;
  description: string;
  location: {
    center: [number, number];
    zoom: number;
    pitch: number;
    bearing: number;
  };
}

const chapters: Chapters[] = [
  {
    id: "1",
    title: "Display Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: {
      center: [-75.1308, 39.9779],
      zoom: 9.83,
      pitch: 0.0,
      bearing: 0.0,
    },
  },
  {
    id: "2",
    title: "Second Title",
    description: "Copy these sections to add to your story.",
    location: {
      center: [-75.13901, 39.97085],
      zoom: 11.62,
      pitch: 55.5,
      bearing: -7.2,
    },
  },
  {
    id: "3",
    title: "Third Title",
    description: "Copy these sections to add to your story.",
    location: {
      center: [-75.16468, 39.94503],
      zoom: 13.15,
      pitch: 60.0,
      bearing: -16.8,
    },
  },
  {
    id: "4",
    title: "Third Title",
    description: "Copy these sections to add to your story.",
    location: {
      center: [-75.20325, 39.99574],
      zoom: 14.99,
      pitch: 44.0,
      bearing: -40.0,
    },
  },
  {
    id: "5",
    title: "Third Title",
    description: "Copy these sections to add to your story.",
    location: {
      center: [-75.21223, 40.05028],
      zoom: 13.08,
      pitch: 47.5,
      bearing: 32.8,
    },
  },
  {
    id: "6",
    title: "Third Title",
    description: "Copy these sections to add to your story.",
    location: {
      center: [-75.05685, 40.06839],
      zoom: 13.73,
      pitch: 43.5,
      bearing: 96.8,
    },
  },
  {
    id: "7",
    title: "Third Title",
    description: "Copy these sections to add to your story.",
    location: {
      center: [-75.16468, 39.94503],
      zoom: 13.15,
      pitch: 60.0,
      bearing: -16.8,
    },
  },
];

const Chapter = ({ title, description, location }: Chapters) => {
  const { map } = useMap();

  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
    root: null,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      map?.flyTo({
        zoom: location.zoom,
        pitch: location.pitch,
        bearing: location.bearing,
        center: location.center,
      });
    }
  }, [entry, location, map]);

  return (
    <section
      className={`h-svh w-full bg-transparent flex items-center flex-row`}
    >
      <div ref={ref} className="bg-white w-96 border">
        <h2 className="text-xl">{title}</h2>
        <div className="tetx-lg">{description}</div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <main className="">
      <MapProvider>
        <div className="z-0 fixed inset-0 h-svh w-svw">
          <Map
            id="map"
            mapStyle={"mapbox://styles/mapbox/streets-v12"}
            mapboxAccessToken="pk.eyJ1IjoiamZyYXppeiIsImEiOiJjbDY3ZXBwaDcza210M2JvMXhtejFmeG9tIn0.TEidGiCBZ2ZOJyu-Aqifiw"
          />
        </div>
        <div className="z-10 absolute w-full">
          {chapters.map((chapter) => (
            <Chapter key={chapter.id} {...chapter} />
          ))}
        </div>
      </MapProvider>
    </main>
  );
};

export default App;
