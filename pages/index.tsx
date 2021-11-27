import Head from 'next/head';
import React from 'react';
import tw, { css } from 'twin.macro';
import { CSSOthersObject } from '@emotion/serialize';
import { useTranslation } from 'next-i18next';
import Heading from '../components/utils/heading';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import ProfilePicture from '../components/landingpage/ProfilePicture';
import AboutMe from '../components/landingpage/AboutMe';
import SectionContainer from '../components/layout/SectionContainer';
import { CSSInterpolation } from '@emotion/css';
import DefaultLayout from '../components/layout/DefaultLayout';

const styles: CSSOthersObject = {
  container: tw`bg-primary min-h-screen`,
  subheading: [
    css`
      font-family: 'Nunito', sans-serif;
      line-height: 52px;
      font-weight: 300;
    `,
    tw`text-white text-xl md:text-3xl text-left `,
  ],
};
const mainSection: CSSInterpolation = tw`flex flex-col md:items-center md:justify-center pt-12 md:pt-8 w-full text-center min-h-screen`;

const Home: React.VFC = () => {
  const { t } = useTranslation('landingpage');
  return (
    <DefaultLayout>
      <Head>
        <title>Linus Boehm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionContainer>
        <div css={mainSection}>
          <div tw="flex flex-col-reverse md:flex-row">
            <div tw="flex flex-col ">
              <Heading>{t('welcome-title')}</Heading>
              <h3 css={styles.subheading}>
                {t('welcome-subtitle-1')}
                <br />
                {t('welcome-subtitle-2')}
              </h3>
            </div>
            <div tw="md:mx-2 mx-auto md:my-0 my-8">
              <ProfilePicture />
            </div>
          </div>
        </div>
      </SectionContainer>
      <AboutMe />
    </DefaultLayout>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['landingpage'])),
  },
});
export default Home;
