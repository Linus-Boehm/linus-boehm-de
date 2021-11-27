import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SectionContainer from '../components/layout/SectionContainer';
import DefaultLayout from '../components/layout/DefaultLayout';

const Imprint: React.VFC = () => {
  return (
    <DefaultLayout>
      <SectionContainer>
        <h1>Impressum</h1>
        <h2>Diensteanbieter</h2>
        <p>Linus Boehm</p>
        <p>Spixstr. 35</p>
        <p>81539 München</p>
        <p>Deutschland</p>
        <h2>Kontaktmöglichkeiten</h2>
        <p>
          E-Mail-Adresse:{' '}
          <a href="mailto:letters@linusboehm.de">letters@linusboehm.de</a>
        </p>
        <p>Telefon: 017656719690</p>
        <h2>Journalistisch-redaktionelle Angebote</h2>
        <p>Inhaltlich verantwortlich: Linus Boehm (Adresse wie oben)</p>
        <h2>Angaben zum Unternehmen</h2>
        <p>Umsatzsteuer Identifikationsnummer (USt-ID): DE319192249</p>
        <p className="seal">
          <a
            href="https://datenschutz-generator.de/?l=de"
            title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
            Schwenke
          </a>
        </p>
      </SectionContainer>
    </DefaultLayout>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['landingpage'])),
  },
});
export default Imprint;
