export const CONVERT_HINT = `task convert -I png -O jpg -i input.png -o output.jpg`
export const CONVERT_IMAGE_HINT = `task convert -I png -O jpg -i input.png -o output.jpg`
export const CONVERT_VIDEO_HINT = `task convert -I mov -O mp4 -i input.mov -o output.mp4`
export const CONVERT_ARCHIVE_HINT = `task convert -I rar -O zip -i archive.rar -o archive.zip`
export const CONVERT_DOCUMENT_PANDOC_HINT = `task convert -I ipynb -O html -i input.ipynb -o output.html`
export const CONVERT_FONT_HINT = `task convert -I ttf -O woff2 -i font.ttf -o font.woff2`
export const CONVERT_UNIT_HINT = `task convert -I farenheit -O celsius -i 32`

export const VERIFY_IMAGE_HINT = `task verify -I jpg -i file.jpg`

export const FORMAT_CODE_HINT = `task format c -i example.c -o example.c`
export const FORMAT_C_CODE_HINT = `task format c -i example.c -o example.c`

export const COMPILE_CODE_HINT = `task compile c -i example.c -o example.o`
