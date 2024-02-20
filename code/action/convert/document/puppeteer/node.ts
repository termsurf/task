import { getBrowser, inactivateBrowser } from '~/code/tool/node/browser'
import {
  ConvertHtmlWithPuppeteerNodeInput,
  TextStyle,
} from '~/code/type/index'
// import debug from '~/code/tool/shared/debug'
import { marked } from 'marked'
import debug from '~/code/tool/shared/debug'
import {
  ConvertTxtWithPuppeteerNodeInput,
  ConvertTxtWithPuppeteerNodeInputModel,
  ConvertTxtWithPuppeteerNodeOutputModel,
  ConvertTxtWithPuppeteerNodeLocalInternalInput,
  ConvertTxtWithPuppeteerNodeLocalExternalInput,
  ConvertTxtWithPuppeteerNodeLocalInputModel,
  ConvertTxtWithPuppeteerNodeRemoteInput,
  ConvertTxtWithPuppeteerNodeClientInputModel,
  ConvertMarkdownWithPuppeteerNodeInput,
  ConvertMarkdownWithPuppeteerNodeInputModel,
  ConvertMarkdownWithPuppeteerNodeOutputModel,
  ConvertMarkdownWithPuppeteerNodeLocalInternalInput,
  ConvertMarkdownWithPuppeteerNodeLocalExternalInput,
  ConvertMarkdownWithPuppeteerNodeLocalInputModel,
  ConvertMarkdownWithPuppeteerNodeRemoteInput,
  ConvertMarkdownWithPuppeteerNodeClientInputModel,
} from '~/code/type/index'
import {
  resolveInputContentForConvertLocalExternalNode,
  resolveInputContentForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node'
import { extend } from '~/code/tool/shared/object'
import { buildRequestToConvert } from '../../shared'
import { resolveWorkFileNode } from '~/code/tool/node/request'
import { arrayBufferToString } from '~/code/tool/shared/string'
import _ from 'lodash'

export async function convertTxtWithPuppeteerNode(
  source: ConvertTxtWithPuppeteerNodeInput,
) {
  const input = ConvertTxtWithPuppeteerNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertTxtWithPuppeteerNodeRemote(input)
    case 'external':
      return await convertTxtWithPuppeteerNodeLocalExternal(input)
    default:
      return await convertTxtWithPuppeteerNodeLocalInternal(input)
  }
}

async function convertTxtWithPuppeteerNodeLocalExternal(
  source: ConvertTxtWithPuppeteerNodeLocalExternalInput,
) {
  const input =
    await resolveInputContentForConvertLocalExternalNode(source)
  return await convertTxtWithPuppeteerNodeLocal(input)
}

async function convertTxtWithPuppeteerNodeLocalInternal(
  source: ConvertTxtWithPuppeteerNodeLocalInternalInput,
) {
  const input =
    await resolveInputContentForConvertLocalInternalNode(source)
  return await convertTxtWithPuppeteerNodeLocal(input)
}

export async function convertTxtWithPuppeteerNodeRemote(
  source: ConvertTxtWithPuppeteerNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput = ConvertTxtWithPuppeteerNodeClientInputModel.parse(
    extend(input, { handle: 'client' }),
  )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertTxtWithPuppeteerNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

const COLOR = '0f172a'
const FONT = ['Helvetica']
const LINK_COLOR = '2563eb'
const LINE_HEIGHT = 1.4

const DEFAULT_TEXT_STYLE: Record<string, TextStyle> = {
  h1: {
    color: COLOR,
    font: {
      family: FONT,
      size: 36,
    },
    lineHeight: LINE_HEIGHT,
    bold: true,
  },
  h2: {
    color: COLOR,
    font: {
      family: FONT,
      size: 32,
    },
    lineHeight: LINE_HEIGHT,
  },
  h3: {
    color: COLOR,
    font: {
      family: FONT,
      size: 28,
    },
    lineHeight: LINE_HEIGHT,
  },
  h4: {
    color: COLOR,
    font: {
      family: FONT,
      size: 24,
    },
    lineHeight: LINE_HEIGHT,
  },
  h5: {
    color: COLOR,
    font: {
      family: FONT,
      size: 22,
    },
    lineHeight: LINE_HEIGHT,
  },
  h6: {
    color: COLOR,
    font: {
      family: FONT,
      size: 20,
    },
    lineHeight: LINE_HEIGHT,
  },
  text: {
    color: COLOR,
    font: {
      family: FONT,
      size: 16,
    },
    lineHeight: LINE_HEIGHT,
  },
  link: {
    color: LINK_COLOR,
    lineHeight: LINE_HEIGHT,
  },
}

const DEFAULT_MARGIN_STYLE = {
  x: 64,
  y: 64,
}

function textStyleToCSS(style: TextStyle) {
  const css: Array<string> = []
  if (style.allCaps) {
    css.push(`text-transform: uppercase;`)
  }
  if (style.color) {
    css.push(`color: #${style.color};`)
  }
  if (style.font) {
    if (style.font.family) {
      css.push(`font-family: ${style.font.family.join(', ')};`)
    }
    if (style.font.size) {
      css.push(`font-size: ${style.font.size}px;`)
    }
  }
  if (style.letterSpacing) {
    css.push(`letter-spacing: ${style.letterSpacing};`)
  }
  if (style.lineHeight) {
    css.push(`line-height: ${style.lineHeight};`)
  }
  return css
}

function marginStyleToCSS(margin) {
  const css: Array<string> = []
  if (margin.x) {
    css.push(`margin-left: ${margin.x}px;`)
    css.push(`margin-right: ${margin.x}px;`)
  }
  if (margin.y) {
    css.push(`margin-top: ${margin.y}px;`)
    css.push(`margin-bottom: ${margin.y}px;`)
  }
  return css
}

export async function convertTxtWithPuppeteerNodeLocal(source) {
  debug('convertTxtWithPuppeteerNodeLocal', source)

  const input = ConvertTxtWithPuppeteerNodeLocalInputModel.parse(source)

  const b = await getBrowser(input.proxy ? `${input.proxy}` : undefined)
  debug('convertTxtWithPuppeteerNodeLocal browser loaded')

  const p = await b.newPage()
  const string = arrayBufferToString(input.input.file.content)
  const textCss = textStyleToCSS(
    _.merge(DEFAULT_TEXT_STYLE.text, input.style?.text ?? {}),
  )
  const marginCss = marginStyleToCSS(
    _.merge(DEFAULT_MARGIN_STYLE, input.style?.margin ?? {}),
  )

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      @page {
${marginCss.map(line => `        ${line}`).join('\n')}
      }

      body {
        white-space: pre-wrap;
${textCss.map(line => `        ${line}`).join('\n')}
      }
    </style>
  </head>
  <body>${string}</body>
</html>`

  await p.setContent(html, { waitUntil: input.waitUntil })

  debug('convertTxtWithPuppeteerNodeLocal page content set')

  const opts: Record<string, any> = {
    scale: 1,
    path: input.output.file.path,
    printBackground: true,
    preferCSSPageSize: true,
  }

  if (input.viewport?.width) {
    opts.width = input.viewport.width
  }
  if (input.viewport?.height) {
    opts.height = input.viewport.height
  }

  if (input.output.format === 'png') {
    await p.screencast(opts)
  } else {
    await p.pdf(opts)
  }

  debug('convertTxtWithPuppeteerNodeLocal output created')

  inactivateBrowser(b)

  return ConvertTxtWithPuppeteerNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertMarkdownWithPuppeteerNode(
  source: ConvertMarkdownWithPuppeteerNodeInput,
) {
  const input = ConvertMarkdownWithPuppeteerNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertMarkdownWithPuppeteerNodeRemote(input)
    case 'external':
      return await convertMarkdownWithPuppeteerNodeLocalExternal(input)
    default:
      return await convertMarkdownWithPuppeteerNodeLocalInternal(input)
  }
}

async function convertMarkdownWithPuppeteerNodeLocalExternal(
  source: ConvertMarkdownWithPuppeteerNodeLocalExternalInput,
) {
  const input =
    await resolveInputContentForConvertLocalExternalNode(source)
  return await convertMarkdownWithPuppeteerNodeLocal(input)
}

async function convertMarkdownWithPuppeteerNodeLocalInternal(
  source: ConvertMarkdownWithPuppeteerNodeLocalInternalInput,
) {
  const input =
    await resolveInputContentForConvertLocalInternalNode(source)
  return await convertMarkdownWithPuppeteerNodeLocal(input)
}

export async function convertMarkdownWithPuppeteerNodeRemote(
  source: ConvertMarkdownWithPuppeteerNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertMarkdownWithPuppeteerNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertMarkdownWithPuppeteerNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertMarkdownWithPuppeteerNodeLocal(source) {
  debug('convertMarkdownWithPuppeteerNodeLocal', source)

  const input =
    ConvertMarkdownWithPuppeteerNodeLocalInputModel.parse(source)

  const b = await getBrowser(input.proxy ? `${input.proxy}` : undefined)
  debug('convertMarkdownWithPuppeteerNodeLocal browser loaded')

  const p = await b.newPage()
  const string = marked.parse(
    arrayBufferToString(input.input.file.content),
  )
  const h1Css = textStyleToCSS(
    _.merge(
      DEFAULT_TEXT_STYLE.h1,
      input.style?.text ?? {},
      input.style?.h1 ?? {},
    ),
  )
  const h2Css = textStyleToCSS(
    _.merge(
      DEFAULT_TEXT_STYLE.h2,
      input.style?.text ?? {},
      input.style?.h2 ?? {},
    ),
  )
  const h3Css = textStyleToCSS(
    _.merge(
      DEFAULT_TEXT_STYLE.h3,
      input.style?.text ?? {},
      input.style?.h3 ?? {},
    ),
  )
  const h4Css = textStyleToCSS(
    _.merge(
      DEFAULT_TEXT_STYLE.h4,
      input.style?.text ?? {},
      input.style?.h4 ?? {},
    ),
  )
  const h5Css = textStyleToCSS(
    _.merge(
      DEFAULT_TEXT_STYLE.h5,
      input.style?.text ?? {},
      input.style?.h5 ?? {},
    ),
  )
  const h6Css = textStyleToCSS(
    _.merge(
      DEFAULT_TEXT_STYLE.h6,
      input.style?.text ?? {},
      input.style?.h6 ?? {},
    ),
  )
  const textCss = textStyleToCSS(
    _.merge(DEFAULT_TEXT_STYLE.text, input.style?.text ?? {}),
  )
  const linkCss = textStyleToCSS(
    _.merge(DEFAULT_TEXT_STYLE.link, input.style?.link ?? {}),
  )
  const marginCss = marginStyleToCSS(
    _.merge(DEFAULT_MARGIN_STYLE, input.style?.margin ?? {}),
  )

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      @page {
${marginCss.map(line => `        ${line}`).join('\n')}
      }

      body {
        word-break: break-word;
${textCss.map(line => `        ${line}`).join('\n')}
      }

      h1 {
${h1Css.map(line => `        ${line}`).join('\n')}
      }

      h2 {
${h2Css.map(line => `        ${line}`).join('\n')}
      }

      h3 {
${h3Css.map(line => `        ${line}`).join('\n')}
      }

      h4 {
${h4Css.map(line => `        ${line}`).join('\n')}
      }

      h5 {
${h5Css.map(line => `        ${line}`).join('\n')}
      }

      h6 {
${h6Css.map(line => `        ${line}`).join('\n')}
      }

      a {
        display: inline-block;
${linkCss.map(line => `        ${line}`).join('\n')}
      }

      ol {
        list-style-position: inside;
        list-style-type: decimal;
        width: 100%;
        margin: 0px;
        padding: 0px;
      }

      ul {
        list-style-position: inside;
        width: 100%;
        margin: 0px;
        padding: 0px;
      }

      li {
        margin: 0px;
        padding: 0px;
        display: list-item;
      }

      ul > li:before {
        content: "";
        margin-left: -8px;
      }

      ol, ul {
        margin-left: 16px;
      }

    </style>
  </head>
  <body>${string}</body>
</html>`

  await p.setContent(html, { waitUntil: input.waitUntil })

  debug('convertMarkdownWithPuppeteerNodeLocal page content set')

  const opts: Record<string, any> = {
    scale: 1,
    path: input.output.file.path,
    printBackground: true,
    preferCSSPageSize: true,
  }

  if (input.viewport?.width) {
    opts.width = input.viewport.width
  }
  if (input.viewport?.height) {
    opts.height = input.viewport.height
  }

  if (input.output.format === 'png') {
    await p.screencast(opts)
  } else {
    await p.pdf(opts)
  }

  debug('convertMarkdownWithPuppeteerNodeLocal output created')

  inactivateBrowser(b)

  return ConvertTxtWithPuppeteerNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertHtmlToPngWithPuppeteerNode(
  input: ConvertHtmlWithPuppeteerNodeInput,
) {
  // const b = await getBrowser(input.proxy ? `${input.proxy}` : undefined)
  // const p = await b.newPage()
  // await p.goto(`${input.input.path}`)
  // await p.waitForNavigation({ waitUntil: input.waitUntil })
  // const opts: Record<string, any> = {
  //   scale: 1,
  //   path: input.output.file.path,
  //   printBackground: true,
  //   preferCSSPageSize: true,
  // }
  // if (input.viewport?.width) {
  //   opts.width = input.viewport.width
  // }
  // if (input.viewport?.height) {
  //   opts.height = input.viewport.height
  // }
  // await p.screencast(opts)
  // inactivateBrowser(b)
}

// inspectWebpage().then(data => debug(data.fonts))

// https://stackoverflow.com/questions/1403087/how-can-i-convert-an-html-table-to-csv
// https://stackoverflow.com/questions/37498713/how-to-export-an-html-table-as-a-xlsx-file

export async function convertHtmlToPdfWithPuppeteer(
  input: ConvertHtmlWithPuppeteerNodeInput,
) {
  // const b = await getBrowser(input.proxy ? `${input.proxy}` : undefined)
  // const p = await b.newPage()
  // await p.goto(`${input.input.file.path}`)
  // await p.waitForNavigation({ waitUntil: input.waitUntil })
  // const opts: Record<string, any> = {
  //   scale: 1,
  //   path: input.output.file.path,
  //   printBackground: true,
  //   preferCSSPageSize: true,
  // }
  // if (input.viewport?.width) {
  //   opts.width = input.viewport.width
  // }
  // if (input.viewport?.height) {
  //   opts.height = input.viewport.height
  // }
  // await p.pdf(opts)
  // inactivateBrowser(b)
}
