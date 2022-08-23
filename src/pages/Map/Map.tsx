import {
  Button,
  ButtonArea,
  Info,
  InfoArea,
  Map,
  MapArea,
  Page,
} from "./styeld";

export const PageMap: React.FC = () => (
  <Page>
    <MapArea>
      <ButtonArea>
        <Button
          href="https://map.naver.com/v5/entry/place/37537597?placePath=%2Fhome"
          target="_blank"
        >
          네이버
        </Button>
        <Button href="https://map.kakao.com/link/map/27339651" target="_blank">
          카카오
        </Button>
      </ButtonArea>
      <Map />
    </MapArea>
    <InfoArea>
      <Info />
    </InfoArea>
  </Page>
);
