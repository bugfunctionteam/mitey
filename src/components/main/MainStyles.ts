import styled from 'styled-components';
import { H1 } from '~/components/common/typography/H1';
import { rem } from '~/themes/utilities/rem';
import { Column } from '~/components/common/layout/MainLayoutStyles';
import { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from '../common/globalStyles';

export const H1Row = styled(H1)`
  margin-top: ${rem(65)};
  color: ${PRIMARY_TEXT_COLOR};
`;

export const DetailsRow = styled.p`
  margin-top: ${rem(60)};
  line-height: ${rem(24)};
  color: ${SECONDARY_TEXT_COLOR};
`;

export const CenteredColumn = styled(Column)`
  justify-content: center;
`;
