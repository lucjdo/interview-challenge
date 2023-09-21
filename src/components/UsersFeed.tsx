import { User } from '../types'
import UserCard from './UserCard'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface UsersFeedProps {
  users: User[]
}

export default function UsersFeed({ users }: UsersFeedProps) {
  return (
    <Stack sx={{ gap: 3 }}>
      <Typography variant='h4'>Users Feed</Typography>
      {users.map((user) => (
        <UserCard key={user.id.value} user={user} />
      ))}
    </Stack>
  )
}
