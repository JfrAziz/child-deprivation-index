import { useLayerStyle, usePopupStore } from "@/stores/map";
import { SectionCard, SectionWrapper } from "@/components/section-card";

export const IndonesiaOverview = () => {
  return (
    <SectionWrapper
      className="flex items-center flex-row"
      onSectionEnter={(map) => {
        map?.flyTo({
          duration: 3000,
          center: [118, -2],
          zoom: 4,
          curve: 3,
          pitch: 0.0,
          bearing: 4,
        });

        useLayerStyle.setState((state) => ({
          "indonesia-province": {
            ...state["indonesia-province"],
            "fill-opacity": 0.6,
            "fill-color": "#a3e635",
            "fill-outline-color": "#facc15",
            "fill-outline-color-transition": {
              duration: 6000000000,
              delay: 60000000000,
            },
          },
        }));
      }}
    >
      <SectionCard>
        <p>
          The official poverty statistics in Indonesia are currently presented
          at the district or city level, which overlooks the diverse conditions
          across the various regions within the 34 provinces.
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
          duration: 2000,
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
              0.8,
              ["==", ["get", "ADM1_PCODE"], "ID32"], // Jawa barat
              0.8,
              ["==", ["get", "ADM1_PCODE"], "ID31"], // DKI
              0.8,
              ["==", ["get", "ADM1_PCODE"], "ID33"], // Jawa Tengah
              0.8,
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              0.8,
              ["==", ["get", "ADM1_PCODE"], "ID35"], // Jawa Timur
              0.8,
              0.4,
            ],
            "fill-color": [
              "case",
              ["==", ["get", "ADM1_PCODE"], "ID36"], // banten
              "#3300DD",
              ["==", ["get", "ADM1_PCODE"], "ID31"], // DKI
              "#9A3046",
              ["==", ["get", "ADM1_PCODE"], "ID32"], // Jawa barat
              "#DD5C00",
              ["==", ["get", "ADM1_PCODE"], "ID33"], // Jawa Tengah
              "#DD0061",
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              "#FE0020",
              ["==", ["get", "ADM1_PCODE"], "ID35"], // Jogjakarta
              "#67009C",
              "#d9f99d",
            ],
          },
        }));
      }}
    >
      <SectionCard>
        <h1 className="mb-2 text-5xl font-bold text-amber-300 ">
          56.1
          <span className="text-3xl">&nbsp;%</span>
        </h1>
        <p>
          Java Island, home to 56.1 % of Indonesia's population, comprises six
          provinces, <br />
          including Yogyakarta.
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
          duration: 4000,
          center: [108.30713, -7.44617],
          zoom: 7.29,
          pitch: 47.53,
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
              "#d97706",
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              "#f59e0b",
              "#d9f99d",
            ],
          },
        }));

        usePopupStore.setState({
          active: true,
          popups: [
            {
              pinPosition: "bottom",
              lng: 106.80903,
              lat: -6.17804,
              title: "HDI",
              subtitle: (
                <>
                  Human Development Index
                  <br />
                  <span className="text-xl font-black">2023</span>
                </>
              ) as unknown as JSX.Element,
              location: "Jakarta",
              value: 82.46,
            },
            {
              pinPosition: "top",
              lng: 110.3861,
              lat: -7.99402,
              title: "HDI",
              subtitle: (
                <>
                  Human Development Index
                  <br />
                  <span className="text-xl font-black">2023</span>
                </>
              ) as unknown as JSX.Element,
              location: "Yogyakarta",
              value: 81.07,
            },
          ],
        });
      }}
    >
      <SectionCard title="Human Development Index">
        <p>
          Yogyakarta Province has the second highest human development index
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
          duration: 4000,
          center: [109.87454, -6.8634],
          zoom: 7.213,
          pitch: 40.03,
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
              "#d97706",
              ["==", ["get", "ADM1_PCODE"], "ID34"], // Jogjakarta
              "#f59e0b",
              "#d9f99d",
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
              title: "Poverty Rate",
              subtitle: (
                <>
                  <span className="text-xl font-black">March 2023</span>
                </>
              ) as unknown as JSX.Element,
              // subtitle: "The percentage of people living below the poverty line",
              location: "Jawa Barat",
              value: "7.62%",
            },
            {
              pinPosition: "bottom",
              lng: 110.3861,
              lat: -7.60402,
              title: "Poverty Rate",
              subtitle: (
                <>
                  <span className="text-xl font-black">March 2023</span>
                </>
              ) as unknown as JSX.Element,
              // subtitle: "The percentage of people living below the poverty line",
              location: "Yogyakarta",
              value: "11.04%",
            },
          ],
        });
      }}
    >
      <SectionCard>
        <p>
          Nevertheless, Yogyakarta ranks among the top 3 provinces in Java
          Island with the highest poverty rates, following West Java.
          Additionally, in 2015, as many as 47% of children experienced
          deprivation in two dimensions of non-income poverty or more.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};
