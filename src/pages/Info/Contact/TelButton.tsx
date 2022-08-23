import styled from "@emotion/styled";

import { ClearA } from "@/atoms";
import { getPercentWidthCss } from "@/utils";

import { ReactComponent as Tel_ } from "../svg/icon_tel.svg";

export const TelButton: React.FC<{ phone?: string }> = ({
  phone = "01000000000",
}) => (
  <ClearA href={`tel:${phone}`}>
    <Tel />
  </ClearA>
);

const Tel = styled(Tel_)`
  position: absolute;
  left: 40%;
  width: ${getPercentWidthCss(82)};
  height: auto;
`;
