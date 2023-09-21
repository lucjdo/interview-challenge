import { useEffect, useState } from 'react'
import { User } from '../types'
import { getUsers } from '../services/getUsers'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const newUsers = getUsers()
    setUsers(newUsers)
  }, [])

  return { users }
}
