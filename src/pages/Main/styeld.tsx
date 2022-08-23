import styled from "@emotion/styled";

import { getPercentHeightCss, getPercentWidthCss } from "@utils";
import { Page as Page_, Svg } from "@/atoms";

import { ReactComponent as IMAGE } from "./svg/image.svg";
import { ReactComponent as NAME } from "./svg/name.svg";
import { ReactComponent as INFO } from "./svg/info.svg";
import { ReactComponent as Icon_ } from "./svg/icon.svg";

export const Page = styled(Page_)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: ${getPercentWidthCss(1020)};
`;

export const Image: React.FC = () => (
  <Svg
    Origin={IMAGE}
    style={{
      marginLeft: `-${getPercentWidthCss(63)}`,
      width: getPercentWidthCss(1083),
    }}
  />
);

export const Name: React.FC = () => (
  <Svg
    Origin={NAME}
    style={{
      marginTop: getPercentHeightCss(80),
      width: getPercentWidthCss(725),
    }}
  />
);

export const Info: React.FC = () => (
  <Svg
    Origin={INFO}
    style={{
      marginTop: getPercentHeightCss(120),
      width: getPercentWidthCss(422),
    }}
  />
);

export const Icon = styled(Icon_)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: ${getPercentWidthCss(39)};
  height: auto;
`;
