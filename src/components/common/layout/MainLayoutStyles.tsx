import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { viewport } from '~/themes/utilities/viewport';

export const StyledMainLayout = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${rem(218)} 0 ${rem(65)} 0;

  @media ${viewport('medium', 'down')} {
    flex-direction: column;
    align-items: center;
    padding: ${rem(56)} ${rem(25)} ${rem(20)} ${rem(25)};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 25%;

  @media ${viewport('large', 'down')} {
    width: 50%;
    padding: 0 ${rem(24)} 0 ${rem(24)};
  }

  @media ${viewport('medium', 'down')} {
    width: 100%;
    padding: 0;
  }
`;
