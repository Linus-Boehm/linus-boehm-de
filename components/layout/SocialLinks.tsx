import { CSSOthersObject } from '@emotion/serialize';
import tw, { css } from 'twin.macro';
import React from 'react';

const styles: CSSOthersObject = {
  spacer: [
    tw`h-12 w-full p-4 md:p-0`,
  ],
  wrapper: [
    tw`md:fixed md:h-40`,
    css`
      bottom: 0px;
      left: 8px;
    `,
  ],
  innerContainer: [tw`flex md:flex-col w-20 space-x-4 space-y-0 md:space-x-0 md:space-y-4`],
  lineContainer: [tw`hidden md:flex`],
  icon: [
    tw`mx-auto hover:opacity-70 transition-opacity`,
    css`
      width: 20px;
    `,
  ],
  iconContainer: [tw`flex`],
  line: [
    tw`h-24 mx-auto bg-white`,
    css`
      width: 1px;
    `,
  ],
};
interface SocialIcon {
  link: string;
  img: string;
}

const links: Array<SocialIcon> = [
  {
    link: 'https://github.com/Linus-Boehm',
    img: '/images/Github.svg',
  },
  {
    link: 'https://www.linkedin.com/in/linus-boehm/',
    img: '/images/in.svg',
  },
];
const SocialLinks: React.FC = () => {
  return (
    <div css={styles.spacer}>
    <div css={styles.wrapper}>
      <div css={styles.innerContainer}>
        {links.map(({ link, img }) => (
          <div css={styles.iconContainer} key={link}>
            <div tw="mx-auto">
              <a href={link} target="_blank" rel="nofollow noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} css={styles.icon} />
              </a>
            </div>
          </div>
        ))}

        <div css={styles.lineContainer}>
          <div css={styles.line} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SocialLinks;
