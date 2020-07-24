
const mouse = require('./mount')

check(`mouse convert build/index.html -o build/index.pdf -w 2000px -h 3000px`)
check(`mouse convert build/hug.ttf -o build/hug.otf`)
check(`mouse convert build/mount.mp4 -o build/mount.gif -e 00:00:03`)
check(`mouse convert build/image.svg -o build/image.png`)
check(`mouse convert build/bear.ai -o build/bear.svg`)
check(`mouse convert build/rock.cr2 -o build/rock.jpg`)
check(`mouse convert build/wolf.psd -o build/wolf.png`)
check(`mouse split build/paper.pdf -o build/out`)
check(`mouse slice build/paper.pdf -s 3 -e 7 -o build/out/paper.sub.pdf`)
check(`mouse remove audio build/mount.mp4 -o build/mount.quiet.mp4`)
check(`mouse create build/out.zip -i build/out`)
check(`mouse create build/out.rar -i build/out`)
// check(`mouse compress build/mount.mp4 -o build/mount.compressed.mp4`)
check(`mouse read build/paper.pdf`)
check(`mouse update build/out/1.pdf -t foo -a bar -s baz -k one -k two`)
check(`mouse read build/image.png -s`)
check(`mouse replace color build/image.jpg -s "#cc9aff" -e "#111111" -z 20 -o build/image.new.jpg`)
check(`mouse add audio -iv build/mount.quiet.mp4 -ia build/crow.wav -o build/mount.crow.mp4 -f`)

function check(argv) {
  test(argv, async () => {
    const args = [ `node` ].concat(argv.split(' '))
    await start(args)
  })
}

async function start(argv) {
  const drive = mouse.drive(argv)
  await mouse.cause(drive.force, drive.state)
}
