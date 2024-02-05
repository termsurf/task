import dayjs from 'dayjs'

export const toDayJs = (date: dayjs.ConfigType) => dayjs(date)

// https://day.js.org/docs/en/display/format
export const YYYY_MM_DD_HH_MM_SS = (date: dayjs.Dayjs) =>
  date.format('YYYY:MM:DD HH:mm:ss')
