import React from 'react';
import tw, { css } from 'twin.macro';

const styles = {
  h1: [
    css`
      font-family: 'Yuji Boku', serif;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    `,
    tw`text-secondary text-4xl md:text-6xl text-left md:mb-8 mb-4`,
  ],
};

const Heading: React.FC = ({  children }) => {
  return <h1 css={styles.h1}>{children}</h1>;
};

export default Heading;
