import { User } from '../types'
import usersData from '../mocks/users.json'

export function getUsers(): User[] {
  return usersData.results as User[]
}
