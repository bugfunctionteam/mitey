import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { viewport } from '~/themes/utilities/viewport';
import { COMPONENT_ACCENT, COMPONENT_BACKGROUND, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, TERTIARY_TEXT_COLOR  } from '../globalStyles';

export const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
  margin: 0 ${rem(10)};
  border: ${rem(2)} solid ${SECONDARY_TEXT_COLOR};
  color: ${PRIMARY_TEXT_COLOR};
  background: transparent;
  align-items: center;

  &:hover {
    background: ${COMPONENT_ACCENT};

    svg {
      stroke: ${PRIMARY_TEXT_COLOR};
    }
  }

  p {
    margin: ${rem(6)} 0;
  }
  
  & > svg {
    stroke: ${SECONDARY_TEXT_COLOR};
    margin-right: ${rem(4)};
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

//   & > svg {
//     stroke: ${TERTIARY_TEXT_COLOR};
//   }

//   & > svg:hover {
//     stroke: ${SECONDARY_TEXT_COLOR};
//   }
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

