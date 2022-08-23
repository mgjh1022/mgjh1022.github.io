import styled from '@emotion/styled';

import { ClearButton } from '@/atoms';

import { ReactComponent as Heart_ } from './svg/heart.svg';

export const LikeButton: React.FC = () => {

  return <Button onClick={() => alert('좋아요')}>
    <Heart />
  </Button>
}

const Heart = styled(Heart_)`
  position: relative;
  top: 2px;
  width: 23px;
  height: auto;
`;

const Button = styled(ClearButton)`
  position: absolute;
  top: -10px;
  left: -10px;
  padding: 10px;
`;