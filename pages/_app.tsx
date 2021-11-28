import Head from 'next/head';
import { GlobalStyles } from 'twin.macro';
import { AppProps } from 'next/app';
import React from 'react';
import '@fontsource/yuji-boku';
import '@fontsource/nunito';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Josefin+Sans:wght@300&display=swap" rel="stylesheet" />
        <title>Linus Boehm</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
