import { FillPaint, LinePaint, Marker } from "mapbox-gl";
import { create } from "zustand";

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
  "dusun-sd": LinePaint;
  "route-dusun-sd": LinePaint;
  "dusun-smp": LinePaint;
  "route-dusun-smp": LinePaint;
  "dusun-sma": LinePaint;
  "route-dusun-sma": LinePaint;
  "dusun-apotek": LinePaint;
  "route-dusun-apotek": LinePaint;
  "dusun-puskesmas": LinePaint;
  "route-dusun-puskesmas": LinePaint;
  "dusun-rumah-sakit": LinePaint;
  "route-dusun-rumah-sakit": LinePaint;
  "dusun-bank": LinePaint;
  "route-dusun-bank": LinePaint;
  "dusun-tourism": LinePaint;
  "route-dusun-tourism": LinePaint;
  "dusun-pasar": LinePaint;
  "route-dusun-pasar": LinePaint;
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
  "dusun-apotek": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-apotek": {
    "line-opacity": 0,
    "line-color": "rgb(0,0,0)",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "dusun-puskesmas": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-puskesmas": {
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
  "dusun-pasar": {
    "line-opacity": 0,
    "line-color": "#ece0db",
    "line-width": 4,
    "line-opacity-transition": { duration: 1000 },
  },
  "route-dusun-pasar": {
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
      "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
      "route-klaster-sd": {
        ...state["route-klaster-sd"],
        "line-opacity": 0,
      },
      "klaster-smp": { ...state["klaster-smp"], "line-opacity": 0 },
      "route-klaster-smp": {
        ...state["route-klaster-smp"],
        "line-opacity": 0,
      },
      "klaster-sma": { ...state["klaster-sma"], "line-opacity": 0 },
      "route-klaster-sma": {
        ...state["route-klaster-sma"],
        "line-opacity": 0,
      },
      "klaster-apotek": {
        ...state["klaster-apotek"],
        "line-opacity": 0,
      },
      "route-klaster-apotek": {
        ...state["route-klaster-apotek"],
        "line-opacity": 0,
      },
      "klaster-puskesmas": {
        ...state["klaster-puskesmas"],
        "line-opacity": 0,
      },
      "route-klaster-puskesmas": {
        ...state["route-klaster-puskesmas"],
        "line-opacity": 0,
      },
      "klaster-rumah-sakit": {
        ...state["klaster-rumah-sakit"],
        "line-opacity": 0,
      },
      "route-klaster-rumah-sakit": {
        ...state["route-klaster-rumah-sakit"],
        "line-opacity": 0,
      },
      "klaster-bank": { ...state["klaster-bank"], "line-opacity": 0 },
      "route-klaster-bank": {
        ...state["route-klaster-bank"],
        "line-opacity": 0,
      },
      "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 0 },
      "route-klaster-tourism": {
        ...state["route-klaster-tourism"],
        "line-opacity": 0,
      },
      "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 0 },
      "route-klaster-pasar": {
        ...state["route-klaster-pasar"],
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
      "dusun-apotek": {
        ...state["dusun-apotek"],
        "line-opacity": 0,
      },
      "route-dusun-apotek": {
        ...state["route-dusun-apotek"],
        "line-opacity": 0,
      },
      "dusun-puskesmas": {
        ...state["dusun-puskesmas"],
        "line-opacity": 0,
      },
      "route-dusun-puskesmas": {
        ...state["route-dusun-puskesmas"],
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
      "dusun-pasar": { ...state["dusun-pasar"], "line-opacity": 0 },
      "route-dusun-pasar": {
        ...state["route-dusun-pasar"],
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
