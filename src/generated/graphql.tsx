import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type Cliente = {
  __typename?: 'Cliente';
  id?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  dNasc?: Maybe<Scalars['String']>;
  endereco?: Maybe<Endereco>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  pessoaFisica?: Maybe<Scalars['Boolean']>;
  rg?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  telefones?: Maybe<Telefones>;
  referencia?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  veiculos?: Maybe<Array<Maybe<Veiculo>>>;
};

export type ClienteInput = {
  nome?: Maybe<Scalars['String']>;
  dNasc?: Maybe<Scalars['Int']>;
  endereco?: Maybe<EnderecoInput>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  pessoaFisica?: Maybe<Scalars['Boolean']>;
  rg?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  telefones?: Maybe<TelefonesInput>;
  referencia?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type Clientes = {
  __typename?: 'Clientes';
  entities?: Maybe<Array<Maybe<Cliente>>>;
  metadata?: Maybe<QueryMetadata>;
};

export type Endereco = {
  __typename?: 'Endereco';
  rua?: Maybe<Scalars['String']>;
  n?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
};

export type EnderecoInput = {
  rua?: Maybe<Scalars['String']>;
  n?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  partId?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCliente?: Maybe<Cliente>;
  updateCliente?: Maybe<Cliente>;
  addVeiculo?: Maybe<Veiculo>;
  updateVeiculo?: Maybe<Veiculo>;
  addPeca?: Maybe<Peca>;
  updatePeca?: Maybe<Peca>;
};


export type MutationAddClienteArgs = {
  fields: ClienteInput;
};


export type MutationUpdateClienteArgs = {
  id: Scalars['String'];
  fields: ClienteInput;
};


export type MutationAddVeiculoArgs = {
  fields: VeiculoInput;
};


export type MutationUpdateVeiculoArgs = {
  id: Scalars['String'];
  fields: VeiculoInput;
};


export type MutationAddPecaArgs = {
  fields: PecaInput;
};


export type MutationUpdatePecaArgs = {
  id: Scalars['String'];
  fields: PecaInput;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['String'];
  customerName: Scalars['String'];
  km?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  items: Array<Maybe<Item>>;
  itemsDescriptor?: Maybe<Scalars['String']>;
};

export type Orders = {
  __typename?: 'Orders';
  entities?: Maybe<Array<Maybe<Order>>>;
  metadata?: Maybe<QueryMetadata>;
};

export type Peca = {
  __typename?: 'Peca';
  id: Scalars['String'];
  referencia: Scalars['String'];
  descricao: Scalars['String'];
  preco: Scalars['Int'];
  unidade: Scalars['String'];
  ultimaMudancaPreco?: Maybe<Scalars['Int']>;
};

export type PecaInput = {
  referencia: Scalars['String'];
  descricao: Scalars['String'];
  preco: Scalars['Int'];
  unidade: Scalars['String'];
};

export type Pecas = {
  __typename?: 'Pecas';
  entities?: Maybe<Array<Maybe<Peca>>>;
  metadata?: Maybe<QueryMetadata>;
};

export type Query = {
  __typename?: 'Query';
  orders?: Maybe<Orders>;
};


export type QueryOrdersArgs = {
  data: QueryInput;
};

export type QueryInput = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type QueryMetadata = {
  __typename?: 'QueryMetadata';
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type Telefones = {
  __typename?: 'Telefones';
  principal?: Maybe<Scalars['String']>;
  alternativo?: Maybe<Scalars['String']>;
};

export type TelefonesInput = {
  principal?: Maybe<Scalars['String']>;
  alternativo?: Maybe<Scalars['String']>;
};

export type Veiculo = {
  __typename?: 'Veiculo';
  id?: Maybe<Scalars['String']>;
  placa: Scalars['String'];
  uf?: Maybe<Scalars['String']>;
  modelo?: Maybe<Scalars['String']>;
  ano?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  motor?: Maybe<Scalars['String']>;
  cor?: Maybe<Scalars['String']>;
  montadora?: Maybe<Scalars['String']>;
  dono?: Maybe<Cliente>;
  historicoDonos?: Maybe<Array<Maybe<Cliente>>>;
  dataDeCadastro?: Maybe<Scalars['Int']>;
};

export type VeiculoInput = {
  placa: Scalars['String'];
  uf?: Maybe<Scalars['String']>;
  modelo?: Maybe<Scalars['String']>;
  ano?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  motor?: Maybe<Scalars['String']>;
  cor?: Maybe<Scalars['String']>;
  montadora?: Maybe<Scalars['String']>;
  donoId: Scalars['String'];
};

export type Veiculos = {
  __typename?: 'Veiculos';
  entities?: Maybe<Array<Maybe<Veiculo>>>;
  metadata?: Maybe<QueryMetadata>;
};
