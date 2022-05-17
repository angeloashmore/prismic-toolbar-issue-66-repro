import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";
import { NextApiRequest, NextApiResponse } from "next";

import { createClient } from "../../prismicio";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const client = createClient({ req });

  setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
}
