import { CSSOthersObject } from '@emotion/serialize';
import tw, { css } from 'twin.macro';
import React, { useState } from 'react';
import { bar1Styles, bar2Styles, bar3Styles, baseBar } from './style';

const styles: CSSOthersObject = {
  container: [
    tw`block cursor-pointer`,
    css`
      &:hover > div {
        width: 25px !important;
      }
    `,
  ],
};

const HamburgerMenu: React.VFC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div css={styles.container} onClick={() => setOpen(!open)}>
      <div css={[baseBar, bar1Styles(open)]} />
      <div css={[baseBar, bar2Styles(open)]} />
      <div css={[baseBar, bar3Styles(open)]} />
    </div>
  );
};

export default HamburgerMenu;
