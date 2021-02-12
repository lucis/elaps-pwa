import type { Action } from '../../typings'
import type { Vehicle, Customer } from '../../generated/graphql'

type Actions = Action<
  'UPDATE',
  {
    args: Partial<NewCheckinContextState>
  }
>

export type NewCheckinContextActions = Actions

export type NewCheckinContextState = {
  page: number
  loading: boolean
  inputPlate: string | null
  customer: Customer | null
  updateCustomer: boolean
  vehicle: Vehicle
  updateVehicle: boolean
  todoItems: string[]
  success: boolean
  error?: string
}

export const newCheckinStateReducer = (
  state: NewCheckinContextState,
  action: Actions
): NewCheckinContextState => {
  switch (action.type) {
    case 'UPDATE': {
      return {
        ...state,
        ...action.args,
      }
    }

    default: {
      return state
    }
  }
}
