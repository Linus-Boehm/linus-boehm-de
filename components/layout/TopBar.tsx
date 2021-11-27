import React from 'react';
import tw, { css } from 'twin.macro';
import { CSSOthersObject } from '@emotion/serialize';
import HamburgerMenu from './hamburger/HamburgerMenu';

const styles: CSSOthersObject = {
  container: [tw`w-full flex h-16`],
  imgContainer: [
    tw`mx-auto mt-4 cursor-pointer`,
    css`
      transition: all ease-in-out 0.2s;
      &:hover {
        transform: scale(1.2);
      }
    `,
  ],
  menu: [tw`mt-6 ml-6`],
  img: [],
};

const TopBar: React.VFC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.menu}>
        <HamburgerMenu />
      </div>
      <div css={styles.imgContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img css={styles.img} src="/images/LogoWhite.svg" />
      </div>
    </div>
  );
};

export default TopBar;
