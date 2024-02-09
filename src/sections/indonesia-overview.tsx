import { useLayerStyle, usePopupStore } from "@/stores/map";
import { SectionCard, SectionWrapper } from "@/components/section-card";

export const IndonesiaOverview = () => {
  return (
    <SectionWrapper
      className="flex items-center flex-row"
      onSectionEnter={(map) => {
        map?.flyTo({
          duration: 3000,
          center: [118, 0],
          zoom: 4,
          curve: 3,
          pitch: 0.0,
          bearing: 0.0,
        });

        useLayerStyle.setState((state) => ({
          "indonesia-province": {
            ...state["indonesia-province"],
            "fill-opacity": 0.6,
            "fill-color": "#a3e635",
            "fill-outline-color": "#facc15",
            "fill-outline-color-transition" : {
              "duration": 6000000000,
              "delay": 60000000000
            }
          },
        }));
      }}
    >
      <SectionCard>
        <p>
          Poverty data are generally presented at the district/city level and
          are not sensitive to the diversity of regions in 34 provinces.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const JavaPovertyOverview = () => {
  return (
    <SectionWrapper
      className="flex items-center justify-end flex-row"
      onSectionEnter={(map) => {
        usePopupStore.setState({ active: false });

        map?.flyTo({
          duration: 1500,
          center: [110, -6],
          zoom: 6,
          pitch: 0.0,
          bearing: 0.0,
        });

        useLayerStyle.setState((state) => ({
          "indonesia-province": {
            ...state["indonesia-province"],
            "fill-color-transition": { duration: 2000 },
            "fill-opacity": [
              "case",
              ["==", ["get", "ADM1_PCODE"], "ID36"], // banten
              1,
              ["==", ["get", "ADM1_PCODE"], "ID32"], // Jawa barat
              1,
              ["==", ["get", "ADM1_PCODE"], "ID31"], // DKI
              1,
              ["==", ["get", "ADM1_PCODE"], "ID33"], // Jawa Tengah
              1,
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              1,
              ["==", ["get", "ADM1_PCODE"], "ID35"], // Jawa Timur
              1,
              0.2,
            ],
            "fill-color": [
              "case",
              ["==", ["get", "ADM1_PCODE"], "ID36"], // banten
              "#7f0000",
              ["==", ["get", "ADM1_PCODE"], "ID31"], // DKI
              "#de3f2b",
              ["==", ["get", "ADM1_PCODE"], "ID32"], // Jawa barat
              "#de3f2b",
              ["==", ["get", "ADM1_PCODE"], "ID33"], // Jawa Tengah
              "#f5764f",
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              "#fda772",
              ["==", ["get", "ADM1_PCODE"], "ID35"], // Jogjakarta
              "#fee5c2",
              "#FFF",
            ],
          },
        }));
      }}
    >
      <SectionCard title="Java Island">
        <p>
          Java Island as a place for 56.1 % of Indonesia's population has six
          provinces, one of which is D.I Yogyakarta Province.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const JavaHDI = () => {
  return (
    <SectionWrapper
      className="flex items-center flex-row"
      onSectionEnter={(map) => {
        map?.flyTo({
          duration: 500,
          center: [108.7713, -7.04617],
          zoom: 6.99,
          pitch: 45.53,
          bearing: 35.98,
        });
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        useLayerStyle.setState((state) => ({
          "indonesia-province": {
            ...state["indonesia-province"],
            "fill-color-transition": { duration: 2000 },
            "fill-opacity": [
              "case",
              ["==", ["get", "ADM1_PCODE"], "ID31"], // DKI
              1,
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              1,
              0.3,
            ],
            "fill-outline-color": "#000",
            "fill-color": [
              "case",
              ["==", ["get", "ADM1_PCODE"], "ID31"], // DKI
              "#de3f2b",
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              "#fda772",
              "#FFF",
            ],
          },
        }));

        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "bottom",
              lng: 106.80903,
              lat: -6.21004,
              title: "DKI Jakarta",
              subtitle: "Human Development Index",
              value: 83.55,
            },
            {
              pinPosition: "top",
              lng: 110.3861,
              lat: -7.88402,
              title: "DI Yogyakarta",
              subtitle: "Human Development Index",
              value: 88.61,
            },
          ],
        });
      }}
    >
      <SectionCard title="Human Development Index">
        <p>
          Province D.I Yogyakarta has the second highest human development index
          after the capital city of DKI Jakarta
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const JavaPoverty = () => {
  return (
    <SectionWrapper
      className="flex items-center justify-end flex-row"
      onSectionEnter={(map) => {
        map?.flyTo({
          duration: 500,
          center: [108.87454, -6.8634],
          zoom: 7.13,
          pitch: 42.03,
          bearing: -19.22,
        });

        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "indonesia-province": {
            ...state["indonesia-province"],
            "fill-opacity": [
              "case",
              ["==", ["get", "ADM1_PCODE"], "ID32"], // Jawa Barat
              1,
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              1,
              0.3,
            ],
            "fill-outline-color": "#000",
            "fill-color": [
              "case",
              ["==", ["get", "ADM1_PCODE"], "ID32"], // Jawa Barat
              "#de3f2b",
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              "#fda772",
              "#FFF",
            ],
          },
        }));

        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "bottom",
              lng: 107.5539,
              lat: -6.92971,
              title: "West Java",
              subtitle: "Poverty Rate",
              value: "7.26 %",
            },
            {
              pinPosition: "bottom",
              lng: 110.3861,
              lat: -7.88402,
              title: "DI Yogyakarta",
              subtitle: "Poverty Rate",
              value: "11.23 %",
            },
          ],
        });
      }}
    >
      <SectionCard title="Poverty">
        <p>
          but, Yogyakarta has the third highest poverty level after West Java
          Province on Java. In addition, as many as 47 percent of children
          experience deprivation in two dimensions of non-income poverty or more
          in 2015.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};
