import React, { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Mobister - Boilerplate Next.js",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
