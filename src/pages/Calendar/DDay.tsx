import styled from "@emotion/styled";

import { getPercentHeightCss } from "@/utils";

export const DDay: React.FC = () => {
  const DAY = new Date("2022/10/22").getTime();
  const now = new Date().getTime();
  const diff = Math.ceil((DAY - now) / (24 * 60 * 60 * 1000));

  return (
    <Div>
      박민규&김지희
      <br />
      결혼식 {`${diff}`.padStart(2, "0")}일전
    </Div>
  );
};

const Div = styled.div`
  margin-top: ${getPercentHeightCss(206)};
  font-family: "SeoulHangangM";
  font-size: 1.25rem;
  line-height: 1.5;
  color: "#595857";
  text-align: center;
`;
