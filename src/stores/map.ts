import { create } from "zustand";
import { FillPaint, LinePaint, Marker } from "mapbox-gl";

interface LayerStyle {
  "indonesia-province": FillPaint;
  "yogyakarta-regencies": FillPaint;
  graticule: LinePaint;
  "klaster-sd": LinePaint;
  "route-klaster-sd": LinePaint;
  "klaster-smp": LinePaint;
  "route-klaster-smp": LinePaint;
  "klaster-sma": LinePaint;
  "route-klaster-sma": LinePaint;
  "klaster-apotek": LinePaint;
  "route-klaster-apotek": LinePaint;
  "klaster-puskesmas": LinePaint;
  "route-klaster-puskesmas": LinePaint;
  "klaster-rumah-sakit": LinePaint;
  "route-klaster-rumah-sakit": LinePaint;
  "klaster-bank": LinePaint;
  "route-klaster-bank": LinePaint;
  "klaster-tourism": LinePaint;
  "route-klaster-tourism": LinePaint;
  "klaster-pasar": LinePaint;
  "route-klaster-pasar": LinePaint;
}

export const useLayerStyle = create<LayerStyle>(() => ({
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
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-sd": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-smp": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-smp": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-sma": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-sma": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-apotek": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-apotek": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-puskesmas": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-puskesmas": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-rumah-sakit": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-rumah-sakit": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-bank": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-bank": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-tourism": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-tourism": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "klaster-pasar": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-klaster-pasar": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
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
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  location?: string | JSX.Element;
  value: string | number | JSX.Element;
  paragraph?: string | JSX.Element; 
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
