import React, { useCallback } from 'react'
import type { FC } from 'react'
import 'firebase/auth'
import type { RouteComponentProps } from '@reach/router'
import { Button, Form, message, Select } from 'antd'

import useUserSettings from '../hooks/useUserSettings'

const UserSettingsPage: FC<RouteComponentProps> = () => {
  const [form] = Form.useForm()
  const [config, setConfig] = useUserSettings()

  const onSave = useCallback(
    (values) => {
      setConfig(values)
      message.success('Configurações salvas com sucesso')
    },
    [setConfig]
  )

  return (
    <div className="flex justify-center mt-2">
      <Form
        form={form}
        layout="vertical"
        onFinish={onSave}
        initialValues={config}
      >
        <Form.Item
          label="Página Inicial"
          name="initialPage"
          extra="Você será enviado para essa página sempre ao logar"
        >
          <Select>
            <Select.Option value="checkins">Entradas</Select.Option>
            <Select.Option value="history">Histórico de Veículos</Select.Option>
          </Select>
        </Form.Item>
        <div className="flex justify-center">
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default UserSettingsPage
