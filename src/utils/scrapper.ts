const puppeteer = require('puppeteer')
const fs = require('fs')

const componentArray = []

export default async function scrapper(url: string) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--start-maximized'],
      defaultViewport: null
    })
    const page = await browser.newPage()
    await page.goto(url)
    sweepPage(page, browser)
  } catch (error) {
    console.error(error)
  }
}
const sweepPage = async (page, browser) => {
  //::Element[] no me funciona?
  console.log('Starting sweep of page')

  const Navlist = await page.$$(
    '#navlist > li > div[class="s-productthumbbox"]'
  )
  // console.log(Navlist)
  const img = await page.$$eval(
    '#navlist > li > div[class="s-productthumbbox"] ',
    (elements) => {
      console.log('These are the elements', elements)
      return elements //.map((e) => e.src)
    }
  )
  console.log('The images are:', img)
}
