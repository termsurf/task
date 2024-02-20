export type Action = 'convert' | 'format'

export type Object = 'video' | 'image' | 'document'

export type Tool =
  | 'ffmpeg'
  | 'image-magick'
  | 'libre-office'
  | 'calibre'
