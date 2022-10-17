import { PropsWithChildren, FC } from 'react';
import Image from 'next/image';
import { StyledMainContainer, StyledMainLayout, StyledNavContainer, StyledNavigation, StyledNavItem, StyledNavSettingsContainer } from './MainLayoutStyles';
import { ThemeProvider } from '~/themes/ThemeProvider';
import { defaultTheme } from '~/themes';

export const MainLayout: FC<PropsWithChildren> = (props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledMainLayout>
        <StyledNavigation>
        <StyledNavItem>
            <Image
              alt="Mitey Logo"
              src="/images/mitey-logo.svg"
              height={45}
              width={60}
            />
          </StyledNavItem>
          {/* <StyledNavContainer>
            
          </StyledNavContainer> */}
          <StyledNavSettingsContainer>
            <StyledNavItem>
              <Image
                alt="Settings"
                src="/images/gear-six.svg"
                height={30}
                width={45}
              />
            </StyledNavItem>
            <StyledNavItem>
              <Image
                alt="Settings"
                src="/images/sign-out.svg"
                height={30}
                width={45}
              />
            </StyledNavItem>
          </StyledNavSettingsContainer>
        </StyledNavigation>
        <StyledMainContainer>
          {props.children}
        </StyledMainContainer>
      </StyledMainLayout>
    </ThemeProvider>
  );
};
