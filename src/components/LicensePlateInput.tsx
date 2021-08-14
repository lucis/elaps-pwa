import type { FC } from 'react'
import React, { useCallback, useState, useRef } from 'react'
import { styled } from 'linaria/react'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-input-mask'
import { LoadingOutlined } from '@ant-design/icons'

type Props = {
  onValidPlate: (plate: string) => void
  resetable?: boolean
  mode?: 'search'
  disabled?: boolean
  loading?: boolean
  onReset?: () => void
}

type Form = {
  licensePlate: string
}

const PLATE_PATTERN = /[A-Z]{3} [0-9][0-9A-Z][0-9]{2}/

const PLATE_MASK = [
  /[A-Za-z]/i,
  /[A-Za-z]/i,
  /[A-Za-z]/i,
  ' ',
  /\d/i,
  /(\d|[A-Z])/i,
  /\d/i,
  /\d/i,
]

const LicensePlateInput: FC<Props> = ({
  onValidPlate,
  disabled,
  mode,
  resetable,
  loading,
  ...props
}) => {
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      licensePlate: '',
    },
  })

  const timerRef = useRef(null)

  const [isSet, set] = useState(false)

  const onSubmit = (data: Form) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    onValidPlate(data.licensePlate)
    set(true)

    const timer = setTimeout(() => {
      onValidPlate('')
      set(false)
      reset()
    }, 1000 * 60 * 1.5)

    timerRef.current = timer
  }

  const transformUppercase = useCallback(({ nextState }) => {
    const { value: raw } = nextState

    return {
      ...nextState,
      value: raw?.toUpperCase?.() || raw,
    }
  }, [])

  const onReset = useCallback(() => {
    onValidPlate('')
    set(false)
    reset()
    props.onReset?.()
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
  }, [reset, props, onValidPlate])

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {mode !== 'search' && (
          <Label htmlFor="license-plate">Digite a placa</Label>
        )}
        <Fieldset>
          <MaskedInput
            mask={PLATE_MASK}
            alwaysShowMask
            beforeMaskedStateChange={transformUppercase}
            disabled={disabled || (resetable && isSet)}
          >
            <Input
              placeholder={mode === 'search' ? 'busque pela placa' : ''}
              id="license-plate"
              name="licensePlate"
              ref={register({
                required: true,
                pattern: PLATE_PATTERN,
              })}
            />
          </MaskedInput>
          {resetable && isSet ? (
            <ResetButton
              onClick={(e) => {
                e.preventDefault()
                onReset()
              }}
            >
              X{' '}
            </ResetButton>
          ) : (
            <SubmitButton type="submit" disabled={disabled}>
              {loading ? (
                <LoadingOutlined style={{ fontSize: '18' }} spin />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-18 -18 80 80"
                  fill="#FFF"
                >
                  <path d="M40.441 45.966L29.506 35.031a19.002 19.002 0 01-10.444 3.111C8.523 38.142 0 29.6 0 19.061 0 8.542 8.522 0 19.062 0c10.521 0 19.06 8.542 19.06 19.061 0 3.679-1.036 7.107-2.828 10.011l11.013 11.011c.583.567.094 1.981-1.076 3.148l-1.64 1.644c-1.17 1.167-2.584 1.656-3.15 1.091zm-8.653-26.905c0-7.033-5.695-12.727-12.727-12.727-7.033 0-12.745 5.694-12.745 12.727s5.712 12.745 12.745 12.745c7.032 0 12.727-5.711 12.727-12.745z" />
                </svg>
              )}
            </SubmitButton>
          )}
        </Fieldset>
        {errors.licensePlate && <Error>Preencha a placa corretamente</Error>}
      </form>
    </Wrapper>
  )
}

const Label = styled.label`
  text-transform: uppercase;
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Fieldset = styled.div`
  display: flex;
  margin-top: 10px;
`

const SubmitButton = styled.button`
  background-color: #02417e;
  color: #fff;
  font-weight: bold;
  width: 61px;
  border: 0;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ResetButton = styled.button`
  background-color: #ffd4d4;
  color: #333;
  font-weight: bold;
  width: 61px;
  border: 0;
  font-size: 25px;
`

const Input = styled.input`
  font-size: 35px;
  width: 200px;
  text-align: center;
  border: 0;
  padding: 10px 5px;
  background-color: #f4f4f4;
  &:disabled {
    color: #cecece;
  }
`

const Error = styled.span`
  text-align: center;
  display: block;
  margin-top: 10px;
  color: #c72626;
`

export default LicensePlateInput
