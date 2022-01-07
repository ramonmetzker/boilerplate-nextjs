import Head from "next/head";
import Main from "../sections/pages/Home/Main";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Mobister Boilerplate</title>
        <meta name="description" content="Criado com NextJS pela Mobister" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
};

export default Home;
