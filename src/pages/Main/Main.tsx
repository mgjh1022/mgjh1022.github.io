import { Icon, Image, Info, Name, Page } from "./styeld";

export const PageMain: React.FC = () => (
  <Page>
    <Image />
    <div style={{ width: "100%" }}>
      <Name />
    </div>
    <div style={{ position: "relative", width: "100%", textAlign: "left" }}>
      <Info />
      <Icon />
    </div>
  </Page>
);
