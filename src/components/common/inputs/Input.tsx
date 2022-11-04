import { PropsWithChildren, FC, MouseEventHandler } from 'react';
import { CSSProperties } from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { Button } from '../buttons/Button';
import { StyledInput, StyledInputContainer } from './InputStyles';

interface Props {
  buttonIcon?: JSX.Element;
  placeholder: string;
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export const Input: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <StyledInputContainer style={props.style}>
      <StyledInput
        placeholder={props.placeholder}
        name={props.name}
        style={{ minWidth: `${rem(260)}` }}
      />
      {props.buttonIcon && props.onClick && (
        <Button
          text=''
          icon={props.buttonIcon}
          onClick={props.onClick}
        />
      )}
    </StyledInputContainer>
  );
};
