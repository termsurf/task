import { Browser } from 'puppeteer'
import puppeteer from 'puppeteer'
import __dirname from '~/code/tool/shared/directory.js'
// add stealth plugin and use defaults (all evasion techniques)
// import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import locateChrome from 'locate-chrome'

// puppeteer.use(StealthPlugin())

// https://github.com/lancejpollard/resilient-puppeteer.js/blob/make/index.js

export type PuppeteerCacheItem = {
  active: boolean
  browser: Browser
  proxy?: string
}

const CACHE: Array<PuppeteerCacheItem> = []

export function inactivateBrowser(b: Browser) {
  const item = CACHE.find(x => x.browser === b)

  if (item) {
    item.active = false
  }
}

export async function closeAllBrowsers() {
  for (const item of CACHE) {
    await item.browser.close()
  }
}

export async function getBrowser(proxy?: string, headless = true) {
  const b = CACHE.find(item => {
    if (item.active) {
      return false
    }

    if (proxy) {
      return item.proxy === proxy
    } else if (item.proxy) {
      return false
    }

    return true
  })

  if (b) {
    return b.browser
  }

  const executablePath = await locateChrome()

  const config: Record<string, any> = {
    headless: true,
    args: [
      // '--no-sandbox',
      // '--disable-setuid-sandbox',
      // '--user-data-dir=/tmp',
    ],
    timeout: 0,
    executablePath,
  }
  const item: Record<string, any> = { active: true, proxy }

  if (proxy) {
    config.push(`--proxy-server=${proxy}`)
  }

  item.browser = await puppeteer.launch({
    dumpio: true,
    ...config,
  })

  CACHE.push(item as PuppeteerCacheItem)

  return item.browser as Browser
}
