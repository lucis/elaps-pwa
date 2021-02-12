import type { FC } from 'react'
import React, { useReducer } from 'react'

import { createCtx } from '../../utils'
import type {
  NewCheckinContextActions,
  NewCheckinContextState,
} from './newCheckinReducer'
import { newCheckinStateReducer } from './newCheckinReducer'

export type Dispatch = (action: NewCheckinContextActions) => void

export const [
  useNewCheckinState,
  NewCheckinStateProvider,
] = createCtx<NewCheckinContextState>()
export const [
  useNewCheckinDispatch,
  NewCheckinDispatchProvider,
] = createCtx<Dispatch>()

export const useNewCheckin = () =>
  [useNewCheckinState(), useNewCheckinDispatch()] as [
    NewCheckinContextState,
    Dispatch
  ]

const initialState: NewCheckinContextState = {
  page: 0,
  customer: null,
  inputPlate: null,
  loading: false,
  todoItems: [],
  success: false,
  updateCustomer: true,
  updateVehicle: true,
  vehicle: null,
}

export const NewCheckinContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(newCheckinStateReducer, initialState)

  return (
    <NewCheckinStateProvider value={state}>
      <NewCheckinDispatchProvider value={dispatch}>
        {children}
      </NewCheckinDispatchProvider>
    </NewCheckinStateProvider>
  )
}
