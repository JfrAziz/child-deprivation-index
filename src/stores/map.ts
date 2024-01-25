import { create } from "zustand";
import { FillPaint, LinePaint } from "mapbox-gl";

interface LayerStyle {
  "indonesia-province": FillPaint;
  "yogyakarta-regencies": FillPaint;
  graticule: LinePaint;
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
    "fill-opacity-transition": { duration: 2000 },
    "fill-outline-color-transition": { duration: 2000 },
  },
  graticule: {
    "line-opacity": 0,
    "line-color": "#777",
    "line-opacity-transition": { duration: 1000 },
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

export const usePopupStore = create<PopupStore>()(() => ({
  active: false,
  popups: [],
}));
