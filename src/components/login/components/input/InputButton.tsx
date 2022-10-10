import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';

export const InputButton = styled.button`
  cursor: pointer;
  font-size: ${rem(12)};
  letter-spacing: ${rem(0.2)};
  color: ${(props) => props.theme.colors['Black']};
  background: transparent;
  border: none;

  &:enabled:hover {
    text-decoration: underline;
  }
`;
