import type { FC } from 'react'
import React, { useState, useEffect, useReducer } from 'react'
import type { firestore } from 'firebase/app'
import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

import { log, createCtx } from '../../utils'

type AuthContext = {
  user: firebase.User
}

export const [useAuth, AuthStateProvider] = createCtx<AuthContext>()

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  firebase.auth().signInWithRedirect(googleProvider)
}

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User>(null)

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      log('Auth State Changed')
      log({ user })
      setUser(user)
    })

    return unsub
  }, [])

  return <AuthStateProvider value={{ user }}>{children}</AuthStateProvider>
}
