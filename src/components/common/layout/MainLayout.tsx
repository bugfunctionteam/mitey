import { h } from 'preact';
import { PropsWithChildren, FC } from 'react';
import { StyledMainLayout } from './MainLayoutStyles';
import { ThemeProvider } from '~/themes/ThemeProvider';
import { defaultTheme } from '~/themes';

export const MainLayout: FC<PropsWithChildren> = (props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledMainLayout>{props.children}</StyledMainLayout>
    </ThemeProvider>
  );
};
