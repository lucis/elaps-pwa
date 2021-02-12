import type { FC } from 'react'
import React from 'react'
import type { RouteComponentProps } from '@reach/router'

import { NewCheckinContextProvider } from '../contexts/new-checkin/NewCheckinContext'
import AddCheckinStepper from '../components/Checkins/NewCheckinStepper'

const AddCheckInPage: FC<RouteComponentProps> = () => {
  return (
    <div className="flex justify-center pa2">
      <div className="w-11/12 sm:w-7/12 mt-3">
        <NewCheckinContextProvider>
          <AddCheckinStepper />
        </NewCheckinContextProvider>
      </div>
    </div>
  )
}

export default AddCheckInPage
