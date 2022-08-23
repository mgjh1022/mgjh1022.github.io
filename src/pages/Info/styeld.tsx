import styled from "@emotion/styled";

import { getPercentHeightCss, getPercentWidthCss } from "@/utils";
import { Page as Page_, Svg } from "@/atoms";

import { ReactComponent as NAME } from "./svg/name.svg";
import { ReactComponent as INFO_TITLE } from "./svg/info-title.svg";
import { ReactComponent as INFO_GROOM_TITLE } from "./svg/info-groom_title.svg";
import { ReactComponent as INFO_GROOM_BANK } from "./svg/info-groom_bank.svg";
import { ReactComponent as INFO_GROOM_NAME } from "./svg/info-groom_name.svg";
import { ReactComponent as INFO_BRIDE_TITLE } from "./svg/info-bride_title.svg";
import { ReactComponent as INFO_BRIDE_BANK } from "./svg/info-bride_bank.svg";
import { ReactComponent as INFO_BRIDE_NAME } from "./svg/info-bride_name.svg";

export const Page = styled(Page_)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactArea = styled(Page)`
  width: 100%;
  height: 47.5%;
  background-color: #fff;
`;

export const Name = () => <Svg Origin={NAME} width={1000} />;

export const InfoArea = styled(Page)`
  width: 100%;
  height: 52.5%;
  background-color: #f1f1f1;
`;

export const BankWarp = styled.div`
  position: relative;
  width: ${getPercentWidthCss(1020)};
`;

const InfoSubTitle = {
  marginTop: getPercentHeightCss(102 * 1.5),
};

export const InfoTitle: React.FC = () => <Svg Origin={INFO_TITLE} />;
export const GroomTitle: React.FC = () => (
  <Svg Origin={INFO_GROOM_TITLE} style={InfoSubTitle} />
);
export const GroomBank: React.FC = () => (
  <Svg Origin={INFO_GROOM_BANK} style={{ marginTop: "5%" }} />
);
export const GroomName: React.FC = () => (
  <Svg Origin={INFO_GROOM_NAME} style={{ marginTop: "2%" }} />
);

export const BrideTitle: React.FC = () => (
  <Svg Origin={INFO_BRIDE_TITLE} style={InfoSubTitle} />
);
export const BrideBank: React.FC = () => (
  <Svg Origin={INFO_BRIDE_BANK} style={{ marginTop: "5%" }} />
);
export const BrideName: React.FC = () => (
  <Svg Origin={INFO_BRIDE_NAME} style={{ marginTop: "2%" }} />
);
