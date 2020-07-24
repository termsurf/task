
const start = require('./front')

check(`stone convert build/index.html -o build/index.pdf -w 2000px -h 3000px`)
check(`stone split build/paper.pdf -o build/out`)
check(`stone slice build/paper.pdf -s 3 -e 7 -o build/out/paper.sub.pdf`)
check(`stone convert build/hug.ttf -o build/hug.otf`)
check(`stone convert build/mount.mp4 -o build/mount.gif -e 00:00:03`)
check(`stone remove audio build/mount.mp4 -o build/mount.quiet.mp4`)
check(`stone convert build/image.svg -o build/image.png`)
check(`stone create build/out.zip -i build/out`)
// check(`stone compress build/mount.mp4 -o build/mount.compressed.mp4`)
check(`stone read build/paper.pdf`)
check(`stone update build/out/1.pdf -t foo -a bar -s baz -k one -k two`)
check(`stone read build/image.png -s`)
check(`stone replace color build/image.jpg -s "#cc9aff" -e "#111111" -z 20 -o build/image.new.jpg`)
check(`stone add audio -iv build/mount.quiet.mp4 -ia build/crow.wav -o build/mount.crow.mp4 -f`)

function check(argv) {
  test(argv, async () => {
    const args = [ `node` ].concat(argv.split(' '))
    await start(args)
  })
}
