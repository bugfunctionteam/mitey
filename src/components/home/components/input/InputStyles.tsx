import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { easing } from '~/themes/utilities/easing';

export const Input = styled.input`
  ${(props) => {
    const themeStyles = props.theme;
    return `
    width: 100%;
    padding: ${rem(28)};
    font-size: ${rem(14)};
    font-family: 'Aktiv Grotesk';
    letter-spacing: ${rem(0.2)};
    background: ${themeStyles.colors['5Black']};
    border: 1px solid ${themeStyles.colors['White']};
    border-radius: ${rem(2)};
    transition: border-color 0.14s ${easing.accelerate};
    outline: none;
    box-sizing: border-box;

    &:hover {
      border: 1px solid ${themeStyles.colors['Light Gray']};
    }
  
    &:focus {
      border: 1px solid ${themeStyles.colors['Light Gray']};
    }

    &:disabled {
      background-color: ${themeStyles.colors['5Black']};
      border-color: ${themeStyles.colors['5Black']};
      color: ${themeStyles.colors['30Black']};
    }

    &::placeholder { 
      color: ${themeStyles.colors['40Black']};
      font-weight: 100;
      letter-spacing: ${rem(0.2)};
    }
    `;
  }}
`;
