/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import '@fontsource/roboto'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/es/locale/pt_BR'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

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

const cache = new InMemoryCache()

export const wrapRootElement = ({ element }) => {
  const httpLink = createHttpLink({
    uri: process.env.GATSBY_BACKEND_API,
  })

  const authLink = setContext((_, { headers }) => {
    try {
      const token = localStorage.getItem('token')

      return {
        headers: {
          ...headers,
          test: 'true',
          authorization: token || '',
        },
      }
    } catch {
      return {}
    }
  })

  const client = new ApolloClient({
    fetch,
    link: authLink.concat(httpLink),
    cache,
  })

  return (
    <ConfigProvider locale={ptBR}>
      <AuthContextProvider>
        <ApolloProvider client={client}>{element}</ApolloProvider>
      </AuthContextProvider>
    </ConfigProvider>
  )
}
