import { useCallback, useEffect, useMemo, useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import RecordRTC from 'recordrtc'

import { log } from '../utils'

type Props = {
  stream: MediaStream | null
  blob: Blob | null
  blobDuration?: string
  startRecording: () => void
  stopRecording: () => void
  timerString?: string
  isRecording: boolean
  error: boolean
}

const useUserMedia: () => Props = () => {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [acquired, setAcquired] = useState(false)
  const [recorder, setRecorder] = useState<any>(null)
  const [blob, setBlob] = useState<Blob | null>()
  const [blobDuration, setBlobDuration] = useState<string>('')
  const [error, setError] = useState(false)
  const {
    seconds,
    isRunning,
    start: timerStart,
    reset: timerReset,
  } = useStopwatch({ autoStart: false })

  // We're _counting_ that videos won't be longer than 1min
  const timerString = useMemo(() => {
    return `00:${seconds < 9 ? '0' : '0'}${seconds}`
  }, [seconds])

  // Get's the userMedia object from navigator on first mount
  useEffect(() => {
    if (!navigator?.mediaDevices?.getUserMedia) {
      setError(true)
      log('O aparelho não suporta gravação de vídeo')

      return
    }

    getVideoStream().then((acquiredStream) => {
      setStream(acquiredStream)
    })
  }, [])

  const startRecording = useCallback(async () => {
    setBlob(null)
    setBlobDuration('')
    timerReset()

    const streamToUse = await Promise.resolve(
      acquired ? stream : getVideoStream()
    )

    setStream(streamToUse)

    // TODO: Locally create types for PromisesHandler
    const recorder = new RecordRTC.RecordRTCPromisesHandler(streamToUse, {
      type: 'video',
      mimeType: 'video/webm;codecs=h264',
      disableLogs: true,
    })

    setRecorder(recorder)

    recorder.startRecording().then(
      () => {
        timerStart()
      },
      (err: any) => {
        setError(true)
        log(err)
      }
    )
  }, [stream, timerReset, timerStart, acquired])

  const stopRecording = useCallback(() => {
    recorder
      .stopRecording()
      .then(() => recorder.getBlob())
      .then((resultBlob: Blob) => {
        setBlobDuration(timerString)
        setBlob(resultBlob)

        stream.getVideoTracks()[0].stop()
        setAcquired(false)
        timerReset()
      })
  }, [recorder, timerReset, timerString, stream, setAcquired])

  return {
    stream,
    startRecording,
    stopRecording,
    isRecording: isRunning,
    timerString,
    blob,
    blobDuration,
    error,
  }
}

/**
 * We have this "fail-safe" here to:
 * - Use rear camera on mobile devices
 * - Use laptop's  camera when developing
 */
const getVideoStream = () => {
  return navigator.mediaDevices
    .getUserMedia({ video: { facingMode: { exact: 'environment' } } })
    .catch(() => navigator.mediaDevices.getUserMedia({ video: true }))
}

export default useUserMedia
