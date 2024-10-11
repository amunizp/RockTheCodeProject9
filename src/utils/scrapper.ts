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
  } catch (error) {
    console.error(error)
  }
}
