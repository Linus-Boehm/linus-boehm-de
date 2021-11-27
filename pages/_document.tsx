import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document'
import { extractCritical } from '@emotion/server';

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </React.Fragment>
    );

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="en" className="dark">
        <Head title="Linus Boehm" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
