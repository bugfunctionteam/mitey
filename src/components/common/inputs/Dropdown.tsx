import { PropsWithChildren, FC, MouseEventHandler } from 'react';
import { CSSProperties } from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { Button } from '../buttons/Button';
import { CaretDownIcon } from '../icons/CaretDownIcon';
import { InfoContainer, StyledDropdownContainer } from './DropdownStyles';

interface Options {
  text: string;
  action: MouseEventHandler<HTMLDivElement>;
}

interface Props {
  icon?: JSX.Element;
  text: string;
  fill?: boolean;
  options?: Options[];
  style?: CSSProperties;
}

export const Dropdown: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <>
      <StyledDropdownContainer style={{
        flex: props.fill ? 1 : 'auto',
        ...props.style,
      }}>
        <InfoContainer>
          {props.icon && props.icon}
          <p>{props.text}</p>
        </InfoContainer>
        <CaretDownIcon />
      </StyledDropdownContainer>
    </>
  );
};
