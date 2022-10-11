import styled from 'styled-components';
import { H1 } from '~/components/common/typography/H1';
import { rem } from '~/themes/utilities/rem';
import { HtmlLink } from './components/link';
import { Disclaimer } from './components/typography/Disclaimer';

export const H1Row = styled(H1)`
  margin-top: ${rem(65)};
`;

export const InputRow = styled.div`
  margin-bottom: ${rem(30)};
`;

export const ExternalLink = styled(HtmlLink)`
  font-size: ${rem(13)};
  color: ${(props) => props.theme.colors['Dark Gray']};
`;

export const ExternalLinkRow = styled.div`
  width: 100%;
  text-align: center;
  margin-top: ${rem(34)};
  margin-bottom: ${rem(46)};
`;

export const DisclaimerRow = styled(Disclaimer)`
  margin-top: 0;
`;
