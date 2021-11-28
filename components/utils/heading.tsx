import React from 'react';
import tw, { css } from 'twin.macro';

//font-family: 'Yuji Boku', serif;
const styles = {
  h1: [
    css`
      font-family: 'Amatic SC', sans-serif;
      font-weight: 400;
    `,
    tw`text-secondary-light text-4xl md:text-6xl text-left md:mb-8 mb-4`,
  ],
};

const Heading: React.FC = ({  children }) => {
  return <h1 css={styles.h1}>{children}</h1>;
};

export default Heading;
