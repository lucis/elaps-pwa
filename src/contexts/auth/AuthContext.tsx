import type { FC } from 'react'
import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

import { createCtx } from '../../utils'

type AuthContext = {
  user: firebase.User
  loading: boolean
}

export const [useAuth, AuthStateProvider] = createCtx<AuthContext>()

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  firebase.auth().signInWithRedirect(googleProvider)
}

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((userData) => {
      userData?.getIdToken(false)?.then((token) => {
        localStorage.setItem('token', token)
      })
      setUser(userData)
      setLoading(false)
    })

    return unsub
  }, [])

  return (
    <AuthStateProvider value={{ user, loading }}>{children}</AuthStateProvider>
  )
}
