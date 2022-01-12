import Head from "next/head";
import Main from "../sections/pages/Home/Main";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta name="description" content="Made with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
};

export default Home;
