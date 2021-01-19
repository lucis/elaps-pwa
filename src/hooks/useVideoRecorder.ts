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

    /**
     * We have this "fail-safe" here to:
     * - Use rear camera on mobile devices
     * - Use laptop's  camera when developing
     */
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: { exact: 'environment' } } })
      .catch(() => navigator.mediaDevices.getUserMedia({ video: true }))
      .then((acquiredStream) => {
        setStream(acquiredStream)
      })
  }, [])

  const startRecording = useCallback(() => {
    setBlob(null)
    setBlobDuration('')
    timerReset()
    // TODO: Locally create types for PromisesHandler
    const recorder = new RecordRTC.RecordRTCPromisesHandler(stream, {
      type: 'video',
      mimeType: 'video/webm;codecs=h264',
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
  }, [stream, timerReset, timerStart])

  const stopRecording = useCallback(() => {
    recorder
      .stopRecording()
      .then(() => recorder.getBlob())
      .then((resultBlob: Blob) => {
        setBlobDuration(timerString)
        setBlob(resultBlob)
        timerReset()
      })
  }, [recorder, timerReset, timerString])

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

export default useUserMedia
