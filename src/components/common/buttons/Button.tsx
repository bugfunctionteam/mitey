import { PropsWithChildren, FC, MouseEventHandler } from 'react';
import { CSSProperties } from 'styled-components';
import { StyledButton } from './ButtonStyles';

interface Props {
  icon?: JSX.Element;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <StyledButton style={props.style} onClick={props.onClick}>{props.icon} <p>{props.text}</p></StyledButton>
  );
};
