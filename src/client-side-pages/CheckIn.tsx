import type { FC } from 'react'
import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'
import { Skeleton } from 'antd'

import CheckInForm from '../components/CheckInForm'
import LicensePlateInput from '../components/LicensePlateInput'
import Header from '../components/Header'
import Button from '../components/ui/Button'
import VehicleInfo from '../components/Checkins/VehicleInfo'
import useVehiclesSearch from '../hooks/useVehiclesSearch'

const CheckInPage: FC<RouteComponentProps> = () => {
  const [validPlate, setPlate] = useState('')
  const { data, loading, searchPlate } = useVehiclesSearch()

  useEffect(() => {
    if (validPlate) {
      searchPlate(validPlate)
    }
  }, [validPlate, searchPlate])

  return (
    <>
      <Header>
        <h2>Nova Entrada</h2>
      </Header>
      <Centered>
        <Button
          color="blue"
          onClick={() => {
            navigate('/app/checkins')
          }}
        >
          Voltar
        </Button>
      </Centered>
      <Wrapper>
        <LicensePlateInput
          disabled={!!validPlate}
          onValidPlate={setPlate}
          resetable
        />
        {loading && <Skeleton />}
        {!loading && validPlate && !!data?.vehicles?.entities?.length && (
          <div className="flex justify-center w-full mt-1">
            <VehicleInfo vehicle={data.vehicles.entities[0]} />
          </div>
        )}
        {!!validPlate && (
          <>
            <Line />
            <CheckInForm
              plate={validPlate}
              vehicle={data?.vehicles?.entities?.[0]}
            />
          </>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

const Line = styled.div`
  margin: 15px 0;
  width: 90%;
  border-top: 1px solid #e1e1e1;
`

export default CheckInPage
