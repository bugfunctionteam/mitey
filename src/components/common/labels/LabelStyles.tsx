import { CSSProperties, FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { rem } from '~/themes/utilities/rem';
import { viewport } from '~/themes/utilities/viewport';
import { COMPONENT_ACCENT, COMPONENT_BACKGROUND, COMPONENT_GREEN_ACCENT, GREEN_TEXT_COLOR, PRIMARY_TEXT_COLOR, RED_TEXT_COLOR, SECONDARY_TEXT_COLOR, SELECTED_BACKGROUND, TERTIARY_TEXT_COLOR  } from '../globalStyles';

interface BooleanProps {
  state: 'good' | 'bad';
  style?: CSSProperties;
}

export const StyledLabel = styled.button`
  display: flex;
  cursor: pointer;
  margin: 0 ${rem(10)};
  border: ${rem(2)} solid ${SECONDARY_TEXT_COLOR};
  color: ${PRIMARY_TEXT_COLOR};
  background: transparent;
  align-items: center;

  &:hover {
    background: ${COMPONENT_ACCENT};

    svg {
      stroke: ${PRIMARY_TEXT_COLOR};
    }
  }

  p {
    margin: ${rem(6)} 0;
  }
  
  & > svg {
    stroke: ${SECONDARY_TEXT_COLOR};
    margin-right: ${rem(4)};
  }
`;

const StyledGoodLabelInner = styled.button`
  display: flex;
  margin: 0 ${rem(10)};
  border: ${rem(2)} solid ${SECONDARY_TEXT_COLOR};
  color: ${PRIMARY_TEXT_COLOR};
  background: ${COMPONENT_GREEN_ACCENT};
  align-items: center;

  &:hover {
    svg {
      stroke: ${PRIMARY_TEXT_COLOR};
    }

    p {
      color: ${PRIMARY_TEXT_COLOR};
    }
  }

  p {
    margin: ${rem(6)} 0;
    color: ${GREEN_TEXT_COLOR};
  }
  
  & > svg {
    stroke: ${GREEN_TEXT_COLOR};
    margin-right: ${rem(4)};
  }
`;

const StyledBadLabelInner = styled.button`
  display: flex;
  margin: 0 ${rem(10)};
  border: ${rem(2)} solid ${SECONDARY_TEXT_COLOR};
  color: ${PRIMARY_TEXT_COLOR};
  background: ${COMPONENT_ACCENT};
  align-items: center;

  &:hover {
    svg {
      stroke: ${PRIMARY_TEXT_COLOR};
    }

    p {
      color: ${PRIMARY_TEXT_COLOR};
    }
  }

  p {
    margin: ${rem(6)} 0;
    color: ${RED_TEXT_COLOR};
  }
  
  & > svg {
    stroke: ${RED_TEXT_COLOR};
    margin-right: ${rem(4)};
  }
`;

export const StyledBooleanLabel: FC<PropsWithChildren<BooleanProps>> = (props) => {
  const LabelInner = props.state === 'good' ? StyledGoodLabelInner : StyledBadLabelInner;
  return (<LabelInner>{props.children}</LabelInner>);
};

