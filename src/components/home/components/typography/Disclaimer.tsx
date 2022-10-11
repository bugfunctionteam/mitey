import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';

export const Disclaimer = styled.span`
  font-size: ${rem(10)};
  line-height: ${rem(20)};
  letter-spacing: ${rem(0.2)};
  color: ${({ theme }) => theme.colors['70Black']};
  opacity: 0.8;
`;
