import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

export async function bindFFmpeg({
  onLog,
  onProgress,
  corePath,
  wasmPath,
}: {
  wasmPath: string
  corePath: string
  onLog?: (message: string) => void
  onProgress?: (progress: number) => void
}) {
  const ffmpeg = new FFmpeg()
  if (onLog) {
    ffmpeg.on('log', ({ message }) => {
      onLog(message)
    })
  }
  if (onProgress) {
    ffmpeg.on('progress', ({ progress }) => {
      // message.innerHTML = `${progress * 100} %`
      onProgress(progress)
    })
  }
  await ffmpeg.load({
    coreURL: corePath,
    wasmURL: wasmPath,
  })

  return ffmpeg
}

export async function writeFFmpegFile(
  ffmpeg: FFmpeg,
  name: string,
  file: File,
) {
  await ffmpeg.writeFile(name, await fetchFile(file))
}

// message.innerHTML = 'Start transcoding'
// await ffmpeg.exec(['-i', name, 'output.mp4'])
// message.innerHTML = 'Complete transcoding'
// const data = await ffmpeg.readFile('output.mp4')
// video.src = URL.createObjectURL(
//   new Blob([data.buffer], { type: 'video/mp4' }),
// )
