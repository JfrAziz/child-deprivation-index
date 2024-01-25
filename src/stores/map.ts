import { create } from "zustand";
import { FillPaint } from "mapbox-gl";

interface LayerStyle {
  "indonesia-province": FillPaint;
  "yogyakarta-regencies": FillPaint;
}

export const useLayerStyle = create<LayerStyle>()(() => ({
  "indonesia-province": {
    "fill-color": "#FF0",
    "fill-opacity": 0,
    "fill-color-transition": { duration: 2000 },
    "fill-opacity-transition": { duration: 2000 },
    "fill-outline-color-transition": { duration: 2000 },
  },
  "yogyakarta-regencies": {
    "fill-color": "#000",
    "fill-opacity": 0,
    "fill-opacity-transition": { duration: 2000 },
    "fill-outline-color-transition": { duration: 2000 },
  },
}));

interface NumberPopup {
  position: "top" | "bottom";
  lng: number;
  lat: number;
  title: string;
  subtitle: string;
  value: string | number;
}

interface PopupStore {
  active: boolean;
  numberPopups: NumberPopup[];
}

export const usePopupStore = create<PopupStore>()(() => ({
  active: false,
  numberPopups: [],
}));
