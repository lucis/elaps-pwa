import { gql } from '@apollo/client'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Address = {
  __typename?: 'Address'
  street?: Maybe<Scalars['String']>
  number?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  neighborhood?: Maybe<Scalars['String']>
  complement?: Maybe<Scalars['String']>
}

export type Customer = {
  __typename?: 'Customer'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  birthDate?: Maybe<Scalars['String']>
  address?: Maybe<Address>
  document?: Maybe<Scalars['String']>
  physical?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  phones?: Maybe<Phones>
  info?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  vehicles?: Maybe<Array<Maybe<Vehicle>>>
  orders?: Maybe<Array<Maybe<Order>>>
}

export type CustomerInput = {
  nome?: Maybe<Scalars['String']>
  dNasc?: Maybe<Scalars['Int']>
  cpf?: Maybe<Scalars['String']>
  cnpj?: Maybe<Scalars['String']>
  pessoaFisica?: Maybe<Scalars['Boolean']>
  rg?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  referencia?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
}

export type Customers = {
  __typename?: 'Customers'
  entities?: Maybe<Array<Maybe<Customer>>>
  metadata?: Maybe<QueryMetadata>
}

export type Item = {
  __typename?: 'Item'
  partId?: Maybe<Scalars['String']>
  ref?: Maybe<Scalars['String']>
  name: Scalars['String']
  unit?: Maybe<Scalars['String']>
  qty?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  addCustomer?: Maybe<Customer>
  updateCustomer?: Maybe<Customer>
  addVehicle?: Maybe<Vehicle>
  updateVehicle?: Maybe<Vehicle>
  addPart?: Maybe<Part>
  updatePart?: Maybe<Part>
}

export type MutationAddCustomerArgs = {
  fields: CustomerInput
}

export type MutationUpdateCustomerArgs = {
  id: Scalars['String']
  fields: CustomerInput
}

export type MutationAddVehicleArgs = {
  fields: VehicleInput
}

export type MutationUpdateVehicleArgs = {
  id: Scalars['String']
  fields: VehicleInput
}

export type MutationAddPartArgs = {
  fields: PartInput
}

export type MutationUpdatePartArgs = {
  id: Scalars['String']
  fields: PartInput
}

export type Order = {
  __typename?: 'Order'
  id: Scalars['String']
  customer: Customer
  vehicle: Vehicle
  km?: Maybe<Scalars['Int']>
  date?: Maybe<Scalars['String']>
  info?: Maybe<Scalars['String']>
  items: Array<Maybe<Item>>
  itemsDescriptor?: Maybe<Scalars['String']>
}

export type Orders = {
  __typename?: 'Orders'
  entities?: Maybe<Array<Maybe<Order>>>
  metadata?: Maybe<QueryMetadata>
}

export type Part = {
  __typename?: 'Part'
  id: Scalars['String']
  referencia: Scalars['String']
  descricao: Scalars['String']
  preco: Scalars['Int']
  unidade: Scalars['String']
  ultimaMudancaPreco?: Maybe<Scalars['Int']>
}

export type PartInput = {
  referencia: Scalars['String']
  descricao: Scalars['String']
  preco: Scalars['Int']
  unidade: Scalars['String']
}

export type Parts = {
  __typename?: 'Parts'
  entities?: Maybe<Array<Maybe<Part>>>
  metadata?: Maybe<QueryMetadata>
}

export type Phones = {
  __typename?: 'Phones'
  main?: Maybe<Scalars['String']>
  alternate?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  orders?: Maybe<Orders>
}

export type QueryOrdersArgs = {
  data: QueryInput
}

export type QueryInput = {
  query?: Maybe<Scalars['String']>
  orderBy?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryMetadata = {
  __typename?: 'QueryMetadata'
  query?: Maybe<Scalars['String']>
  orderBy?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

export type Vehicle = {
  __typename?: 'Vehicle'
  id?: Maybe<Scalars['String']>
  plate: Scalars['String']
  model?: Maybe<Scalars['String']>
  year?: Maybe<Scalars['String']>
  cor?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  owner?: Maybe<Customer>
  lastOwners?: Maybe<Array<Maybe<Customer>>>
  createdAt?: Maybe<Scalars['Int']>
}

export type VehicleInput = {
  placa: Scalars['String']
  uf?: Maybe<Scalars['String']>
  modelo?: Maybe<Scalars['String']>
  ano?: Maybe<Scalars['String']>
  cidade?: Maybe<Scalars['String']>
  motor?: Maybe<Scalars['String']>
  cor?: Maybe<Scalars['String']>
  montadora?: Maybe<Scalars['String']>
  donoId: Scalars['String']
}

export type Vehicles = {
  __typename?: 'Vehicles'
  entities?: Maybe<Array<Maybe<Vehicle>>>
  metadata?: Maybe<QueryMetadata>
}
