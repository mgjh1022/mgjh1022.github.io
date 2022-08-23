/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import styled from "@emotion/styled";

import { ClearButton } from "@/atoms";

import { AlbumSlider } from "./AlbumSlider";
import { modalState } from "./MoreButton";

Modal.setAppElement("#root");

const test = ["/main.png", "/test169.jpeg", "/test916.png"];

export const AlbumModal: React.FC = () => {
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
      padding: 0,
      transform: "translate(-50%, -50%)",
      width: "85vw",
      maxHeight: "80vh",
      border: 0,
      borderRadius: 0,
    },
  };

  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [selectedIdx, setselectedIdx] = useState<undefined | number>();
  const isSelected = selectedIdx !== undefined;

  const selectPhoto = (idx: number) => () => setselectedIdx(idx);
  const resetPhoto = () => setselectedIdx(undefined);
  const closeModal = () => {
    if (isSelected) {
      resetPhoto();
    } else {
      setIsOpen(false);
      setTimeout(() => resetPhoto(), 200);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      style={customStyles}
    >
      <List isHide={isSelected}>
        {Array.from({ length: 20 }, (x, i) => i).map((idx) => (
          <Button key={idx} onClick={selectPhoto(idx)} src={test[idx % 3]} />
        ))}
      </List>
      <AlbumSlider selected={selectedIdx} />
    </Modal>
  );
};

const List = styled.div<{ isHide: boolean }>`
  display: ${({ isHide }) => (isHide ? "none" : "grid")};
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 5px;
  padding: 20px;
`;

const Button = styled(ClearButton)<{ src: string }>`
  position: relative;
  padding-bottom: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;
