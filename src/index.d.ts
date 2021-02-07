declare namespace Intl {
  interface DateTimeFormatOptions {
    dateStyle?: 'full' | 'long' | 'medium' | 'short'
    timeStyle?: 'full' | 'long' | 'medium' | 'short'
  }
}

declare module '*.png' {
  const value: string
  export = value
}

declare module '*.gql' {
  import type { DocumentNode } from 'graphql'

  const Schema: DocumentNode

  export = Schema
}
