import type { NextApiRequest, NextApiResponse } from "next";

export type contactDataType = {
  name: String;
  email: String;
  message: String;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: `Method ${req.method} is not supported` });
  } else {
    const data: contactDataType = JSON.parse(req.body);
    console.log("omar data ==>", data.name);
    return res.status(200).json({ message: "Data received", data });
  }
}
