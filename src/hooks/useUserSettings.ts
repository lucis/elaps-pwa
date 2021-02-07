import { useCallback, useState } from 'react'

type Settings = {
  initialPage: string | null
}

const KEY = 'user-settings'

const INITIAL: Settings = {
  initialPage: null,
}

const useUserSettings = () => {
  const [value, setStored] = useState<Settings>(() => {
    try {
      const item = localStorage.getItem(KEY)

      return item ? JSON.parse(item) : INITIAL
    } catch {
      return INITIAL
    }
  })

  const setValue = useCallback(
    (val: Settings) => {
      try {
        setStored(val)
        localStorage.setItem(KEY, JSON.stringify(val))
      } catch {
        // eslint-disable-next-line no-console
        console.log('Error with accessing localStorage')
      }
    },
    [setStored]
  )

  return [value, setValue] as const
}

export default useUserSettings
