import { PropsWithChildren, FC, MouseEventHandler } from 'react';
import { CSSProperties, DefaultTheme, StyledComponent } from 'styled-components';
import { StyledButton } from './ButtonStyles';
import { useSession, signIn, signOut } from 'next-auth/react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export const Button: FC<PropsWithChildren> = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <StyledButton onClick={() => signOut()}>Sign Out</StyledButton>
    );
  }

  return (
    <StyledButton onClick={() => signIn()}>Sign In</StyledButton>
  );
};
