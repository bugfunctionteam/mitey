import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';

export const H1 = styled.h1`
  ${(props) => {
    const h1ThemeStyles = props.theme.textStyles['H1 - Headline'];
    return `
    font-family: ${h1ThemeStyles.fontFamily};
    font-weight: ${h1ThemeStyles.fontWeight};
    font-size: ${rem(h1ThemeStyles.fontSize)};
    line-height: ${h1ThemeStyles.lineHeight};`;
  }}
`;
