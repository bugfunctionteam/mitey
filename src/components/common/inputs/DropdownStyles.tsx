import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { viewport } from '~/themes/utilities/viewport';
import { COMPONENT_ACCENT, COMPONENT_BACKGROUND, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, TERTIARY_TEXT_COLOR  } from '../globalStyles';

export const StyledDropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${COMPONENT_BACKGROUND};
  cursor: pointer;
  padding: ${rem(10)};

  p {
    margin: 0;
    font-size: ${rem(16)};
    font-weight: bold;
  }

  & > svg {
    stroke: ${TERTIARY_TEXT_COLOR};
  }
`;

export const InfoContainer = styled.div`
  display: flex;

  & > :first-child {
    margin-right: ${rem(15)};
  }
`;
