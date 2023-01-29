import React from 'react';
import { CSSOthersObject } from '@emotion/serialize';
import tw, {css} from 'twin.macro';
import Link from 'next/link';

const styles: CSSOthersObject = {
  wrapper: [tw`flex flex-col mt-32 mt-auto`],
  container: [tw`xl:max-w-6xl 2xl:max-w-6xl container mx-auto pb-0 pt-4 md:pb-4`],
  footer: [tw`w-full h-16 bg-primary-dark md:rounded-md flex shadow-inner`],
  menu: [
    tw`flex ml-auto space-x-4 md:space-x-16 px-4 md:px-8 text-white text-lg mt-4`,
  ],
};

const Footer: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        <div css={styles.footer}>
          <div css={styles.menu}>
            <Link href="/data-privacy">
              <a>Datenschutz</a>
            </Link>
            <Link href="/imprint">
              <a>Impressum</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
