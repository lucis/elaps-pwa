import type { FC } from 'react'
import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import LoginPage from '../client-side-pages/Login'
import CheckInPage from '../client-side-pages/CheckIn'
import SEO from '../components/SEO'

const App: FC = () => {
  return (
    <Fragment>
      <SEO />
      <Router>
        <LoginPage path="/app/login" />
        <CheckInPage path="/app/check-in" />
      </Router>
    </Fragment>
  )
}

export default App
