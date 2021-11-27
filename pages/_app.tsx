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
        <title>Linus Boehm</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
