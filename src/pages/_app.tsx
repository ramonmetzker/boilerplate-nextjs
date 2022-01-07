import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
