import { h } from 'preact';
import { DefaultTheme } from 'styled-components';
import figmaData from './figma/theme.json';

export const defaultTheme: DefaultTheme = {
  name: 'Altruist Default Theme',
  ...figmaData, // vars from Figma API
};
