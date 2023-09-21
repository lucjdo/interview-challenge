import { useEffect, useState } from 'react'
import { User } from '../types'
import { getUserById } from '../services/getUserById'

export function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const newUser = getUserById(id)
    setUser(newUser)
  }, [id])

  return { user }
}
