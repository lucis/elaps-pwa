import React from 'react'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const relativeFromNow = (date: Date) => {
  return formatDistance(date, Date.now(), { locale: ptBR })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const log = (...msgs: any) => {
  // eslint-disable-next-line no-console
  if (window?.location?.hostname === 'localhost') console.log(...msgs)
}

export function createCtx<A extends Record<string, unknown> | null>() {
  const ctx = React.createContext<A | undefined>(undefined)

  function useCtx() {
    const c = React.useContext(ctx)

    if (c === undefined) {
      throw new Error('useCtx must be inside a Provider with a value')
    }

    return c
  }

  return [useCtx, ctx.Provider] as const // 'as const' makes TypeScript infer a tuple
}

const accents =
  'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ'

const accentsOut =
  'AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg'

const accentsMap = new Map()

const indexes = accents.split('').map((_, index) => index)

for (const i in indexes) {
  const nValue = parseInt(i, 10)

  accentsMap.set(accents.charCodeAt(nValue), accentsOut.charCodeAt(nValue))
}

export const removeAccents = (str: string) => {
  const nstr = new Array(str.length)
  let x
  let i

  for (i = 0; i < nstr.length; i++) {
    nstr[i] = accentsMap.get((x = str.charCodeAt(i))) || x
  }

  return String.fromCharCode.apply(null, nstr)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sanitizeForFirebase = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object') sanitizeForFirebase(obj[key])
    else if (obj[key] === undefined) delete obj[key]
  })

  return obj
}
