import React from 'react';
import Heading from '../utils/heading';
import { useTranslation } from 'next-i18next';
import { CSSOthersObject } from '@emotion/serialize';
import tw, { css } from 'twin.macro';
import SectionContainer from '../layout/SectionContainer';
import ListGroup from '../utils/ListGroup';
import ListItem from '../utils/ListItem';

const styles: CSSOthersObject = {
  text: [
    css`
      line-height: 30px;
      font-weight: 400;
    `,
    tw`font-sans text-white text-xl md:text-2xl text-left py-2`,
  ]
};

const AboutMe: React.VFC = () => {
  const { t } = useTranslation('landingpage');
  return (
    <SectionContainer>
      <div tw="flex flex-col">
        <Heading>{t('about-me-title')}</Heading>
        {t('about-me-text')
          .split('\n')
          .map((text, index) => (
            <p css={styles.text} key={index}>
              {text}
            </p>
          ))}
        <div tw="flex flex-col md:flex-row space-x-0 space-y-4 md:space-x-8 lg:space-x-16 md:space-y-0">
          <ListGroup title="Backend:">
            <ListItem>Go</ListItem>
            <ListItem>NodeJs</ListItem>
            <ListItem>Python</ListItem>
          </ListGroup>

          <ListGroup title="Frontend:">
            <ListItem>React</ListItem>
            <ListItem>Vue.js</ListItem>
            <ListItem>Typescript</ListItem>
          </ListGroup>

          <ListGroup title="Infrastructure:">
            <ListItem>AWS Lambda</ListItem>
            <ListItem>Kubernetes</ListItem>
            <ListItem>GitOps</ListItem>
          </ListGroup>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
