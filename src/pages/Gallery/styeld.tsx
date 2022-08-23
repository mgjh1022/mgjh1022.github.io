import styled from "@emotion/styled";

import { getPercentHeightCss, getPercentWidthCss } from "@utils";
import { Page as Page_ } from "@/atoms";

import { ReactComponent as Wording_ } from "./svg/wording.svg";

export const Page = styled(Page_)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GalleryArea = styled(Page)`
  width: 100%;
  height: 47.5%;
  background-color: #fff;
`;

export const MainPhotoWrap = styled.div`
  position: relative;
  width: 80%;
  padding-bottom: 60%;
`;

export const MainPhoto = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/main.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ButtonWrap = styled.div`
  position: relative;
  margin-top: ${getPercentHeightCss(96)};
  padding-left: 35px;
  width: 80%;
  font-family: "SeoulHangangM";
  font-size: 1.1rem;
  line-height: 22px;
`;

export const WordingArea = styled(Page)`
  width: 100%;
  height: 52.5%;
  background-color: #f1f1f1;
`;

export const Wording = styled(Wording_)`
  width: ${getPercentWidthCss(847)};
  height: auto;
`;
