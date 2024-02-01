import si from 'systeminformation'
import _ from 'lodash'

export async function inspectSystem() {
  return await inspectBasicSystem()
}

export async function inspectBasicSystem() {
  const os = _.omit(await si.osInfo(), [
    'serial',
    'servicepack',
    'logofile',
    'fqdn',
    'uefi',
  ])
  const system = _.omit(await si.system(), [
    'serial',
    'uuid',
    'sku',
    'uuid',
  ])
  const cpu = _.omit(await si.cpu(), [
    'cache',
    'governor',
    'flags',
    'virtualization',
    'revision',
    'voltage',
    'vendor',
    'speedMin',
    'speedMax',
  ])
  return { os, system, cpu }
}
