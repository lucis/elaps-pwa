import { useCallback, useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useApolloClient } from '@apollo/client'

export const useCheckins = () => {
  const [loading, setLoading] = useState(true)
  const [checkins, setCheckins] = useState([])
  const [allCheckins, setAll] = useState([])
  const client = useApolloClient()

  useEffect(() => {
    getCheckins()
      .then((entities) => {
        setCheckins(entities)
        setAll(entities)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [client])

  const searchForPlate = useCallback(
    (validPlate: string) => {
      setLoading(true)

      getCheckins('plate', '==', validPlate)
        .then((entities) => {
          setCheckins(entities)
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [setLoading, setCheckins]
  )

  const reset = useCallback(() => {
    setCheckins(allCheckins)
  }, [setCheckins, allCheckins])

  return {
    searchForPlate,
    reset,
    checkins,
    loading,
  }
}

const getCheckins = (a?: string, b?: '==', c?: string) => {
  const db = firebase.firestore()

  const base = db.collection('checkins').orderBy('time', 'desc').limit(10)

  const query = a ? base.where(a, b, c) : base

  return query.get().then((snapshot) => {
    const entities = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

    return entities
  })
}
