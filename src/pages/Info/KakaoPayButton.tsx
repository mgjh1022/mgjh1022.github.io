import { ClearA, Svg } from "@/atoms";
import { ReactComponent as PAY } from "./svg/info-pay.svg";
import { ReactComponent as PAY_GUIDE } from "./svg/info-pay_guide.svg";

export const KakaoPayButton: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = (props) => (
  <span>
    <ClearA
      {...props}
      style={{
        position: "relative",
        padding: "1% 2.5%",
      }}
    >
      <Svg
        Origin={PAY}
        style={{
          position: "relative",
          top: "2.5%",
        }}
      />
    </ClearA>
    <Svg
      Origin={PAY_GUIDE}
      style={{
        position: "relative",
        top: "-0.5vw",
      }}
    />
  </span>
);
