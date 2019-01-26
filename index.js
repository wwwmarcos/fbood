const { config } = require('./config')
const puppeteer = require('puppeteer')

async function start () {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-notifications']
  })

  const page = await browser.newPage()
  await page.goto(config.facebook.postUrl)

  await page.type('#email', config.facebook.username)
  await page.type('#pass', config.facebook.password)

  await page.click('#loginbutton')

  await page.waitFor(5000)

  await page.goto(config.facebook.postUrl)

  await page.waitFor(5000)

  await page.click('[contenteditable]')

  for (let index = 0; index < 1000; index++) {
    await page.keyboard.type(config.facebook.commentText, { delay: 100 })
    await page.keyboard.press('Enter')
    await page.waitFor(1000)
  }

  await page.waitFor(5000)

  await browser.close()
}

start()
