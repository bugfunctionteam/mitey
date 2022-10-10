import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ChildrenContainer = styled.div`
  position: absolute;
  top: ${rem(28)};
  right: ${rem(28)};
`;
