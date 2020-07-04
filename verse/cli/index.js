#!/usr/bin/env node

const https = require('https')
const chalk = require('chalk')
const ansi = require('ansi-escapes')
const getEmail = require('git-user-email')
const bcrypt = require('bcrypt')
const userHome = require('os').homedir()
const parseGitConfig = require('parse-git-config')
const fs = require('fs')
const salt = 10

// https://fastspring.com/blog/stripe-vs-fastspring/

const { argv } = process
const drive = argv[2]

switch (drive) {
  case 'hatch':
    hatch()
    break
  case 'mount':
    mount()
    break
  case 'slate':
    slate()
    break
  case 'house':
    house()
    break
}

function hatch() {
  const pkg = require('../../package.json')
  console.log(`
    ${pkg.version}
`)
}

function slate() {
  clear()
  var g = chalk.gray('o')
  console.log(`
    ${g}                          ${g}
    ${g}  $7 / week compute       ${g}
    ${g}  $7 / TB input/output    ${g}
    ${g}  $7 / @username / mo     ${g}
    ${g}  $7 / GB storage / mo    ${g}
    ${g}  $7 / private repo / mo  ${g}
    ${g}                          ${g}

  ${chalk.white('Stone: Structure for Computation')}

    ${chalk.gray('card')}
    ${chalk.gray('date')}
    ${chalk.gray('code')}

  ${chalk.gray('Stripe securely stores your card')}

    ${g}                          ${g}
    ${g}                          ${g}
    ${g}                          ${g}
    ${g}                          ${g}
`)

  process.stdin.setEncoding('utf-8')
  process.stdin.setRawMode(true)
  process.stdin.write(ansi.cursorShow)
  process.stdin.on('data', ondata)

  process.stdout.write(ansi.cursorMove(9, -12))

  let i = 0
  let a = [], b = [], c = []
  let input = a
  let pos = 0

  function saveCard(data) {
    let email
    try {
      email = JSON.parse(fs.readFileSync(`${userHome}/stone/state.json`)).email
    } catch {
      clear()
      process.exit(0)
    }
    data.email = email
    const json = JSON.stringify(data)

    const options = {
      hostname: 'localhost',
      port: process.env.PORT || 3000,
      path: '/cards',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }

    const req = https.request(options, (resp) => {
      let data = ''

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk
      })

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(JSON.parse(data))
        cb()
      })

    }).on("error", (err) => {
      console.log('error', err)
      cb()
    })

    req.write(json)
    req.end()
  }

  function ondata(data) {
    if (data === '\u0003') {
      // ctrl-c
      process.stdout.write(ansi.cursorMove(0, 12))
      process.exit()
    } else if (data.charCodeAt(0) === 13) {
      i++
      if (i === 1) {
        a = input.join('')
        input = b
        process.stdout.write(ansi.cursorMove(-pos, 1))
        pos = 0
      } else if (i === 2) {
        b = input.join('')
        input = c
        process.stdout.write(ansi.cursorMove(-pos, 1))
        pos = 0
      } else if (i === 3) {
        pos = 0
        process.stdin.off('data', ondata)
        saveCard({ card: a, date: b, code: c })
      }
    } else if (data === '\u001B\u005B\u0044') {
      // left
      if (pos > 0) {
        pos--
        process.stdout.write(data)
      }
    } else if (data === '\u001B\u005B\u0041') {
      // up ignore
    } else if (data === '\u001B\u005B\u0043') {
      // right
      if (pos < input.length) {
        pos++
        process.stdout.write(data)
      }
    } else if (data === '\u001B\u005B\u0042') {
      // down ignore
    } else if (data.charCodeAt(0) === 127) {
      if (pos && input.length) {
        input.splice(pos - 1, 1)
        pos--
        process.stdout.write(ansi.cursorMove(-1, 0))
        process.stdout.write(ansi.eraseEndLine)
      }
    } else {
      if (input.length < 64) {
        input.push(data)
        pos++
        if (input === c) {
          process.stdout.write('x')
        } else {
          process.stdout.write(data)
        }
      }
    }
  }
}

function house() {

}

function mount() {
  const config = parseGitConfig.sync({ path: `${userHome}/.gitconfig` })
  const email = config && config.user && config.user.email

  let a = email ? email.split('') : []
  let b = []

  let input = a
  let first = true
  let pos = input.length

  process.stdin.setEncoding('utf-8')
  process.stdin.setRawMode(true)
  process.stdin.write(ansi.cursorShow)
  process.stdin.on('data', ondata)

  function ondata(data) {
    if (data === '\u0003') {
      // ctrl-c
      process.stdout.write(ansi.cursorMove(0, 12))
      process.exit()
    } else if (data.charCodeAt(0) === 13) {
      if (first) {
        a = input.join('')
        input = b
        first = false
        process.stdout.write(ansi.cursorMove(-pos, 1))
      } else {
        b = input.join('')
        process.stdout.write(ansi.cursorHide)
        process.stdin.off('data', ondata)
        save({ email: a, pass: b })
      }
    } else if (data === '\u001B\u005B\u0044') {
      // left
      if (pos > 0) {
        pos--
        process.stdout.write(data)
      }
    } else if (data === '\u001B\u005B\u0041') {
      // up ignore
    } else if (data === '\u001B\u005B\u0043') {
      // right
      if (pos < input.length) {
        pos++
        process.stdout.write(data)
      }
    } else if (data === '\u001B\u005B\u0042') {
      // down ignore
    } else if (data.charCodeAt(0) === 127) {
      if (pos && input.length) {
        input.splice(pos - 1, 1)
        pos--
        process.stdout.write(ansi.cursorMove(-1, 0))
        process.stdout.write(ansi.eraseEndLine)
      }
    } else {
      if (input.length < 64) {
        input.push(data)
        pos++
        if (input === b) {
          process.stdout.write('x')
        } else {
          process.stdout.write(data)
        }
      }
    }
  }

  clear()
  var g = chalk.gray('o')
  console.log(`
            ${g}          ${g}
          ${g}              ${g}
        ${g}                  ${g}
      ${g}                      ${g}
    ${g}                          ${g}

  ${chalk.white('Stone: Structure for Computation')}

    ${chalk.gray('mail')}
    ${chalk.gray('code')}

  ${chalk.gray('Enter in your email and passcode')}

    ${g}                          ${g}
      ${g}                      ${g}
        ${g}                  ${g}
          ${g}              ${g}
            ${g}          ${g}

`)

  process.stdout.write(ansi.cursorMove(9, -12))
  if (email) {
    process.stdin.write(email)
    // process.stdout.write(ansi.cursorMove(-email.length, 0))
  }

  setTimeout(function(){}, 3000)

  function save(data) {
    clear()
    console.log(`
            ${g}          ${g}
          ${g}              ${g}
        ${g}                  ${g}
      ${g}                      ${g}
    ${g}                          ${g}

  ${chalk.white(`I Agree to Mount's terms of usage`)}

    ${chalk.gray(`x ${data.email}`)}
    ${chalk.gray(`o`)} https://mount.build/slate

  ${chalk.gray('Press enter to agree to the terms')}

    ${g}                          ${g}
      ${g}                      ${g}
        ${g}                  ${g}
          ${g}              ${g}
            ${g}          ${g}
  `)

    process.stdin.on('data', ondata)

    function ondata(data) {
      if (data === '\u0003') {
        // ctrl-c
        process.stdout.write(ansi.cursorMove(0, 12))
        process.exit()
      } else if (data.charCodeAt(0) === 13) {
        process.stdin.off('data', ondata)
        send()
      }
    }

    function send() {
      clear()
      console.log(`
            ${g}          ${g}
          ${g}              ${g}
        ${g}                  ${g}
      ${g}                      ${g}
    ${g}                          ${g}

  ${chalk.gray('Connecting to the origin network')}




  ${chalk.gray('Preparing your spot in the cloud')}

    ${g}                          ${g}
      ${g}                      ${g}
        ${g}                  ${g}
          ${g}              ${g}
            ${g}          ${g}
  `)

      var i = 0

      var int = setInterval(() => {
        i++
        if (i > 5) i = 0
        process.stdout.write(ansi.cursorTo(0, 9))
        process.stdout.write(ansi.eraseLine)
        process.stdout.write(ansi.cursorTo(0, 10))
        process.stdout.write(ansi.eraseLine)
        if (i == 0) {
          process.stdout.write(ansi.cursorTo(15, 9))
          process.stdout.write('o o')
        } else if (i == 1) {
          process.stdout.write(ansi.cursorTo(17, 9))
          process.stdout.write('o o')
        } else if (i == 2) {
          process.stdout.write(ansi.cursorTo(19, 9))
          process.stdout.write('o')
          process.stdout.write(ansi.cursorTo(19, 10))
          process.stdout.write('o')
        } else if (i == 3) {
          process.stdout.write(ansi.cursorTo(17, 10))
          process.stdout.write('o o')
        } else if (i == 4) {
          process.stdout.write(ansi.cursorTo(15, 10))
          process.stdout.write('o o')
        } else if (i == 5) {
          process.stdout.write(ansi.cursorTo(15, 10))
          process.stdout.write('o')
          process.stdout.write(ansi.cursorTo(15, 9))
          process.stdout.write('o')
        }
      }, 128)

      setTimeout(() => {

      bcrypt.genSalt(10, (err, salt) => {

      bcrypt.hash(data.pass, salt, (err, encrypted) => {
        request(data.email, data.pass, salt, function(){
          if (!fs.existsSync(`${userHome}/stone`))
            fs.mkdirSync(`${userHome}/stone`)
          fs.writeFileSync(`${userHome}/stone/state.json`, JSON.stringify({ email: data.email }, null, 2))

        // console.log(err, encrypted)
        clearInterval(int)
        clear()
        console.log(`
            ${g}          ${g}
          ${g}              ${g}
        ${g}                  ${g}
      ${g}                      ${g}
    ${g}                          ${g}

  ${chalk.gray(`You have successfully registered`)}

    $ stone slate
    $ stone house @yourusername

  ${chalk.white(`Next you can reserve a @username`)}
    ${g}                          ${g}
      ${g}                      ${g}
        ${g}                  ${g}
          ${g}              ${g}
            ${g}          ${g}
    `)
        process.exit(0)
        })
      })

      })
    }, 1400)
    }
  }
}

function request(email, pass, salt, cb) {
  const data = JSON.stringify({ email, password: pass })

  const options = {
    hostname: 'stone.mount.build',
    port: process.env.PORT || 3000,
    path: '/users',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }

  const req = https.request(options, (resp) => {
    let data = ''

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk
    })

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data))
      cb()
    })

  }).on("error", (err) => {
    console.log('error', err)
    cb()
  })

  req.write(data)
  req.end()
}

function clear() {
  // 1. Print empty lines until the screen is blank.
  process.stdout.write('\033[2J');

  // 2. Clear the scrollback.
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
}
