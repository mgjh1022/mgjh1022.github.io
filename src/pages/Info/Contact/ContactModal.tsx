import styled from "@emotion/styled";
import Modal from "react-modal";

import { getPercentHeightCss, getPercentWidthCss } from "@/utils";

import { ReactComponent as Groom0 } from "../svg/groom_0.svg";
import { ReactComponent as Groom1 } from "../svg/groom_1.svg";
import { ReactComponent as Groom2 } from "../svg/groom_2.svg";
import { ReactComponent as Bride0 } from "../svg/bride_0.svg";
import { ReactComponent as Bride1 } from "../svg/bride_1.svg";
import { ReactComponent as Bride2 } from "../svg/bride_2.svg";
import { ReactComponent as HR } from "../svg/hr.svg";
import { TelButton } from "./TelButton";
import { SmsButton } from "./SmsButton";
import { TalkButton } from "./TalkButton";

Modal.setAppElement("#root");

export const ContactModal: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "#00000080",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: `${getPercentHeightCss(150)} 0`,
      transform: "translate(-50%, -50%)",
      width: getPercentWidthCss(1176),
      border: 0,
      borderRadius: 0,
    },
  };
  const closeModal = () => setIsOpen(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      style={customStyles}
    >
      <SubTit>
        <Groom0 />
      </SubTit>

      <ButtonWrap>
        <Name>
          <Groom1 />
          <TelButton />
          <SmsButton />
          <TalkButton />
        </Name>
      </ButtonWrap>
      <ButtonWrap>
        <Name>
          <Groom2 />
          <TelButton phone="" />
          <SmsButton phone="" />
          <TalkButton phone="" />
        </Name>
      </ButtonWrap>

      <Hr />

      <SubTit>
        <Bride0 />
      </SubTit>
      <ButtonWrap>
        <Name>
          <Bride1 />
          <TelButton phone="" />
          <SmsButton phone="" />
          <TalkButton phone="" />
        </Name>
      </ButtonWrap>
      <ButtonWrap>
        <Name>
          <Bride2 />
          <TelButton phone="" />
          <SmsButton phone="" />
          <TalkButton phone="" />
        </Name>
      </ButtonWrap>
    </Modal>
  );
};

const SubTit = styled.div`
  > svg {
    display: block;
    margin: 0 auto ${getPercentHeightCss(140)};
    width: ${getPercentWidthCss(196)};
    height: auto;
  }
`;

const ButtonWrap = styled.div`
  margin: ${getPercentHeightCss(130)} ${getPercentWidthCss(158)} 0;
  padding-bottom: ${getPercentHeightCss(130)};
`;

const Name = styled.div`
  > svg {
    position: absolute;
    width: ${getPercentWidthCss(232)};
    height: auto;
  }
`;

const Hr = styled(HR)`
  display: block;
  margin: ${getPercentHeightCss(150)} auto;
  width: 95%;
  height: auto;
`;
