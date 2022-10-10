import { h } from 'preact';
import { FC, PropsWithChildren } from 'react';
import { DefaultTheme, ThemeProvider as Theme } from 'styled-components';

interface Props extends PropsWithChildren {
  theme: DefaultTheme;
}

export const ThemeProvider: FC<Props> = (props) => {
  return <Theme theme={props.theme}>{props.children}</Theme>;
};
