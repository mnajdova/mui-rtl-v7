import * as React from 'react';
import { Html, Head, Main, NextScript } from "next/document";
import { documentGetInitialProps } from '@mui/material-nextjs/v15-pagesRouter';
import createEmotionCache from '../utils/createEmotionCache';

export default function Document() {
  return (
    <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: any) => {
  try {
    const finalProps = await documentGetInitialProps(ctx, {
      emotionCache: createEmotionCache(),
    });

    return {
      ...finalProps,
      styles: [
        ...finalProps.emotionStyleTags,
        ...React.Children.toArray(finalProps.styles),
      ],
    };
  } finally {
    
  }
};
