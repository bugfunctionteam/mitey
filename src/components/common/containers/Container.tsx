import { PropsWithChildren, FC } from 'react';
import { Button } from '../buttons/Button';
import { OptionsIcon } from '../icons/OptionsIcon';
import { StyledContainer, StyledDataSection, StyledHeader, StyledHeaderSection, StyledTitle } from './ContainerStyles';

interface Settings {
  title: string;
  logo?: JSX.Element;
  action: () => void | (() => Promise<void>);
}

interface Props {
  fill?: boolean;
  header?: boolean;
  settings?: Settings;
  title?: string | JSX.Element;
  options?: JSX.Element;
}

export const Container: FC<PropsWithChildren<Props>> = (props) => {
  return (
        <StyledContainer style={{ width: props.fill ? '100%' : 'auto', flex: props.fill ? 1 : 'auto' }}>
          {props.header && (
            <StyledHeader>
              <StyledHeaderSection>
                <StyledTitle>{props.title}</StyledTitle>
              </StyledHeaderSection>
              <StyledHeaderSection>
                {props.settings && (
                  <Button
                    text={props.settings.title}
                    icon={props.settings.logo}
                    onClick={props.settings.action}
                  />
                )}
                <OptionsIcon cursor="pointer" />
              </StyledHeaderSection>
            </StyledHeader>
          )}
          <StyledDataSection>
            {props.children}
          </StyledDataSection>
        </StyledContainer>
  );
};
