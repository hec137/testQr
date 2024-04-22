// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Cookies } from "react-cookie";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>,
) {
    const cookies = new Cookies();
    var time = cookies.get("timestemp");
    console.log(time);
    console.table(cookies.getAll());
    if(time == undefined)
    {
        res.setHeader('Set-Cookie', `timestemp=${Date.now()}; Path=/`);
    }
    console.table(cookies.getAll());    
    res.status(200).json({done: true});
}

