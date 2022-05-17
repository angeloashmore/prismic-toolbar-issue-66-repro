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
  const count = 5000;

  return (
    <div>
      <p>The page object is printed {count} times to increase load time.</p>
      <div style={{ padding: "2rem", background: "lightgray" }}>
        {Array(count)
          .fill(undefined)
          .map((_, i) => (
            <pre key={i}>
              <code>{JSON.stringify(page, null, 4)}</code>
            </pre>
          ))}
      </div>
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
