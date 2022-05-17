import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as prismicH from "@prismicio/helpers";

import type { PageDocument } from "../types.generated";
import { createClient } from "../prismicio";

type PageProps = {
  page: PageDocument;
};

type PageParams = {
  uid: string;
};

const Page: NextPage<PageProps> = ({ page }) => {
  return (
    <div>
      <p>The raw page:</p>
      {Array(1000)
        .fill(undefined)
        .map((_, i) => (
          <pre key={i}>
            <code>{JSON.stringify(page, null, 4)}</code>
          </pre>
        ))}
    </div>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  params,
  previewData,
}) => {
  if (!params?.uid) {
    return { notFound: true };
  }

  const client = createClient({ previewData });

  const page = await client.getByUID<PageDocument>("page", params.uid);

  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();

  const pages = await client.getAllByType<PageDocument>("page");
  const paths = pages
    .map((page) => prismicH.asLink(page))
    .filter((path): path is NonNullable<typeof path> => Boolean(path));

  return {
    paths,
    fallback: false,
  };
};
