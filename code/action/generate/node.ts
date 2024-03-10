import {
  GenerateHaikuPhrase,
  GenerateRandomPhrase,
  GenerateRandomSymbols,
} from '~/code/type/shared'
import { testGenerate } from './shared'
import {
  generateHaikuPhrase,
  generateRandomPhrase,
  generateRandomSymbols,
} from './string/shared'

export async function generate(
  source: GenerateRandomSymbols,
): Promise<string>
export async function generate(
  source: GenerateRandomPhrase,
): Promise<string>
export async function generate(
  source: GenerateHaikuPhrase,
): Promise<string>
export async function generate(source) {
  if (testGenerate(source)) {
    const input = source as any
    switch (source.format) {
      case 'random_symbols':
        return await generateRandomSymbols(input)
      case 'random_phrase':
        return await generateRandomPhrase(input)
      case 'haiku_phrase':
        return await generateHaikuPhrase(input)
    }
  }
}
