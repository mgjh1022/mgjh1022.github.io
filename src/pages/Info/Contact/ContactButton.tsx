import { useState } from "react";
import styled from "@emotion/styled";

import { getPercentHeightCss, getPercentWidthCss } from "@utils";
import { ClearButton } from "@/atoms";

import { ReactComponent as Contact_ } from "../svg/contact.svg";
import { ContactModal } from "./ContactModal";

export const ContactButton: React.FC = (arg) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <ClearButton
        style={{ marginTop: getPercentHeightCss(157) }}
        onClick={openModal}
      >
        <Contact />
      </ClearButton>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const Contact = styled(Contact_)`
  width: ${getPercentWidthCss(684)};
  height: auto;
`;
