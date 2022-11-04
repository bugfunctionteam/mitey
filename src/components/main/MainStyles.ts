import styled from 'styled-components';
import { H1 } from '~/components/common/typography/H1';
import { rem } from '~/themes/utilities/rem';
import { Column } from '~/components/common/layout/MainLayoutStyles';
import { COMPONENT_BACKGROUND, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from '../common/globalStyles';

export const H1Row = styled.h1`
  color: ${PRIMARY_TEXT_COLOR};
  margin-top: ${rem(25)};
`;

export const DetailsRow = styled.p`
  flex: 1;
  margin-top: ${rem(60)};
  line-height: ${rem(24)};
  color: ${SECONDARY_TEXT_COLOR};
`;

export const CenteredColumn = styled(Column)`
  justify-content: center;
`;

export const TopRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${rem(20)};

  & > div {
    flex: 1;
    margin-left: ${rem(20)};
  }

  & > div:first-child {
    margin-left: 0;
  }
`;

export const MainContainer = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
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
