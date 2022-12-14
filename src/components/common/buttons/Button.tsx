import { PropsWithChildren, FC, MouseEventHandler } from 'react';
import { CSSProperties, DefaultTheme, StyledComponent } from 'styled-components';
import { StyledButton } from './ButtonStyles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <StyledButton {...props}>{props.icon} <p>{props.text}</p></StyledButton>
  );
};
