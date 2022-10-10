import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { easing } from '~/themes/utilities/easing';
import { defaultTheme } from '~/themes';

export const disabledStateStyles = {
  background: defaultTheme.colors['10Black'],
  borderColor: defaultTheme.colors['10Black'],
  color: defaultTheme.colors['30Black'],
};

export const Button = styled.button`
  ${(props) => {
    const themeStyles = props.theme;
    return `
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
    padding: ${rem(38)} 0;
    border: 1px solid ${themeStyles.colors['Green Highlight']};
    border-radius:  ${rem(2)};
    line-height: 100%;
    font-family: 'Aktiv Grotesk';
    font-size: ${rem(20)};
    font-weight: 500;
    text-decoration-line: underline;
    text-align: center;
    transition: background 0.34s ${easing.standard};

    background: ${themeStyles.colors['Green Highlight']};
    color: white;
    cursor: pointer;
    :active,
    :visited {
        background: ${themeStyles.colors['Green Highlight']};
        border-color: ${themeStyles.colors['Green Highlight']};
    }

    :hover:enabled {
        background: ${themeStyles.colors['80HGreen']};
        border-color: ${themeStyles.colors['80HGreen']};
    }

    :disabled {
        background: ${disabledStateStyles['background']};
        border-color: ${disabledStateStyles['borderColor']};
        color: ${disabledStateStyles['color']};
    }
    `;
  }}
`;
