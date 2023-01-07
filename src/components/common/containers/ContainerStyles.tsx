import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { viewport } from '~/themes/utilities/viewport';
import { COMPONENT_ACCENT, COMPONENT_BACKGROUND, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, TERTIARY_TEXT_COLOR  } from '../globalStyles';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COMPONENT_BACKGROUND};
`;

export const StyledHeader = styled.div`
  display: flex;
  padding: ${rem(10)};
  justify-content: space-between;
  border-bottom: 1px solid ${COMPONENT_ACCENT};
`;

export const StyledHeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  & > svg {
    stroke: ${TERTIARY_TEXT_COLOR};
    margin-left: ${rem(10)};
  }

  & > svg:hover {
    stroke: ${SECONDARY_TEXT_COLOR};
  }
`;

export const StyledTitle = styled.p`
  font-size: ${rem(16)};
  margin: 0;
  font-weight: bold;
`;

export const StyledDataSection = styled.div`
  display: flex;
  padding: ${rem(10)};
  justify-content: center;
`;

