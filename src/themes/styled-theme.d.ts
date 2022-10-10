import 'styled-components';

import figmaData from './figma/theme.json';

type ValueOf<T> = T[keyof T];

type CustomColorName = keyof typeof figmaData.colors;
type CustomColor = ValueOf<typeof figmaData.colors>;

// and we extend it here.
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    // Figma
    colors: typeof figmaData.colors;
    fonts: typeof figmaData.fonts;
    fontSizes: typeof figmaData.fontSizes;
    fontWeights: typeof figmaData.fontWeights;
    lineHeights: typeof figmaData.lineHeights;
    textStyles: typeof figmaData.textStyles;
  }
}
