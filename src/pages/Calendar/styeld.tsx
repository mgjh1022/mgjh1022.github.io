import styled from '@emotion/styled';

import { getPercentWidthCss } from '@utils';
import { Page as Page_ } from '@/atoms';

import { ReactComponent as Date_ } from './svg/date.svg';
import { ReactComponent as Calendar_ } from './svg/calendar.svg';

export const Page = styled(Page_)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoArea = styled(Page)`
  width: 100%;
  height: 47.5%;
  background-color: #FFF;
`;

export const Date = styled(Date_)`
  width: ${getPercentWidthCss(467)};
  height: auto;
`;

export const CalendarArea = styled(Page)`
  width: 100%;
  height: 52.5%;
  background-color: #F1F1F1;
`;

export const Calendar = styled(Calendar_)`
  width: ${getPercentWidthCss(985)};
  height: auto;
`;
