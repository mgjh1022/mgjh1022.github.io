import { CopyToClipboard } from "react-copy-to-clipboard";

import { ClearButton, Svg } from "@/atoms";

import { ReactComponent as COPY } from "./svg/info-copy.svg";

export const AccountButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => alert("계좌번호를 복사하였습니다.")}
    >
      <ClearButton
        style={{
          position: "absolute",
          top: "23%",
          right: "-2%",
        }}
      >
        <Svg Origin={COPY} />
      </ClearButton>
    </CopyToClipboard>
  );
};
