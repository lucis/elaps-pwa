import { Steps } from 'antd'
import type { FC } from 'react'
import React, { useEffect, useCallback } from 'react'

import {
  useNewCheckin,
  useNewCheckinDispatch,
} from '../../contexts/new-checkin/NewCheckinContext'
import LicensePlateInput from '../LicensePlateInput'
import usePlateSearch from '../../hooks/usePlateSearch'

const { Step } = Steps

const AddCheckinStepper: FC = () => {
  const [{ page }] = useNewCheckin()

  return (
    <div className="flex flex-col my-3">
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
  const dispatch = useNewCheckinDispatch()
  const { searchPlate, loading, data, error } = usePlateSearch()

  const onSelectPlate = useCallback(
    (plate: string | null) => {
      if (plate) {
        searchPlate(plate)
      }
    },
    [searchPlate]
  )

  useEffect(() => {
    if (!data) {
      return
    }

    console.log(data)
    dispatch({ type: 'UPDATE', args: { page: 1 } })
  }, [data, dispatch])

  return (
    <div className="flex justify-center my-3">
      <LicensePlateInput onValidPlate={onSelectPlate} />
    </div>
  )
}

export default AddCheckinStepper
