import type { FC } from 'react'
import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import LoginPage from '../client-side-pages/Login'
import LogoutPage from '../client-side-pages/Logout'
import CheckInPage from '../client-side-pages/CheckIn'
import SuccessPage from '../client-side-pages/Success'
import AllCheckinsPage from '../client-side-pages/AllCheckins'
import SEO from '../components/SEO'
import AppShell from '../templates/shell'
import HistorySearchPage from '../client-side-pages/HistorySearch'
import HomePage from '../client-side-pages/Home'
import UserSettingsPage from '../client-side-pages/UserSettings'
import AddCheckInPage from '../client-side-pages/AddCheckin'

const App: FC = () => {
  return (
    <Fragment>
      <SEO />
      <Router>
        <LoginPage path="/app/login" />
        <LogoutPage path="/app/logout" />
        <AppShell path="app">
          <AllCheckinsPage path="checkins" />
          <CheckInPage path="checkins/add" />
          <SuccessPage path="checkins/success" />
          <HomePage path="home" />
          <HistorySearchPage path="history" />
          <UserSettingsPage path="settings" />
          <AddCheckInPage path="checkin" />
        </AppShell>
      </Router>
    </Fragment>
  )
}

export default App
