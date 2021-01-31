import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './src/font.css'
import 'antd/dist/antd.less'
import { AuthContextProvider } from './src/contexts/auth/AuthContext'

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_KEY,
  authDomain: `${process.env.GATSBY_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.GATSBY_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.GATSBY_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.GATSBY_FIREBASE_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const wrapRootElement = ({ element }) => {
  return <AuthContextProvider>{element}</AuthContextProvider>
}
