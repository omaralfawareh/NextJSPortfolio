import type { NextApiRequest, NextApiResponse } from "next";
import { Resend, ErrorResponse as resendErrorResponse } from "resend";

export type contactDataType = {
  name: string;
  email: string;
  message: string;
};
export interface ErrorResponse extends resendErrorResponse {
  statusCode: number;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: `Method ${req.method} is not supported` });
  } else {
    const data: contactDataType = JSON.parse(req.body);
    try {
      const resend = new Resend(process.env.resendAPI);
      const response = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "alfawareho@gmail.com",
        subject: `Email from ${data.name}(${data.email})`,
        text: data.message,
      });
      if (response.error) {
        throw response.error;
      }
    } catch (e) {
      const error = e as ErrorResponse;
      return res
        .status(error?.statusCode)
        .json({ message: error?.message, name: error?.name });
    }
    return res.status(200).json({ message: "Sent Message Successfuly", data });
  }
}
