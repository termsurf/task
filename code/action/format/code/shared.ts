import { Form } from '@termsurf/form'
import { Config } from 'prettier'
import prettier from 'prettier/standalone'

export const PRETTIER_TYPESCRIPT_FEATURE = [
  'jsxSingleQuote',
  'singleQuote',
  'semi',
  'input',
  'printWidth',
  'tabWidth',
  'trailingComma',
  'bracketSpacing',
  'bracketSameLine',
  'arrowParens',
  'endOfLine',
  'singleAttributePerLine',
]

export const PRETTIER_HTML_FEATURE =
  PRETTIER_TYPESCRIPT_FEATURE.concat()

export const PRETTIER_RUST_FEATURE = [
  'useTabs',
  'tabWidth',
  'printWidth',
  'endOfLine',
]

export const PRETTIER_JAVA_FEATURE = [
  'printWidth',
  'tabWidth',
  'useTabs',
  'trailingComma',
]

export const PRETTIER_SH_FEATURE = [
  'keepComments',
  'stopAt',
  'variant',
  'indent',
  'binaryNextLine',
  'switchCaseIndent',
  'spaceRedirects',
  'keepPadding',
  'minify',
  'functionNextLine',
]

// https://builtin.com/data-science/autopep8-vs-black
// https://prettier.io/docs/en/plugins
const plugins: Record<string, any> = {
  angular: () => import('prettier/parser-angular'),
  // babel: () => import('prettier/parser-babel'),
  // espree: () => import('prettier/parser-espree'),
  flow: () => import('prettier/parser-flow'),
  glimmer: () => import('prettier/parser-glimmer'),
  graphql: () => import('prettier/parser-graphql'),
  html: () => import('prettier/parser-html'),
  markdown: () => import('prettier/parser-markdown'),
  meriyah: () => import('prettier/parser-meriyah'),
  postcss: () => import('prettier/parser-postcss'),
  typescript: () => import('prettier/parser-typescript'),
  yaml: () => import('prettier/parser-yaml'),
  // rust: () => import('prettier-plugin-rust'),
  // java: () => import('prettier-plugin-java'),
  // shell: () => import('prettier-plugin-sh'),
  // kotlin: () => import('prettier-plugin-kotlin'),
}

export const FORMATTER_LIST = Object.keys(plugins)

export async function prettify(
  text: string,
  { parser, config }: { parser: string; config: Config },
) {
  const plugin = (await plugins[parser]()).default
  return prettier.format(text, {
    parser,
    plugins: [plugin],
    ...config,
  })
}
