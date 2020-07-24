#!/usr/bin/env node

const mouse = require('./mount')

start(process.argv)

async function start(argv) {
  const drive = mouse.drive(argv)

  try {
    mouse.cause(drive.force, drive.state)
  } catch (fault) {
    if (drive) {
      console.log(`Action ${drive.force} error.`)
    } else {
      console.log('Invalid command')
    }
  }
}
