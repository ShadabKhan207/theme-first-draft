// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CONSTANTS } from '../../services/config/api-config';

type Data = {
  data: {source: String, destination: String}[]
}

let data = [
  {source: "/bpl/scott", destination: "/pl/bikes/bikes/mountain"},
  {source: "/bpl/syncros", destination: "/pl/bikes/bikes/mountain"},
  {source: "/bpl/bergamont", destination: "/pl/bikes/bikes/mountain"},
  {source: "/bpl/avanti", destination: "/pl/bikes/bikes/mountain"},
  {source: "/pl", destination: "/pl/bikes/bikes/mountain"}
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let api_res:any;
  const api_Res = await axios.get(`${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}&method=get_redirecting_urls&entity=signin`)
  .then((res)=>
  {
    // console.log("redirect api res success", res);
    api_res = res.data.message;
  }).catch((err)=>
  {
    console.log("redirect api err",err)
  })
  res.status(200).json({data  : api_res })
}
