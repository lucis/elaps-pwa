import type { FC } from 'react'
import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import LoginPage from '../client-side-pages/Login'
import CheckInPage from '../client-side-pages/CheckIn'
import SuccessPage from '../client-side-pages/Success'
import AllCheckinsPage from '../client-side-pages/AllCheckins'
import SEO from '../components/SEO'
import AppShell from '../templates/shell'
import HistorySearchPage from '../client-side-pages/HistorySearch'
import HomePage from '../client-side-pages/Home'

const App: FC = () => {
  return (
    <Fragment>
      <SEO />
      <Router>
        <LoginPage path="/app/login" />
        <HomePage path="/app/home" />
        <AllCheckinsPage path="/app/checkins" />
        <CheckInPage path="/app/checkins/add" />
        <SuccessPage path="/app/checkins/success" />
        <AppShell path="app/beta">
          <HistorySearchPage path="history" />
          <SuccessPage path="success" />
        </AppShell>
      </Router>
    </Fragment>
  )
}

export default App
