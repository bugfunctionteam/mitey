import { DefaultTheme } from 'styled-components';
import figmaData from './figma/theme.json';

export const defaultTheme: DefaultTheme = {
  name: 'Mitey Default Theme',
  ...figmaData, // vars from Figma API
};
