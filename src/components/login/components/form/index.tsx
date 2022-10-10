import { h } from 'preact';
import { FC, FormEvent, PropsWithChildren } from 'react';
import { StyledForm } from './FormStyles';

interface Props extends PropsWithChildren {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const Form: FC<Props> = (props) => {
  return <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>;
};
