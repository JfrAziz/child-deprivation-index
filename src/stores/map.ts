import { create } from "zustand";
import { FillPaint, LinePaint, Marker } from "mapbox-gl";

interface LayerStyle {
  "indonesia-province": FillPaint;
  "yogyakarta-regencies": FillPaint;
  graticule: LinePaint;
  "klaster-sd": LinePaint;
  "route-klaster-sd": LinePaint;
  "klaster-smp": LinePaint;
}

export const useLayerStyle = create<LayerStyle>()(() => ({
  "indonesia-province": {
    "fill-opacity": 0,
    "fill-color": "#FFF",
    "fill-outline-color": "#000",
    "fill-color-transition": { duration: 2000 },
    "fill-opacity-transition": { duration: 2000 },
    "fill-outline-color-transition": { duration: 2000 },
  },
  "yogyakarta-regencies": {
    "fill-color": "#FFF",
    "fill-opacity": 0,
    "fill-opacity-transition": { duration: 500 },
    "fill-outline-color-transition": { duration: 2000 },
  },
  graticule: {
    "line-opacity": 0,
    "line-color": "#777",
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-sd": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 2,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-sd": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 2,
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-smp": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 2,
    "line-opacity-transition": { duration: 1000 },
  },
}));

export const markersStore = create<MarkerStore>((set, get) => ({
  markers: [],
  clearMarkers: () => {
    get().markers.map((marker) => marker.remove());
    set({ markers: [] });
  },
  replaceMarkers: (markers: Marker[]) => {
    set({ markers: markers });
  },
}));

interface Popup {
  lng: number;
  lat: number;
  title: string;
  subtitle: string;
  value: string | number;
  pinPosition: "top" | "bottom";
}

interface PopupStore {
  active: boolean;
  popups: Popup[];
}

interface MarkerStore {
  markers: Marker[];
  clearMarkers: () => void;
  replaceMarkers: (markers: Marker[]) => void;
}

export const usePopupStore = create<PopupStore>()(() => ({
  active: false,
  popups: [],
}));
