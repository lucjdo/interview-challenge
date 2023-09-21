import usersData from '../mocks/users.json'
import { User } from '../types'

export function getUserById(id: string) {
  return usersData.results.find((user) => user.id.value === id) as User
}
