import styled from 'styled-components';
import { H1 } from '~/components/common/typography/H1';
import { rem } from '~/themes/utilities/rem';
import { Column } from '~/components/common/layout/MainLayoutStyles';
import { COMPONENT_BACKGROUND, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, SELECTED_BACKGROUND, TERTIARY_TEXT_COLOR } from '../common/globalStyles';

export const DeviceBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Amount = styled.h3`
  font-size: ${rem(28)};
  text-align: center;
  margin: ${rem(10)} 0;
`;

export const Description = styled.p`
  color: ${SECONDARY_TEXT_COLOR};
  font-size: ${rem(14)};
  text-align: center;
  margin-top: 0;
`;

export const Statement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: ${rem(4)} 0;
  }
`;

export const Stat = styled.p`
  color: ${PRIMARY_TEXT_COLOR};
  font-size: ${rem(16)};
  font-weight: bold;
`;

export const StatAmount = styled.p`
  color: ${TERTIARY_TEXT_COLOR};
  font-size: ${rem(14)};
  font-weight: bold;
`;




export const Name = styled.p`
  color: ${PRIMARY_TEXT_COLOR};
  font-size: bold;
`;

export const PostDate = styled.p`
  color: ${TERTIARY_TEXT_COLOR};
  font-size: ${rem(13)};
`;

export const TicketFileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${rem(10)} 0 0 0;
`;

export const IconBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${SELECTED_BACKGROUND};
  height: 35px !important;
  width: 35px !important;
  border-radius: 50%;
  margin-right: ${rem(12)};

  svg {
    stroke: ${TERTIARY_TEXT_COLOR};
  }
`;

export const FileName = styled.p`
  color: ${PRIMARY_TEXT_COLOR};
  font-size: bold;
`;




export const HeaderLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-right: ${rem(20)};
`;

export const HeaderRight = styled.div`
  display: flex;
  width: 25%;

  button {
    margin-left: 0;
    margin: ${rem(20)} ${rem(20)} ${rem(20)} 0;
    border: none;
    background: ${COMPONENT_BACKGROUND};
  }
`;
