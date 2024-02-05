import { Browser } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import fs from 'fs'
import __dirname from '~/code/tool/shared/directory.js'
// add stealth plugin and use defaults (all evasion techniques)
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer.use(StealthPlugin())

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

  const config: Record<string, any> = { headless }
  const item: Record<string, any> = { active: true, proxy }

  if (proxy) {
    config.args = [`--proxy-server=${proxy}`]
  }

  item.browser = await puppeteer.launch(config)

  CACHE.push(item as PuppeteerCacheItem)

  return item.browser as Browser
}
