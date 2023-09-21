import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { User } from '../types'
import { Link } from 'wouter'

export default function UserCard({ user }: { user: User }) {
  return (
    <Link href={`/profile/${user.id.value}`}>
      <Card
        sx={{
          minWidth: 275,
          '&:hover': {
            cursor: 'pointer',
            opacity: [0.9]
          }
        }}
      >
        <CardContent sx={{ display: 'flex', gap: 2 }}>
          <Avatar sx={{ width: 56, height: 56 }} src={user.picture.medium} />
          <Stack>
            <Typography variant='h5'>
              {user.name.first} {user.name.last}
            </Typography>
            <Typography>{user.current_job.job}</Typography>
            <Typography>{user.current_job.company}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  )
}
