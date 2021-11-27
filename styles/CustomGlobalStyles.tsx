import { Global, css } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';
import React from 'react';

const customStyles = css`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`;

const CustomGlobalStyles: React.VFC = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default CustomGlobalStyles;
