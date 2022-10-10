import { createGlobalStyle } from 'styled-components';
import { HTML_FONT_SIZE } from '~/themes/utilities/rem';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Begum';
    src: url('/fonts/begum/399E7E_0_0.eot');
    src: url('/fonts/begum/399E7E_0_0.eot?#iefix') format('embedded-opentype'),
      url('/fonts/begum/399E7E_0_0.woff2') format('woff2'),
      url('/fonts/begum/399E7E_0_0.woff') format('woff'),
      url('/fonts/begum/399E7E_0_0.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Aktiv Grotesk';
    font-weight: 600;
    font-style: normal;
    src: url('/fonts/aktiv-grotesk/AktivGrotesk-Medium.woff2') format('woff2');
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Aktiv Grotesk';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/aktiv-grotesk/AktivGrotesk-Regular.woff2') format('woff2');
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Ivar Headline Regular';
    font-weight: normal;
    font-style: normal;
    src: url('/fonts/ivar-headline/IvarHeadline-Regular.otf') format('otf');
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Ivar Headline Medium';
    font-weight: 500;
    font-style: normal;
    src: url('/fonts/ivar-headline/IvarHeadline-Medium.otf') format('otf');
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Ivar Headline Medium';
    font-weight: 500;
    font-style: normal;
    src: url('/fonts/ivar-headline/IvarHeadline-Medium.woff') format('woff');
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Ivar Headline Medium';
    font-weight: 500;
    font-style: normal;
    src: url('/fonts/ivar-headline/IvarHeadline-Medium.woff2') format('woff2');
    font-display: swap;
  }

  html {
    font-size: ${HTML_FONT_SIZE};
    font-family: 'Aktiv Grotesk';
  }
`;
