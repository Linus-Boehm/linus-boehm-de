import { CSSOthersObject } from '@emotion/serialize';
import tw from 'twin.macro';
import TopBar from './TopBar';
import React from 'react';
import Footer from './Footer';
import SocialLinks from './SocialLinks';

const styles: CSSOthersObject = {
  // Move long class sets out of jsx to keep it scannable
  container: tw`bg-primary min-h-screen text-white flex flex-col`,
};

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div css={styles.container}>
      <TopBar />
      {children}
      <Footer />
      <SocialLinks />
    </div>
  );
};

export default DefaultLayout;
