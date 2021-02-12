import { Steps } from 'antd'
import type { FC } from 'react'
import React, { useCallback } from 'react'

import {
  useNewCheckin,
  useNewCheckinDispatch,
} from '../../contexts/new-checkin/NewCheckinContext'
import LicensePlateInput from '../LicensePlateInput'

const { Step } = Steps

const AddCheckinStepper: FC = () => {
  const [{ page }] = useNewCheckin()

  return (
    <div className="flex flex-col">
      <Steps current={page}>
        <Step title="Placa" />
        <Step title="Cliente" />
        <Step title="Dados do Cliente" />
        <Step title="Dados do Veículo" />
        <Step title="Conclusão" />
      </Steps>
      {page === 0 && <FirstStep />}
      <div>content</div>
    </div>
  )
}

const FirstStep: FC = () => {
  // TODO: Add option to search plate by customer name

  const dispatch = useNewCheckinDispatch()

  const onSelectPlate = useCallback(
    (plate: string | null) => {
      // load plates
      // if vehicle, set vehicle
      dispatch({ type: 'UPDATE', args: { page: 1 } })
    },
    [dispatch]
  )

  return (
    <div className="flex justify-center my-3">
      <LicensePlateInput onValidPlate={onSelectPlate} />
    </div>
  )
}

export default AddCheckinStepper
