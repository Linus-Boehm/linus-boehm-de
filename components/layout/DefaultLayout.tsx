import { CSSOthersObject } from '@emotion/serialize';
import tw from 'twin.macro';
import TopBar from './TopBar';
import React from 'react';
import Footer from './Footer';
import SocialLinks from './SocialLinks';
import Head from 'next/head'

const styles: CSSOthersObject = {
  // Move long class sets out of jsx to keep it scannable
  container: tw`bg-primary min-h-screen text-white flex flex-col font-sans font-light`,
};

const DefaultLayout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div css={styles.container}>
      <Head>
        <title>Linus Boehm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      {children}
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
