import { FillPaint, LinePaint, Marker } from "mapbox-gl";
import { create } from "zustand";

interface LayerStyle {
  "indonesia-province": FillPaint;
  "yogyakarta-regencies": FillPaint;
  "lowest-cdi": FillPaint;
  graticule: LinePaint;
  "cluster-sd": LinePaint;
  "route-cluster-sd": LinePaint;
  "cluster-smp": LinePaint;
  "route-cluster-smp": LinePaint;
  "cluster-sma": LinePaint;
  "route-cluster-sma": LinePaint;
  "cluster-pharmacy": LinePaint;
  "route-cluster-pharmacy": LinePaint;
  "cluster-health_center": LinePaint;
  "route-cluster-health_center": LinePaint;
  "cluster-rumah-sakit": LinePaint;
  "route-cluster-rumah-sakit": LinePaint;
  "cluster-bank": LinePaint;
  "route-cluster-bank": LinePaint;
  "cluster-tourism": LinePaint;
  "route-cluster-tourism": LinePaint;
  "cluster-market": LinePaint;
  "route-cluster-market": LinePaint;
  "dusun-sd": LinePaint;
  "route-dusun-sd": LinePaint;
  "dusun-smp": LinePaint;
  "route-dusun-smp": LinePaint;
  "dusun-sma": LinePaint;
  "route-dusun-sma": LinePaint;
  "dusun-pharmacy": LinePaint;
  "route-dusun-pharmacy": LinePaint;
  "dusun-health_center": LinePaint;
  "route-dusun-health_center": LinePaint;
  "dusun-rumah-sakit": LinePaint;
  "route-dusun-rumah-sakit": LinePaint;
  "dusun-bank": LinePaint;
  "route-dusun-bank": LinePaint;
  "dusun-tourism": LinePaint;
  "route-dusun-tourism": LinePaint;
  "dusun-market": LinePaint;
  "route-dusun-market": LinePaint;
  resetRouteStyles: () => void;
}

export const useLayerStyle = create<LayerStyle>((set) => ({
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
  "lowest-cdi": {
    'fill-outline-color': '#000', 
    'fill-outline-opacity': 1,
    "fill-opacity-transition": { duration: 500 },
    "fill-outline-color-transition": { duration: 2000 },
  },
  graticule: {
    "line-opacity": 0,
    "line-color": "#777",
    "line-opacity-transition": { duration: 1000 },
  },
  "cluster-sd": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-cluster-sd": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "cluster-smp": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-cluster-smp": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "cluster-sma": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-cluster-sma": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "cluster-pharmacy": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-cluster-pharmacy": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "cluster-health_center": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-cluster-health_center": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "cluster-rumah-sakit": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-cluster-rumah-sakit": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "cluster-bank": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-cluster-bank": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "cluster-tourism": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-cluster-tourism": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "cluster-market": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-cluster-market": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-sd": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-sd": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-smp": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-smp": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-sma": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-sma": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-pharmacy": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-pharmacy": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-health_center": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-health_center": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-rumah-sakit": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-rumah-sakit": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-bank": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-bank": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-tourism": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-tourism": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-market": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-market": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  resetRouteStyles: () =>
    set((state) => ({
      graticule: { ...state["graticule"], "line-opacity": 0 },
      "indonesia-province": {
        ...state["indonesia-province"],
        "fill-opacity": 0,
      },
      "yogyakarta-regencies": {
        ...state["yogyakarta-regencies"],
        "fill-opacity": 0,
      },
      "cluster-sd": { ...state["cluster-sd"], "line-opacity": 0 },
      "route-cluster-sd": {
        ...state["route-cluster-sd"],
        "line-opacity": 0,
      },
      "cluster-smp": { ...state["cluster-smp"], "line-opacity": 0 },
      "route-cluster-smp": {
        ...state["route-cluster-smp"],
        "line-opacity": 0,
      },
      "cluster-sma": { ...state["cluster-sma"], "line-opacity": 0 },
      "route-cluster-sma": {
        ...state["route-cluster-sma"],
        "line-opacity": 0,
      },
      "cluster-pharmacy": {
        ...state["cluster-pharmacy"],
        "line-opacity": 0,
      },
      "route-cluster-pharmacy": {
        ...state["route-cluster-pharmacy"],
        "line-opacity": 0,
      },
      "cluster-health_center": {
        ...state["cluster-health_center"],
        "line-opacity": 0,
      },
      "route-cluster-health_center": {
        ...state["route-cluster-health_center"],
        "line-opacity": 0,
      },
      "cluster-rumah-sakit": {
        ...state["cluster-rumah-sakit"],
        "line-opacity": 0,
      },
      "route-cluster-rumah-sakit": {
        ...state["route-cluster-rumah-sakit"],
        "line-opacity": 0,
      },
      "cluster-bank": { ...state["cluster-bank"], "line-opacity": 0 },
      "route-cluster-bank": {
        ...state["route-cluster-bank"],
        "line-opacity": 0,
      },
      "cluster-tourism": { ...state["cluster-tourism"], "line-opacity": 0 },
      "route-cluster-tourism": {
        ...state["route-cluster-tourism"],
        "line-opacity": 0,
      },
      "cluster-market": { ...state["cluster-market"], "line-opacity": 0 },
      "route-cluster-market": {
        ...state["route-cluster-market"],
        "line-opacity": 0,
      },
      "dusun-sd": { ...state["dusun-sd"], "line-opacity": 0 },
      "route-dusun-sd": {
        ...state["route-dusun-sd"],
        "line-opacity": 0,
      },
      "dusun-smp": { ...state["dusun-smp"], "line-opacity": 0 },
      "route-dusun-smp": {
        ...state["route-dusun-smp"],
        "line-opacity": 0,
      },
      "dusun-sma": { ...state["dusun-sma"], "line-opacity": 0 },
      "route-dusun-sma": {
        ...state["route-dusun-sma"],
        "line-opacity": 0,
      },
      "dusun-pharmacy": {
        ...state["dusun-pharmacy"],
        "line-opacity": 0,
      },
      "route-dusun-pharmacy": {
        ...state["route-dusun-pharmacy"],
        "line-opacity": 0,
      },
      "dusun-health_center": {
        ...state["dusun-health_center"],
        "line-opacity": 0,
      },
      "route-dusun-health_center": {
        ...state["route-dusun-health_center"],
        "line-opacity": 0,
      },
      "dusun-rumah-sakit": {
        ...state["dusun-rumah-sakit"],
        "line-opacity": 0,
      },
      "route-dusun-rumah-sakit": {
        ...state["route-dusun-rumah-sakit"],
        "line-opacity": 0,
      },
      "dusun-bank": { ...state["dusun-bank"], "line-opacity": 0 },
      "route-dusun-bank": {
        ...state["route-dusun-bank"],
        "line-opacity": 0,
      },
      "dusun-tourism": { ...state["dusun-tourism"], "line-opacity": 0 },
      "route-dusun-tourism": {
        ...state["route-dusun-tourism"],
        "line-opacity": 0,
      },
      "dusun-market": { ...state["dusun-market"], "line-opacity": 0 },
      "route-dusun-market": {
        ...state["route-dusun-market"],
        "line-opacity": 0,
      },
    })),
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
