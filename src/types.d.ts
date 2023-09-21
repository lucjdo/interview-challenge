export interface Users {
  results: User[]
  info: Info
}

export interface Info {
  seed: string
  results: number
  page: number
  version: string
}

export interface User {
  name: Name
  id: ID
  picture: Picture
  current_job: CurrentJob
  job_history: JobHistory[]
}

export interface CurrentJob {
  job: CurrentJobJob
  company: CurrentJobCompany
}

export enum CurrentJobCompany {
  TheFakeCompany = 'The Fake Company'
}

export enum CurrentJobJob {
  ReactDeveloper = 'React Developer'
}

export interface ID {
  name: string
  value: null | string
}

export interface JobHistory {
  job: JobHistoryJob
  company: JobHistoryCompany
  from: From
  to: To
}

export enum JobHistoryCompany {
  AnotherCompany0 = 'Another Company 0',
  AnotherCompany1 = 'Another Company 1',
  AnotherCompany2 = 'Another Company 2',
  AnotherCompany3 = 'Another Company 3'
}

export enum From {
  The111111 = '11/11/11'
}

export enum JobHistoryJob {
  Developer = 'Developer'
}

export enum To {
  The121212 = '12/12/12'
}

export interface Name {
  title: Title
  first: string
  last: string
}

export enum Title {
  MS = 'Ms',
  Mr = 'Mr',
  Mrs = 'Mrs'
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}
