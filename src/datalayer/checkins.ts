import { useCallback, useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const useCheckins = () => {
  const [loading, setLoading] = useState(true)
  const [checkins, setCheckins] = useState([])

  useEffect(() => {
    const db = firebase.firestore()

    db.collection('checkins')
      .orderBy('time', 'desc')
      .limit(10)
      .get()
      .then((snapshot) => {
        const entities = snapshot.docs.map((doc) => doc.data())

        setCheckins(entities)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const searchForPlate = useCallback(() => {}, [])

  return {
    searchForPlate,
    checkins,
    loading,
  }
}
