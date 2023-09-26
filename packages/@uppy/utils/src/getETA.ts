import getSpeed from './getSpeed.js'
import getBytesRemaining from './getBytesRemaining.ts'
import type { FileProgress } from './getBytesRemaining.ts'

export default function getETA (fileProgress: FileProgress) {
  if (!fileProgress.bytesUploaded) return 0

  const uploadSpeed = getSpeed(fileProgress)
  const bytesRemaining = getBytesRemaining(fileProgress)
  const secondsRemaining = Math.round((bytesRemaining / uploadSpeed) * 10) / 10

  return secondsRemaining
}