import { NextApiRequest, NextApiResponse } from 'next'
import Scrapper from '../../utils/scrapper'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await Scrapper('https://www.evanscycles.com/components')
  res.status(200).json({ message: 'Scrape successful' })
}
