import Scrapper from './scrapper'

export default async function LaunchScrape() {
  await Scrapper('https://www.evanscycles.com/components')
}
