import React from 'react';
import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

const styles = {
  container: [tw`xl:max-w-6xl 2xl:max-w-6xl container mx-auto p-4`],
};

interface SectionContainerProps {
  css?: CSSInterpolation;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  css,
}) => {
  return <section css={[styles.container, css]}>{children}</section>;
};

export default SectionContainer;
