import { PropsWithChildren, FC, MouseEventHandler } from 'react';
import { CSSProperties } from 'styled-components';
import { StyledBooleanLabel, StyledLabel } from './LabelStyles';

interface Props {
  icon?: JSX.Element;
  text: string;
  style?: CSSProperties;
}

interface BooleanProps {
  icon?: JSX.Element;
  text: string;
  state: 'good' | 'bad'
  style?: CSSProperties;
}

export const Label: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <StyledLabel style={props.style}>
      {props.icon}{' '}
      <p>{props.text}</p>
    </StyledLabel>
  );
};

export const BooleanLabel: FC<PropsWithChildren<BooleanProps>> = (props) => {
  return (
    <StyledBooleanLabel style={props.style} state={props.state}>
      {props.icon}
      <p>{props.text}</p>
    </StyledBooleanLabel>
  );
};
