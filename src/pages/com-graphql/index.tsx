import { GetStaticPropsResult } from "next";
import React from "react";
import Layout from "../../layout";
import Intro from "../../sections/pages/Exemplo/Intro";
import List from "../../sections/pages/Exemplo/List";
import client from "../../services/api";
import { SpaceX } from "../../services/queries/example";
import { PageQuery } from "../../types/pages/com-graphql";

interface PageProps {
  data: PageQuery;
}
const Page = ({ data }: PageProps) => {
  return (
    <Layout title="Com GraphQL - Mobister">
      <Intro />
      <List launches={data.launchesPast} />
    </Layout>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<PageProps>
> => {
  const { data } = await client.query<PageQuery>({
    query: SpaceX,
  });

  return {
    props: {
      data: data,
    },
  };
};

export default Page;
