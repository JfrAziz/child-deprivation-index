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
