import type { FC } from 'react'
import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  meta?: any[]
  title?: string
  description?: string
  ogImage?: string
  ogZap?: string
}

const SEO: FC<Props> = ({ meta = [], title, description }) => {
  const pageTitle = title ?? 'Luciano Auto Peças e Serviços'

  const pageDescription = description ?? 'Sistema de Gerenciamento'

  return (
    <Helmet
      htmlAttributes={{
        lang: 'pt-BR',
      }}
      title={pageTitle}
      meta={[
        {
          charset: 'utf-8',
        },
        {
          name: 'themeColor',
          content: '#041527',
        },
        {
          name: `description`,
          content: pageDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
