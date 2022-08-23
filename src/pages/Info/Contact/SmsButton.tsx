import styled from "@emotion/styled";

import { ClearA } from "@/atoms";
import { getPercentWidthCss } from "@/utils";

import { ReactComponent as SMS_ } from "../svg/icon_sms.svg";

export const SmsButton: React.FC<{ phone?: string }> = ({
  phone = "01000000000",
}) => (
  <ClearA href={`sms:${phone}`}>
    <Sms />
  </ClearA>
);

const Sms = styled(SMS_)`
  position: absolute;
  left: 57.5%;
  width: ${getPercentWidthCss(85)};
  height: auto;
`;
