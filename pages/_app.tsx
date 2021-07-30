import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>컨벤션</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ID=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
