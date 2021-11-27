import React from 'react';
import { CSSOthersObject } from '@emotion/serialize';
import tw  from 'twin.macro';

const styles: CSSOthersObject = {
  container: [],
  img: [tw`rounded-full md:w-52 md:h-52 w-36 h-36`],
};

const ProfilePicture: React.VFC = () => {
  return (
    <div css={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/Linus.jpg" css={styles.img} />
    </div>
  );
};

export default ProfilePicture;
