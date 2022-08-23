import styled from "@emotion/styled";

import { ClearA } from "@/atoms";
import { getPercentWidthCss } from "@/utils";

import { ReactComponent as TALK_ } from "../svg/icon_talk.svg";

export const TalkButton: React.FC<{ phone?: string }> = ({
  phone = "01000000000",
}) => (
  <ClearA href={`sms:${phone}`}>
    <Talk />
  </ClearA>
);

const Talk = styled(TALK_)`
  position: absolute;
  left: 77.5%;
  width: ${getPercentWidthCss(85)};
  height: auto;
`;
