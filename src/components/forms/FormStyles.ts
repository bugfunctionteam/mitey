import styled from 'styled-components';
import { H1 } from '~/components/common/typography/H1';
import { rem } from '~/themes/utilities/rem';
import { Column } from '~/components/common/layout/MainLayoutStyles';
import { COMPONENT_BACKGROUND, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, SELECTED_BACKGROUND, TERTIARY_TEXT_COLOR } from '../common/globalStyles';


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${rem(20)} 0;

  button {
    margin: auto;
    margin-top: ${rem(10)};
  }

  section {
    display: flex;
    justify-content: center;
    padding: ${rem(6)} 0;
    
    input {
      flex: 1;
      margin-left: ${rem(30)};
      
      &:first-child {
        margin-left: 0;
      }
    }
  }

  input {
    background-color: transparent;
    border: 1px solid ${TERTIARY_TEXT_COLOR};
    font-size: ${rem(16)};
    padding: ${rem(4)} ${rem(8)};

    &::placeholder {
      color: ${TERTIARY_TEXT_COLOR};
    }
  }
`;
