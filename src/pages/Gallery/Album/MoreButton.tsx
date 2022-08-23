import { atom, useRecoilState } from "recoil";
import styled from "@emotion/styled";

import { RKey } from "@/react-app-env.d";
import { ClearButton } from "@/atoms";

import { ReactComponent as MENU } from "../svg/menu.svg";

export const modalState = atom({
  key: RKey.AlbumModal,
  default: false,
});

export const MoreButton: React.FC = () => {
  const [, setIsOpen] = useRecoilState<boolean>(modalState);
  const openModal = () => setIsOpen(true);

  return (
    <Button onClick={openModal}>
      <Menu />
    </Button>
  );
};

const Menu = styled(MENU)`
  width: 23px;
  height: auto;
`;

const Button = styled(ClearButton)`
  position: absolute;
  top: -6px;
  right: -10px;
  padding: 10px;
`;
