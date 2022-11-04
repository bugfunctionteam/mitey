import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { viewport } from '~/themes/utilities/viewport';
import { COMPONENT_BACKGROUND, MAIN_BACKGROUND, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, TERTIARY_TEXT_COLOR  } from '../globalStyles';

export const StyledMainLayout = styled.div`
  display: flex;
  padding: 0;
  background: ${MAIN_BACKGROUND};
  height: 100vh;
  color: ${PRIMARY_TEXT_COLOR};

  @media ${viewport('medium', 'down')} {
    flex-direction: column;
    align-items: center;
    padding: ${rem(56)} ${rem(25)} ${rem(20)} ${rem(25)};
  }
`;

export const StyledNavigation = styled.div`
  display: flex;
  background: ${COMPONENT_BACKGROUND};
  padding: ${rem(50)} ${rem(25)} 0 ${rem(25)};
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledNavContainer = styled.div`
  display: flex;
  padding: ${rem(150)} 0 0 0;
`;

export const StyledNavSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(25)} 0;
`;

export const StyledNavItem = styled.a`
  display: flex;
  padding: ${rem(20)} 0;
  cursor: pointer;

  & > svg {
    stroke: ${TERTIARY_TEXT_COLOR};
  }

  & > svg:hover {
    stroke: ${SECONDARY_TEXT_COLOR};
  }
`;

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(35)};
  width: 100%;
  box-sizing: border-box;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${viewport('large', 'down')} {
    width: 50%;
    padding: 0 ${rem(24)} 0 ${rem(24)};
  }

  @media ${viewport('medium', 'down')} {
    width: 100%;
    padding: 0;
  }
`;
