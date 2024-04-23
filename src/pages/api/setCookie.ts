// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Cookies } from "react-cookie";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>,
) {
    var id = req.query["id"];
    res.setHeader('Set-Cookie', `timestamp=${Date.now()}; Path=/`);
    res.redirect('/');
    res.status(200).json({done: true});
}

