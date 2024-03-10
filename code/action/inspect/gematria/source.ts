import { Form, List } from '@termsurf/form'

export const shared_gematria_language: List = {
  form: 'list',
  list: [
    'arabic',
    'coptic',
    'devanagari',
    'elderFuthark',
    'greek',
    'gothic',
    'hebrew',
    'japanese',
    'latin',
    'tibetan',
  ],
}

export const calculate_gematria: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        string: {
          link: {
            decoded: { like: 'string' },
            encoded: { like: 'string', need: false },
          },
        },
      },
    },
  },
}

export const gematria_system_calculation_result: Form = {
  form: 'form',
  link: {
    string: {
      link: {
        decoded: { like: 'string' },
        encoded: { like: 'string' },
      },
    },
    script: {
      link: {
        slug: { like: 'string' },
        title: { like: 'string' },
      },
    },
    calculation: {
      like: 'gematria_system_calculation',
      list: true,
    },
  },
}

export const gematria_system_calculation: Form = {
  form: 'form',
  link: {
    system: {
      link: {
        slug: { like: 'string' },
        title: { like: 'string' },
      },
    },
    reduction: { like: 'natural_number' },
    summation: { like: 'natural_number' },
  },
}
