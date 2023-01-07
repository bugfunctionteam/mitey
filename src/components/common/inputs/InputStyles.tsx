import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { viewport } from '~/themes/utilities/viewport';
import { COMPONENT_ACCENT, COMPONENT_BACKGROUND, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, TERTIARY_TEXT_COLOR  } from '../globalStyles';

export const StyledInputContainer = styled.div`
  display: flex;

  button {
    border: none;
    background: ${COMPONENT_BACKGROUND};
    margin: 0;
  }
`;

export const StyledInput = styled.input`
  display: flex;
  margin: 0 0 0 ${rem(10)};
  padding-left: ${rem(20)};
  border: none;
  outline: none;
  color: ${PRIMARY_TEXT_COLOR};
  background: ${COMPONENT_BACKGROUND};

  &::placeholder {
    color: ${TERTIARY_TEXT_COLOR};
  }
  
  svg {
    stroke: ${SECONDARY_TEXT_COLOR};
  }
`;

// export const StyledHeader = styled.div`
//   display: flex;
//   padding: ${rem(10)};
//   justify-content: space-between;
//   border-bottom: 1px solid ${COMPONENT_ACCENT};
// `;

// export const StyledHeaderSection = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;

// & > svg {
//   stroke: ${TERTIARY_TEXT_COLOR};
// }

// & > svg:hover {
//   stroke: ${SECONDARY_TEXT_COLOR};
// }
// `;

// export const StyledTitle = styled.p`
//   font-size: ${rem(18)};
//   margin: 0;
//   font-weight: bold;
// `

// export const StyledDataSection = styled.div`
//   display: flex;
//   padding: ${rem(10)};
// `;

