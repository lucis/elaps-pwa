import type { FC } from 'react'
import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import LoginPage from '../client-side-pages/Login'
import CheckInPage from '../client-side-pages/CheckIn'
import SuccessPage from '../client-side-pages/Success'
import AllCheckinsPage from '../client-side-pages/AllCheckins'
import SEO from '../components/SEO'

const App: FC = () => {
  return (
    <Fragment>
      <SEO />
      <Router>
        <LoginPage path="/app/login" />
        <AllCheckinsPage path="/app/checkins" />
        <CheckInPage path="/app/checkins/add" />
        <SuccessPage path="/app/checkins/success" />
      </Router>
    </Fragment>
  )
}

export default App
