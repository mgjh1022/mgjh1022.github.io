import styled from "@emotion/styled";

import { getPercentHeightCss, getPercentWidthCss } from "@utils";
import { ClearA, Page as Page_ } from "@/atoms";

import { ReactComponent as Map_ } from "./svg/map.svg";
import { ReactComponent as Info_ } from "./svg/info.svg";

export const Page = styled(Page_)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MapArea = styled(Page)`
  width: 100%;
  height: 47.5%;
  background-color: #f1f1f1;
`;

export const ButtonArea = styled.div``;

export const Button = styled(ClearA)`
  position: relative;
  padding: 0 1rem;
  font-size: 1.1rem;
  color: #595857;

  & + & {
    ::before {
      content: "";
      position: absolute;
      left: 0;
      height: 1.1rem;
      border-left: 1px solid #b3b3b3;
    }
  }
`;

export const Map = styled(Map_)`
  margin-top: ${getPercentHeightCss(210)};
  width: ${getPercentWidthCss(1236)};
  height: auto;
`;

export const InfoArea = styled(Page)`
  width: 100%;
  height: 52.5%;
  background-color: #fff;
  align-items: flex-start;
`;

export const Info = styled(Info_)`
  margin-left: ${getPercentWidthCss(240)};
  width: ${getPercentWidthCss(779)};
  height: auto;
`;
