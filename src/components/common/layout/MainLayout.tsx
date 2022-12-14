import { PropsWithChildren, FC } from 'react';
import Image from 'next/image';
import { StyledMainContainer, StyledMainLayout, StyledNavigation, StyledNavItem, StyledNavSettingsContainer } from './MainLayoutStyles';
import { ThemeProvider } from '~/themes/ThemeProvider';
import { defaultTheme } from '~/themes';
import { GearIcon } from '../icons/GearIcon';
import { SignOutIcon } from '../icons/SignOutIcon';

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
              <GearIcon
                height={30}
                width={45}
              />
            </StyledNavItem>
            <StyledNavItem>
              <SignOutIcon
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
